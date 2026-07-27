import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "project-1",
    title: "Историческая оконная ручка",
    subtitle: "Латунь · Ручная работа",
    image: "/images/project-1.jpg",
  },
  {
    slug: "project-2",
    title: "Дверная ручка с патиной",
    subtitle: "Латунь · Исторический образец",
    image: "/images/project-2.jpg",
  },
  {
    slug: "project-3",
    title: "Латунная дверная петля",
    subtitle: "Ручное изготовление",
    image: "/images/project-3.jpg",
  },
  {
    slug: "project-4",
    title: "Оконная фурнитура",
    subtitle: "Индивидуальное изготовление",
    image: "/images/project-4.jpg",
  },
  {
    slug: "project-5",
    title: "Ручка для исторической двери",
    subtitle: "Реконструкция по образцу",
    image: "/images/project-5.jpg",
  },
  {
    slug: "project-6",
    title: "Мебельная латунная ручка",
    subtitle: "Ручная обработка",
    image: "/images/project-6.jpg",
  },
  {
    slug: "project-7",
    title: "Комплект дверной фурнитуры",
    subtitle: "Латунь · Патинирование",
    image: "/images/project-7.jpg",
  },
  {
    slug: "project-8",
    title: "Индивидуальный проект",
    subtitle: "Изготовление по чертежу",
    image: "/images/project-8.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3eb]">
      {/* Первый экран */}

      <section className="border-b border-[#d9cfbf] px-6 pb-16 pt-32 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm text-[#7e5e28] transition duration-300 hover:opacity-60"
          >
            <span aria-hidden="true">←</span>
            Вернуться на главную
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#a67c38] sm:text-sm">
                Портфолио мастерской
              </p>

              <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[1.04] text-[#26221d] sm:text-6xl lg:text-7xl">
                Коллекция
                

                выполненных работ
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-[#746c61] sm:text-lg">
                Исторические дверные ручки, петли, оконная и мебельная
                фурнитура, созданные вручную из латуни по архивным образцам,
                чертежам и индивидуальным размерам.
              </p>

              <div className="mt-8 flex flex-wrap gap-8 border-t border-[#d9cfbf] pt-7">
                <div>
                  <p className="font-heading text-3xl text-[#a67c38]">8</p>
                  <p className="mt-1 text-sm text-[#746c61]">
                    избранных работ
                  </p>
                </div>

                <div>
                  <p className="font-heading text-3xl text-[#a67c38]">10+</p>
                  <p className="mt-1 text-sm text-[#746c61]">лет опыта</p>
                </div>

                <div>
                  <p className="font-heading text-3xl text-[#a67c38]">100%</p>
                  <p className="mt-1 text-sm text-[#746c61]">
                    ручная работа
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея проектов */}

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {projects.map((project, index) => {
              const imageShape =
                index % 4 === 0
                  ? "aspect-[4/5]"
                  : index % 4 === 1
                    ? "aspect-[5/4]"
                    : index % 4 === 2
                      ? "aspect-square"
                      : "aspect-[4/5]";

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <article>
                    <div
                      className={`relative overflow-hidden rounded-[30px] bg-[#e9e1d4] shadow-[0_24px_70px_rgba(50,40,25,0.12)] ${imageShape}`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 639px) 100vw, 50vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                      <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/15 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                        Проект {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                        <p className="text-sm text-white/70">
                          {project.subtitle}
                        </p>

                        <h2 className="mt-3 max-w-xl font-heading text-2xl leading-tight sm:text-3xl lg:text-4xl">
                          {project.title}
                        </h2>

                        <div className="mt-5 inline-flex items-center gap-3 text-sm">
                          <span>Смотреть работу</span>

                          <span
                            aria-hidden="true"
                            className="transition duration-300 group-hover:translate-x-2"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Блок индивидуального заказа */}

      <section className="border-t border-[#d9cfbf] px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="overflow-hidden rounded-[36px] bg-[#26221d] px-7 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#c9a96e] sm:text-sm">
                  Индивидуальное изготовление
                </p>

                <h2 className="mt-6 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Создадим фурнитуру
                  

                  специально для вашего проекта
                </h2>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-base leading-8 text-white/65 sm:text-lg">
                  Работаем по историческим образцам, фотографиям, эскизам и
                  индивидуальным чертежам. Перед изготовлением создаём
                  трёхмерную модель будущего изделия.
                </p>

                <Link
                  href="/#contacts"
                  className="mt-8 inline-flex rounded-full bg-[#a67c38] px-8 py-4 text-sm text-white transition duration-300 hover:-translate-y-1 hover:bg-[#c29a54]"
                >
                  Обсудить проект
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Возврат на главную */}

      <section className="px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto flex max-w-[1440px] justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-[#a67c38] px-8 py-4 text-sm text-[#7e5e28] transition duration-300 hover:bg-[#a67c38] hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Вернуться на главную
          </Link>
        </div>
      </section>
    </main>
  );
}