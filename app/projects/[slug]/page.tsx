import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb]">
      <section className="px-6 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-sm text-[#7e5e28] transition duration-300 hover:opacity-60"
          >
            <span aria-hidden="true">←</span>
            Вернуться к коллекции
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[#e9e1d4] shadow-[0_30px_80px_rgba(50,40,25,0.16)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.32em] text-[#a67c38] sm:text-sm">
                {project.subtitle}
              </p>

              <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-[#26221d] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>

              <p className="mt-8 text-base leading-8 text-[#746c61] sm:text-lg">
                {project.description}
              </p>

              <div className="mt-10 border-t border-[#d9cfbf] pt-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#a67c38]">
                      Материал
                    </p>

                    <p className="mt-3 text-base text-[#26221d]">
                      {project.material}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#a67c38]">
                      Отделка
                    </p>

                    <p className="mt-3 text-base text-[#26221d]">
                      {project.finish}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/#contacts"
                className="mt-10 inline-flex rounded-full bg-[#a67c38] px-8 py-4 text-sm text-white transition duration-300 hover:-translate-y-1 hover:bg-[#7e5e28]"
              >
                Обсудить похожий проект
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
