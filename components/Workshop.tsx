"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

const photos = [
  {
    src: "/images/workshop/workshop-1.jpg",
    alt: "Партия эспаньолеток в мастерской",
    span: "sm:col-span-4 sm:row-span-2",
    aspect: "aspect-[4/5] sm:aspect-auto sm:h-full",
  },
  {
    src: "/images/workshop/workshop-6.jpg",
    alt: "Деталь фурнитуры в руках мастера",
    span: "sm:col-span-2",
    aspect: "aspect-square",
  },
  {
    src: "/images/workshop/workshop-2.jpg",
    alt: "Ряд собранных эспаньолеток",
    span: "sm:col-span-2",
    aspect: "aspect-square",
  },
  {
    src: "/images/workshop/workshop-3.jpg",
    alt: "Накладки на замочную скважину, ряды деталей",
    span: "sm:col-span-4",
    aspect: "aspect-[5/4]",
  },
  {
    src: "/images/workshop/workshop-7.jpg",
    alt: "Деталь с накладным наконечником",
    span: "sm:col-span-2 sm:row-span-2",
    aspect: "aspect-[4/5] sm:aspect-auto sm:h-full",
  },
  {
    src: "/images/workshop/workshop-4.jpg",
    alt: "Готовые изделия в мастерской",
    span: "sm:col-span-2",
    aspect: "aspect-square",
  },
  {
    src: "/images/workshop/workshop-5.jpg",
    alt: "Ряды готовой фурнитуры на верстаке",
    span: "sm:col-span-4",
    aspect: "aspect-[5/4]",
  },
];

export default function Workshop() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lightboxImages = photos.map((p) => ({ src: p.src, alt: p.alt }));

  return (
    <section id="workshop" className="bg-[var(--surface)] px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1720px]">
        <Reveal>
          <p className="eyebrow">Мастерская</p>
          <h2 className="mt-5 max-w-3xl font-heading text-5xl leading-[1.05] text-[var(--foreground)] sm:text-6xl">
            Мастерская и ручная работа
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Каждое изделие проходит через руки мастера — от точения деталей
            до финальной полировки. Так выглядит процесс изнутри.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-8 sm:gap-5">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 80} className={photo.span}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Открыть фото: ${photo.alt}`}
                className={`group relative block w-full overflow-hidden rounded-[20px] bg-[var(--background)] ${photo.aspect}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 767px) 50vw, 25vw"
                  className="object-cover media-zoom"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </section>
  );
}
