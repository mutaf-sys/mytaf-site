import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="flex min-h-screen items-center bg-background px-6 pb-16 pt-32 lg:px-12"
      >
        <div className="mx-auto w-full max-w-3xl">
          <p className="eyebrow">Ошибка 404</p>
          <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-foreground sm:text-6xl">
            Такой страницы нет
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Возможно, ссылка устарела или изделие убрано из каталога.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-line">
              Открыть каталог
            </Link>
            <Link href="/" className="btn-line">
              На главную
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
