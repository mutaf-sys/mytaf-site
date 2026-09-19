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
      className="section-pad flex min-h-screen flex-col justify-center"
    >
      <div role="alert">
        <p className="kicker">Что-то пошло не так</p>
        <h1 className="display display-lg my-7 max-w-[14ch]">
          Не удалось <em>загрузить страницу.</em>
        </h1>
        <p className="max-w-[440px] text-[17px] leading-[1.8] text-muted">
          Попробуйте обновить страницу. Если ошибка повторяется, позвоните нам
          по телефону +7 (999) 064-64-17.
        </p>
        <button type="button" onClick={reset} className="button button-dark mt-9">
          Попробовать снова
        </button>
      </div>
    </main>
  );
}
