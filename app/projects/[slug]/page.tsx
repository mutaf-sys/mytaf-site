import Link from "next/link";
import { notFound } from "next/navigation";

import ProductGallery from "@/components/ProductGallery";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="px-6 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-sm text-[var(--brass-dark)] transition duration-300 hover:opacity-60"
          >
            <span aria-hidden="true">←</span>
            Вернуться к каталогу
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ProductGallery
              title={project.title}
              studioImages={project.studioImages}
              interiorImages={project.interiorImages}
            />

            <div className="max-w-xl lg:sticky lg:top-32">
              <p className="eyebrow">{project.category}</p>

              <h1 className="mt-6 font-heading text-4xl leading-[1.1] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-8 text-base leading-8 text-[var(--muted)] sm:text-lg">
                {project.description}
              </p>

              <div className="mt-10 space-y-5 border-t border-[var(--border)] pt-8">
                {project.material && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--brass)]">
                      Материал
                    </p>
                    <p className="mt-2 text-base text-[var(--foreground)]">
                      {project.material}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--brass)]">
                    Изготовление
                  </p>
                  <p className="mt-2 text-base text-[var(--foreground)]">
                    Изготавливается по индивидуальному проекту
                  </p>
                </div>
              </div>

              <Link href="/#contacts" className="btn-line mt-10">
                Изготовить под заказ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
