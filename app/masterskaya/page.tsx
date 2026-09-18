import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import WorkshopGallery from "@/components/WorkshopGallery";
import { workshopPhotos } from "@/data/workshop";

export const metadata: Metadata = {
  title: "Мастерская и ручная работа",
  description:
    "Фотографии из мастерской Empirebrass: процесс изготовления, детали и готовые изделия из латуни.",
  alternates: { canonical: "/masterskaya" },
};

export default function MasterskayaPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-background">
      <section className="border-b border-border px-6 pb-16 pt-32 lg:px-12 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm text-brass-dark transition duration-300 hover:opacity-60"
          >
            <span aria-hidden="true">←</span>
            Вернуться на главную
          </Link>

          <p className="eyebrow mt-12">Мастерская</p>
          <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[1.05] text-foreground sm:text-6xl">
            Мастерская и ручная работа
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {workshopPhotos.length} фотографии из мастерской — процесс
            изготовления, детали и готовые изделия.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1720px]">
          <WorkshopGallery photos={workshopPhotos} />
        </div>
      </section>
    </main>
    </>
  );
}
