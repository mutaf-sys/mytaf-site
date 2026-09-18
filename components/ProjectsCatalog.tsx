"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

import { categories, projects, type Category } from "@/data/projects";

const categoryCover: Record<Category, string> = {
  "Дверные ручки": "/images/catalog/door-handles/ruchka-balyasina-para.jpg",
  "Шпингалеты": "/images/catalog/bolts/zadvizhka-reznaya-v-sbore.jpg",
  "Петли": "/images/catalog/hinges/petlya-sharovidnye-nakonechniki.jpg",
  "Оконная фурнитура": "/images/catalog/window-fittings/nabor-espanoletok.jpg",
  "Накладки и декоративные элементы": "/images/workshop/workshop-18.jpg",
  "Другие изделия": "/images/catalog/banner-collection.jpg",
};

export default function ProjectsCatalog() {
  return (
    <Suspense fallback={null}>
      <ProjectsPageInner />
    </Suspense>
  );
}

function ProjectsPageInner() {
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
    <main id="main" className="min-h-screen bg-background">
      {/* Первый экран */}
      <section className="border-b border-border px-6 pb-16 pt-32 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm text-brass-dark transition duration-300 hover:opacity-60"
          >
            <span aria-hidden="true">←</span>
            Вернуться на главную
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="eyebrow">Каталог мастерской</p>

              <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
                Историческая латунная фурнитура
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-muted sm:text-lg">
                Дверные ручки, петли, шпингалеты, оконная фурнитура и
                декоративные накладки, созданные вручную из латуни.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Крупные тайлы категорий */}
      <section className="px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="sr-only">Категории каталога</h2>
          <div
            role="group"
            aria-label="Фильтр по категориям"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <button
              type="button"
              aria-pressed={active === null}
              onClick={() => setActive(null)}
              className={`group relative col-span-full flex items-center justify-between overflow-hidden rounded-[24px] border px-8 py-6 text-left transition-all duration-300 ${
                active === null
                  ? "border-brass bg-foreground text-white"
                  : "border-border bg-surface text-foreground hover:border-brass hover:bg-brass/10"
              }`}
            >
              <span className="font-heading text-2xl">Все изделия</span>
              <span className="text-sm opacity-70">{projects.length}</span>
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
                  className={`group relative block overflow-hidden rounded-[24px] border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(50,40,25,0.18)] ${
                    isActive ? "border-brass" : "border-border hover:border-brass"
                  }`}
                >
                  <div className="relative h-[260px] overflow-hidden sm:h-[300px]">
                    <Image
                      src={categoryCover[category]}
                      alt={category}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover media-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                      <h3 className="font-heading text-2xl leading-tight text-white sm:text-3xl">
                        {category}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                        {count}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Сетка изделий */}
      <section className="px-6 py-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="sr-only" aria-live="polite">
            Показано изделий: {visible.length}
          </p>

          {visible.length === 0 && (
            <div role="status" className="rounded-[24px] border border-border bg-surface px-8 py-16 text-center">
              <p className="font-heading text-2xl text-foreground">
                В этой категории пока нет изделий
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="btn-line mt-6"
              >
                Показать все изделия
              </button>
            </div>
          )}

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface shadow-[0_20px_60px_rgba(50,40,25,0.1)]">
                    <Image
                      src={project.studioImages[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover media-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-brass">
                    {project.category}
                  </p>
                  <h2 className="mt-2 font-heading text-2xl leading-snug text-foreground">
                    {project.title}
                  </h2>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Блок индивидуального заказа */}
      <section className="border-t border-border px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="overflow-hidden rounded-[36px] bg-foreground px-7 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-brass-soft sm:text-sm">
                  Индивидуальное изготовление
                </p>

                <h2 className="mt-6 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Создадим фурнитуру специально для вашего проекта
                </h2>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-base leading-8 text-white/65 sm:text-lg">
                  Работаем по историческим образцам, фотографиям, эскизам и
                  индивидуальным чертежам.
                </p>

                <Link href="/#contacts" className="btn-line btn-line-invert mt-8">
                  Обсудить проект
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
