import {
  ArrowUpRight,
  CircleHelp,
  Globe2,
  MessageCircleMore,
  Play,
  Signal,
  Smartphone,
  UserRound,
  UsersRound,
} from "lucide-react";

import photoOne from "@/assets/tlacovka-o2-ckmsyts-foto1.jpg.asset.json";
import photoTwo from "@/assets/tlacovka-o2-ckmsyts-foto2.jpg.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const MAXX_LINK = "https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx";

const benefits = [
  {
    id: "data",
    icon: Signal,
    number: "100 GB",
    title: "Dáta v plnej rýchlosti",
    summary: "100 GB dát mesačne v plnej rýchlosti — dosť na sociálne siete, streamovanie aj navigáciu bez obmedzení.",
    detail: "Ak v danom mesiaci minieš len 20 GB, zvyšných 80 GB sa ti neminie — prenesieme ti ich do ďalšieho mesiaca. Vtedy máš k dispozícii až 180 GB. Nemusíš sa báť, že o dáta, ktoré si zaplatil/-a, prídeš. Po vyčerpaní limitu sa internet nevypne — len sa spomalí, takže základné veci ako správy, mapy a prehliadanie fungujú ďalej.",
  },
  {
    id: "calls",
    icon: MessageCircleMore,
    number: "∞",
    title: "Volania a SMS/MMS",
    summary: "Voláš a píšeš bez počítania — na Slovensku aj v celej EÚ.",
    detail: "To isté platí aj vtedy, keď voláš zo Slovenska niekam do Európskej únie.",
  },
  {
    id: "eu",
    icon: Globe2,
    number: "EÚ",
    title: "Skutočne celá EÚ",
    summary: "Tvoj tarif funguje presne rovnako aj keď si mimo Slovenska.",
    detail: "Platí v celej EÚ, Nórsku, na Islande, v Lichtenštajnsku aj na Gibraltári. Balíš kufre a nič neriešiš.",
  },
  {
    id: "stream",
    icon: Play,
    number: "12×",
    title: "Predplatné na celý rok",
    summary: "Vyber si Netflix, Voyo, HBO Max, O2 TV alebo Refresher a voľbu môžeš meniť každý mesiac.",
    detail: "Predplatné jednej z obľúbených služieb máš na 12 mesiacov. Cena tarifu ostáva rovnakých 20 €, aj keď si predplatné vyberieš.",
  },
  {
    id: "freedom",
    icon: Smartphone,
    number: "0×",
    title: "Bez viazanosti",
    summary: "Žiadny podpis na 12 alebo 24 mesiacov.",
    detail: "Odídeš, keď budeš chcieť.",
  },
];

const media = [
  ["TOUCHIT.sk", "O2 má nový paušál pre mladých: Za 20 eur ponúkne 100 GB dát aj ročné predplatné Netflixu", "https://touchit.sk/o2-ma-novy-pausal-pre-mladych-za-20-eur-ponukne-100-gb-dat-aj-rocne-predplatne-netflixu/906239/"],
  ["Refresher.sk", "O2 má nový paušál pre mladých. Za 20 eur mesačne získaš 100 GB dát, neobmedzené volania aj správy", "https://refresher.sk/210087-O2-ma-novy-pausal-pre-mladych-Za-20-eur-mesacne-ziskas-100-GB-dat-neobmedzene-volania-aj-spravy"],
  ["omediach.com", "Online svet môže mladým veľa priniesť, ak ho vedia využívať vo svoj prospech. Nový paušál O2 Maxx im dáva viac priestoru využiť ho naplno", "https://www.omediach.com/internet/30480-online-svet-moze-mladym-vela-priniest-ak-ho-vedia-vyuzivat-vo-svoj-prospech-novy-pausal-o2-maxx-im-dava-viac-priestoru-vyuzit-ho-naplno"],
  ["womanman.sk", "Nový paušál O2 Maxx dáva mladým ľuďom viac priestoru", "https://womanman.sk/novy-pausal-o2-maxx-dava-mladym-ludom-viac-priestoru/"],
  ["MojAndroid.sk", "O2 Maxx ponúka 100 GB dát a ďalšie zľavy za 20 eur mesačne. Pre koho je určený?", "https://www.mojandroid.sk/o2-maxx-pausal-studenti-ucitelia/"],
  ["SmartArena.sk", "O2 spúšťa Maxx za 20 eur: 100 GB dát a Netflix či HBO Max na rok", "https://www.smartarena.sk/o2-spusta-maxx-za-20-eur-100-gb-dat-a-netflix-ci-hbo-max-na-rok/"],
  ["TECHBYTE.sk", "O2 prekvapilo Telekom: Za 20 eur vám dá 100 GB dát aj digitálne služby na celý rok", "https://www.techbyte.sk/2026/09/o2-prekvapilo-telekom-20-eur-100-gb-dat/"],
  ["Svetapple.sk", "Nový PAUŠÁL O2 Maxx za 20 € ponúka 100 GB aj Netflix", "https://svetapple.sk/lifestyle/domace-spravy/o2-spustilo-nalozeny-pausal-za-20-eur-ma-100-gb-aj-netflix/"],
  ["techvia.sk", "Viac dát, viac možností, menej počítania. O2 prichádza s paušálom O2 Maxx za 20 eur mesačne", "https://www.techvia.sk/viac-dat-viac-moznosti-menej-pocitania-o2-prichadza-s-pausalom-o2-maxx-za-20-eur-mesacne/"],
] as const;

function PersonHotspot({ className, name }: { className: string; name: string }) {
  return (
    <div className={`group absolute ${className}`}>
      <button
        type="button"
        aria-label={name}
        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-brand-yellow text-foreground shadow-soft-yellow transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group-hover:scale-110"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-brand-pink" />
      </button>
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 translate-y-2 rounded-xl bg-foreground px-3 py-2 text-center text-xs font-bold text-background opacity-0 shadow-soft-teal transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {name}
      </span>
    </div>
  );
}

export function PressGallery() {
  return (
    <section aria-labelledby="press-title" className="bg-background px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-brand-pink">Zo zákulisia</p>
            <h2 id="press-title" className="mt-2 font-display text-2xl font-black sm:text-4xl">Moment, keď sa to začalo</h2>
          </div>
          <p className="hidden text-sm text-muted-foreground sm:block">Ukáž na označenú osobu</p>
        </div>
        <div className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0">
          <figure className="relative w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl border-2 border-border bg-muted shadow-soft-teal sm:w-auto">
            <img src={photoOne.url} alt="Lukáš Baťo prezentuje spoluprácu O2 a CKM SYTS na tlačovej konferencii" className="aspect-[3/2] h-full w-full object-cover" width={1154} height={768} loading="lazy" decoding="async" />
            <PersonHotspot className="left-[79%] top-[45%]" name="Lukáš Baťo, Product Owner, O2 Slovakia" />
          </figure>
          <figure className="relative w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl border-2 border-border bg-muted shadow-soft-teal sm:w-auto">
            <img src={photoTwo.url} alt="Michal Bučko a Lukáš Baťo predstavujú nové partnerstvo O2 a CKM SYTS" className="aspect-[3/2] h-full w-full object-cover" width={1154} height={768} loading="lazy" decoding="async" />
            <PersonHotspot className="left-[48%] top-[45%]" name="Mgr. Michal Bučko, prezident CKM SYTS" />
            <PersonHotspot className="left-[75%] top-[42%]" name="Lukáš Baťo, Product Owner, O2 Slovakia" />
          </figure>
        </div>
        <p className="mt-2 text-center text-sm font-bold text-muted-foreground">1. september 2026 — oficiálny štart spolupráce O2 × CKM SYTS</p>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section id="benefity" className="scroll-mt-20 bg-brand-teal py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow">02 — O2 Maxx</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-6xl">Veľa muziky.<br />Žiadne malé písmená.</h2>
            <div className="mt-7 flex items-end gap-3"><span className="font-display text-6xl font-black">20 €</span><span className="pb-2 text-sm font-bold">mesačne</span></div>
          </div>
          <p className="max-w-xl text-lg">Každý benefit si môžeš rozbaliť. Bez zbytočného počítania, s jasným vysvetlením.</p>
        </div>
        <Accordion type="multiple" className="mt-10 grid gap-4 lg:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AccordionItem key={benefit.id} value={benefit.id} className="self-start overflow-hidden rounded-2xl border-0 bg-background px-5 shadow-soft-teal sm:px-6">
                <AccordionTrigger className="min-h-24 gap-4 py-5 text-left hover:no-underline">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-yellow"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1"><span className="eyebrow text-brand-pink">{String(index + 1).padStart(2, "0")} · {benefit.number}</span><span className="mt-1 block font-display text-xl font-black sm:text-2xl">{benefit.title}</span></span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground"><p>{benefit.summary}</p><p className="mt-3 font-medium text-foreground">{benefit.detail}</p>{benefit.id === "stream" && <StreamingHelp />}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <Button variant="pink" size="xl" className="mt-8 w-full sm:w-auto" asChild><a href={MAXX_LINK} target="_blank" rel="noopener noreferrer">Chcem O2 Maxx <ArrowUpRight /></a></Button>
      </div>
    </section>
  );
}

function StreamingHelp() {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" className="mt-4 min-h-11"><CircleHelp /> Čo je streamovanie?</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs p-4 text-sm leading-relaxed">
          Streamovanie znamená pozeranie filmov, seriálov alebo počúvanie hudby priamo online, cez appku v telefóne, tablete alebo na televízii — bez sťahovania a bez potreby DVD či USB kľúča. Stačí pripojenie na internet a účet v danej appke (napr. Netflix). Presne také predplatné dostaneš teraz na rok zadarmo.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function WhyMaxxSection() {
  const reasons = [
    "Naozaj bez počítania kontaktov — voláš a píšeš komukoľvek, bez limitu na počet čísel.",
    "Ročné predplatné strímovacej služby priamo v cene — reálna služba na celý rok.",
    "Prenos nevyužitých dát do ďalšieho mesiaca — to, za čo si zaplatil/-a, nezmizne.",
    "Vyššia rýchlosť aj po minutí limitu 100 GB, takže internet naďalej funguje plynulo.",
    "S O2 Spolu sa dá ísť ešte nižšie — pri štyroch a viac ľuďoch cena klesne až na 17,50 €/mesiac.",
  ];
  return (
    <section className="bg-background py-14 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow text-brand-pink">03 — Prečo O2 Maxx</p><h2 className="mt-3 max-w-3xl font-display text-4xl font-black sm:text-6xl">Menej počítania.<br />Viac priestoru pre teba.</h2><ol className="mt-10 grid gap-3 md:grid-cols-2">{reasons.map((reason, i) => <li key={reason} className="flex items-start gap-4 rounded-2xl bg-brand-teal-light p-5"><span className="num-badge text-sm">{String(i + 1).padStart(2, "0")}</span><p className="pt-1.5 font-medium">{reason}</p></li>)}</ol></div></section>
  );
}

export function TogetherSection() {
  const levels = [
    { people: "1 osoba", price: "20 €", note: "samostatne", width: "lg:w-1/2" },
    { people: "2 ľudia", price: "20 €", note: "+ 10 GB dátová rezerva pre skupinu", width: "lg:w-2/3" },
    { people: "3 ľudia", price: "cca 18,30 €", note: "odmena 5 € mesačne rozdelená medzi troch", width: "lg:w-5/6" },
    { people: "4+ ľudia", price: "17,50 €", note: "odmena 10 € mesačne rozdelená medzi štyroch a viac", width: "lg:w-full" },
  ];
  return (
    <section id="spolu" className="scroll-mt-20 bg-brand-yellow py-14 sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"><div><p className="eyebrow">04 — O2 Spolu</p><div className="mt-5 flex gap-2" aria-hidden="true">{[0,1,2,3].map((person) => <span key={person} className="community-person flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal"><UserRound className="h-7 w-7" /></span>)}</div><h2 className="mt-6 font-display text-4xl font-black sm:text-6xl">Držte spolu.<br />Plaťte menej.</h2><p className="mt-5 max-w-md text-lg">Čím viac vás je, tým výhodnejšie to je pre všetkých. Dajte sa dokopy s partiou a šetrite spolu.</p></div><div className="space-y-3">{levels.map((level, i) => <div key={level.people} className={`ml-auto grid min-h-24 grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-background p-5 shadow-soft-yellow ${level.width}`}><div><p className="eyebrow text-brand-pink">{i + 1} · {level.people}</p><p className="mt-1 text-sm text-muted-foreground">{level.note}</p></div><p className="text-right font-display text-2xl font-black">{level.price}<span className="block text-xs">/mesiac</span></p></div>)}</div></div></section>
  );
}

export function AudienceSection() {
  return (
    <section id="pre-koho" className="scroll-mt-20 bg-background py-14 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow text-brand-pink">05 — Pre koho je to</p><h2 className="mt-3 font-display text-4xl font-black sm:text-6xl">Tvoj preukaz.<br />Tvoj spôsob používania.</h2><Tabs defaultValue="isic" className="mt-8"><TabsList className="no-scrollbar h-auto w-full justify-start gap-2 overflow-x-auto rounded-2xl bg-brand-teal-light p-2 sm:w-fit"><TabsTrigger value="isic" className="min-h-12 rounded-xl px-6 font-black data-[state=active]:bg-brand-teal">ISIC</TabsTrigger><TabsTrigger value="itic" className="min-h-12 rounded-xl px-6 font-black data-[state=active]:bg-brand-orange">ITIC</TabsTrigger><TabsTrigger value="eyc" className="min-h-12 rounded-xl px-6 font-black data-[state=active]:bg-brand-pink data-[state=active]:text-primary-foreground">EURO&lt;26</TabsTrigger></TabsList><div className="mt-4 rounded-2xl bg-brand-teal-light p-6 shadow-soft-teal sm:p-8"><TabsContent value="isic"><AudienceCopy title="Študenti" text="Takmer 80 % mladých uviedlo, že najhodnotnejšie je pre nich to, že s preukazom ISIC/ITIC/EURO<26 získavajú výhody aj v mobilných službách. Prekvapením bolo, ako veľmi si cenia práve strímovacie predplatné." /></TabsContent><TabsContent value="itic"><AudienceCopy title="Učitelia" text="V rozhovoroch sa často opakovala potreba zdieľať internet z telefónu (hotspot) na hodinách, keď školské wifi nestačí." /></TabsContent><TabsContent value="eyc"><AudienceCopy title="Mladí pracujúci" text="Táto skupina si dáta a ponuky vyberá zodpovednejšie a cielenejšie — hľadajú stabilné pokrytie a signál aj na veľkých podujatiach a roaming, ktorý funguje aj mimo EÚ." /></TabsContent></div></Tabs></div></section>
  );
}

function AudienceCopy({ title, text }: { title: string; text: string }) {
  return <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start"><span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow"><UsersRound /></span><div><h3 className="font-display text-2xl font-black">{title}</h3><p className="mt-2 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p></div></div>;
}

export function MediaSection() {
  return (
    <section id="media" className="scroll-mt-20 bg-brand-teal-light py-14 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow text-brand-pink">06 — Píšu o nás</p><h2 className="mt-3 max-w-3xl font-display text-4xl font-black sm:text-6xl">O našom partnerstve píšu aj médiá</h2><p className="mt-3 text-sm text-muted-foreground sm:hidden">Potiahni prstom →</p><div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-3">{media.map(([outlet, title, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="group flex min-h-56 w-[82%] shrink-0 snap-start flex-col justify-between rounded-2xl bg-background p-5 shadow-soft-teal transition-transform md:hover:-translate-y-1 sm:w-auto"><span className="w-fit rounded-full bg-brand-yellow px-3 py-1 text-xs font-black uppercase">{outlet}</span><h3 className="mt-6 font-display text-lg font-black leading-snug">{title}</h3><span className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-teal-deep">Čítať článok <ArrowUpRight className="transition-transform group-hover:translate-x-1" /></span></a>)}</div></div></section>
  );
}