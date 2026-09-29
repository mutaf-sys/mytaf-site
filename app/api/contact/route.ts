import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  contact?: string;
  category?: string;
  message?: string;
  // honeypot-поле: обычные посетители его не видят и не заполняют
  company?: string;
  consent?: boolean;
  consentVersion?: string;
  pageUrl?: string;
  submittedAt?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Некорректный формат запроса." },
      { status: 400 },
    );
  }

  const {
    name,
    contact,
    category,
    message,
    company,
    consent,
    consentVersion,
    pageUrl,
    submittedAt,
  } = body;

  // Honeypot: если скрытое поле заполнено — это бот, отвечаем "успехом",
  // но письмо не отправляем.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !contact?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Заполните имя, контакт и описание задачи." },
      { status: 400 },
    );
  }

  if (!consent) {
    return NextResponse.json(
      {
        error:
          "Отметьте согласие на обработку персональных данных, чтобы отправить заявку.",
      },
      { status: 400 },
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error(
      "Не настроены переменные окружения SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS/CONTACT_TO_EMAIL — см. .env.local.example",
    );

    return NextResponse.json(
      {
        error:
          "Форма временно недоступна. Пожалуйста, свяжитесь по телефону +7 (999) 064-64-17 или почте info@empirebrass.ru.",
      },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const safeName = escapeHtml(name.trim());
    const safeContact = escapeHtml(contact.trim());
    const safeCategory = escapeHtml((category ?? "Не указана").trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

    const receivedAt = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
    });
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "не определён";
    const safePageUrl = escapeHtml((pageUrl ?? "не передан").trim());
    const safeSubmittedAt = escapeHtml(
      (submittedAt ?? "не передано").trim(),
    );
    const safeConsentVersion = escapeHtml(
      (consentVersion ?? "не передана").trim(),
    );

    await transporter.sendMail({
      from: `"Сайт мастерской" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: contact.trim(),
      subject: `Новая заявка с сайта — ${name.trim()}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <p><strong>Имя:</strong> ${safeName}</p>
          <p><strong>Контакт:</strong> ${safeContact}</p>
          <p><strong>Категория изделия:</strong> ${safeCategory}</p>
          <p><strong>Сообщение:</strong><br />${safeMessage}</p>
          <hr />
          <p style="color:#888;font-size:12px;">
            Доказательство согласия на обработку персональных данных:
            отметка в чекбоксе поставлена; получено на сервере ${receivedAt}
            (Москва); отправлено с браузера в ${safeSubmittedAt}; версия
            документов от ${safeConsentVersion}; страница формы:
            ${safePageUrl}; IP отправителя: ${escapeHtml(clientIp)}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Ошибка отправки письма с формы контактов:", error);

    return NextResponse.json(
      {
        error:
          "Не удалось отправить заявку. Пожалуйста, свяжитесь по телефону +7 (999) 064-64-17 или почте info@empirebrass.ru.",
      },
      { status: 500 },
    );
  }
}
