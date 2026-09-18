"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main"
      className="flex min-h-screen items-center bg-background px-6 lg:px-12"
    >
      <div role="alert" className="mx-auto w-full max-w-3xl">
        <p className="eyebrow">Что-то пошло не так</p>
        <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-foreground sm:text-6xl">
          Не удалось загрузить страницу
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          Попробуйте обновить страницу. Если ошибка повторяется, позвоните нам
          по телефону +7 (999) 064-64-17.
        </p>
        <button type="button" onClick={reset} className="btn-line mt-10">
          Попробовать снова
        </button>
      </div>
    </main>
  );
}
