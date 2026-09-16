import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Ako dlho platí ponuka?",
    a: "Ponuka O2 Maxx platí od 1. septembra 2026 a trvá, kým máš platný preukaz ISIC, ITIC alebo EURO<26. Ak preukaz stratí platnosť, tarif sa po skončení fakturačného obdobia zmení na O2 Fér.",
  },
  {
    q: "Ako funguje O2 Spolu?",
    a: "Čím viac ľudí sa dá dokopy, tým výhodnejšie to je pre skupinu. Dvaja získajú 10 GB dátovú rezervu navyše, pri troch sa skupinová odmena 5 € mesačne rozdelí medzi troch a pri štyroch alebo viacerých sa odmena 10 € mesačne rozdelí medzi členov skupiny.",
  },
  {
    q: "Čo presne dostanem pri predplatnom — môžem si službu meniť?",
    a: "K tarifu O2 Maxx dostaneš na 12 mesiacov predplatné jednej zo služieb Netflix, Voyo, HBO Max, O2 TV alebo Refresher. Voľbu môžeš meniť každý mesiac a cena tarifu ostáva 20 €.",
  },
  {
    q: "Dá sa kombinovať s inou tarifou?",
    a: "O2 Maxx môžeš spojiť s ďalšími ľuďmi cez O2 Spolu. Pri štyroch a viac ľuďoch klesne cena O2 Maxx až na 17,50 € mesačne.",
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
