"use client";

import Image from "next/image";
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
      <ul className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
        {photos.map((photo, i) => (
          <li key={photo.src} className="mb-4 break-inside-avoid sm:mb-5">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Открыть фото: ${photo.alt}`}
              className="group block w-full overflow-hidden bg-surface"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="block h-auto w-full media-zoom"
              />
            </button>
          </li>
        ))}
      </ul>

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
