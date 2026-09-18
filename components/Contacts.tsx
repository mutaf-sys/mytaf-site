import Link from "next/link";

import ContactForm from "@/components/ContactForm";

export default function Contacts() {
  return (
    <>
      <section
        id="contacts"
        className="border-t border-[#d9cfbf] bg-[#26221d] px-6 py-20 text-white lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#c9a96e] sm:text-sm">
              Связаться с мастерской
            </p>

            <h2 className="mt-6 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Обсудим ваш проект и будущую фурнитуру
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Пришлите фотографию исторического образца, чертёж, эскиз или
              описание задачи. Мы обсудим размеры, материал, обработку и
              подготовим проект будущего изделия.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <ContactForm />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="tel:+79990646417"
                className="group rounded-[28px] border border-white/15 p-7 transition duration-300 hover:border-[#c9a96e] hover:bg-white/5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#c9a96e]">
                  Телефон
                </p>

                <p className="mt-4 font-heading text-2xl sm:text-3xl">
                  +7 (999) 064-64-17
                </p>

                <p className="mt-3 text-sm text-white/55">
                  Позвонить в мастерскую
                </p>
              </a>

              <a
                href="mailto:info@empirebrass.ru"
                className="group rounded-[28px] border border-white/15 p-7 transition duration-300 hover:border-[#c9a96e] hover:bg-white/5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#c9a96e]">
                  Электронная почта
                </p>

                <p className="mt-4 font-heading text-2xl sm:text-3xl">
                  info@empirebrass.ru
                </p>

                <p className="mt-3 text-sm text-white/55">
                  Для чертежей, технических заданий и сотрудничества
                </p>
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c9a96e]">
                Мастерская
              </p>

              <p className="mt-3 text-base text-white/75">
                Empirebrass
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c9a96e]">
                Город
              </p>

              <p className="mt-3 text-base text-white/75">
                Санкт-Петербург
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c9a96e]">
                Направление
              </p>

              <p className="mt-3 text-base text-white/75">
                Историческая латунная фурнитура
              </p>
              </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1d1a17] px-6 py-8 text-white lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Empirebrass</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/"
              className="transition duration-300 hover:text-white"
            >
              Мастерская исторической латунной фурнитуры
            </Link>

            <Link
              href="/privacy"
              className="transition duration-300 hover:text-white"
            >
              Политика обработки персональных данных
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}