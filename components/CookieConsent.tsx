"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site";

const STORAGE_KEY = "eb-cookie-consent";
const SETTINGS_EVENT = "eb:cookie-settings";

type Choice = "accepted" | "declined";

type YmFunction = {
  (...args: unknown[]): void;
  a?: IArguments[];
  l?: number;
};

declare global {
  interface Window {
    ym?: YmFunction;
  }
}

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // хранилище недоступно — выбор действует до перезагрузки страницы
  }
}

// Счётчик подключается только после согласия посетителя.
function loadMetrika(id: string) {
  if (window.ym) return;

  const ym: YmFunction = function () {
    (ym.a = ym.a || []).push(arguments);
  };
  ym.l = Date.now();
  window.ym = ym;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${id}`;
  document.head.appendChild(script);

  ym(Number(id), "init", {
    defer: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  });
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))}
    >
      Настройки cookie
    </button>
  );
}

export default function CookieConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setOpen(saved === null);

    function handleSettings() {
      setOpen(true);
    }

    window.addEventListener(SETTINGS_EVENT, handleSettings);
    return () => window.removeEventListener(SETTINGS_EVENT, handleSettings);
  }, []);

  useEffect(() => {
    if (choice === "accepted") loadMetrika(siteConfig.metrikaId);
  }, [choice]);

  // Сайт — одностраничное приложение: каждый переход сообщаем счётчику отдельно.
  useEffect(() => {
    if (choice !== "accepted" || !window.ym) return;
    window.ym(
      Number(siteConfig.metrikaId),
      "hit",
      window.location.pathname + window.location.search,
    );
  }, [choice, pathname]);

  function decide(next: Choice) {
    saveChoice(next);
    setChoice(next);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Файлы cookie"
      className="dark-surface fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-[940px] bg-footer p-5 text-[13px] leading-relaxed text-[#c9c7bd] shadow-[0_12px_40px_rgba(0,0,0,0.35)] min-[700px]:flex min-[700px]:items-center min-[700px]:gap-8 min-[700px]:p-6"
    >
      <p className="flex-1">
        Мы используем файлы cookie и сервис «Яндекс Метрика», чтобы понимать,
        как посетители пользуются сайтом. Вы можете отказаться, сайт будет
        работать так же.{" "}
        <Link
          href="/privacy#cookies"
          className="text-brass-soft underline underline-offset-[3px] hover:text-white"
        >
          Подробнее
        </Link>
      </p>

      <div className="mt-4 flex gap-3 min-[700px]:mt-0 min-[700px]:shrink-0">
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="button button-brass on-dark flex-1 px-4"
        >
          Принять
        </button>
        <button
          type="button"
          onClick={() => decide("declined")}
          className="button button-outline on-dark flex-1 px-4"
        >
          Отказаться
        </button>
      </div>
    </div>
  );
}
