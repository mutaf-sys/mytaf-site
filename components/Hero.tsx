"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = imageRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `translate3d(${x * -10}px, ${y * -10}px, 0) scale(1.03)`;
  }

  function handleMouseLeave() {
    const el = imageRef.current;
    if (!el) return;
    el.style.transform = "translate3d(0, 0, 0) scale(1)";
  }

  return (
    <section className="mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:pt-40">
      {/* Текстовая часть */}
      <div className="mx-auto w-full max-w-2xl lg:mx-0">
        <p className="mb-4 max-w-[280px] text-[10px] uppercase leading-5 tracking-[0.26em] text-[var(--brass)] sm:mb-5 sm:max-w-none sm:text-sm sm:tracking-[0.32em]">
          Санкт-Петербург · Более 10 лет опыта
        </p>

        <h1 className="font-heading text-[42px] leading-[1.02] text-[var(--foreground)] min-[390px]:text-[46px] sm:text-6xl lg:text-7xl">
          Историческая латунная фурнитура ручной работы
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-8 sm:text-lg sm:leading-8">
          Создаём дверные ручки, петли и оконную фурнитуру по историческим
          образцам для музеев, объектов культурного наследия и частных
          проектов.
        </p>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
          <a
            href="/projects"
            className="btn-line flex w-full items-center justify-center sm:w-auto"
          >
            Открыть каталог
          </a>

          <a
            href="#contacts"
            className="flex w-full items-center justify-center border border-[var(--border)] px-6 py-4 text-sm uppercase tracking-[0.18em] text-[var(--brass-dark)] transition duration-300 hover:border-[var(--brass)] hover:bg-[var(--brass)]/10 sm:w-auto sm:px-8"
          >
            Обсудить проект
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-6 sm:mt-14 sm:max-w-xs sm:gap-10 sm:pt-8">
          <div>
            <p className="font-heading text-2xl text-[var(--brass)] sm:text-3xl">
              10+
            </p>
            <p className="mt-1 text-[11px] leading-4 text-[var(--muted)] sm:text-sm">
              лет опыта
            </p>
          </div>

          <div>
            <p className="font-heading text-2xl text-[var(--brass)] sm:text-3xl">
              100%
            </p>
            <p className="mt-1 text-[11px] leading-4 text-[var(--muted)] sm:text-sm">
              ручная работа
            </p>
          </div>
        </div>
      </div>

      {/* Фотография */}
      <div
        className="relative mx-auto w-full max-w-[620px] px-1 sm:px-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute -inset-2 rounded-[30px] border border-[var(--brass)]/25 sm:-inset-4 sm:rounded-[42px]" />

        <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#e9e1d4] shadow-[0_24px_60px_rgba(50,40,25,0.14)] sm:rounded-[32px] sm:shadow-[0_30px_80px_rgba(50,40,25,0.16)]">
          <div
            ref={imageRef}
            className="absolute inset-0 transition-transform duration-500 ease-out"
          >
            <Image
              src="/images/catalog/banner-collection.jpg"
              alt="Историческая латунная фурнитура ручной работы"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
            <p className="font-heading text-xl leading-tight sm:text-2xl">
              Фурнитура ручной работы
            </p>

            <p className="mt-2 max-w-[260px] text-xs leading-5 text-white/80 sm:max-w-none sm:text-sm">
              Латунь · Ручная работа · Индивидуальное изготовление
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
