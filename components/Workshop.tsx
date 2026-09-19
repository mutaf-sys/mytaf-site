import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import Arrow from "@/components/ui/Arrow";
import { workshopPhotos } from "@/data/workshop";

export default function Workshop() {
  return (
    <section id="workshop" className="on-dark bg-foreground text-white">
      <Reveal className="mx-auto grid max-w-[1720px] items-center gap-[7vw] px-[clamp(22px,11vw,170px)] py-[clamp(80px,10vw,150px)] min-[901px]:grid-cols-[1.15fr_1fr] max-[900px]:gap-[60px]">
        <div>
          <p className="kicker">02 — Мастерская</p>
          <h2 className="display display-md mb-8 mt-[22px]">
            Там, где металл
            <br />
            <em>обретает голос.</em>
          </h2>
          <p className="max-w-[560px] text-[15px] leading-[1.85] text-[#c9c7bd]">
            Точение, литьё, ручная обработка и патинирование. Работаем
            внимательно и поэтапно, чтобы новая фурнитура органично вписалась
            в исторический интерьер.
          </p>
          <Link href="/masterskaya" className="text-link mt-7">
            Смотреть все {workshopPhotos.length} фото
            <Arrow />
          </Link>
        </div>

        <div className="relative min-h-[550px] max-[900px]:min-h-[470px] max-[560px]:min-h-[340px]">
          <div className="relative h-[480px] w-[62%] max-[560px]:h-[310px]">
            <Image
              src="/images/workshop/workshop-6.jpg"
              alt="Деталь фурнитуры в руках мастера"
              fill
              sizes="(max-width: 900px) 60vw, 35vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[270px] w-[37%] border-[10px] border-foreground max-[560px]:h-40 max-[560px]:border-[6px]">
            <Image
              src="/images/workshop/workshop-1.jpg"
              alt="Партия эспаньолеток в мастерской"
              fill
              sizes="(max-width: 900px) 40vw, 22vw"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute right-[30%] top-[12%] grid h-[98px] w-[98px] rotate-[14deg] place-items-center rounded-full border border-brass text-center font-mono text-xs leading-[1.2] text-brass-soft max-[560px]:right-1/4 max-[560px]:top-[10%] max-[560px]:h-[70px] max-[560px]:w-[70px] max-[560px]:text-[10px]"
          >
            HAND
            <br />
            MADE
          </span>
        </div>
      </Reveal>
    </section>
  );
}
