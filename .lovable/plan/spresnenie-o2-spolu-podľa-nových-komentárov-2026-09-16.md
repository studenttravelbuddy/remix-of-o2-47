# Spresnenie O2 Spolu podľa nových komentárov

Päť nových vlákien sa týka sekcie O2 Spolu, benefitov a FAQ.

## 1. Úrovne bez „×“ (vlákno b7891d8f)

V prehľade úrovní nahradím „1× / 2× / 3× / 4×“ zrozumiteľným pomenovaním:
**1 osoba · 2 osoby · 3 osoby · 4 osoby**.

## 2. Odmena je rozdelená rovnomerne (vlákna 4a0454c2, a9159686)

- 3 osoby: „odmena 5 € rozdelená **rovnomerne medzi troch**“
- 4 osoby: „odmena 10 € rozdelená **rovnomerne medzi štyroch**“

## 3. Jasné podmienky O2 Spolu + odkaz (vlákno b7f5f1a3)

Podľa oficiálnej stránky o2.sk/spolu doplním do sekcie O2 Spolu krátky, jasný prehľad, čo skupina kedy dostane:


| Skupina                       | Čo získa každý mesiac                       |
| ----------------------------- | ------------------------------------------- |
| 2 programy (úroveň 1)         | dátová rezerva 10 GB + 1 GB v Zóne 2        |
| 3 programy (úroveň 2)         | odmena 5 € + rezerva 20 GB + 1 GB v Zóne 2  |
| 4 a viac programov (úroveň 3) | odmena 10 € + rezerva 30 GB + 1 GB v Zóne 2 |


Pod tabuľkou doplním podmienky:

- odmenu získa skupina, ak sa počas celého zúčtovacieho obdobia zakladateľa nezmení počet členov skupiny,
- odmena sa vypláca cez O2 Aplikáciu na účet alebo ako poukážka do e-shopu či predajne,
- ceny 18,30 € a 17,50 € vznikajú rozdelením odmeny rovnomerne medzi členov skupiny,
- viditeľný odkaz **„Všetky podmienky O2 Spolu na o2.sk/spolu“** (otvára sa v novom okne). Ten istý odkaz doplním aj k úrovniam v cenovej osi v sekcii benefitov.

## 4. Cena pri štyroch (vlákno 23a57077)

Vo FAQ aj v cenovej osi zjednotím znenie: **„Pri štyroch ľuďoch v skupine môže cena O2 Maxx klesnúť na 17,50 € mesačne ak je odmena 10 € rozdelená rovnomerne medzi 4 členov skupiny.“ [https://www.o2.sk/spolu](https://www.o2.sk/spolu)**

## Technické detaily

Zmeny v `src/components/O2MaxxSections.tsx` (TogetherSection — popisky úrovní, blok podmienok, odkaz; BenefitsSection — texty úrovní a odkaz) a `src/components/CampaignFaq.tsx` (znenie odpovede). Žiadne nové farby — len existujúce tokeny z brand manuálu.

## Overenie

Kontrola v prehliadači na 390 px a 1280 px: bez pretekania, odkaz na o2.sk/spolu funguje, úrovne a podmienky sedia s oficiálnou stránkou. Následne odpoviem do všetkých piatich vlákien.