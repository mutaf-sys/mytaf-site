import type { Metadata } from "next";

import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import WorkshopGallery from "@/components/WorkshopGallery";
import { workshopPhotos } from "@/data/workshop";
import { plural } from "@/lib/plural";

export const metadata: Metadata = {
  title: "Мастерская и ручная работа",
  description:
    "Фотографии из мастерской Empirebrass: процесс изготовления, детали и готовые изделия из латуни.",
  alternates: { canonical: "/masterskaya" },
};

export default function MasterskayaPage() {
  const count = workshopPhotos.length;

  return (
    <>
      <Header />

      <main id="main" className="min-h-screen bg-background">
        <section className="border-b border-border">
          <div className="section-pad !pb-[clamp(50px,6vw,90px)] !pt-[clamp(50px,6vw,90px)]">
            <p className="kicker">Мастерская</p>
            <h1 className="display display-xl mb-9 mt-7 max-w-[12ch]">
              Там, где металл <em>обретает голос.</em>
            </h1>
            <p className="max-w-[520px] text-[15px] leading-[1.8] text-muted min-[561px]:text-[17px]">
              {count} {plural(count, ["фотография", "фотографии", "фотографий"])} из
              мастерской — процесс изготовления, детали и готовые изделия.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1720px] px-[clamp(22px,5vw,76px)] py-[clamp(50px,6vw,90px)]">
          <h2 className="sr-only">Фотографии мастерской</h2>
          <WorkshopGallery photos={workshopPhotos} />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
