import type { Metadata } from "next";

import ReviewForm from "@/components/ReviewForm";

// Страница намеренно не индексируется и никуда не заведена ссылками
// с сайта — на неё попадают только по прямой ссылке, которую вы
// сами присылаете клиенту.
export const metadata: Metadata = {
  title: "Оставить отзыв",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function LeaveReviewPage() {
  return (
    <main id="main" className="on-dark flex min-h-screen items-center bg-dark px-6 py-24 text-white">
      <div className="mx-auto w-full max-w-xl">
        <p className="kicker">
          Мастерская Empirebrass
        </p>

        <h1 className="display display-md mt-5">
          Спасибо, что делитесь впечатлением
        </h1>

        <p className="mt-6 text-base leading-7 text-[#c9c7bd]">
          Пара слов о готовом изделии помогут будущим клиентам сделать
          выбор. Мы можем опубликовать ваш отзыв на сайте — если не
          хотите, просто скажите об этом в тексте.
        </p>

        <div className="mt-10">
          <ReviewForm />
        </div>
      </div>
    </main>
  );
}
