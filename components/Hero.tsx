import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import Arrow from "@/components/ui/Arrow";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1440px] items-center gap-[5vw] px-[clamp(22px,8vw,120px)] py-[clamp(55px,9vw,140px)] min-[901px]:min-h-[calc(100vh-84px)] min-[901px]:grid-cols-[1fr_0.9fr]"
    >
      <Reveal className="max-w-[650px]">
        <p className="kicker kicker-rule">
          Санкт-Петербург · Более 10 лет опыта
        </p>

        <h1 className="display display-xl mb-9 mt-7">
          Фурнитура
          <br />
          <em>с характером.</em>
        </h1>

        <p className="max-w-[480px] text-[15px] leading-[1.8] text-muted min-[561px]:text-[17px]">
          Историческая латунная фурнитура ручной работы для интерьеров, музеев
          и объектов культурного наследия. Дверные ручки, петли, шпингалеты и
          оконная фурнитура — по образцам, чертежам и эскизам.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
          <Link href="/projects" className="button button-dark">
            Смотреть каталог
            <Arrow />
          </Link>
          <a href="#about" className="text-link">
            О мастерской
            <Arrow />
          </a>
        </div>

        <dl className="mt-[clamp(48px,6vw,70px)] flex gap-[clamp(14px,2vw,27px)] border-t border-border pt-4 text-[11px] uppercase tracking-[0.1em] text-muted">
          <div className="flex flex-col-reverse gap-2">
            <dt>лет опыта</dt>
            <dd className="font-heading text-[clamp(21px,2vw,25px)] normal-case tracking-[-0.04em] text-foreground">
              10+
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-2">
            <dt>ручная работа</dt>
            <dd className="font-heading text-[clamp(21px,2vw,25px)] normal-case tracking-[-0.04em] text-foreground">
              100%
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-2">
            <dt>город</dt>
            <dd className="font-heading text-[clamp(15px,2vw,25px)] normal-case leading-[1.05] tracking-[-0.04em] text-foreground">
              Санкт-Петербург
            </dd>
          </div>
        </dl>
      </Reveal>

      <Reveal
        delay={150}
        className="relative mx-auto w-full max-w-[560px] min-[901px]:justify-self-end"
      >
        <div className="group relative aspect-[4/5] overflow-hidden bg-[#d7d0c2] shade-bottom">
          <Image
            src="/images/catalog/banner-collection.jpg"
            alt="Историческая латунная фурнитура ручной работы: шпингалет, две петли и ручка-скоба"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            className="media-zoom object-cover"
          />
          <span className="absolute bottom-7 left-7 z-10 font-heading text-2xl uppercase leading-[1.05] tracking-[0.14em] text-white">
            Фурнитура
            <br />
            ручной работы
          </span>
          <span
            aria-hidden="true"
            className="absolute right-6 top-6 z-10 font-mono text-[10px] uppercase tracking-[0.14em] text-white [writing-mode:vertical-rl]"
          >
            Санкт-Петербург
          </span>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full border border-brass max-[900px]:hidden"
          style={{ inset: "-17px 12px 13px -17px", opacity: 0.6 }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full border border-brass max-[900px]:hidden"
          style={{ inset: "12px -17px -17px 12px", opacity: 0.25 }}
        />

        <div className="absolute -bottom-5 -right-2 flex items-center gap-3.5 bg-foreground px-[19px] py-[17px] font-mono text-[10px] tracking-[0.1em] text-white min-[561px]:-right-9">
          <span className="text-[17px] text-brass-soft">EB</span>
          <span>Латунь · Патина · Время</span>
        </div>
      </Reveal>
    </section>
  );
}
