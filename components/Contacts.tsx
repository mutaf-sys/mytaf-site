import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/ui/Arrow";

const detailLabel =
  "mb-2.5 block font-mono text-[11px] uppercase tracking-[0.15em] text-brass-soft";
const detailValue = "font-heading text-2xl";

export default function Contacts() {
  return (
    <>
      <section id="contacts" className="on-dark bg-dark text-white">
        <Reveal className="mx-auto max-w-[1720px] px-[clamp(22px,11vw,170px)] py-[clamp(75px,10vw,140px)]">
          <div className="max-w-[700px]">
            <p className="kicker kicker-rule">05 — Связаться с мастерской</p>
            <h2 className="display display-lg mb-[27px] mt-[22px]">
              Расскажите,
              <br />
              <em>что задумали.</em>
            </h2>
            <p className="max-w-[450px] leading-[1.8] text-[#c9c7bd]">
              Пришлите фотографию образца, чертёж, эскиз или описание задачи.
              Обсудим размеры, материал и обработку.
            </p>
          </div>

          <div className="mt-[75px] grid gap-[10vw] border-t border-[#494a42] pt-[45px] min-[901px]:grid-cols-[1.1fr_0.9fr] max-[900px]:gap-[6vw] max-[560px]:mt-[55px] max-[560px]:gap-[55px]">
            <ContactForm />

            <div className="grid content-start gap-7">
              <a href="tel:+79990646417" className="group block">
                <span className={detailLabel}>Телефон</span>
                <span className={`${detailValue} transition-colors group-hover:text-brass-soft`}>
                  +7 (999) 064-64-17
                </span>
              </a>

              <a href="mailto:info@empirebrass.ru" className="group block">
                <span className={detailLabel}>Электронная почта</span>
                <span className={`${detailValue} transition-colors group-hover:text-brass-soft`}>
                  info@empirebrass.ru
                </span>
              </a>

              <p>
                <span className={detailLabel}>Мастерская</span>
                <span className={detailValue}>Санкт-Петербург</span>
              </p>

              <a
                href="#top"
                className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors hover:text-brass-soft"
              >
                Наверх
                <Arrow className="-rotate-90" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}
