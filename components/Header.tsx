"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { title: "Каталог", href: "/projects" },
  { title: "Мастерская", href: "/#workshop" },
  { title: "О мастерской", href: "/#about" },
  { title: "Стоимость", href: "/#estimate" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9cfbf] bg-[#f7f3eb]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-12">
        {/* Логотип и название */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3 sm:gap-4"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
            <Image
              src="/images/logo.jpg"
              alt="Логотип мастерской Empirebrass"
              width={64}
              height={64}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="truncate font-heading text-base leading-none text-[#26221d] sm:text-xl">
              Empirebrass
            </p>

            <p className="mt-2 hidden text-xs uppercase tracking-[0.16em] text-[#746c61] sm:block">
              Мастерская исторической латунной фурнитуры
            </p>
          </div>
        </Link>

        {/* Навигация для компьютера */}
        <nav className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-[#3e3932] transition-all duration-300 hover:bg-[#a67c38]/10 hover:text-[#a67c38]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Кнопка для компьютера */}
<Link
  href="/#contacts"
  className="
    hidden shrink-0 rounded-full border border-[#a67c38]
    px-6 py-3
    text-sm text-[#7e5e28]
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:bg-[#a67c38]
    hover:text-white
    hover:shadow-md
    lg:inline-flex
  "
>
  Связаться с нами
</Link>

        {/* Кнопка мобильного меню */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#a67c38]/60 text-[#7e5e28] transition hover:bg-[#a67c38] hover:text-white lg:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          </span>

          <span
            className={`absolute h-px w-5 bg-current transition duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />

          <span
            className={`absolute h-px w-5 bg-current transition duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-px w-5 bg-current transition duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-[#d9cfbf] bg-[#f7f3eb] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[calc(100vh-80px)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[calc100vh-80px)] overflow-y-auto px-4 pb-8 pt-5 sm:px-6">
          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#d9cfbf] py-5 font-heading text-2xl text-[#26221d] transition duration-300 hover:text-[#a67c38]"
              >
                <span>{item.title}</span>

                <span
                  aria-hidden="true"
                  className="text-base text-[#a67c38]"
                >
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/#contacts"
            onClick={closeMenu}
            className="mt-7 flex w-full items-center justify-center rounded-full bg-[#a67c38] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#7e5e28]"
          >
            Обсудить проект
          </Link>

          <div className="mt-7 border-t border-[#d9cfbf] pt-6">
            <a
              href="tel:+79046156147"
              className="block font-heading text-xl text-[#26221d]"
            >
              +7 (904) 615-61-47
            </a>

            <a
              href="mailto:info@empirebrass.ru"
              className="mt-3 block text-sm text-[#746c61]"
            >
              info@empirebrass.ru
            </a>

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#a67c38]">
              Санкт-Петербург
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}