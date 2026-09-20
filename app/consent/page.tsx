import Link from "next/link";

import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Согласие на обработку персональных данных",
  alternates: { canonical: "/consent" },
};

export default function ConsentPage() {
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
            Согласие на обработку персональных данных
          </h1>

          <div className="mt-10 space-y-8 text-base leading-7 text-muted">
            <p>
              Отправляя форму на сайте empire-brass.ru, я свободно, своей волей
              и в своём интересе даю Индивидуальному предпринимателю Мутаф
              Евгению Викторовичу (мастерская Empirebrass), ИНН 781628098913,
              ОГРНИП 321784700318231 (далее — «Оператор»), согласие на
              обработку моих персональных данных на условиях, указанных ниже.
            </p>

            <section>
              <h2 className="font-heading text-[24px] text-foreground">
                1. Какие данные обрабатываются
              </h2>
              <p className="mt-3">
                Имя; номер телефона и/или адрес электронной почты; текст
                обращения или отзыва; фотография, если я добровольно приложил
                её к отзыву.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-[24px] text-foreground">
                2. Цели обработки
              </h2>
              <p className="mt-3">
                Связь со мной по моей заявке; подготовка коммерческого
                предложения и обсуждение условий изготовления или реставрации
                фурнитуры; рассмотрение моего отзыва. Публикация отзыва на
                сайте возможна только при условии моего отдельного согласия на
                публикацию.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-[24px] text-foreground">
                3. Действия с данными
              </h2>
              <p className="mt-3">
                Сбор, запись, систематизация, накопление, хранение, уточнение
                (обновление, изменение), извлечение, использование, удаление и
                уничтожение — как с использованием средств автоматизации, так и
                без них.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-[24px] text-foreground">
                4. Передача третьим лицам
              </h2>
              <p className="mt-3">
                Оператор не передаёт мои данные третьим лицам, кроме случаев,
                предусмотренных законодательством РФ. Для получения заявок
                Оператор использует сервис электронной почты ООО «Яндекс»
                (Российская Федерация), который обрабатывает данные по
                поручению Оператора.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-[24px] text-foreground">
                5. Срок действия и отзыв согласия
              </h2>
              <p className="mt-3">
                Согласие действует с момента отправки формы до достижения целей
                обработки либо до его отзыва. Я могу отозвать согласие в любое
                время, направив письмо на адрес info@empirebrass.ru с темой
                «Отзыв согласия». Оператор прекратит обработку и удалит данные
                в срок, установленный законом.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-[24px] text-foreground">
                6. Контакты Оператора
              </h2>
              <p className="mt-3">
                Санкт-Петербург, info@empirebrass.ru, +7 (999) 064-64-17. Порядок
                обработки данных описан в{" "}
                <Link
                  href="/privacy"
                  className="text-foreground underline underline-offset-4 hover:text-brass"
                >
                  политике конфиденциальности
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
