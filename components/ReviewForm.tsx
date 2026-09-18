"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

import {
  ConsentCheckbox,
  FormError,
  FormSuccess,
  inputClass,
  labelClass,
  submitClass,
} from "@/components/ui/form";

type Status = "idle" | "loading" | "success" | "error";

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8 МБ

export default function ReviewForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (!file) {
      setPreviewUrl(null);
      setFileName(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Медиафайл должен быть изображением.");
      event.target.value = "";
      setPreviewUrl(null);
      setFileName(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrorMessage("Файл слишком большой — не более 8 МБ.");
      event.target.value = "";
      setPreviewUrl(null);
      setFileName(null);
      return;
    }

    setErrorMessage("");
    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Не удалось отправить отзыв.");
      }

      setStatus("success");
      form.reset();

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(null);
      setFileName(null);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Не удалось отправить отзыв.",
      );
    }
  }

  if (status === "success") {
    return (
      <FormSuccess title="Спасибо за отзыв!">
        <p>Мы получили ваше сообщение. Спасибо, что нашли время его написать.</p>
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

      <div>
        <label
          htmlFor="name"
          className={labelClass}
        >
          Имя клиента
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Как подписать отзыв"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="role"
          className={labelClass}
        >
          Объект или проект (необязательно)
        </label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="Например: реставрация квартиры, СПб"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="review"
          className={labelClass}
        >
          Ваш отзыв
        </label>
        <textarea
          id="review"
          name="review"
          required
          rows={6}
          placeholder="Что заказывали, как прошла работа, что понравилось"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="photo"
          className={labelClass}
        >
          Фото изделия (необязательно)
        </label>

        <div className="mt-3 flex items-center gap-4">
          {previewUrl && (
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/15">
              <Image
                src={previewUrl}
                alt="Предпросмотр фото"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}

          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="peer sr-only"
          />

          <label
            htmlFor="photo"
            className="flex-1 cursor-pointer truncate rounded-2xl border border-dashed border-white/25 px-4 py-3 text-sm text-white/70 transition hover:border-brass-soft hover:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brass-soft"
          >
            {fileName ?? "Выбрать файл…"}
          </label>
        </div>
      </div>

      <FormError message={status === "error" || errorMessage ? errorMessage : ""} />

      <ConsentCheckbox />

      <button
        type="submit"
        disabled={status === "loading"}
        className={submitClass}
      >
        {status === "loading" ? "Отправляем…" : "Отправить отзыв"}
      </button>
    </form>
  );
}
