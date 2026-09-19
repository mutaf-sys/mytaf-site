import Link from "next/link";

const linkClass =
  "text-white underline-offset-4 transition-colors hover:text-brass-soft hover:underline";

export default function SiteFooter() {
  return (
    <footer className="on-dark bg-footer text-[13px] leading-normal tracking-[0.02em] text-[#a9aaa1]">
      <div className="mx-auto flex max-w-[1720px] items-center justify-between gap-4 px-[clamp(22px,5vw,76px)] py-[25px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-[15px]">
        <span>© 2026 Empirebrass</span>
        <span>Историческая латунная фурнитура</span>
        <Link href="/privacy" className={linkClass}>
          Политика конфиденциальности
        </Link>
        <a href="mailto:info@empirebrass.ru" className={linkClass}>
          Связаться
        </a>
      </div>
    </footer>
  );
}
