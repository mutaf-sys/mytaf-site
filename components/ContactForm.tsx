"use client";

import { FormEvent, useState } from "react";

import {
  ConsentCheckbox,
  FormError,
  FormSuccess,
  inputClass,
  labelClass,
  submitClass,
} from "@/components/ui/form";

const categories = [
  "Дверные ручки",
  "Шпингалеты",
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
      <FormSuccess title="Заявка отправлена">
        <p>
          Спасибо! Мы получили ваше сообщение и свяжемся с вами в ближайшее
          время.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-line btn-line-invert mt-6"
        >
          Отправить ещё одну заявку
        </button>
      </FormSuccess>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "loading"}
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
          <label htmlFor="name" className={labelClass}>
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Как к вам обращаться"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact" className={labelClass}>
            Телефон или email
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            placeholder="Для связи с вами"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="category" className={labelClass}>
          Тип изделия
        </label>
        <select
          id="category"
          name="category"
          defaultValue={categories[0]}
          className={`${inputClass} bg-foreground`}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Опишите задачу
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Размеры, материал, есть ли образец или чертёж"
          className={`${inputClass} resize-none`}
        />
      </div>

      <FormError message={status === "error" ? errorMessage : ""} />

      <ConsentCheckbox />

      <button
        type="submit"
        disabled={status === "loading"}
        className={submitClass}
      >
        {status === "loading" ? "Отправляем…" : "Отправить заявку"}
      </button>
    </form>
  );
}
