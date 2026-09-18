import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8 МБ

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Некорректный формат запроса." },
      { status: 400 },
    );
  }

  const name = String(formData.get("name") ?? "");
  const role = String(formData.get("role") ?? "");
  const review = String(formData.get("review") ?? "");
  const company = String(formData.get("company") ?? ""); // honeypot
  const photo = formData.get("photo");

  // Honeypot: если скрытое поле заполнено — это бот, отвечаем "успехом",
  // но письмо не отправляем.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name.trim() || !review.trim()) {
    return NextResponse.json(
      { error: "Заполните имя и текст отзыва." },
      { status: 400 },
    );
  }

  let attachment:
    | { filename: string; content: Buffer; contentType: string }
    | undefined;

  if (photo instanceof File && photo.size > 0) {
    if (!photo.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Медиафайл должен быть изображением." },
        { status: 400 },
      );
    }

    if (photo.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Файл слишком большой — не более 8 МБ." },
        { status: 400 },
      );
    }

    const bytes = await photo.arrayBuffer();

    attachment = {
      filename: photo.name || "photo.jpg",
      content: Buffer.from(bytes),
      contentType: photo.type,
    };
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
        error: "Приём отзывов временно недоступен. Попробуйте немного позже.",
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
    const safeRole = escapeHtml(role.trim());
    const safeReview = escapeHtml(review.trim()).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `"Сайт мастерской" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      subject: `Новый отзыв с сайта — ${name.trim()}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <p><strong>Имя клиента:</strong> ${safeName}</p>
          <p><strong>Объект / проект:</strong> ${safeRole || "не указано"}</p>
          <p><strong>Текст отзыва:</strong><br />${safeReview}</p>
          ${attachment ? "<p><strong>Фото:</strong> во вложении письма.</p>" : ""}
          <hr />
          <p style="color:#888;font-size:12px;">Это письмо пришло со страницы /otzyv — она не проиндексирована и никому не показывается на сайте. Если отзыв стоит опубликовать, добавьте его вручную в components/Testimonials.tsx (фото сохраните в public/images/reviews/).</p>
        </div>
      `,
      attachments: attachment ? [attachment] : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Ошибка отправки письма с отзывом:", error);

    return NextResponse.json(
      { error: "Не удалось отправить отзыв. Попробуйте немного позже." },
      { status: 500 },
    );
  }
}
