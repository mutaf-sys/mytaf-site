import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import Arrow from "@/components/ui/Arrow";
import { projects, type Category } from "@/data/projects";
import { plural } from "@/lib/plural";

const items: { title: Category; note: string; image: string }[] = [
  {
    title: "Дверные ручки",
    note: "Архитектурная деталь",
    image: "/images/catalog/door-handles/ruchka-skoba-dub.jpg",
  },
  {
    title: "Шпингалеты",
    note: "Точная механика",
    image: "/images/catalog/bolts/zadvizhka-reznaya-v-sbore.jpg",
  },
  {
    title: "Петли",
    note: "Классика формы",
    image: "/images/catalog/hinges/petlya-sharovidnye-nakonechniki.jpg",
  },
  {
    title: "Оконная фурнитура",
    note: "Для старых окон",
    image: "/images/catalog/window-fittings/nabor-espanoletok.jpg",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="section-pad">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="kicker kicker-rule">01 — Коллекция</p>
            <h2 className="display display-lg mt-[22px]">
              Предметы,
              <br />
              <em>которые остаются.</em>
            </h2>
          </div>
          <p>
            Четыре направления исторической фурнитуры — для дома, реставрации
            и тех случаев, когда важна каждая деталь.
          </p>
        </div>
      </Reveal>

      <ul className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:gap-x-3 max-[560px]:gap-y-[25px]">
        {items.map((item, i) => {
          const count = projects.filter((p) => p.category === item.title).length;

          return (
            <li
              key={item.title}
              className="min-[901px]:even:mt-[60px] max-[900px]:even:mt-[45px] max-[560px]:even:mt-[25px]"
            >
              <Reveal delay={i * 80}>
                <Link
                  href={`/projects?category=${encodeURIComponent(item.title)}`}
                  className="group block"
                >
                  <div className="shade-bottom relative aspect-[3/4] overflow-hidden bg-[#d5d0c5]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 560px) 50vw, (max-width: 900px) 50vw, 25vw"
                      className="media-zoom object-cover"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-[18px] top-4 z-10 font-mono text-[11px] text-white"
                    >
                      0{i + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute right-4 top-[14px] z-10 grid h-[34px] w-[34px] place-items-center rounded-full border border-white/70 text-white transition duration-300 group-hover:rotate-[-45deg] group-hover:border-brass-dark group-hover:bg-brass-dark"
                    >
                      <Arrow />
                    </span>
                  </div>

                  <div className="border-b border-border py-[17px]">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-brass-dark">
                      {item.note}
                    </span>
                    <h3 className="mt-2 text-[23px] leading-tight max-[560px]:text-[19px]">
                      {item.title}
                    </h3>
                    <small className="mt-3 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                      {count} {plural(count, ["изделие", "изделия", "изделий"])}
                    </small>
                  </div>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
