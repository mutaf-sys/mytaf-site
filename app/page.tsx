import About from "@/components/About";
import Collection from "@/components/Collection";
import Contacts from "@/components/Contacts";
import Estimate from "@/components/Estimate";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Restoration from "@/components/Restoration";
import Reveal from "@/components/Reveal";
import ScrollToContacts from "@/components/ScrollToContacts";
import Testimonials from "@/components/Testimonials";
import Workshop from "@/components/Workshop";

export default function Home() {
  return (
    <>
      <ScrollToContacts />
      <Header />

      <main className="overflow-hidden bg-[var(--background)]">
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal delay={150}>
          <Collection />
        </Reveal>

        <Workshop />

        <Reveal delay={150}>
          <Estimate />
        </Reveal>

        <Restoration />

        <Reveal delay={150}>
          <Testimonials />
        </Reveal>

        <Reveal delay={300}>
          <Contacts />
        </Reveal>
      </main>
    </>
  );
}
