"use client";

import { FormEvent, useState } from "react";

const categories = [
  "Дверные ручки",
  "Петли",
  "Оконная фурнитура",
  "Мебельная фурнитура",
  "Индивидуальный проект",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      category: String(formData.get("category") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""), // honeypot
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Не удалось отправить заявку.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[28px] border border-[#c9a96e]/40 bg-white/5 p-8 sm:p-10">
        <p className="font-heading text-2xl text-white sm:text-3xl">
          Заявка отправлена
        </p>

        <p className="mt-4 text-white/65">
          Спасибо! Мы получили ваше сообщение и свяжемся с вами в ближайшее
          время.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex rounded-full border border-white/25 px-6 py-3 text-sm text-white transition duration-300 hover:border-[#c9a96e] hover:bg-white/5"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-white/15 bg-white/5 p-6 sm:p-10"
    >
      {/* Honeypot-поле, скрыто от людей, но видно ботам */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]"
          >
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Как к вам обращаться"
            className="mt-3 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#c9a96e]"
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]"
          >
            Телефон или email
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            placeholder="Для связи с вами"
            className="mt-3 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#c9a96e]"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="category"
          className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]"
        >
          Тип изделия
        </label>
        <select
          id="category"
          name="category"
          defaultValue={categories[0]}
          className="mt-3 w-full rounded-2xl border border-white/15 bg-[#26221d] px-4 py-3 text-white outline-none transition focus:border-[#c9a96e]"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]"
        >
          Опишите задачу
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Размеры, материал, есть ли образец или чертёж"
          className="mt-3 w-full resize-none rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#c9a96e]"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-[#e0a45a]">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 flex w-full items-center justify-center rounded-full bg-[#a67c38] px-8 py-4 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#c29a54] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Отправляем…" : "Отправить заявку"}
      </button>

      <p className="mt-4 text-xs leading-5 text-white/40">
        Отправляя форму, вы соглашаетесь на обработку указанных данных для
        связи с вами по вашей заявке.
      </p>
    </form>
  );
}
