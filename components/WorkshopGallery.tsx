"use client";

import { useState } from "react";

import Lightbox from "./Lightbox";
import type { WorkshopPhoto } from "@/data/workshop";

type WorkshopGalleryProps = {
  photos: WorkshopPhoto[];
};

export default function WorkshopGallery({ photos }: WorkshopGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Открыть фото: ${photo.alt}`}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[20px] bg-[var(--surface)] sm:mb-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="block w-full media-zoom"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={photos.map((p) => ({ src: p.src, alt: p.alt }))}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}
