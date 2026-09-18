"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { title: "Каталог", href: "/projects", match: "/projects" },
  { title: "Мастерская", href: "/masterskaya", match: "/masterskaya" },
  { title: "О мастерской", href: "/#about", match: null },
  { title: "Стоимость", href: "/#estimate", match: null },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    if (isMenuOpen) window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function isCurrent(match: string | null) {
    return match !== null && pathname.startsWith(match);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-12">
        {/* Логотип и название */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Empirebrass — на главную"
          className="flex min-w-0 items-center gap-3 sm:gap-4"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
            <Image
              src="/images/logo.jpg"
              alt=""
              width={64}
              height={64}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="truncate font-heading text-base leading-none text-foreground sm:text-xl">
              Empirebrass
            </p>

            <p className="mt-2 hidden text-xs uppercase tracking-[0.16em] text-muted sm:block">
              Мастерская исторической латунной фурнитуры
            </p>
          </div>
        </Link>

        {/* Навигация для компьютера */}
        <nav aria-label="Основная навигация" className="hidden items-center gap-4 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              aria-current={isCurrent(item.match) ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-brass/10 hover:text-brass-dark ${
                isCurrent(item.match)
                  ? "bg-brass/10 text-brass-dark"
                  : "text-foreground/90"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Кнопка для компьютера */}
        <Link
          href="/#contacts"
          className="hidden shrink-0 rounded-full border border-brass px-6 py-3 text-sm text-brass-dark transition-all duration-300 ease-out hover:bg-brass-dark hover:text-white lg:inline-flex"
        >
          Связаться с нами
        </Link>

        {/* Кнопка мобильного меню */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/60 text-brass-dark transition hover:bg-brass-dark hover:text-white xl:hidden"
        >
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />

          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100vh-80px)] overflow-y-auto border-b border-border bg-background xl:hidden"
      >
        <div className="px-4 pb-8 pt-5 sm:px-6">
          <nav aria-label="Мобильная навигация" className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeMenu}
                aria-current={isCurrent(item.match) ? "page" : undefined}
                className="flex items-center justify-between border-b border-border py-5 font-heading text-2xl text-foreground transition duration-300 hover:text-brass-dark"
              >
                <span>{item.title}</span>

                <span aria-hidden="true" className="text-base text-brass-dark">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/#contacts"
            onClick={closeMenu}
            className="mt-7 flex w-full items-center justify-center rounded-full bg-brass-dark px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-foreground"
          >
            Обсудить проект
          </Link>

          <div className="mt-7 border-t border-border pt-6">
            <a
              href="tel:+79990646417"
              className="block font-heading text-xl text-foreground"
            >
              +7 (999) 064-64-17
            </a>

            <a
              href="mailto:info@empirebrass.ru"
              className="mt-3 block text-sm text-muted"
            >
              info@empirebrass.ru
            </a>

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-brass-dark">
              Санкт-Петербург
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
