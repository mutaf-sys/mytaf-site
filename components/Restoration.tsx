import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import Arrow from "@/components/ui/Arrow";

export default function Restoration() {
  return (
    <section id="restoration" className="section-pad">
      <Reveal className="grid items-center gap-[11vw] min-[901px]:grid-cols-2 max-[900px]:gap-[6vw] max-[560px]:gap-[45px]">
        <div className="grid h-[620px] grid-cols-2 gap-3.5 max-[700px]:h-[520px] max-[560px]:h-[430px]">
          <div className="relative">
            <Image
              src="/images/historic/cutout-25.webp"
              alt="Оконный шпингалет с фигурной ручкой"
              fill
              sizes="(max-width: 900px) 45vw, 22vw"
              className="object-contain"
            />
          </div>
          <div className="relative mt-12">
            <Image
              src="/images/historic/cutout-26.webp"
              alt="Оконная фурнитура с резной розеткой"
              fill
              sizes="(max-width: 900px) 45vw, 22vw"
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <p className="kicker">03 — Реставрация</p>
          <h2 className="display display-lg mb-7 mt-[22px]">
            История
            <br />
            <em>в точности.</em>
          </h2>
          <p className="mb-9 max-w-[430px] text-[15px] leading-[1.85] text-muted">
            Восстанавливаем и воссоздаём фурнитуру для памятников архитектуры
            и старых домов — по сохранившимся образцам, фотографиям и
            архивным чертежам, с сохранением исторической патины и формы.
          </p>
          <Link href="/projects?category=Петли" className="button button-outline">
            Образцы для реставрации
            <Arrow />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
