# Redizajn O2 Maxx — hravá magazínová koláž

## Cieľ
Stránka má na prvý pohľad vysvetliť, že ide o paušál O2 Maxx **už od 17,50 € mesačne s O2 Spolu**, a okamžite ukázať, čo človek za túto cenu získava. Vzhľad bude mladší, vizuálnejší a menej boxový.

## Vizuálny smer
- Biele pozadie zostane dominantné.
- Použijú sa iba schválené farby: **#40B8B8, #FFC805, #EB0578, #FF7314 a biela** plus tmavý text pre čitateľnosť.
- Hlavným písmom zostane **Roboto**; charakter vytvoria veľké Roboto Black nadpisy, kurzíva, obrysové slová, farebné zvýraznenia a magazínové vrstvenie — bez zavádzania cudzieho dominantného fontu.
- Rovnaké zaoblené karty nahradí voľná redakčná kompozícia: veľké čísla, farebné štítky, linky, kruhy, presahy postáv a striedanie mierky.
- Všetkých päť dodaných postáv sa použije priamo z key visualu a rozmiestni sa v rôznych veľkostiach a polohách.

## 1. Prvý pohľad: cena a jasná ponuka
- Hneď v prvom obraze bude dominantné: **„O2 Maxx už od 17,50 € mesačne s O2 Spolu“**.
- Pri cene bude hneď čitateľne uvedené, že 17,50 € platí pri skupine 4 a viac ľudí; samostatná cena O2 Maxx zostane 20 €.
- Vedľa ceny bude krátky prehľad: **100 GB · neobmedzené volania a správy · ročné predplatné · bez viazanosti**.
- Príbeh partnerstva a presný citát zostanú zachované, ale vizuálne sa odľahčia a prestanú pôsobiť ako veľké samostatné boxy.

## 2. Mobil ako centrum benefitov
- Hlavná produktová časť dostane veľký vizuál smartfónu v strede.
- Na obrazovke bude jasne O2 Maxx, 20 € a CTA.
- Okolo telefónu budú asymetricky rozložené farebné callouty:
  - **100 GB** a prenos dát až do 180 GB,
  - **neobmedzené** volania a SMS/MMS,
  - **EÚ roaming** vrátane uvedených krajín,
  - **12 mesiacov predplatného** s dostupnými službami,
  - **bez viazanosti**.
- Základ každého benefitu bude viditeľný bez kliknutia. Rozbalenie zobrazí iba podrobnejšie vysvetlenie.
- Na mobile sa callouty zmenia na prehľadný swipe pás pod telefónom s indikátorom pozície.

## 3. Postavy z kampane
- Dodané postavy sa použijú ako výrazné fotografie, nie malé obrázky v kartách.
- Baba a chalan budú rámovať hlavnú ponuku a smerovať pozornosť k mobilu a benefitom.
- Dievča a chlapec pomôžu vizuálne odlíšiť ISIC/EURO<26 a mladšie publikum.
- Učiteľka podporí ITIC obsah.
- Postavy sa budú jemne prekrývať s farebnými tvarmi a sekciami; na mobile zostanú tváre aj dôležitý obsah bezpečne viditeľné.

## 4. O2 Spolu cez reálnych ľudí
- Súčasnú schému nahradí vizuálny príbeh skupiny ľudí z key visualu.
- Najvýraznejší bude výsledok **17,50 € / osoba pri 4+ ľuďoch**.
- Cesta 1 → 2 → 3 → 4+ ľudí zostane čitateľná, ale nebude v štyroch rovnakých kartách.
- Jednotlivé ceny a odmeny zostanú presne podľa schváleného obsahu.

## 5. Médiá ako malý logo slider
- Veľké článkové karty sa odstránia.
- Deväť médií sa zobrazí ako kompaktné malé logá v horizontálnom slide bare.
- Slider bude ovládateľný potiahnutím, šípkami aj klávesnicou; automatický pohyb sa zastaví pri interakcii a vypne pri obmedzených animáciách.
- Kliknutie na logo otvorí príslušný existujúci článok v novom okne.
- Použijú sa oficiálne logá médií uložené medzi projektovými assetmi; bez ďalších médií a bez zmeny deviatich odkazov.

## 6. Zvyšok stránky
- Fotky z tlačovky a interaktívne menovky zostanú, ale dostanú ľahší magazínový rám.
- „Pre koho je to“ sa premení z klasických tabových boxov na tri vizuálne vstupy s príslušnými postavami.
- FAQ zostane funkčný akordeón, vizuálne jednoduchší a pokojnejší než hlavná ponuka.
- CTA zostanú správne prelinkované na O2 Maxx.

## Technické detaily
- Nahrať päť dodaných WEBP fotografií cez projektový asset systém.
- Prepracovať kompozíciu v hlavnej stránke a sekciách O2 Maxx; zachovať existujúce schválené texty, ceny a odkazy.
- Rozšíriť farebné tokeny a animačné utility bez tvrdých farieb v komponentoch.
- Zachovať prístupnosť, ovládanie dotykom a klávesnicou, lazy loading, stabilné rozmery obrázkov a `prefers-reduced-motion`.

## Overenie
- Skontrolovať prvý viewport na mobile aj desktope: cena 17,50 € a hlavné benefity musia byť pochopiteľné bez scrollovania alebo rozbaľovania.
- Skontrolovať 390 px, tablet a 1280 px bez horizontálneho pretekania a bez prekrytia textu postavami.
- Overiť funkčnosť benefitov, mediálneho slidera, O2 Spolu, CTA a FAQ.
- Potvrdiť, že zostalo presne 9 médií a nikde sa neobjavia zakázané konkurenčné značky.
