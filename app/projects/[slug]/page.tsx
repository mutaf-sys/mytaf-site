import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  const description = `${project.description} Изготавливается по индивидуальному проекту.`;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description,
      images: [{ url: project.studioImages[0], alt: project.title }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.title,
    description: project.description,
    category: project.category,
    image: project.studioImages.map((src) => `${siteConfig.url}${src}`),
    brand: { "@type": "Brand", name: siteConfig.name },
    ...(project.material ? { material: project.material } : {}),
  };

  return (
    <>
      <Header />

      <main id="main" className="min-h-screen bg-background">
        <section className="px-6 pb-16 pt-32 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-[1440px]">
            <nav aria-label="Навигация по разделам">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/projects" className="hover:text-brass-dark">
                    Каталог
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href={`/projects?category=${encodeURIComponent(project.category)}`}
                    className="hover:text-brass-dark"
                  >
                    {project.category}
                  </Link>
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <ProductGallery
                title={project.title}
                studioImages={project.studioImages}
                interiorImages={project.interiorImages}
              />

              <div className="max-w-xl lg:sticky lg:top-32">
                <p className="eyebrow">{project.category}</p>

                <h1 className="mt-6 font-heading text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
                  {project.description}
                </p>

                <dl className="mt-10 space-y-5 border-t border-border pt-8">
                  {project.material && (
                    <div>
                      <dt className="text-xs uppercase tracking-[0.24em] text-brass-dark">
                        Материал
                      </dt>
                      <dd className="mt-2 text-base text-foreground">
                        {project.material}
                      </dd>
                    </div>
                  )}

                  <div>
                    <dt className="text-xs uppercase tracking-[0.24em] text-brass-dark">
                      Изготовление
                    </dt>
                    <dd className="mt-2 text-base text-foreground">
                      Изготавливается по индивидуальному проекту
                    </dd>
                  </div>
                </dl>

                <Link href="/#contacts" className="btn-line mt-10">
                  Изготовить под заказ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section
            aria-labelledby="related-title"
            className="border-t border-border px-6 py-16 lg:px-12 lg:py-24"
          >
            <div className="mx-auto max-w-[1440px]">
              <h2
                id="related-title"
                className="font-heading text-3xl text-foreground sm:text-4xl"
              >
                Другие изделия: {project.category.toLowerCase()}
              </h2>

              <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/projects/${item.slug}`} className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface">
                        <Image
                          src={item.studioImages[0]}
                          alt=""
                          fill
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          className="object-cover media-zoom"
                        />
                      </div>
                      <p className="mt-4 font-heading text-xl leading-snug text-foreground">
                        {item.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
    </>
  );
}
