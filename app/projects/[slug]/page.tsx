import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "project-1",
    title: "Историческая оконная ручка",
    subtitle: "Латунь · Ручная работа",
    image: "/images/project-1.jpg",
    description:
      "Историческая оконная ручка, изготовленная вручную из латуни. Форма и пропорции восстановлены по архивному образцу.",
    material: "Латунь",
    finish: "Ручная полировка и патинирование",
  },
  {
    slug: "project-2",
    title: "Дверная ручка с патиной",
    subtitle: "Латунь · Исторический образец",
    image: "/images/project-2.jpg",
    description:
      "Дверная ручка изготовлена по историческому образцу с сохранением характерных деталей и следов ручной обработки.",
    material: "Латунь",
    finish: "Декоративная патина",
  },
  {
    slug: "project-3",
    title: "Латунная дверная петля",
    subtitle: "Ручное изготовление",
    image: "/images/project-3.jpg",
    description:
      "Массивная дверная петля для исторического интерьера. Каждый элемент изготовлен и обработан вручную.",
    material: "Латунь",
    finish: "Матовая обработка",
  },
  {
    slug: "project-4",
    title: "Оконная фурнитура",
    subtitle: "Индивидуальное изготовление",
    image: "/images/project-4.jpg",
    description:
      "Комплект оконной фурнитуры, созданный по индивидуальным размерам и чертежам для конкретного объекта.",
    material: "Латунь",
    finish: "Полировка",
  },
  {
    slug: "project-5",
    title: "Ручка для исторической двери",
    subtitle: "Реконструкция по образцу",
    image: "/images/project-5.jpg",
    description:
      "Реконструкция дверной ручки по сохранившемуся образцу с точным повторением формы и декоративных элементов.",
    material: "Латунь",
    finish: "Старинная патина",
  },
  {
    slug: "project-6",
    title: "Мебельная латунная ручка",
    subtitle: "Ручная обработка",
    image: "/images/project-6.jpg",
    description:
      "Мебельная ручка с выразительной пластикой, выполненная вручную для частного интерьерного проекта.",
    material: "Латунь",
    finish: "Ручная полировка",
  },
  {
    slug: "project-7",
    title: "Комплект дверной фурнитуры",
    subtitle: "Латунь · Патинирование",
    image: "/images/project-7.jpg",
    description:
      "Комплект дверной фурнитуры, включающий ручки и дополнительные элементы в едином историческом стиле.",
    material: "Латунь",
    finish: "Патинирование",
  },
  {
    slug: "project-8",
    title: "Индивидуальный проект",
    subtitle: "Изготовление по чертежу",
    image: "/images/project-8.jpg",
    description:
      "Индивидуальный проект, разработанный по чертежу заказчика с предварительным созданием трёхмерной модели.",
    material: "Латунь",
    finish: "Индивидуальная обработка",
  },
];

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

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

            <div className="max-wxl">
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