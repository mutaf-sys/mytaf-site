import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Дверные ручки",
    image: "/images/door-handles.jpg",
    href: "/#contacts",
  },
  {
    title: "Петли",
    image: "/images/hinges.jpg",
    href: "/#contacts",
  },
  {
    title: "Оконная фурнитура",
    image: "/images/window-handles.jpg",
    href: "/#contacts",
  },
  {
    title: "Индивидуальные проекты",
    image: "/images/custom-project.jpg",
    href: "/#contacts",
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="mx-auto max-w-[1720px] px-6 py-24 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a67c38]">
          Коллекция
        </p>

        <h2 className="mt-4 font-heading text-4xl leading-tight text-[#26221d] sm:text-5xl lg:text-6xl">
          Коллекция мастерской
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[#6f685f] sm:text-lg">
          Историческая латунная фурнитура, созданная вручную по оригинальным
          образцам, архивным материалам и индивидуальным эскизам.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:gap-10">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            aria-label={`${item.title} — связаться с мастерской`}
            className="
              group relative block overflow-hidden
              rounded-[28px] border border-[#d9cfbf]
              bg-[#eee8dd] shadow-sm
              transition-all duration-500 ease-out
              hover:-translate-y-1.5
              hover:border-[#b9975b]
              hover:shadow-[0_28px_65px_rgba(38,34,29,0.16)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#a67c38]
              focus-visible:ring-offset-4
            "
          >
            <div className="relative h-[340px] overflow-hidden sm:h-[420px] lg:h-[480px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.04]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="font-heading text-3xl leading-tight text-white sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 group-hover:text-white">
                      Обсудить изготовление
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-full border border-white/50
                      text-xl text-white
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:border-[#d8b778]
                      group-hover:bg-[#a67c38]
                    "
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}