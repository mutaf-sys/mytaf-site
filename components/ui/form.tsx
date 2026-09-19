import Link from "next/link";
import type { ReactNode } from "react";

/* Поля формы в стиле «editorial»: только нижняя линия, на тёмном фоне */

export const labelClass =
  "font-mono text-xs uppercase tracking-[0.14em] text-[#c9c7bd]";

export const inputClass =
  "block w-full border-0 border-b border-[#6b6c63] bg-transparent py-[15px] text-base leading-normal text-white placeholder:text-[#92938b] transition focus:border-brass-soft";

export const submitClass = "button button-brass mt-2 w-full sm:w-auto";

export function FormError({ message }: { message: string }) {
  if (!message) return null;

  return (
    <p role="alert" className="text-sm text-warn">
      {message}
    </p>
  );
}

export function ConsentCheckbox() {
  return (
    <label className="flex items-start gap-2.5 text-xs leading-normal text-[#c9c7bd]">
      <input
        type="checkbox"
        name="consent"
        required
        className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-brass-soft"
      />
      <span>
        Я согласен(а) с{" "}
        <Link
          href="/privacy"
          target="_blank"
          className="text-brass-soft underline underline-offset-[3px] hover:text-white"
        >
          политикой обработки персональных данных
        </Link>
      </span>
    </label>
  );
}

export function FormSuccess({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div role="status" className="border border-[#6b6c63] p-[35px]">
      <span aria-hidden="true" className="text-[28px] text-brass-soft">
        ✓
      </span>
      <p className="mb-2 mt-4 font-heading text-[25px]">{title}</p>
      <div className="text-[#c9c7bd]">{children}</div>
    </div>
  );
}
