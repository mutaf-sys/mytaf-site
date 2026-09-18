"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox from "./Lightbox";

type ProductGalleryProps = {
  title: string;
  studioImages: string[];
  interiorImages?: string[];
};

export default function ProductGallery({
  title,
  studioImages,
  interiorImages,
}: ProductGalleryProps) {
  const hasInterior = Boolean(interiorImages && interiorImages.length > 0);
  const [tab, setTab] = useState<"studio" | "interior">("studio");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeImages = tab === "interior" ? interiorImages ?? [] : studioImages;
  const lightboxImages = activeImages.map((src) => ({ src, alt: title }));

  return (
    <div>
      {hasInterior && (
        <div className="mb-5 inline-flex border border-[var(--border)] text-xs uppercase tracking-[0.2em]">
          <button
            type="button"
            onClick={() => setTab("studio")}
            className={`px-5 py-2.5 transition ${
              tab === "studio"
                ? "bg-[var(--foreground)] text-white"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            Изделие
          </button>
          <button
            type="button"
            onClick={() => setTab("interior")}
            className={`px-5 py-2.5 transition ${
              tab === "interior"
                ? "bg-[var(--foreground)] text-white"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            В интерьере
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpenIndex(0)}
        aria-label={`Открыть фото: ${title}`}
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-[var(--surface)] shadow-[0_30px_80px_rgba(50,40,25,0.14)]"
      >
        <Image
          src={activeImages[0]}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover media-zoom"
        />
      </button>

      {activeImages.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {activeImages.slice(1).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i + 1)}
              aria-label={`Открыть фото ${i + 2}`}
              className="relative aspect-square overflow-hidden rounded-xl bg-[var(--surface)]"
            >
              <Image
                src={src}
                alt={title}
                fill
                sizes="120px"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </div>
  );
}
