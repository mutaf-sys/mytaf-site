"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Arrow from "@/components/ui/Arrow";

const navigation = [
  { title: "Каталог", href: "/projects", match: "/projects" },
  { title: "Мастерская", href: "/masterskaya", match: "/masterskaya" },
  { title: "Реставрация", href: "/#restoration", match: null },
  { title: "Стоимость", href: "/#estimate", match: null },
  { title: "Контакты", href: "/#contacts", match: null },
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="flex h-[72px] items-center justify-between px-[clamp(22px,5vw,76px)] min-[561px]:h-[84px]">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Empirebrass — на главную"
          className="flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-foreground"
          >
            <span className="pr-1 font-heading text-[21px] leading-none tracking-[-4px]">
              E<span className="text-brass">B</span>
            </span>
          </span>

          <span>
            <strong className="block font-heading text-[19px] font-semibold leading-none">
              Empirebrass
            </strong>
            <small className="mt-1 hidden text-[10px] uppercase tracking-[0.16em] text-muted min-[561px]:block">
              Мастерская исторической фурнитуры
            </small>
          </span>
        </Link>

        <nav
          aria-label="Основная навигация"
          className="hidden gap-1 text-xs uppercase tracking-[0.13em] min-[901px]:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              aria-current={isCurrent(item.match) ? "page" : undefined}
              className={`px-4 py-2.5 transition-colors duration-300 hover:text-brass ${
                isCurrent(item.match) ? "text-brass" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contacts"
          className="hidden items-center gap-2 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.13em] transition-colors duration-300 hover:text-brass min-[901px]:flex"
        >
          Обсудить проект
          <Arrow />
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="relative grid h-11 w-11 place-items-center rounded-full border border-foreground transition hover:bg-foreground hover:text-white min-[901px]:hidden"
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

      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto border-b border-border bg-background min-[901px]:hidden"
      >
        <div className="px-[22px] pb-7 pt-5">
          <nav aria-label="Мобильная навигация" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeMenu}
                aria-current={isCurrent(item.match) ? "page" : undefined}
                className="border-b border-border py-[18px] font-heading text-[25px] transition duration-300 hover:text-brass"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contacts"
            onClick={closeMenu}
            className="button button-dark mt-6 w-full"
          >
            Обсудить проект
            <Arrow />
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
          </div>
        </div>
      </div>
    </header>
  );
}
