import Link from "next/link";

import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Политика использования файлов cookie",
  alternates: { canonical: "/cookies" },
};

const h2 = "font-heading text-[24px] text-foreground";

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="min-h-screen bg-background px-[clamp(22px,8vw,120px)] py-[clamp(50px,7vw,100px)]"
      >
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-link">
            <span aria-hidden="true">←</span>
            Вернуться на главную
          </Link>

          <h1 className="display display-md mt-10">
            Политика использования cookie и аналогичных технологий
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-brass">
            {siteConfig.legal.fullName} · дата {siteConfig.legal.docsVersion}
          </p>

          {!siteConfig.metrikaEnabled && (
            <p className="mt-6 border border-[#d9d0c3] bg-surface p-4 text-sm leading-relaxed text-muted">
              Сейчас сервис аналитики, описанный ниже, на сайте отключён:
              счётчик не загружается и cookie не устанавливаются. Этот текст
              описывает условия, на которых он будет работать, если его снова
              включат.
            </p>
          )}

          <div className="mt-10 space-y-8 text-base leading-7 text-muted">
            <section>
              <h2 className={h2}>1. Общие положения</h2>
              <p className="mt-3">
                1.1. Настоящая Политика раскрывает использование cookie и
                аналогичных технологий на сайте {siteConfig.url}/. Оператор:{" "}
                {siteConfig.legal.fullName}, ИНН {siteConfig.legal.inn};
                ОГРНИП {siteConfig.legal.ogrnip}, адрес{" "}
                {siteConfig.legal.address}.
              </p>
              <p className="mt-3">
                1.2. Документ дополняет{" "}
                <Link
                  href="/privacy"
                  className="text-foreground underline underline-offset-4 hover:text-brass"
                >
                  Политику обработки персональных данных
                </Link>
                . Условия самостоятельного сайта третьего лица определяются
                его документами; подключённый на данном сайте сторонний
                инструмент отражается в настоящей Политике в пределах
                фактической обработки.
              </p>
            </section>

            <section>
              <h2 className={h2}>2. Cookie и другие идентификаторы</h2>
              <p className="mt-3">
                2.1. Cookie — данные, сохраняемые браузером при взаимодействии
                с сайтом. Сходные функции могут выполнять локальное хранилище
                браузера, пиксели, идентификаторы сессии и иные технологии.
                Наличие или отсутствие именно файла cookie не определяет само
                по себе наличие обработки персональных данных.
              </p>
              <p className="mt-3">
                2.2. Технические сведения могут позволять прямо или косвенно
                связать действия с физическим лицом. Их правовой режим
                определяется фактическим составом, сочетанием с другими
                сведениями и использованием Оператором и получателями.
                Псевдонимный идентификатор не объявляется обезличенным
                автоматически.
              </p>
              <p className="mt-3">
                2.3. На сайте используется сервис веб-аналитики Яндекс Метрика
                (счётчик {siteConfig.metrikaId}), предоставляемый ООО «ЯНДЕКС»
                (ИНН 7736207543, ОГРН 1027700229193, адрес: 119021, г. Москва,
                ул. Льва Толстого, д. 16). ООО «ЯНДЕКС» обрабатывает данные по
                поручению Оператора.
              </p>
              <p className="mt-3">
                2.4. С помощью Яндекс Метрики после согласия пользователя
                собираются: файлы cookie и иные идентификаторы браузера,
                IP-адрес, сведения о браузере, устройстве и операционной
                системе, адрес просматриваемой страницы и источник перехода,
                дата и время посещения, действия на сайте (клики, переходы по
                ссылкам, время на странице).
              </p>
              <p className="mt-3">
                2.5. Цель обработки — анализ посещаемости и использования
                сайта для его улучшения и продвижения товаров, работ, услуг
                Оператора. Трансграничная передача данных не осуществляется.
              </p>
              <p className="mt-3">
                2.6. Выбор пользователя («Принять» или «Отказаться»)
                сохраняется в локальном хранилище браузера и может быть
                изменён в любой момент через ссылку «Настройки cookie» в
                подвале сайта.
              </p>
            </section>

            <section>
              <h2 className={h2}>3. Правовое основание и согласие</h2>
              <p className="mt-3">
                3.1. Аналитические и иные необязательные cookie
                устанавливаются только после получения согласия пользователя,
                выражаемого нажатием кнопки «Принять» в информационном
                баннере при первом посещении сайта.
              </p>
              <p className="mt-3">
                3.2. Пользователь может отказаться от необязательных cookie
                или удалить их в настройках браузера; это может ограничить
                отдельные функции сайта.
              </p>
            </section>

            <section>
              <h2 className={h2}>4. Сроки хранения и права</h2>
              <p className="mt-3">
                4.1. Срок хранения cookie определяется их типом и настройками
                соответствующего сервиса.
              </p>
              <p className="mt-3">
                4.2. Права субъекта и порядок обращений раскрыты в{" "}
                <Link
                  href="/privacy"
                  className="text-foreground underline underline-offset-4 hover:text-brass"
                >
                  Политике обработки персональных данных
                </Link>
                . Контакты: {siteConfig.email}, {siteConfig.legal.address},
                +7 (999) 064-64-17.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
