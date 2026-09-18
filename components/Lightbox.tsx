"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const [visible, setVisible] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (hasMultiple && event.key === "ArrowRight") {
        onIndexChange((index + 1) % images.length);
      }
      if (hasMultiple && event.key === "ArrowLeft") {
        onIndexChange((index - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, images.length, hasMultiple, onClose, onIndexChange]);

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (!hasMultiple || Math.abs(delta) < 50) return;
    if (delta < 0) onIndexChange((index + 1) % images.length);
    else onIndexChange((index - 1 + images.length) % images.length);
  }

  const current = images[index];
  if (!current) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type="button"
        aria-label="Закрыть"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-lg text-white/90 transition hover:border-white/60 hover:text-white sm:right-8 sm:top-8"
      >
        ✕
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={(event) => {
              event.stopPropagation();
              onIndexChange((index - 1 + images.length) % images.length);
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-xl text-white/80 transition hover:border-white/60 hover:text-white sm:left-6"
          >
            ←
          </button>

          <button
            type="button"
            aria-label="Следующее фото"
            onClick={(event) => {
              event.stopPropagation();
              onIndexChange((index + 1) % images.length);
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-xl text-white/80 transition hover:border-white/60 hover:text-white sm:right-6"
          >
            →
          </button>
        </>
      )}

      <div
        className={`relative h-[75vh] w-full max-w-4xl transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {hasMultiple && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-white/60">
          {index + 1} / {images.length}
        </div>
      )}
    </div>,
    document.body,
  );
}
