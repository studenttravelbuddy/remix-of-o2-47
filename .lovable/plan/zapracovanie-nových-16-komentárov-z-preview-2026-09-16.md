# Zapracovanie nových 16 komentárov z preview

## 1. Hero (úvodná obrazovka)

- Nálepku „100 GB. MAXX možností.“ presuniem nad fotku (nie k hlave postavy) a zmením text na **„Začni aj Ty nový školský rok na MAXXimum“**.
- Štítky pod nadpisom upresním:
  - „100 GB“ → **„100 GB v 5G + prenos dát do ďalšieho mesiaca“**
  - „Neobmedzené volania a správy“ → **„Neobmedzené volania a správy na Slovensku a v EÚ“**
  - „Predplatné na rok“ → **„Netflix / HBO Max / Voyo a iné v cene paušálu na rok“**

## 2. Sekcia benefitov

- Malý nadpis nad hlavným titulkom dám **čiernou a výrazne väčší: „O2 MAXX“**.
- K cenovej osi doplním jasnú výzvu **„Klikni na cenu a ukážu sa ti benefity“**.
- Pri každej úrovni farebne zvýrazním, **čo navyše získaš oproti 20 € pre jedného** (napr. „+10 GB rezerva“, „−1,70 €/mesiac“, „−2,50 €/mesiac“) ako samostatné farebné štítky nad zoznamom.
- Tlačidlo „Čo je streamovanie?“ **odstránim**.
- Pri predplatnom jasne napíšem, že je **v cene paušálu** (Netflix, Voyo, HBO Max, O2 TV alebo Refresher na 12 mesiacov v cene paušálu).

## 3. Fotky z tlačovej konferencie

- Menovky umiestnim priamo k správnym osobám:
  - prvá fotka — menovka **Lukáš Baťo, Product Owner, O2 Slovakia** pri postave s mikrofónom,
  - druhá fotka — **Mgr. Michal Bučko, prezident CKM SYTS** pri ňom a **Lukáš Baťo** pri druhej postave, každá menovka pri správnej osobe, nie v rohu.

## 4. Sekcia „Pre koho je to“

- Pri karte ISIC rozpíšem strímovacie služby menovite: **Netflix, Voyo, HBO Max, O2 TV, Refresher**.
- Do karty **O2 Junior** doplním cenu a stručné výhody (cenu a výhody overím priamo na oficiálnej stránke O2 Junior, aby sedeli).

## 5. Médiá

- Zoznam médií prerobím tak, aby názvy boli **vedľa seba v riadku** (viacstĺpcovo, na mobile posúvateľné), nie pod sebou. Zostáva 9 odkazov so šípkou, otvárajú sa v novom okne.

## 6. este prehod sekciu o2 spolu ako prvu o2 maxx ako druhu potom ten citat o komunikacii ako 3     

## Technické detaily

- Zmeny v `src/routes/index.tsx` (hero) a `src/components/O2MaxxSections.tsx` (benefity, fotogaléria, cieľové skupiny, médiá).
- Bez nových tvrdých farieb — existujúce dizajnové tokeny.
- Zachovám prístupnosť, lazy loading a `prefers-reduced-motion`.

## Overenie

- Kontrola v prehliadači na 390 px a 1280 px: bez pretekania, menovky pri správnych osobách, médiá v riadkoch.
- Po dokončení odpoviem do všetkých dotknutých vlákien komentárov.