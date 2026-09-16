import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Quote } from "lucide-react";

import partnerLogo from "@/assets/o2-logo-final.jpg.asset.json";
import heroGirl from "@/assets/dievca.webp.asset.json";
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
      <header id="pribeh" className="relative overflow-hidden bg-background">
        <div className="absolute -right-16 top-28 h-40 w-40 rounded-full border-[22px] border-brand-yellow sm:h-64 sm:w-64 sm:border-[30px]" aria-hidden="true" />
        <div className="absolute -left-12 bottom-16 h-24 w-24 rotate-12 rounded-xl bg-brand-pink sm:h-36 sm:w-36" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[96svh] max-w-6xl flex-col px-5 py-6 sm:px-8 sm:py-8">
          <div className="relative z-10 flex items-center justify-between gap-3">
            <BrandMarkRow variant="card" />
            <PartnerLogo />
          </div>

          <div className="relative z-10 my-auto grid items-center gap-8 py-8 lg:grid-cols-[1.08fr_.92fr] lg:py-12">
            <div className="relative z-20">
              <p className="eyebrow text-brand-pink">Nové partnerstvo · nový O2 Maxx</p>
              <h1 className="mt-3 font-sans text-5xl font-black leading-[0.9] sm:text-7xl lg:text-8xl">O2 Maxx už od<br /><span className="text-brand-pink">17,50 €</span></h1>
              <p className="mt-3 text-sm font-black uppercase">mesačne s O2 Spolu pri 4+ ľuďoch · samostatne 20 €</p>
              <div className="mt-6 flex flex-wrap gap-2"><span className="offer-pill bg-brand-yellow">100 GB</span><span className="offer-pill bg-brand-teal">Neobmedzené volania a správy</span><span className="offer-pill bg-brand-orange">Predplatné na rok</span><span className="offer-pill border-2 border-brand-pink bg-background">Bez viazanosti</span></div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="pink" size="xl" className="w-full sm:w-auto" asChild><a href={MAXX_LINK} target="_blank" rel="noopener noreferrer">Chcem O2 Maxx <ArrowUpRight /></a></Button>
                <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild><a href="#benefity">Čo všetko získam <ArrowDown /></a></Button>
              </div>
            </div>
            <div className="relative mx-auto h-[360px] w-full max-w-md sm:h-[520px] lg:h-[620px]">
              <div className="absolute inset-x-8 bottom-0 top-12 rounded-t-full bg-brand-teal" />
              <img src={heroGirl.url} alt="Mladá držiteľka preukazu z kampane Ready for more" className="absolute inset-0 h-full w-full rounded-b-[4rem] object-cover object-top" fetchPriority="high" />
              <span className="absolute right-0 top-12 rotate-3 rounded-lg bg-brand-yellow px-4 py-2 text-sm font-black">100 GB. MAXX možností.</span>
            </div>
          </div>
          <div className="relative z-30 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><SectionChips /><p className="eyebrow shrink-0">O2 × CKM SYTS · od 1. 9. 2026</p></div>
        </div>
      </header>

      <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <blockquote className="relative border-l-8 border-brand-yellow px-6 py-6 sm:px-12 sm:py-10">
            <Quote className="absolute right-5 top-5 h-20 w-20 text-brand-teal opacity-30 sm:h-28 sm:w-28" aria-hidden="true" />
            <p className="relative max-w-4xl font-sans text-2xl font-black leading-snug sm:text-4xl">
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