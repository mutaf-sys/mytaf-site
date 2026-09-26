import Link from "next/link";

import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Политика обработки персональных данных",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-background px-[clamp(22px,8vw,120px)] py-[clamp(50px,7vw,100px)]">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-link"
        >
          <span aria-hidden="true">←</span>
          Вернуться на главную
        </Link>

        <h1 className="display display-md mt-10">
          Политика обработки персональных данных
        </h1>

        <div className="mt-10 space-y-8 text-base leading-7 text-muted">
          <section>
            <h2 className="font-heading text-[24px] text-foreground">
              1. Общие положения
            </h2>
            <p className="mt-3">
              Настоящая политика определяет порядок обработки персональных
              данных и меры по обеспечению их безопасности, принимаемые
              Индивидуальным предпринимателем Мутаф Евгением Викторовичем
              (мастерская Empirebrass, далее — «Оператор»), ИНН
              781628098913, ОГРНИП 321784700318231, в соответствии с
              требованиями Федерального закона от 27.07.2006 № 152-ФЗ
              «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[24px] text-foreground">
              2. Какие данные обрабатываются
            </h2>
            <p className="mt-3">
              При заполнении форм на сайте Оператор может получать: имя,
              номер телефона и/или адрес электронной почты, текст обращения
              или отзыва, а также фотографию, добровольно приложенную к
              отзыву.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[24px] text-foreground">
              3. Цели обработки
            </h2>
            <p className="mt-3">
              Персональные данные обрабатываются исключительно для связи с
              пользователем по его заявке или отзыву, подготовки
              коммерческого предложения и обсуждения условий изготовления
              фурнитуры. Данные не передаются третьим лицам, за исключением
              случаев, предусмотренных законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[24px] text-foreground">
              4. Правовые основания обработки
            </h2>
            <p className="mt-3">
              Обработка осуществляется с согласия субъекта персональных
              данных, которое даётся при отправке формы на сайте (ст. 6
              Федерального закона № 152-ФЗ). Согласие оформляется отдельным
              документом:{" "}
              <Link
                href="/consent"
                className="text-foreground underline underline-offset-4 hover:text-brass"
              >
                согласие на обработку персональных данных
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[24px] text-foreground">
              5. Сроки обработки и хранения
            </h2>
            <p className="mt-3">
              Данные хранятся не дольше срока, необходимого для достижения
              целей обработки, либо до отзыва согласия субъектом
              персональных данных.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[24px] text-foreground">
              6. Права субъекта персональных данных
            </h2>
            <p className="mt-3">
              Пользователь вправе запросить сведения об обработке своих
              данных, потребовать их уточнения, блокирования или удаления, а
              также отозвать согласие на обработку, направив запрос на
              адрес электронной почты, указанный в разделе «Контакты» ниже.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[24px] text-foreground">
              7. Меры защиты
            </h2>
            <p className="mt-3">
              Оператор принимает необходимые организационные и технические
              меры для защиты персональных данных от неправомерного доступа,
              уничтожения, изменения и распространения.
            </p>
          </section>

          <section id="cookies" className="scroll-mt-28">
            {siteConfig.metrikaEnabled ? (
              <>
                <h2 className="font-heading text-[24px] text-foreground">
                  8. Файлы cookie и «Яндекс Метрика»
                </h2>
                <p className="mt-3">
                  Сайт использует сервис веб-аналитики «Яндекс Метрика» (ООО
                  «Яндекс», Российская Федерация). Сервис устанавливает файлы
                  cookie и получает сведения о посещении: IP-адрес, тип
                  устройства и браузера, просмотренные страницы, источник
                  перехода, клики по ссылкам и время на сайте. Эти сведения
                  используются только для статистики и улучшения сайта.
                  Функция «Вебвизор» (запись действий на странице) не
                  используется.
                </p>
                <p className="mt-3">
                  Счётчик запускается только после того, как вы нажмёте
                  «Принять» в уведомлении о cookie. Если вы выбрали
                  «Отказаться», счётчик не загружается и сведения не
                  собираются. Ваш выбор запоминается в браузере. Изменить его
                  можно по ссылке «Настройки cookie» внизу любой страницы, а
                  также удалив cookie в настройках браузера.
                </p>
                <p className="mt-3">
                  Других рекламных cookie и трекеров сайт не использует.
                </p>
              </>
            ) : (
              <>
                <h2 className="font-heading text-[24px] text-foreground">
                  8. Файлы cookie
                </h2>
                <p className="mt-3">
                  Сайт не использует файлы cookie для аналитики и рекламы и не
                  подключает сторонние счётчики и трекеры.
                </p>
              </>
            )}
          </section>

          <section>
            <h2 className="font-heading text-[24px] text-foreground">
              9. Контакты
            </h2>
            <p className="mt-3">
              По вопросам обработки персональных данных: info@empirebrass.ru,
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
