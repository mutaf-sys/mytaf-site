import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Дверные ручки",
    image: "/images/catalog/door-handles/ruchka-balyasina-para.jpg",
    href: "/projects?category=Дверные+ручки",
  },
  {
    title: "Шпингалеты",
    image: "/images/catalog/bolts/zadvizhka-reznaya-v-sbore.jpg",
    href: "/projects?category=Шпингалеты",
  },
  {
    title: "Петли",
    image: "/images/catalog/hinges/petlya-sharovidnye-nakonechniki.jpg",
    href: "/projects?category=Петли",
  },
  {
    title: "Оконная фурнитура",
    image: "/images/catalog/window-fittings/espanoletka-kovanaya.jpg",
    href: "/projects?category=Оконная+фурнитура",
  },
  {
    title: "Изготовление на заказ",
    image: "/images/catalog/banner-collection.jpg",
    href: "/#estimate",
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="mx-auto max-w-[1720px] px-6 py-24 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="max-w-4xl">
        <p className="eyebrow">Категории</p>

        <h2 className="mt-4 font-heading text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          Категории фурнитуры
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          Историческая латунная фурнитура, созданная вручную по оригинальным
          образцам, архивным материалам и индивидуальным эскизам.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            aria-label={item.title}
            className="group relative block overflow-hidden rounded-[28px] border border-[var(--border)] bg-[#eee8dd] shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[var(--brass-soft)] hover:shadow-[0_28px_65px_rgba(38,34,29,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brass)] focus-visible:ring-offset-4"
          >
            <div className="relative h-[320px] overflow-hidden sm:h-[380px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className="object-cover media-zoom"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-6">
                  <h3 className="font-heading text-2xl leading-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 text-xl text-white transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--brass-soft)] group-hover:bg-[var(--brass)]"
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
