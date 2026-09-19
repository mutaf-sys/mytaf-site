"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import Arrow from "@/components/ui/Arrow";

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

const estimateLabel =
  "font-mono text-[11px] uppercase tracking-[0.16em] text-brass-dark";

const estimateField =
  "mt-3 w-full rounded-2xl border border-[#d9d0c3] bg-white px-4 py-[15px] text-[15px] text-foreground transition focus:border-brass-dark";

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
    <section id="estimate" className="px-0">
      <div className="mx-auto grid max-w-[1440px] items-center gap-[8vw] bg-estimate px-[clamp(22px,8vw,120px)] py-[clamp(80px,10vw,150px)] min-[901px]:grid-cols-[0.8fr_1.2fr] max-[900px]:gap-[45px]">
        <div className="max-w-[470px]">
          <p className="kicker">04 — Расчёт стоимости</p>
          <h2 className="display display-lg mb-6 mt-[22px]">
            Узнайте
            <br />
            <em>ориентир.</em>
          </h2>
          <p className="max-w-[440px] text-[15px] leading-[1.85] text-muted">
            Итоговая цена зависит от сложности формы, размеров и состояния
            образца. Ниже — примерный диапазон, точную стоимость мы
            подтвердим после обсуждения проекта.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#d1c9bc] bg-surface p-[clamp(24px,4vw,42px)] shadow-[0_18px_45px_rgba(35,31,23,0.08)]">
          <div className="grid gap-x-6 gap-y-7 min-[561px]:grid-cols-[1.1fr_0.9fr] max-[560px]:gap-y-5">
            <div>
              <label htmlFor="estimate-category" className={estimateLabel}>
                Тип изделия
              </label>
              <select
                id="estimate-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className={estimateField}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="estimate-finish" className={estimateLabel}>
                Отделка
              </label>
              <select
                id="estimate-finish"
                value={finish}
                onChange={(event) => setFinish(event.target.value)}
                className={estimateField}
              >
                {finishes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="estimate-quantity" className={estimateLabel}>
                Количество, шт.
              </label>
              <input
                id="estimate-quantity"
                type="number"
                min={1}
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                className={estimateField}
              />
            </div>

            <div className="flex flex-col justify-end pb-3.5 max-[560px]:pb-0" aria-live="polite">
              <p className={estimateLabel}>Ориентировочно</p>
              <p className="mt-2.5 whitespace-nowrap font-heading text-[clamp(25px,3vw,39px)] tracking-[-0.04em]">
                {formatRub(estimate.from)} – {formatRub(estimate.to)} ₽
              </p>
            </div>
          </div>

          <div className="mt-[30px] flex items-center justify-between gap-6 border-t border-[#d9d0c3] pt-[26px] max-[560px]:block">
            <p className="max-w-[380px] text-[13px] leading-relaxed text-muted">
              Это предварительная оценка. Финальная цена — после изучения
              образца, чертежа или фотографии.
            </p>

            <Link
              href="#contacts"
              className="button button-brass whitespace-nowrap max-[560px]:mt-[22px] max-[560px]:w-full"
            >
              Обсудить точную стоимость
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
