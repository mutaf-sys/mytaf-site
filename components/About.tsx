export default function About() {
  return (
    <section
      id="about"
      className="border-y border-[#d9cfbf] bg-[#fffdf9] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        {/* Левая колонка */}

        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#a67c38] sm:text-sm">
            О мастерской
          </p>

          <h2 className="mt-6 font-heading text-4xl leading-[1.05] text-[#26221d] sm:text-5xl lg:text-6xl">
            Историческая точность в каждой детали
          </h2>
        </div>

        {/* Правая колонка */}

        <div>
          <p className="max-w-3xl text-lg leading-9 text-[#4f4941]">
            Более десяти лет мастерская создаёт историческую латунную
            фурнитуру для частных интерьеров, музеев и объектов культурного
            наследия.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-[#746c61]">
            Работа начинается с изучения оригинального изделия, архивных
            материалов или эскиза заказчика. Каждая деталь обрабатывается и
            доводится мастером вручную.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <div className="border-t border-[#a67c38] pt-5">
              <p className="font-heading text-2xl text-[#26221d]">
                Латунь
              </p>

              <p className="mt-2 text-sm leading-6 text-[#746c61]">
                Основной материал для долговечных исторических изделий
              </p>
            </div>

            <div className="border-t border-[#a67c38] pt-5">
              <p className="font-heading text-2xl text-[#26221d]">
                Ручная работа
              </p>

              <p className="mt-2 text-sm leading-6 text-[#746c61]">
                Индивидуальная обработка и внимание к каждой детали
              </p>
            </div>

            <div className="border-t border-[#a67c38] pt-5">
              <p className="font-heading text-2xl text-[#26221d]">
                По образцу
              </p>

              <p className="mt-2 text-sm leading-6 text-[#746c61]">
                Воссоздание формы, пропорций и характера оригинала
              </p>
            </div>
          </div>

          <blockquote className="mt-14 border-l border-[#a67c38] pl-7">
            <p className="font-heading text-2xl leading-9 text-[#26221d] sm:text-3xl">
              «Новое изделие должно выглядеть так, будто оно всегда было
              частью исторического интерьера».
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}