import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/ui/Arrow";
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
        <section className="section-pad !pb-[clamp(50px,6vw,90px)] !pt-[clamp(40px,5vw,70px)]">
          <nav aria-label="Навигация по разделам">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-muted">
              <li>
                <Link href="/projects" className="hover:text-brass">
                  Каталог
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/projects?category=${encodeURIComponent(project.category)}`}
                  className="hover:text-brass"
                >
                  {project.category}
                </Link>
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-[6vw] min-[901px]:grid-cols-[1.05fr_0.95fr] min-[901px]:items-start">
            <ProductGallery
              title={project.title}
              studioImages={project.studioImages}
              interiorImages={project.interiorImages}
            />

            <div className="max-w-[520px] min-[901px]:sticky min-[901px]:top-[110px]">
              <p className="kicker">{project.category}</p>

              <h1 className="display display-md my-6 break-words">
                {project.title}
              </h1>

              <p className="text-[15px] leading-[1.85] text-muted min-[561px]:text-base">
                {project.description}
              </p>

              <dl className="mt-9 space-y-5 border-t border-border pt-7">
                {project.material && (
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass">
                      Материал
                    </dt>
                    <dd className="mt-2 text-base">{project.material}</dd>
                  </div>
                )}

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass">
                    Изготовление
                  </dt>
                  <dd className="mt-2 text-base">
                    Изготавливается по индивидуальному проекту
                  </dd>
                </div>
              </dl>

              <Link href="/#contacts" className="button button-dark mt-9">
                Изготовить под заказ
                <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section
            aria-labelledby="related-title"
            className="border-t border-border"
          >
            <div className="section-pad !py-[clamp(60px,7vw,100px)]">
              <h2
                id="related-title"
                className="display display-md mb-10"
              >
                Другие изделия: <em>{project.category.toLowerCase()}</em>
              </h2>

              <ul className="grid gap-x-[18px] gap-y-10 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/projects/${item.slug}`} className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                        <Image
                          src={item.studioImages[0]}
                          alt=""
                          fill
                          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                          className="media-zoom object-cover"
                        />
                      </div>
                      <p className="border-b border-border pb-4 pt-4 font-heading text-xl leading-snug">
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

      <SiteFooter />
    </>
  );
}
