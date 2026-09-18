"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

// Ориентировочные базовые цены за одно изделие, в рублях.
// Это плейсхолдеры для примерного расчёта на сайте — отредактируйте
// под свои реальные цены, когда они будут готовы.
const basePrices: Record<string, { from: number; to: number }> = {
  "Дверная ручка": { from: 8000, to: 18000 },
  "Оконная ручка": { from: 6000, to: 14000 },
  Петля: { from: 5000, to: 12000 },
  "Мебельная ручка": { from: 3000, to: 7000 },
  "Индивидуальный проект": { from: 12000, to: 30000 },
};

const finishMultiplier: Record<string, number> = {
  Полировка: 1,
  "Матовая обработка": 1.05,
  Патинирование: 1.15,
  "Старинная патина (сложная)": 1.3,
};

const categories = Object.keys(basePrices);
const finishes = Object.keys(finishMultiplier);

function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(value / 100) * 100);
}

export default function Estimate() {
  const [category, setCategory] = useState(categories[0]);
  const [finish, setFinish] = useState(finishes[0]);
  const [quantity, setQuantity] = useState(1);

  const estimate = useMemo(() => {
    const base = basePrices[category];
    const multiplier = finishMultiplier[finish];
    const safeQuantity = Math.max(1, quantity || 1);

    return {
      from: base.from * multiplier * safeQuantity,
      to: base.to * multiplier * safeQuantity,
    };
  }, [category, finish, quantity]);

  return (
    <section
      id="estimate"
      className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-brass-dark sm:text-sm">
            Расчёт стоимости
          </p>

          <h2 className="mt-5 font-heading text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Узнайте ориентировочную стоимость
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-muted">
            Итоговая цена зависит от сложности формы, размеров и состояния
            образца. Ниже — примерный диапазон, точную стоимость мы
            подтвердим после обсуждения проекта.
          </p>
        </div>

        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-sm sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="estimate-category"
                className="text-xs uppercase tracking-[0.2em] text-brass-dark"
              >
                Тип изделия
              </label>
              <select
                id="estimate-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="mt-3 w-full rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-brass"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="estimate-finish"
                className="text-xs uppercase tracking-[0.2em] text-brass-dark"
              >
                Отделка
              </label>
              <select
                id="estimate-finish"
                value={finish}
                onChange={(event) => setFinish(event.target.value)}
                className="mt-3 w-full rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-brass"
              >
                {finishes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="estimate-quantity"
                className="text-xs uppercase tracking-[0.2em] text-brass-dark"
              >
                Количество, шт.
              </label>
              <input
                id="estimate-quantity"
                type="number"
                min={1}
                value={quantity}
                onChange={(event) =>
                  setQuantity(Number(event.target.value))
                }
                className="mt-3 w-full rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-brass"
              />
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-xs uppercase tracking-[0.2em] text-brass-dark">
                Ориентировочно
              </p>
              <p className="mt-3 font-heading text-2xl text-foreground sm:text-3xl">
                {formatRub(estimate.from)} – {formatRub(estimate.to)} ₽
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Это предварительная оценка. Финальная цена — после изучения
              образца, чертежа или фотографии.
            </p>

            <Link
              href="#contacts"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-brass-dark px-7 py-3.5 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:bg-foreground"
            >
              Обсудить точную стоимость
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
