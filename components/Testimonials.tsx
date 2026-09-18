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

// Вставляйте сюда настоящие отзывы. Пока список пуст, раздел «Отзывы»
// на сайте не показывается. Пример записи:
// {
//   quote: "«Текст отзыва»",
//   name: "Имя клиента",
//   role: "Объект или проект",
//   image: "/images/reviews/ivanov.jpg", // необязательно
// },
const testimonials: Testimonial[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-y border-border bg-[#eee8dd] px-6 py-24 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-brass-dark sm:text-sm">
            Отзывы
          </p>

          <h2 className="mt-5 font-heading text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Что говорят клиенты
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name + testimonial.role}
              className="flex flex-col rounded-[28px] border border-border bg-surface p-8"
            >
              <p className="font-heading text-xl leading-8 text-foreground sm:text-2xl">
                {testimonial.quote}
              </p>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brass-dark">
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
