import Image from "next/image";

import About from "@/components/About";
import Collection from "@/components/Collection";
import Contacts from "@/components/Contacts";
import Estimate from "@/components/Estimate";
import Header from "@/components/Header";
import Projects from "@/components/ProjectsComponent";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#f7f3eb]">
        <section className="mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:pt-40">
          {/* Текстовая часть */}
          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <p className="mb-4 max-w-[280px] text-[10px] uppercase leading-5 tracking-[0.26em] text-[#a67c38] sm:mb-5 sm:max-w-none sm:text-sm sm:tracking-[0.32em]">
              Санкт-Петербург · Более 10 лет опыта
            </p>

            <h1 className="font-heading text-[42px] leading-[1.02] text-[#26221d] min-[390px]:text-[46px] sm:text-6xl lg:text-7xl">
              Историческая
              

              латунная фурнитура
              

              ручной работы
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#746c61] sm:mt-8 sm:text-lg sm:leading-8">
              Создаём дверные ручки, петли и оконную фурнитуру по
              историческим образцам для музеев, объектов культурного наследия
              и частных проектов.
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href="#collection"
                className="flex w-full items-center justify-center rounded-full bg-[#a67c38] px-6 py-4 text-sm text-white transition duration-300 hover:-translate-y-1 hover:bg-[#7e5e28] sm:w-auto sm:px-8"
              >
                Открыть коллекцию
              </a>

              <a
                href="#contacts"
                className="flex w-full items-center justify-center rounded-full border border-[#a67c38] px-6 py-4 text-sm text-[#7e5e28] transition duration-300 hover:bg-[#a67c38] hover:text-white sm:w-auto sm:px-8"
              >
                Обсудить проект
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-[#d9cfbf] pt-6 sm:mt-14 sm:gap-10 sm:pt-8">
              <div>
                <p className="font-heading text-2xl text-[#a67c38] sm:text-3xl">
                  10+
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#746c61] sm:text-sm">
                  лет опыта
                </p>
              </div>

              <div>
                <p className="font-heading text-2xl text-[#a67c38] sm:text-3xl">
                  100%
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#746c61] sm:text-sm">
                  ручная работа
                </p>
              </div>

              <div>
                <p className="font-heading text-2xl text-[#a67c38] sm:text-3xl">
                  3D
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#746c61] sm:text-sm">
                  моделирование
                </p>
              </div>
            </div>
          </div>

          {/* Фотография */}
          <div className="relative mx-auto w-full max-w-[620px] px-1 sm:px-0">
            <div className="absolute -inset-2 rounded-[30px] border border-[#a67c38]/25 sm:-inset-4 sm:rounded-[42px]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#e9e1d4] shadow-[0_24px_60px_rgba(50,40,25,0.14)] sm:rounded-[32px] sm:shadow-[0_30px_80px_rgba(50,40,25,0.16)]">
              <Image
                src="/images/hero-handle.jpg"
                alt="Историческая латунная ручка ручной работы"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                <p className="font-heading text-xl leading-tight sm:text-2xl">
                  Историческая оконная ручка
                </p>

                <p className="mt-2 max-w-[260px] text-xs leading-5 text-white/80 sm:max-w-none sm:text-sm">
                  Латунь · Ручная работа · Индивидуальное изготовление
                </p>
              </div>
            </div>
          </div>
        </section>

        <Reveal>
  <About />
</Reveal>

<Reveal delay={150}>
  <Collection />
</Reveal>

<Reveal delay={300}>
  <Projects />
</Reveal>

<Reveal delay={150}>
  <Testimonials />
</Reveal>

<Reveal delay={150}>
  <Estimate />
</Reveal>

<Reveal delay={450}>
  <Contacts />
</Reveal>
      </main>
    </>
  );
}