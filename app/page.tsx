import About from "@/components/About";
import Collection from "@/components/Collection";
import Contacts from "@/components/Contacts";
import Estimate from "@/components/Estimate";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Restoration from "@/components/Restoration";
import ScrollToContacts from "@/components/ScrollToContacts";
import Testimonials from "@/components/Testimonials";
import Workshop from "@/components/Workshop";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <ScrollToContacts />
      <Header />

      <main id="main" className="overflow-hidden bg-background">
        <Hero />
        <About />
        <Collection />
        <Workshop />
        <Restoration />
        <Estimate />
        <Testimonials />
        <Contacts />
      </main>
    </>
  );
}
