import Image from "next/image";
import Link from "next/link";

import { featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--surface)] px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1720px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Портфолио мастерской</p>

            <h2 className="mt-5 font-heading text-5xl leading-[1.05] text-[var(--foreground)] sm:text-6xl">
              Избранные изделия
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
            Подборка изделий из каталога мастерской — от дверных ручек до
            оконной фурнитуры, изготовленных вручную из латуни.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`Открыть изделие: ${project.title}`}
              className="group block"
            >
              <article className="overflow-hidden rounded-[34px] border border-[var(--border)] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--brass-soft)] hover:shadow-[0_30px_70px_rgba(40,30,20,0.18)]">
                <div className="relative h-[380px] overflow-hidden lg:h-[440px]">
                  <Image
                    src={project.studioImages[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover media-zoom"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                      {project.category}
                    </p>

                    <h3 className="mt-3 font-heading text-3xl">{project.title}</h3>

                    <p className="mt-4 translate-y-2 text-sm uppercase tracking-[0.2em] text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Смотреть изделие →
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link href="/projects" className="btn-line">
            Смотреть весь каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
