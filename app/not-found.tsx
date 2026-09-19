import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/ui/Arrow";

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
        className="section-pad flex min-h-[70vh] flex-col justify-center"
      >
        <p className="kicker">Ошибка 404</p>
        <h1 className="display display-xl mb-9 mt-7 max-w-[10ch]">
          Такой страницы <em>нет.</em>
        </h1>
        <p className="max-w-[440px] text-[17px] leading-[1.8] text-muted">
          Возможно, ссылка устарела или изделие убрано из каталога.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
          <Link href="/projects" className="button button-dark">
            Открыть каталог
            <Arrow />
          </Link>
          <Link href="/" className="text-link">
            На главную
            <Arrow />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
