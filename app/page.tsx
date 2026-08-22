import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trustbar";
import { DirectorWord } from "@/components/sections/director-word";
import { Partners } from "@/components/sections/partners";
import { Domains } from "@/components/sections/domains";
import { Team } from "@/components/sections/team";
import { Events } from "@/components/sections/events";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1180px] px-6">
        <Hero />
        <TrustBar />
        <DirectorWord />
        <Partners />
        <Domains />
        <Team />
        <Events />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
