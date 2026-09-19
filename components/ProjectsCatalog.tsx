"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/ui/Arrow";
import { categories, projects, type Category } from "@/data/projects";

export default function ProjectsCatalog() {
  return (
    <Suspense fallback={null}>
      <ProjectsCatalogInner />
    </Suspense>
  );
}

const chip =
  "border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] transition";

function ProjectsCatalogInner() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as Category | null;
  const [active, setActive] = useState<Category | null>(
    categoryParam && categories.includes(categoryParam) ? categoryParam : null,
  );

  const visible = useMemo(
    () => (active ? projects.filter((p) => p.category === active) : projects),
    [active],
  );

  return (
    <>
      <main id="main" className="min-h-screen bg-background">
        <section className="border-b border-border">
          <div className="section-pad !pb-[clamp(50px,6vw,90px)] !pt-[clamp(50px,6vw,90px)]">
            <p className="kicker">Каталог мастерской</p>
            <h1 className="display display-xl mb-9 mt-7 max-w-[11ch]">
              Историческая латунная <em>фурнитура.</em>
            </h1>
            <p className="max-w-[520px] text-[15px] leading-[1.8] text-muted min-[561px]:text-[17px]">
              Дверные ручки, петли, шпингалеты и оконная фурнитура, созданные
              вручную из латуни. Каждое изделие изготавливается по
              индивидуальному проекту.
            </p>
          </div>
        </section>

        <section className="section-pad !pt-[clamp(40px,5vw,70px)]">
          <h2 className="sr-only">Изделия каталога</h2>

          <div
            role="group"
            aria-label="Фильтр по категориям"
            className="flex flex-wrap gap-2.5"
          >
            <button
              type="button"
              aria-pressed={active === null}
              onClick={() => setActive(null)}
              className={`${chip} ${
                active === null
                  ? "border-foreground bg-foreground text-white"
                  : "border-border hover:border-brass hover:text-brass"
              }`}
            >
              Все · {projects.length}
            </button>

            {categories.map((category) => {
              const count = projects.filter((p) => p.category === category).length;
              const isActive = active === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(category)}
                  className={`${chip} ${
                    isActive
                      ? "border-foreground bg-foreground text-white"
                      : "border-border hover:border-brass hover:text-brass"
                  }`}
                >
                  {category} · {count}
                </button>
              );
            })}
          </div>

          <p className="sr-only" aria-live="polite">
            Показано изделий: {visible.length}
          </p>

          {visible.length === 0 && (
            <div role="status" className="mt-12 border border-border px-8 py-16 text-center">
              <p className="font-heading text-2xl">
                В этой категории пока нет изделий
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="button button-outline mt-6"
              >
                Показать все изделия
              </button>
            </div>
          )}

          <ul className="mt-12 grid grid-cols-3 gap-x-[18px] gap-y-14 max-[900px]:grid-cols-2 max-[560px]:gap-x-3 max-[560px]:gap-y-9">
            {visible.map((project, i) => (
              <li key={project.slug}>
                <Reveal delay={(i % 3) * 70}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                      <Image
                        src={project.studioImages[0]}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 50vw, 33vw"
                        className="media-zoom object-cover"
                      />
                    </div>
                    <div className="border-b border-border pb-4 pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-brass">
                        {project.category}
                      </span>
                      <h3 className="mt-2 text-[22px] leading-snug max-[560px]:text-[17px]">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="on-dark bg-dark text-white">
          <div className="mx-auto grid max-w-[1720px] items-end gap-[8vw] px-[clamp(22px,11vw,170px)] py-[clamp(70px,9vw,120px)] min-[901px]:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="kicker">Индивидуальное изготовление</p>
              <h2 className="display display-md mt-[22px]">
                Создадим фурнитуру <em>специально для вашего проекта.</em>
              </h2>
            </div>
            <div>
              <p className="mb-8 leading-[1.8] text-[#c9c7bd]">
                Работаем по историческим образцам, фотографиям, эскизам и
                индивидуальным чертежам.
              </p>
              <Link href="/#contacts" className="button button-brass">
                Обсудить проект
                <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
