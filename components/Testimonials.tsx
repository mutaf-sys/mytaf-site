import LightboxImage from "@/components/LightboxImage";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  // Необязательное фото изделия от клиента. Положите файл в
  // public/images/reviews/ и укажите путь здесь, например
  // "/images/reviews/ivanov.jpg". На сайте фото показывается
  // маленькой миниатюрой и раскрывается только по клику.
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "«Ручки и петли полностью повторили образцы XIX века, которые мы предоставили. Реставрационная комиссия приняла фурнитуру без замечаний».",
    name: "Название музея / объекта",
    role: "Реставрационный проект, Санкт-Петербург",
  },
  {
    quote:
      "«Обратились с фотографией единственной сохранившейся ручки — мастерская изготовила полный комплект для всех дверей квартиры с точным повторением формы».",
    name: "Имя клиента",
    role: "Частный интерьер, историческая квартира",
  },
  {
    quote:
      "«Важна была не только форма, но и вес, и звук защёлкивания — всё сделали именно так, как в оригинале. Результат превзошёл ожидания».",
    name: "Имя клиента",
    role: "Индивидуальный заказ",
  },
];

export default function Testimonials() {
  return (
    <section className="border-y border-[#d9cfbf] bg-[#eee8dd] px-6 py-24 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#a67c38] sm:text-sm">
            Отзывы
          </p>

          <h2 className="mt-5 font-heading text-4xl leading-[1.05] text-[#26221d] sm:text-5xl lg:text-6xl">
            Что говорят клиенты
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name + testimonial.role}
              className="flex flex-col rounded-[28px] border border-[#d9cfbf] bg-[#fffdf9] p-8"
            >
              <p className="font-heading text-xl leading-8 text-[#26221d] sm:text-2xl">
                {testimonial.quote}
              </p>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#d9cfbf] pt-5">
                <div>
                  <p className="text-sm font-medium text-[#26221d]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#a67c38]">
                    {testimonial.role}
                  </p>
                </div>

                {testimonial.image && (
                  <LightboxImage
                    src={testimonial.image}
                    alt={`Фото от ${testimonial.name}`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
