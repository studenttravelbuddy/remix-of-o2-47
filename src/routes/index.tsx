import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Quote } from "lucide-react";

import partnerLogo from "@/assets/o2-logo-final.jpg.asset.json";
import { BrandMarkRow } from "@/components/BrandMark";
import { CampaignFaq } from "@/components/CampaignFaq";
import { MobileActionBar } from "@/components/MobileActionBar";
import {
  AudienceSection,
  BenefitsSection,
  MediaSection,
  PressGallery,
  TogetherSection,
  WhyMaxxSection,
} from "@/components/O2MaxxSections";
import { SectionChips } from "@/components/SectionChips";
import { Button } from "@/components/ui/button";

const MAXX_LINK = "https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O2 Maxx pre ISIC, ITIC a EURO<26" },
      {
        name: "description",
        content: "O2 Maxx pre držiteľov ISIC, ITIC a EURO<26: 100 GB dát, neobmedzené volania a ročné predplatné za 20 € mesačne.",
      },
      { property: "og:title", content: "O2 Maxx pre ISIC, ITIC a EURO<26" },
      {
        property: "og:description",
        content: "100 GB dát, neobmedzené volania a ročné predplatné za 20 € mesačne.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#40b8b8" },
    ],
  }),
  component: Index,
});

function PartnerLogo() {
  return (
    <img
      src={partnerLogo.url}
      alt="O2 Slovakia"
      className="h-14 w-14 rounded-full object-cover shadow-soft-teal sm:h-16 sm:w-16"
      width={64}
      height={64}
    />
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background pb-24 md:pb-0">
      <header id="pribeh" className="relative bg-brand-teal">
        <div className="absolute -right-16 top-28 h-40 w-40 rounded-full border-[22px] border-brand-yellow sm:h-64 sm:w-64 sm:border-[30px]" aria-hidden="true" />
        <div className="absolute -left-12 bottom-16 h-24 w-24 rotate-12 rounded-2xl bg-brand-pink sm:h-36 sm:w-36" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col px-5 py-6 sm:px-8 sm:py-10">
          <div className="relative z-10 flex items-center justify-between gap-3">
            <BrandMarkRow variant="card" />
            <PartnerLogo />
          </div>

          <div className="relative z-10 my-auto max-w-4xl py-12 sm:py-16">
            <p className="eyebrow">01 — Nové partnerstvo</p>
            <h1 className="mt-3 font-display text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
              Viac priestoru<br />pre to, čo je tvoje.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-xl">
              1. septembra 2026 sme spustili novú spoluprácu s O2. Vznikla z jednej jednoduchej
              myšlienky — že výhody, ktoré vám preukaz ISIC, ITIC alebo EURO&lt;26 prináša, majú
              siahať aj tam, kde ste každý deň najviac — do vášho telefónu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="pink" size="xl" className="w-full sm:w-auto" asChild>
                <a href={MAXX_LINK} target="_blank" rel="noopener noreferrer">Chcem O2 Maxx <ArrowUpRight /></a>
              </Button>
              <Button variant="white" size="xl" className="w-full sm:w-auto" asChild>
                <a href="#benefity">Čo získam <ArrowDown /></a>
              </Button>
            </div>
            <SectionChips className="mt-8" />
          </div>

          <p className="eyebrow relative z-10">O2 × CKM SYTS · od 1. 9. 2026</p>
        </div>
      </header>

      <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <blockquote className="relative overflow-hidden rounded-2xl bg-brand-teal-light px-6 py-10 shadow-soft-teal sm:px-12 sm:py-14">
            <Quote className="absolute right-5 top-5 h-20 w-20 text-brand-teal opacity-30 sm:h-28 sm:w-28" aria-hidden="true" />
            <p className="relative max-w-4xl font-display text-2xl font-black leading-snug sm:text-4xl">
              „Komunikácia je základ fungovania spoločnosti. Bez nej jednoducho nič nefunguje.
              Naším cieľom je umožniť ľuďom komunikovať, budovať vzťahy a napĺňať si svoje ciele,
              poslania a sny. A O2 je partner, ktorému na tomto rovnako záleží.“
            </p>
            <footer className="mt-7 text-sm font-bold">— Mgr. Michal Bučko, prezident CKM SYTS</footer>
          </blockquote>
        </div>
      </section>

      <PressGallery />
      <BenefitsSection />
      <WhyMaxxSection />
      <TogetherSection />
      <AudienceSection />
      <MediaSection />
      <CampaignFaq />

      <footer className="bg-brand-teal py-12 text-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl font-black">O2 Maxx × ISIC / ITIC / EURO&lt;26</p>
            <p className="mt-3 max-w-lg text-sm">Nové partnerstvo od 1. septembra 2026. Viac dát, viac komunikácie a viac priestoru pre tvoje plány.</p>
            <BrandMarkRow variant="onDark" className="mt-6 w-fit" />
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <PartnerLogo />
            <Button variant="pink" size="lg" asChild><a href={MAXX_LINK} target="_blank" rel="noopener noreferrer">Chcem O2 Maxx <ArrowUpRight /></a></Button>
            <p className="text-xs">© 2026 CKM SYTS</p>
          </div>
        </div>
      </footer>
      <MobileActionBar offerLink={MAXX_LINK} cardLink="https://objednaj-preukaz.sk" />
    </main>
  );
}