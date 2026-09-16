import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SPOLU_LINK = "https://www.o2.sk/spolu";

const items: { q: string; a: string; link?: string }[] = [
  {
    q: "Ako dlho platí ponuka?",
    a: "Ponuka O2 Maxx platí od 1. septembra 2026 a trvá, kým máš platný preukaz ISIC, ITIC alebo EURO<26. Ak preukaz stratí platnosť, tarif sa po skončení fakturačného obdobia zmení na O2 Fér.",
  },
  {
    q: "Ako funguje O2 Spolu?",
    a: "Čím viac programov spojíte do skupiny, tým viac skupina dostane. Pri 2 programoch je to dátová rezerva 10 GB a 1 GB dát v Zóne 2, pri 3 programoch odmena 5 € mesačne a rezerva 20 GB, pri 4 a viac programoch odmena 10 € mesačne a rezerva 30 GB. Odmenu získa skupina vtedy, ak sa počas celého zúčtovacieho obdobia zakladateľa nezmení počet členov skupiny, a vypláca sa cez O2 Aplikáciu na účet alebo ako poukážka.",
    link: SPOLU_LINK,
  },
  {
    q: "Čo presne dostanem pri predplatnom — môžem si službu meniť?",
    a: "K tarifu O2 Maxx dostaneš na 12 mesiacov predplatné jednej zo služieb Netflix, Voyo, HBO Max, O2 TV alebo Refresher. Voľbu môžeš meniť každý mesiac a cena tarifu ostáva 20 €.",
  },
  {
    q: "Dá sa kombinovať s inou tarifou?",
    a: "O2 Maxx môžeš spojiť s ďalšími ľuďmi cez O2 Spolu. Pri štyroch ľuďoch v skupine môže cena O2 Maxx klesnúť na 17,50 € mesačne, ak je odmena 10 € rozdelená rovnomerne medzi 4 členov skupiny.",
    link: SPOLU_LINK,
  },
];

export function CampaignFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow text-muted-foreground">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
          Pýtaš sa?
          <br />
          Odpovedáme.
        </h2>

        <div className="mt-8 sm:mt-12">
              <Accordion type="single" collapsible>
                {items.map((item) => (
                  <AccordionItem
                    key={item.q}
                    value={item.q}
                    className="border-b-2 border-border"
                  >
                    <AccordionTrigger className="min-h-12 text-left font-display text-base font-bold sm:text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.a}
                      {item.link ? (
                        <>
                          {" "}
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-foreground underline decoration-brand-teal decoration-2 underline-offset-4"
                          >
                            Všetky podmienky O2 Spolu na o2.sk/spolu
                          </a>
                        </>
                      ) : null}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
        </div>

        <p className="mt-10 rounded-2xl bg-brand-teal-light p-5 text-sm">
          Nenašiel/-la si odpoveď?{" "}
          <a
            href="mailto:info@ckm.sk"
            className="font-bold text-foreground underline decoration-brand-teal decoration-2 underline-offset-4"
          >
            Napíš nám
          </a>{" "}
          a poradíme ti s výberom podľa tvojho preukazu.
        </p>
      </div>
    </section>
  );
}
