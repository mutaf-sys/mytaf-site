import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";

export default function Restoration() {
  return (
    <section className="border-t border-border bg-background px-6 py-32 lg:px-12">
      <div className="mx-auto grid max-w-[1720px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="eyebrow">Реставрация</p>

          <h2 className="mt-5 max-w-xl font-heading text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Работа с историческими объектами
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Восстанавливаем и воссоздаём фурнитуру для памятников архитектуры
            и старых домов — по сохранившимся образцам, фотографиям и
            архивным чертежам, с сохранением исторической патины и формы.
          </p>

          <Link
            href="/projects?category=Петли"
            className="btn-line mt-8"
          >
            Образцы для реставрации
          </Link>
        </Reveal>

        <Reveal
          delay={150}
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface">
            <Image
              src="/images/historic/restoration-window.jpg"
              alt="Оконная фурнитура, установленная при реставрации"
              fill
              sizes="(max-width: 767px) 50vw, 25vw"
              className="object-cover media-zoom"
            />
          </div>
          <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[24px] bg-surface sm:mt-12">
            <Image
              src="/images/historic/restoration-escutcheon.jpg"
              alt="Накладка на замочную скважину на исторической двери"
              fill
              sizes="(max-width: 767px) 50vw, 25vw"
              className="object-cover media-zoom"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
