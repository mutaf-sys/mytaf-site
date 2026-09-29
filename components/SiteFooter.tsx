import Link from "next/link";

import { CookieSettingsButton } from "@/components/CookieConsent";
import { siteConfig } from "@/lib/site";

const linkClass =
  "text-white underline-offset-4 transition-colors hover:text-brass-soft hover:underline";

export default function SiteFooter() {
  return (
    <footer className="on-dark bg-footer text-[13px] leading-normal tracking-[0.02em] text-[#a9aaa1]">
      <div className="mx-auto flex max-w-[1720px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-[clamp(22px,5vw,76px)] py-[25px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-[15px]">
        <span>© 2026 Empirebrass</span>
        <span>Историческая латунная фурнитура</span>
        <nav
          aria-label="Юридическая информация"
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          <Link href="/privacy" className={linkClass}>
            Политика конфиденциальности
          </Link>
          <Link href="/cookies" className={linkClass}>
            Политика cookie
          </Link>
          <Link href="/consent" className={linkClass}>
            Согласие на обработку данных
          </Link>
          <Link href="/oferta" className={linkClass}>
            Публичная оферта
          </Link>
          <CookieSettingsButton className={linkClass} />
        </nav>
        <a href="mailto:info@empirebrass.ru" className={linkClass}>
          Связаться
        </a>
      </div>

      <div className="border-t border-[#3a3b34] px-[clamp(22px,5vw,76px)] py-4 font-mono text-[11px] leading-relaxed text-[#7d7e75]">
        <p className="mx-auto max-w-[1720px]">
          {siteConfig.legal.fullName} · ИНН {siteConfig.legal.inn} · ОГРНИП{" "}
          {siteConfig.legal.ogrnip} от {siteConfig.legal.ogrnipDate} · адрес:{" "}
          {siteConfig.legal.address} · {siteConfig.email} · +7 (999) 064-64-17
        </p>
      </div>
    </footer>
  );
}
