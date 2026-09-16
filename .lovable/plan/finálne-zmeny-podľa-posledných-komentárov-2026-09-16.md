# Finálne zmeny podľa posledných komentárov

## 1. Farebnosť celej stránky (vlákno 15c4414d)

- Všetko, kde sa spomína **O2 / O2 Maxx / „Chcem O2 Maxx“**, bude **čierne alebo ISIC modré** — nikdy ružové ani oranžové.
- Ružová a oranžová prestanú byť dominantné (sú to farby konkurencie). Zostanú len ako jemné, drobné doplnky (tenká linka, malý detail), nie ako výplň veľkých plôch.
- Plné farebné boxy nahradím **bielym podkladom s farebným orámovaním**: karty cenovej osi, karty „Pre koho je to“, štítky výhod, blok „Čo pre to treba urobiť“.
- Hlavné tlačidlá budú čierne (prípadne ISIC modré) s bielym textom; sekundárne biele s čiernym rámom.
- Doplním ISIC modrú ako plnohodnotnú farbu do dizajnových tokenov, aby sa nikde nepísali farby natvrdo.

## 2. Pracovné číslovanie sekcií preč (vlákno d4e40007)

- Odstránim všetky popisky typu „03 —“, „04 — O2 Spolu“, „05 — Pre koho je to“, „06 — Píšu o nás“ z celej stránky. Kde nesú aj informáciu, nechám len samotný text bez čísla.

## 3. Sekcia z tlačovej konferencie (vlákna edbe3fa5, 40eabd5f)

- Nadpis „Deň, keď sme si povedali: ideme do toho spolu.“ nahradím textom, ktorý je dnes pod fotkami: **„1. september 2026 — oficiálny štart spolupráce O2 × CKM SYTS“**.
- Popisok pod fotkami zmažem.
- Menovky posuniem z úrovne hlavy **dolu k nohám** postáv, aby neprekrývali tváre — na oboch fotkách, pri správnych osobách.

## 4. Mobilná verzia (vlákno 7c41d61a)

- Prejdem celú stránku na šírke 390 px a sprehľadním ju: menšie a pokojnejšie nadpisy, väčšie rozostupy medzi sekciami, menej textu v jednom bloku.
- Hero na mobile skrátim tak, aby cena a hlavné tlačidlo boli hneď viditeľné bez skrolovania.
- Cenová os, karty „Pre koho je to“ a médiá budú na mobile pohodlne posúvateľné s jasným náznakom, že sa dá posúvať.
- Zachovám veľké dotykové plochy a žiadne vodorovné pretekanie.

## Technické detaily

- Zmeny v `src/styles.css` (nové/upravené tokeny, variant tlačidiel, štýl `offer-pill`), `src/routes/index.tsx` (hero, farby CTA), `src/components/O2MaxxSections.tsx` (fotogaléria, cenová os, O2 Spolu, cieľové skupiny, médiá), `src/components/CampaignFaq.tsx` a `src/components/SectionChips.tsx` podľa potreby.
- Žiadne natvrdo zapísané farby v komponentoch — iba tokeny.
- Zachová sa prístupnosť, lazy loading a `prefers-reduced-motion`.

## Overenie

- Kontrola v prehliadači na 390 px a 1280 px: bez pretekania, bez ružových/oranžových plôch pri O2, menovky pri nohách, sekcie bez čísel.
- Po dokončení odpoviem do všetkých piatich vlákien (15c4414d, d4e40007, edbe3fa5, 40eabd5f, 7c41d61a).
