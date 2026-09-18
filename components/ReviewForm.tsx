"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

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
      <div className="rounded-[28px] border border-[#c9a96e]/40 bg-white/5 p-8 sm:p-10">
        <p className="font-heading text-2xl text-white sm:text-3xl">
          Спасибо за отзыв!
        </p>

        <p className="mt-4 text-white/65">
          Мы получили ваше сообщение. Спасибо, что нашли время его написать.
        </p>
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

      <div>
        <label
          htmlFor="name"
          className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]"
        >
          Имя клиента
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Как подписать отзыв"
          className="mt-3 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#c9a96e]"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="role"
          className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]"
        >
          Объект или проект (необязательно)
        </label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="Например: реставрация квартиры, СПб"
          className="mt-3 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#c9a96e]"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="review"
          className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]"
        >
          Ваш отзыв
        </label>
        <textarea
          id="review"
          name="review"
          required
          rows={6}
          placeholder="Что заказывали, как прошла работа, что понравилось"
          className="mt-3 w-full resize-none rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#c9a96e]"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="photo"
          className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]"
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

          <label
            htmlFor="photo"
            className="flex-1 cursor-pointer truncate rounded-2xl border border-dashed border-white/25 px-4 py-3 text-sm text-white/55 transition hover:border-[#c9a96e] hover:text-white"
          >
            {fileName ?? "Выбрать файл…"}
          </label>

          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />
        </div>
      </div>

      {(status === "error" || errorMessage) && (
        <p className="mt-4 text-sm text-[#e0a45a]">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 flex w-full items-center justify-center rounded-full bg-[#a67c38] px-8 py-4 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#c29a54] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Отправляем…" : "Отправить отзыв"}
      </button>
    </form>
  );
}
