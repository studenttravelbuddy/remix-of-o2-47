import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import baba from "@/assets/baba.webp.asset.json";
import chalan from "@/assets/chalan.webp.asset.json";
import chlapec from "@/assets/chlapec.webp.asset.json";
import dievca from "@/assets/dievca.webp.asset.json";
import ucitelka from "@/assets/hf_20260905_211704_30a25153-0e2c-49be-994f-970b6926a370.webp.asset.json";
import photoOne from "@/assets/tlacovka-o2-ckmsyts-foto1.jpg.asset.json";
import photoTwo from "@/assets/tlacovka-o2-ckmsyts-foto2.jpg.asset.json";
import { Button } from "@/components/ui/button";


const MAXX_LINK = "https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx";
const JUNIOR_LINK = "https://www.o2.sk/ponuka/mobilne-sluzby/o2-junior";

const coreBenefits = [
  "100 GB dát v 5G v plnej rýchlosti každý mesiac",
  "Nevyužité dáta sa prenesú — až 180 GB v ďalšom mesiaci",
  "Po vyčerpaní dát sa internet nevypne, iba spomalí",
  "Neobmedzené volania a SMS/MMS na Slovensku aj v EÚ",
  "Roaming v EÚ vrátane Nórska, Islandu, Lichtenštajnska a Gibraltáru",
  "Predplatné v cene paušálu na 12 mesiacov: Netflix, Voyo, HBO Max, O2 TV alebo Refresher — všetko v cene paušálu, nič nedoplácaš",
  "Predplatnú službu môžeš meniť každý mesiac",
  "Bez viazanosti — odídeš, kedy chceš",
];

const tiers = [
  {
    id: "solo",
    price: "20 €",
    people: "Sám za seba",
    task: "Aktivuj si O2 Maxx na svoj platný preukaz ISIC, ITIC alebo EURO<26.",
    extras: [],
    highlights: ["Základná cena 20 € mesačne"],
    color: "bg-brand-teal text-foreground",
  },
  {
    id: "duo",
    price: "20 €",
    people: "Dvaja v O2 Spolu",
    task: "Spoj sa s jedným človekom v O2 Spolu.",
    extras: ["10 GB dátová rezerva navyše pre skupinu"],
    highlights: ["Rovnaká cena 20 €", "+ 10 GB dátová rezerva navyše"],
    color: "bg-brand-teal-deep text-primary-foreground",
  },
  {
    id: "trio",
    price: "cca 18,30 €",
    people: "Traja v O2 Spolu",
    task: "Pridajte sa traja do jednej skupiny O2 Spolu.",
    extras: ["Skupinová odmena 5 € mesačne rozdelená medzi troch"],
    highlights: ["− 1,70 € mesačne oproti 20 €", "Skupinová odmena 5 € mesačne"],
    color: "bg-brand-yellow text-foreground",
  },
  {
    id: "quad",
    price: "17,50 €",
    people: "Štyria a viac",
    task: "Dajte sa dokopy štyria alebo viacerí — najvýhodnejšia cena.",
    extras: ["Skupinová odmena 10 € mesačne rozdelená medzi členov skupiny"],
    highlights: ["− 2,50 € mesačne oproti 20 €", "Skupinová odmena 10 € mesačne"],
    color: "bg-brand-teal-deep text-primary-foreground",
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

function NamePlate({ className, name, role }: { className: string; name: string; role: string }) {
  return (
    <span className={`absolute z-20 max-w-[85%] rounded-lg bg-background/95 px-2.5 py-1.5 text-left shadow-soft-teal ${className}`}>
      <span className="block text-[11px] font-black leading-tight">{name}</span>
      <span className="block text-[10px] leading-tight text-muted-foreground">{role}</span>
    </span>
  );
}

export function PressGallery() {
  return (
    <section aria-labelledby="press-title" className="bg-background px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-muted-foreground">Zo zákulisia</p>
        <h2 id="press-title" className="mt-2 max-w-2xl font-sans text-xl font-black sm:text-3xl">
          1. september 2026 — oficiálny štart spolupráce O2 × CKM SYTS
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <figure className="relative overflow-hidden rounded-xl border-2 border-border bg-muted">
            <img src={photoOne.url} alt="Lukáš Baťo prezentuje spoluprácu O2 a CKM SYTS" className="aspect-[3/2] h-full w-full object-cover" width={1154} height={768} loading="lazy" decoding="async" />
            <NamePlate className="bottom-3 right-2 max-w-[52%]" name="Lukáš Baťo" role="Product Owner, O2 Slovakia" />
          </figure>
          <figure className="relative overflow-hidden rounded-xl border-2 border-border bg-muted">
            <img src={photoTwo.url} alt="Michal Bučko a Lukáš Baťo predstavujú nové partnerstvo" className="aspect-[3/2] h-full w-full object-cover" width={1154} height={768} loading="lazy" decoding="async" />
            <NamePlate className="bottom-3 left-2 max-w-[46%]" name="Mgr. Michal Bučko" role="prezident CKM SYTS" />
            <NamePlate className="bottom-3 right-2 max-w-[46%]" name="Lukáš Baťo" role="Product Owner, O2 Slovakia" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  const [active, setActive] = useState(3);
  const tier = tiers[active] ?? tiers[0]!;

  return (
    <section id="benefity" className="scroll-mt-20 overflow-hidden bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="font-sans text-3xl font-black uppercase tracking-tight text-foreground sm:text-5xl">O2 MAXX</p>
          <h2 className="mx-auto mt-3 max-w-4xl font-sans text-2xl font-black leading-tight sm:text-5xl">
            Celý balík výhod pre držiteľov{" "}
            <span className="text-brand-teal-deep">ISIC, ITIC a EURO&lt;26</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-lg">
            Začíname na 17,50 € mesačne. Klikni na cenu a ukážu sa ti benefity.
          </p>
        </div>

        {/* cenová os */}
        <p className="mt-10 text-center text-sm font-black uppercase tracking-wide text-brand-teal-deep">Klikni a ukážu sa ti benefity</p>
        <div className="no-scrollbar -mx-5 mt-4 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="relative flex min-w-[560px] items-stretch gap-3 sm:min-w-0">
            <div className="absolute left-0 right-0 top-7 h-1 rounded bg-border" aria-hidden="true" />
            {[...tiers].reverse().map((item) => {
              const index = tiers.indexOf(item);
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(index)}
                  className={`relative flex-1 rounded-xl px-3 pb-4 pt-3 text-left transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${selected ? `${item.color} shadow-soft-teal` : "bg-brand-highlight text-foreground hover:-translate-y-0.5"}`}
                >
                  <span className={`block h-4 w-4 rounded-full border-4 bg-background ${selected ? "border-foreground" : "border-brand-teal"}`} />
                  <span className="mt-3 block text-2xl font-black leading-none sm:text-3xl">{item.price}</span>
                  <span className="mt-1 block text-xs font-bold">{item.people}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="mx-auto w-full max-w-[280px]">
            <div className="relative flex h-[440px] flex-col overflow-hidden rounded-[2.75rem] border-[10px] border-foreground bg-brand-teal shadow-soft-teal sm:h-[520px]">
              <div className="mx-auto h-6 w-24 rounded-b-2xl bg-foreground" />
              <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
                <p className="eyebrow">O2 Maxx</p>
                <p className="mt-3 text-6xl font-black leading-none">{tier.price}</p>
                <p className="mt-2 font-bold">mesačne · {tier.people}</p>
                <div className="my-6 h-px w-16 bg-foreground/30" />
                <p className="text-lg font-black">100 GB</p>
                <p className="text-sm">+ všetko okolo</p>
                <Button variant="ink" size="lg" className="mt-7" asChild>
                  <a href={MAXX_LINK} target="_blank" rel="noopener noreferrer">Chcem ho <ArrowUpRight /></a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className={`rounded-xl px-5 py-4 ${tier.color}`}>
              <p className="text-sm font-black uppercase tracking-wide">Čo pre to treba urobiť</p>
              <p className="mt-1 text-base font-bold">{tier.task}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tier.highlights.map((highlight, i) => (
                <span
                  key={highlight}
                  className={`rounded-full px-4 py-2 text-sm font-black text-foreground ${i === 0 ? "bg-brand-yellow" : "bg-brand-highlight"}`}
                >
                  {highlight}
                </span>
              ))}
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[...tier.extras, ...coreBenefits].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 border-t-2 border-border pt-3 text-sm font-medium leading-relaxed">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-deep" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


export function WhyMaxxSection() {
  const reasons = ["Voláš a píšeš komukoľvek bez počítania kontaktov.", "Ročné predplatné je priamo v cene.", "Nevyužité dáta sa prenesú do ďalšieho mesiaca.", "Internet funguje ďalej aj po minutí 100 GB."];
  return (
    <section className="bg-brand-teal-light py-14 sm:py-20"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow">Bez zbytočného počítania</p><div className="mt-6 grid gap-x-12 gap-y-6 md:grid-cols-2">{reasons.map((reason) => <div key={reason} className="flex items-start gap-3 border-t-2 border-foreground/20 pt-4"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-teal-deep" aria-hidden="true" /><p className="max-w-sm text-base font-bold sm:text-lg">{reason}</p></div>)}</div></div></section>
  );
}

export function TogetherSection() {
  const levels = [
    ["1", "20 €", "samostatne"], ["2", "20 €", "+ 10 GB dátová rezerva"], ["3", "cca 18,30 €", "odmena 5 € rozdelená medzi troch"], ["4+", "17,50 €", "odmena 10 € rozdelená medzi skupinu"],
  ];
  return (
    <section id="spolu" className="scroll-mt-20 overflow-hidden bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow text-muted-foreground">Výhodnejšie v partii</p>
            <h2 className="mt-2 font-sans text-4xl font-black leading-none text-brand-teal-deep sm:text-7xl">O2 Spolu</h2>
            <div className="relative mt-6 min-h-[320px] sm:min-h-[440px]">
              <div className="absolute inset-x-0 bottom-0 h-2/3 rounded-t-[3rem] bg-brand-yellow" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
                <img src={baba.url} alt="Mladá žena z kampane Ready for more" className="h-[300px] w-[38%] object-cover object-top sm:h-[400px]" loading="lazy" decoding="async" />
                <img src={chalan.url} alt="Mladý muž z kampane Ready for more" className="-ml-4 h-[320px] w-[38%] object-cover object-top sm:h-[430px]" loading="lazy" decoding="async" />
                <img src={dievca.url} alt="Mladá držiteľka preukazu z kampane Ready for more" className="-ml-4 h-[290px] w-[36%] object-cover object-top sm:h-[385px]" loading="lazy" decoding="async" />
              </div>
            </div>
            <p className="mt-4 text-center text-sm font-black uppercase tracking-wide">Partia = lepšia cena</p>
          </div>
          <div>
            <h3 className="font-sans text-3xl font-black leading-none sm:text-6xl">Dajte sa dokopy.<br /><span className="text-brand-teal-deep">Plaťte menej.</span></h3>
            <p className="mt-4 max-w-xl text-base sm:text-lg">Čím viac vás je, tým výhodnejšie to je pre všetkých. Dajte sa dokopy s partiou a šetrite spolu.</p>
            <div className="mt-7 flex items-end gap-4 border-b-2 border-foreground pb-5"><span className="text-5xl font-black text-brand-teal-deep sm:text-7xl">17,50 €</span><span className="pb-2 text-sm font-bold">/ osoba mesačne<br />pri 4+ ľuďoch</span></div>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">{levels.map(([people, price, note]) => <div key={people} className="border-l-4 border-brand-yellow pl-3"><p className="text-2xl font-black">{people}×</p><p className="font-black text-brand-teal-deep">{price}</p><p className="mt-1 text-xs text-muted-foreground">{note}</p></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  const audiences = [
    { label: "ISIC", title: "Študenti", text: "Takmer 80 % mladých si cení výhody v mobilných službách a najmä strímovacie predplatné — Netflix, Voyo, HBO Max, O2 TV alebo Refresher.", image: dievca.url, color: "bg-brand-teal text-foreground", link: MAXX_LINK, cta: "O2 Maxx", price: "20 €", priceNote: "mesačne · od 17,50 € s O2 Spolu", perks: [] as string[] },
    { label: "ITIC", title: "Učitelia", text: "Hotspot z telefónu pomôže na hodinách, keď školské wifi nestačí.", image: ucitelka.url, color: "bg-brand-orange text-foreground", link: MAXX_LINK, cta: "O2 Maxx", price: "20 €", priceNote: "mesačne · od 17,50 € s O2 Spolu", perks: [] as string[] },
    { label: "EURO<26", title: "Mladí pracujúci", text: "Hľadajú stabilné pokrytie, signál na podujatiach a roaming, ktorý funguje.", image: chalan.url, color: "bg-brand-yellow text-foreground", link: MAXX_LINK, cta: "O2 Maxx", price: "20 €", priceNote: "mesačne · od 17,50 € s O2 Spolu", perks: [] as string[] },
    { label: "O2 Junior", title: "Žiaci do 15 rokov", text: "Samostatná ponuka pre najmladších. Paušál im aktivuje rodič alebo zákonný zástupca.", image: chlapec.url, color: "bg-brand-highlight text-foreground", link: JUNIOR_LINK, cta: "O2 Junior", price: "10,25 €", priceNote: "mesačne s O2 Paušálom", perks: ["10 GB dát s preukazom ISIC alebo EURO<26", "5 čísel s neobmedzenými volaniami a SMS", "O2 Security v cene", "Nastavenie limitov v O2 Aplikácii"] },
  ];
  return (
    <section id="pre-koho" className="scroll-mt-20 bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-muted-foreground">Pre koho je to</p>
        <h2 className="mt-3 font-sans text-3xl font-black sm:text-6xl">Jeden paušál.<br />Rôzne životy.</h2>
        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:px-0">
          {audiences.map((item, i) => (
            <article key={item.label} className={`relative flex min-h-[600px] w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-xl ${item.color} lg:w-auto ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}>
              <div className="relative z-20 p-6">
                <p className="eyebrow">{item.label}</p>
                <h3 className="mt-1 text-2xl font-black">{item.title}</h3>
                <p className="mt-2 text-3xl font-black leading-none">{item.price}</p>
                <p className="text-xs font-bold">{item.priceNote}</p>
                <p className="mt-3 max-w-xs text-sm font-medium leading-relaxed">{item.text}</p>
                {item.perks.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {item.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-xs font-bold leading-snug">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-black underline underline-offset-4">
                  {item.cta} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <img src={item.image} alt={`${item.title} z kampane Ready for more`} className="mt-auto h-56 w-full object-cover object-top" loading="lazy" decoding="async" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MediaSection() {
  return (
    <section id="media" className="scroll-mt-20 border-y-2 border-border bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow text-muted-foreground">Píšu o nás</p>
        <h2 className="mt-2 font-sans text-xl font-black sm:text-4xl">O paušáli a našej spolupráci v médiách</h2>
        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          {media.map(([outlet, title, href]) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" title={title} className="group inline-flex min-h-12 items-center gap-2 border-b-2 border-border py-2 text-left">
                <span className="text-lg font-black">{outlet}</span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-pink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
