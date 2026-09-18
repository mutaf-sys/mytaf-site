import Link from "next/link";
import type { ReactNode } from "react";

export const labelClass =
  "text-xs uppercase tracking-[0.2em] text-brass-soft";

export const inputClass =
  "mt-3 w-full rounded-2xl border border-white/25 bg-transparent px-4 py-3 text-white placeholder:text-white/50 transition focus:border-brass-soft";

export const submitClass =
  "mt-5 flex w-full items-center justify-center rounded-full bg-brass-soft px-8 py-4 text-sm font-medium text-foreground transition duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto";

export function FormError({ message }: { message: string }) {
  if (!message) return null;

  return (
    <p role="alert" className="mt-4 text-sm text-warn">
      {message}
    </p>
  );
}

export function ConsentCheckbox() {
  return (
    <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-white/70">
      <input
        type="checkbox"
        name="consent"
        required
        className="mt-0.5 h-4 w-4 shrink-0 accent-brass-soft"
      />
      <span>
        Я согласен на обработку персональных данных в соответствии с{" "}
        <Link
          href="/privacy"
          target="_blank"
          className="underline underline-offset-2 hover:text-white"
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
    <div
      role="status"
      className="rounded-[28px] border border-brass-soft/40 bg-white/5 p-8 sm:p-10"
    >
      <p className="font-heading text-2xl text-white sm:text-3xl">{title}</p>
      <div className="mt-4 text-white/75">{children}</div>
    </div>
  );
}
