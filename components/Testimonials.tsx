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
    <section className="border-y border-border bg-estimate">
      <div className="section-pad">
        <div className="max-w-2xl">
          <p className="kicker kicker-rule">Отзывы</p>

          <h2 className="display display-lg mt-[22px]">
            Что говорят <em>клиенты.</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name + testimonial.role}
              className="flex flex-col border border-border bg-surface p-8"
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
