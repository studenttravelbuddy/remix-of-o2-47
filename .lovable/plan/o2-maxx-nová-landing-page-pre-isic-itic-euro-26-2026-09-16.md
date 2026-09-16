# O2 Maxx — nová landing page pre ISIC / ITIC / EURO<26

## Cieľ
Prebudovať aktuálnu stránku na príbehovú, mobile-first prezentáciu partnerstva CKM SYTS × O2 a ponuky O2 Maxx. Zachovať tyrkysový vizuálny jazyk existujúcej stránky, no odstrániť staré alebo protirečivé časti, ktoré nepatria do nového zadania.

## Čo vytvorím

1. **Úvod partnerstva**
   - Stránka sa otvorí príbehom o spustení spolupráce 1. septembra 2026.
   - Presný citát Mgr. Michala Bučka zobrazím ako samostatný výrazný quote blok.
   - Zachovám logá ISIC → ITIC → EURO<26 v jednotnom komponente a viditeľné O2 logo.
   - Hlavné CTA „Chcem O2 Maxx“ povedie na oficiálnu stránku O2 Maxx.

2. **Fotopás z tlačovej konferencie**
   - Obe dodané fotografie vložím cez projektové assety.
   - Fotky dostanú jemný rám, tieň a rovnaké zaoblenie ako ostatné karty.
   - Nad Michalom Bučkom a Lukášom Baťom budú interaktívne body; hover, klávesnica aj tap zobrazia meno a titul.
   - Doplním presný popisok „1. september 2026 — oficiálny štart spolupráce O2 × CKM SYTS“.

3. **O2 Maxx a rozbaliteľné benefity**
   - Samostatné interaktívne karty pre 100 GB, volania a správy, roaming, ročné predplatné a bezviazanosť.
   - Pri streamovaní bude dostupné jednoduché vysvetlenie cez „?“ prvok.
   - Cena 20 € zostane jasne viditeľná; podmienku platnosti preukazu presuniem iba do FAQ.

4. **Prečo O2 Maxx**
   - Päť stručných argumentov podľa zadania, bez porovnávania a bez zmienok o konkurencii.

5. **O2 Spolu**
   - Responzívny rebríček/pyramída pre 1, 2, 3 a 4+ ľudí s presnými cenami a odmenami zo zadania.
   - Jednoduchá ilustrácia komunity zo značiek/ikoniek a jemná animácia, ktorá rešpektuje obmedzenie pohybu zariadenia.

6. **Pre koho je ponuka**
   - Prístupné taby ISIC, ITIC a EURO<26 s dodanými insightmi.
   - Na mobile budú taby a karty pohodlne posúvateľné prstom s jasným indikátorom.

7. **Médiá**
   - Sekcia „O našom partnerstve píšu aj médiá“ s presne deviatimi dodanými článkami.
   - Každá karta bude obsahovať textový badge média a titulok; odkazy sa otvoria v novom okne.
   - Nepridám žiadny ďalší článok.

8. **FAQ**
   - Nový kompaktný FAQ akordeón s piatimi témami zo zadania.
   - Odpovede použijú iba fakty z briefu; nič ďalšie nevymyslím.

9. **Mobil, prístupnosť a kontrola obsahu**
   - Stabilné rozmery, veľké dotykové plochy, bez horizontálneho pretekania a s podporou klávesnice.
   - Lazy loading obrázkov, zrozumiteľné alt texty a rešpektovanie `prefers-reduced-motion`.
   - Skontrolujem všetky odkazy, interakcie a rozloženie na mobile aj desktopoch.

## Obsah, ktorý odstránim alebo nahradím
- Staré segmenty o ďalších paušáloch, O2 Junior, pedagógových cenách, prenose čísla a všeobecných výhodách preukazov, pretože nie sú súčasťou nového zadania.
- Všetky texty a FAQ, ktoré spomínajú Orange alebo Yoxo.
- Staré tvrdenia a podmienky, ktoré by si odporovali s novým O2 Maxx obsahom.

## Technické riešenie
- Rozdelím dlhú stránku na malé komponenty pre fotogalériu, benefity, O2 Spolu, cieľové skupiny, médiá a FAQ.
- Použijem existujúce dizajnové tokeny a UI prvky; nové farby nebudú natvrdo zapisované v komponentoch.
- Fotografie uložím cez projektový asset systém, nie ako veľké binárne súbory v zdrojovom kóde.
- Aktualizujem SEO titulok a popis pre O2 Maxx landing page.

## Overenie
- Overím vykreslenie a interakcie na mobilnom rozmere približne 390 px a desktope 1280 px.
- Skontrolujem, že stránka nikde nespomína zakázané konkurenčné značky a obsahuje iba deväť zadaných mediálnych odkazov.
- Skontrolujem, že oba portrétové štítky fungujú myšou, klávesnicou aj dotykom.
