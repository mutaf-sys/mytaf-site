import Link from "next/link";

import Reveal from "./Reveal";
import WorkshopGallery from "./WorkshopGallery";
import { workshopPhotos } from "@/data/workshop";

const PREVIEW_COUNT = 12;

export default function Workshop() {
  const preview = workshopPhotos.slice(0, PREVIEW_COUNT);

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

        <Reveal delay={150} className="mt-16">
          <WorkshopGallery photos={preview} />
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Link href="/masterskaya" className="btn-line">
            Смотреть все {workshopPhotos.length} фото
          </Link>
        </div>
      </div>
    </section>
  );
}
