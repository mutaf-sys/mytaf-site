import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="bg-[#fffdf9] px-6 py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1720px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#a67c38]">
              Портфолио мастерской
            </p>

            <h2 className="mt-5 font-heading text-5xl leading-[1.05] text-[#26221d] sm:text-6xl">
              Избранные работы
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#746c61]">
            Подборка выполненных проектов, изготовленных вручную по историческим
            образцам, архивным материалам и индивидуальным чертежам.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`Открыть работу: ${project.title}`}
              className="group block"
            >
              <article className="overflow-hidden rounded-[34px] border border-[#d9cfbf] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#b88a45] hover:shadow-[0_30px_70px_rgba(40,30,20,0.18)]">
                <div className="relative h-[430px] overflow-hidden lg:h-[540px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                      {project.subtitle}
                    </p>

                    <h3 className="mt-3 font-heading text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 translate-y-2 text-sm uppercase tracking-[0.2em] text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Смотреть работу →
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="rounded-full border border-[#a67c38] px-10 py-4 text-sm font-medium text-[#7e5e28] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a67c38] hover:text-white"
          >
            Смотреть всю коллекцию
          </Link>
        </div>
      </div>
    </section>
  );
}