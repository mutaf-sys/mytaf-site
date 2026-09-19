import Reveal from "@/components/Reveal";
import Arrow from "@/components/ui/Arrow";

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-border"
    >
      <Reveal className="mx-auto grid max-w-[1440px] gap-[4vw] px-[clamp(22px,8vw,120px)] py-[clamp(70px,9vw,140px)] min-[901px]:grid-cols-[0.25fr_1fr_1fr] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        <p
          aria-hidden="true"
          className="font-mono text-[11px] text-brass-dark max-[900px]:col-span-full"
        >
          01 / 04
        </p>

        <div>
          <p className="kicker">О мастерской</p>
          <h2 className="display display-lg mt-[22px]">
            Делаем новое,
            <br />
            <em>сохраняя память.</em>
          </h2>
        </div>

        <div className="max-w-[470px] pt-[54px] leading-[1.8] text-muted max-[560px]:pt-0">
          <p className="font-heading text-[25px] leading-[1.35] text-foreground">
            Каждая деталь начинается с внимания к оригиналу — его форме,
            пропорциям и следам времени.
          </p>
          <p className="mt-5 text-[15px]">
            Работаем по историческим образцам, архивным материалам и
            индивидуальным эскизам. От первого эскиза до финальной полировки
            изделие проходит через руки мастера.
          </p>
          <a
            href="#workshop"
            aria-label="Перейти к разделу «Мастерская»"
            className="mt-8 grid h-[54px] w-[54px] place-items-center rounded-full border border-brass-dark text-brass-dark transition duration-300 hover:-rotate-45 hover:bg-brass-dark hover:text-white"
          >
            <Arrow className="rotate-90" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
