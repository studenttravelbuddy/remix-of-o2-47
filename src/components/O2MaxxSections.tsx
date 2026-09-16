import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CircleHelp,
  Globe2,
  MessageCircleMore,
  Play,
  Signal,
  Smartphone,
} from "lucide-react";

import baba from "@/assets/baba.webp.asset.json";
import chalan from "@/assets/chalan.webp.asset.json";
import chlapec from "@/assets/chlapec.webp.asset.json";
import dievca from "@/assets/dievca.webp.asset.json";
import ucitelka from "@/assets/hf_20260905_211704_30a25153-0e2c-49be-994f-970b6926a370.webp.asset.json";
import photoOne from "@/assets/tlacovka-o2-ckmsyts-foto1.jpg.asset.json";
import photoTwo from "@/assets/tlacovka-o2-ckmsyts-foto2.jpg.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const MAXX_LINK = "https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx";

const benefits = [
  {
    id: "data",
    icon: Signal,
    number: "100 GB",
    title: "Dáta v plnej rýchlosti",
    summary: "Na sociálne siete, streamovanie aj navigáciu bez obmedzení.",
    detail: "Ak minieš 20 GB, zvyšných 80 GB sa prenesie do ďalšieho mesiaca. Vtedy máš až 180 GB. Po vyčerpaní limitu sa internet nevypne — iba sa spomalí.",
    color: "bg-brand-yellow",
    position: "lg:left-0 lg:top-10 lg:w-64 lg:-rotate-2",
  },
  {
    id: "calls",
    icon: MessageCircleMore,
    number: "∞",
    title: "Volania a správy",
    summary: "Voláš a píšeš bez počítania na Slovensku aj v EÚ.",
    detail: "Neobmedzené volania a SMS/MMS platia na Slovensku aj v celej Európskej únii.",
    color: "bg-brand-pink text-primary-foreground",
    position: "lg:right-0 lg:top-0 lg:w-64 lg:rotate-2",
  },
  {
    id: "eu",
    icon: Globe2,
    number: "EÚ",
    title: "Roaming bez stresu",
    summary: "EÚ, Nórsko, Island, Lichtenštajnsko aj Gibraltár.",
    detail: "Tvoj tarif funguje aj mimo Slovenska. Balíš kufre a nič navyše neriešiš.",
    color: "bg-brand-teal",
    position: "lg:left-4 lg:bottom-8 lg:w-64 lg:rotate-1",
  },
  {
    id: "stream",
    icon: Play,
    number: "12 mes.",
    title: "Predplatné v cene",
    summary: "Netflix, Voyo, HBO Max, O2 TV alebo Refresher.",
    detail: "Jednu službu máš na 12 mesiacov a voľbu môžeš meniť každý mesiac. Cena O2 Maxx ostáva 20 €.",
    color: "bg-brand-orange",
    position: "lg:right-0 lg:bottom-16 lg:w-72 lg:-rotate-2",
  },
  {
    id: "freedom",
    icon: Smartphone,
    number: "0×",
    title: "Bez viazanosti",
    summary: "Žiadny podpis na 12 alebo 24 mesiacov.",
    detail: "Odídeš, keď budeš chcieť.",
    color: "bg-background border-2 border-brand-teal",
    position: "lg:left-1/2 lg:bottom-0 lg:w-56 lg:-translate-x-1/2",
  },
];

const media = [
  ["TOUCHIT", "O2 má nový paušál pre mladých: Za 20 eur ponúkne 100 GB dát aj ročné predplatné Netflixu", "https://touchit.sk/o2-ma-novy-pausal-pre-mladych-za-20-eur-ponukne-100-gb-dat-aj-rocne-predplatne-netflixu/906239/"],
  ["REFRESHER", "O2 má nový paušál pre mladých. Za 20 eur mesačne získaš 100 GB dát, neobmedzené volania aj správy", "https://refresher.sk/210087-O2-ma-novy-pausal-pre-mladych-Za-20-eur-mesacne-ziskas-100-GB-dat-neobmedzene-volania-aj-spravy"],
  ["o médiách", "Online svet môže mladým veľa priniesť, ak ho vedia využívať vo svoj prospech", "https://www.omediach.com/internet/30480-online-svet-moze-mladym-vela-priniest-ak-ho-vedia-vyuzivat-vo-svoj-prospech-novy-pausal-o2-maxx-im-dava-viac-priestoru-vyuzit-ho-naplno"],
  ["WOMANMAN", "Nový paušál O2 Maxx dáva mladým ľuďom viac priestoru", "https://womanman.sk/novy-pausal-o2-maxx-dava-mladym-ludom-viac-priestoru/"],
  ["MOJANDROID", "O2 Maxx ponúka 100 GB dát a ďalšie zľavy za 20 eur mesačne", "https://www.mojandroid.sk/o2-maxx-pausal-studenti-ucitelia/"],
  ["SMART ARENA", "O2 spúšťa Maxx za 20 eur: 100 GB dát a predplatné na rok", "https://www.smartarena.sk/o2-spusta-maxx-za-20-eur-100-gb-dat-a-netflix-ci-hbo-max-na-rok/"],
  ["TECHBYTE", "O2 Maxx prináša 100 GB dát aj digitálne služby na celý rok", "https://www.techbyte.sk/2026/09/o2-prekvapilo-telekom-20-eur-100-gb-dat/"],
  ["SVETAPPLE", "Nový paušál O2 Maxx za 20 € ponúka 100 GB aj predplatné", "https://svetapple.sk/lifestyle/domace-spravy/o2-spustilo-nalozeny-pausal-za-20-eur-ma-100-gb-aj-netflix/"],
  ["techvia", "Viac dát, viac možností, menej počítania", "https://www.techvia.sk/viac-dat-viac-moznosti-menej-pocitania-o2-prichadza-s-pausalom-o2-maxx-za-20-eur-mesacne/"],
] as const;

function PersonHotspot({ className, name }: { className: string; name: string }) {
  return (
    <div className={`group absolute ${className}`}>
      <button type="button" aria-label={name} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-brand-yellow shadow-soft-yellow transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group-hover:scale-110">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-pink" />
      </button>
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 translate-y-2 rounded-lg bg-foreground px-3 py-2 text-center text-xs font-bold text-background opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">{name}</span>
    </div>
  );
}

export function PressGallery() {
  return (
    <section aria-labelledby="press-title" className="bg-background px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><p className="eyebrow text-brand-pink">01 — Zo zákulisia</p><h2 id="press-title" className="mt-2 max-w-2xl font-sans text-3xl font-black sm:text-5xl">Deň, keď sme si povedali: ideme do toho spolu.</h2></div>
          <p className="hidden text-sm font-bold text-muted-foreground sm:block">Ukáž na farebný bod</p>
        </div>
        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-[1.15fr_.85fr] sm:px-0">
          <figure className="relative w-[88%] shrink-0 snap-center overflow-hidden rounded-xl bg-muted sm:w-auto sm:-rotate-1">
            <img src={photoOne.url} alt="Lukáš Baťo prezentuje spoluprácu O2 a CKM SYTS" className="aspect-[3/2] h-full w-full object-cover" width={1154} height={768} loading="lazy" decoding="async" />
            <PersonHotspot className="left-[79%] top-[45%]" name="Lukáš Baťo, Product Owner, O2 Slovakia" />
          </figure>
          <figure className="relative w-[88%] shrink-0 snap-center overflow-hidden rounded-xl bg-muted sm:mt-12 sm:w-auto sm:rotate-2">
            <img src={photoTwo.url} alt="Michal Bučko a Lukáš Baťo predstavujú nové partnerstvo" className="aspect-[3/2] h-full w-full object-cover" width={1154} height={768} loading="lazy" decoding="async" />
            <PersonHotspot className="left-[48%] top-[45%]" name="Mgr. Michal Bučko, prezident CKM SYTS" />
            <PersonHotspot className="left-[75%] top-[42%]" name="Lukáš Baťo, Product Owner, O2 Slovakia" />
          </figure>
        </div>
        <p className="mt-3 text-center text-sm font-bold text-muted-foreground">1. september 2026 — oficiálny štart spolupráce O2 × CKM SYTS</p>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section id="benefity" className="scroll-mt-20 overflow-hidden bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center"><p className="eyebrow text-brand-pink">02 — Toto máš v O2 Maxx</p><h2 className="mx-auto mt-3 max-w-4xl font-sans text-4xl font-black leading-none sm:text-7xl">Celý tvoj svet<br /><span className="text-brand-teal">v jednom mobile.</span></h2></div>
        <div className="relative mt-10 lg:min-h-[760px]">
          <div className="relative z-10 mx-auto flex h-[480px] w-[244px] flex-col overflow-hidden rounded-[2.75rem] border-[10px] border-foreground bg-brand-teal shadow-soft-teal sm:h-[560px] sm:w-[286px] lg:absolute lg:left-1/2 lg:top-16 lg:-translate-x-1/2">
            <div className="mx-auto h-6 w-24 rounded-b-2xl bg-foreground" />
            <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
              <p className="eyebrow">O2 Maxx</p><p className="mt-3 text-6xl font-black sm:text-7xl">20 €</p><p className="font-bold">mesačne</p>
              <div className="my-6 h-px w-16 bg-foreground/30" />
              <p className="text-lg font-black">100 GB</p><p className="text-sm">+ všetko okolo</p>
              <Button variant="pink" size="lg" className="mt-7" asChild><a href={MAXX_LINK} target="_blank" rel="noopener noreferrer">Chcem ho <ArrowUpRight /></a></Button>
            </div>
          </div>
          <Accordion type="multiple" className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 lg:mx-0 lg:block lg:overflow-visible lg:px-0">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <AccordionItem key={benefit.id} value={benefit.id} className={`relative z-20 w-[82%] shrink-0 snap-center overflow-hidden rounded-xl border-0 px-5 shadow-soft-teal lg:absolute ${benefit.color} ${benefit.position}`}>
                  <AccordionTrigger className="min-h-28 gap-3 py-4 text-left hover:no-underline">
                    <Icon className="h-7 w-7 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 flex-1"><span className="block text-3xl font-black leading-none">{benefit.number}</span><span className="mt-1 block text-base font-black">{benefit.title}</span><span className="mt-1 block text-xs font-medium opacity-80">{benefit.summary}</span></span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm font-medium leading-relaxed"><p>{benefit.detail}</p>{benefit.id === "stream" && <StreamingHelp />}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <p className="mt-1 text-center text-xs font-bold text-muted-foreground lg:hidden">Potiahni benefity do strán</p>
        </div>
      </div>
    </section>
  );
}

function StreamingHelp() {
  return (
    <TooltipProvider delayDuration={100}><Tooltip><TooltipTrigger asChild><Button variant="outline" size="sm" className="mt-4 min-h-11"><CircleHelp /> Čo je streamovanie?</Button></TooltipTrigger><TooltipContent side="bottom" className="max-w-xs p-4 text-sm leading-relaxed">Pozeranie filmov, seriálov alebo počúvanie hudby priamo online cez appku — bez sťahovania. Stačí internet a účet v danej appke.</TooltipContent></Tooltip></TooltipProvider>
  );
}

export function WhyMaxxSection() {
  const reasons = ["Voláš a píšeš komukoľvek bez počítania kontaktov.", "Ročné predplatné je priamo v cene.", "Nevyužité dáta sa prenesú do ďalšieho mesiaca.", "Internet funguje ďalej aj po minutí 100 GB."];
  return (
    <section className="bg-brand-teal py-14 sm:py-20"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow">03 — Bez zbytočného počítania</p><div className="mt-6 grid gap-x-12 gap-y-8 md:grid-cols-2">{reasons.map((reason, i) => <div key={reason} className="flex items-start gap-4 border-t-2 border-foreground pt-4"><span className="text-4xl font-black text-brand-yellow">0{i + 1}</span><p className="max-w-sm pt-2 text-lg font-bold">{reason}</p></div>)}</div></div></section>
  );
}

export function TogetherSection() {
  const levels = [
    ["1", "20 €", "samostatne"], ["2", "20 €", "+ 10 GB dátová rezerva"], ["3", "cca 18,30 €", "odmena 5 € rozdelená medzi troch"], ["4+", "17,50 €", "odmena 10 € rozdelená medzi skupinu"],
  ];
  return (
    <section id="spolu" className="scroll-mt-20 overflow-hidden bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[420px] sm:min-h-[560px]">
            <div className="absolute inset-x-0 bottom-0 h-3/4 rounded-t-full bg-brand-yellow" />
            <img src={baba.url} alt="Mladá žena z kampane Ready for more" className="absolute bottom-0 left-0 z-10 h-[88%] w-[52%] rounded-t-[5rem] object-cover object-top" loading="lazy" decoding="async" />
            <img src={chalan.url} alt="Mladý muž z kampane Ready for more" className="absolute bottom-0 right-0 z-20 h-full w-[54%] rounded-t-[5rem] object-cover object-top shadow-soft-pink" loading="lazy" decoding="async" />
            <span className="absolute right-0 top-4 z-30 -rotate-3 rounded-lg bg-brand-pink px-4 py-2 text-sm font-black text-primary-foreground">PARTIA = LEPŠIA CENA</span>
          </div>
          <div><p className="eyebrow text-brand-pink">04 — O2 Spolu</p><h2 className="mt-3 font-sans text-4xl font-black leading-none sm:text-6xl">Dajte sa dokopy.<br /><span className="text-brand-teal">Plaťte menej.</span></h2><p className="mt-5 max-w-xl text-lg">Čím viac vás je, tým výhodnejšie to je pre všetkých. Dajte sa dokopy s partiou a šetrite spolu.</p>
            <div className="mt-8 flex items-end gap-4 border-b-2 border-foreground pb-5"><span className="text-7xl font-black text-brand-pink">17,50 €</span><span className="pb-2 text-sm font-bold">/ osoba mesačne<br />pri 4+ ľuďoch</span></div>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">{levels.map(([people, price, note]) => <div key={people} className="border-l-4 border-brand-yellow pl-3"><p className="text-2xl font-black">{people}×</p><p className="font-black text-brand-teal-deep">{price}</p><p className="mt-1 text-xs text-muted-foreground">{note}</p></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  const audiences = [
    { label: "ISIC", title: "Študenti", text: "Takmer 80 % mladých si cení výhody v mobilných službách a najmä strímovacie predplatné.", image: dievca.url, color: "bg-brand-teal" },
    { label: "ITIC", title: "Učitelia", text: "Hotspot z telefónu pomôže na hodinách, keď školské wifi nestačí.", image: ucitelka.url, color: "bg-brand-orange" },
    { label: "EURO<26", title: "Mladí pracujúci", text: "Hľadajú stabilné pokrytie, signál na podujatiach a roaming, ktorý funguje.", image: chlapec.url, color: "bg-brand-pink text-primary-foreground" },
  ];
  return (
    <section id="pre-koho" className="scroll-mt-20 bg-background py-14 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow text-brand-pink">05 — Pre koho je to</p><h2 className="mt-3 font-sans text-4xl font-black sm:text-6xl">Jeden paušál.<br />Tri rôzne životy.</h2><div className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:px-0">{audiences.map((item, i) => <article key={item.label} className={`relative min-h-[520px] w-[82%] shrink-0 snap-center overflow-hidden rounded-xl ${item.color} lg:w-auto ${i === 1 ? "lg:translate-y-8" : ""}`}><div className="relative z-20 p-6"><p className="eyebrow">{item.label}</p><h3 className="mt-1 text-3xl font-black">{item.title}</h3><p className="mt-3 max-w-xs text-sm font-medium leading-relaxed">{item.text}</p></div><img src={item.image} alt={`${item.title} z kampane Ready for more`} className="absolute inset-x-0 bottom-0 h-[65%] w-full object-cover object-top" loading="lazy" decoding="async" /></article>)}</div></div></section>
  );
}

export function MediaSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => trackRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  return (
    <section id="media" className="scroll-mt-20 border-y-2 border-border bg-background py-12 sm:py-16"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0"><p className="eyebrow text-brand-pink">06 — Píšu o nás</p><h2 className="mt-2 truncate font-sans text-3xl font-black sm:text-5xl">Všimli si nás</h2></div><div className="flex shrink-0 gap-2"><Button variant="outline" size="icon" aria-label="Predchádzajúce médiá" onClick={() => move(-1)}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Ďalšie médiá" onClick={() => move(1)}><ArrowRight /></Button></div></div>
      <div ref={trackRef} className="no-scrollbar -mx-5 mt-8 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">{media.map(([outlet, title, href], i) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" title={title} className={`group flex h-24 w-44 shrink-0 snap-start items-center justify-center rounded-lg border-2 border-foreground/10 px-5 text-center font-black transition-transform hover:-translate-y-1 ${i % 4 === 0 ? "bg-brand-yellow" : i % 4 === 1 ? "bg-brand-teal" : i % 4 === 2 ? "bg-brand-pink text-primary-foreground" : "bg-brand-orange"}`}><span className="text-lg leading-none">{outlet}</span><ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" /></a>)}</div></div></section>
  );
}