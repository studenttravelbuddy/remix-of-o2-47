# Zapracovanie 13 komentárov z preview

## 1. Hero (úvod)
- Vymazať odstavec o vzniku spolupráce („1. septembra 2026 sme spustili novú spoluprácu…“) z hero bloku. Cena, benefity a CTA zostávajú.

## 2. Sekcia s fotkami z tlačovky
- Celú sekciu presunúť nižšie na stránku (až za O2 Spolu / pred médiá), aby hneď po hero nasledovala ponuka.
- Fotky zmenšiť — menší rám, kompaktnejšia mriežka.
- Klikacie farebné terče nahradiť stálymi menovkami: meno a funkcia budú viditeľné priamo pri osobe (Mgr. Michal Bučko, prezident CKM SYTS; Lukáš Baťo, Product Owner, O2 Slovakia), bez nutnosti kliknutia.

## 3. Sekcia benefitov
- Nadpis zmeniť na: **„Celý balík výhod pre držiteľov ISIC, ITIC a EURO<26“**.
- Celú časť prerobiť na interaktívnu **cenovú os**: začína sa pri 17,50 € a postupne ukazuje, čo treba urobiť a čo za to človek dostane (17,50 € pri 4+ ľuďoch → 18,30 € pri troch → 20 € samostatne). Po kliknutí na bod na osi sa zobrazia všetky benefity danej úrovne.
- Vypísať úplne všetky výhody paušálu (100 GB, prenos dát až 180 GB, neobmedzené volania a správy v SR aj EÚ, roaming vrátane Nórska, Islandu, Lichtenštajnska a Gibraltáru, 12 mesiacov predplatného s možnosťou mesačnej zmeny, bez viazanosti, dátová rezerva pri O2 Spolu).
- Vizuálne pozdvihnúť mobil v strede sekcie — krajšie prevedenie, výraznejšie napojenie na cenovú os.

## 4. Sekcia O2 Spolu
- Výraznejšie pomenovať, že ide o **O2 Spolu** (veľký nadpis a označenie priamo pri vizuále).
- Fotku zmeniť tak, aby na nej bolo viac postáv z kampane, bližšie pri sebe — má to pôsobiť ako partia, nie ako dve oddelené postavy.
- Žiadne farebné štítky ani tvary nesmú prekrývať tváre a postavy.

## 5. Sekcia „Pre koho je to“
- V tretej karte (EURO<26) použiť mladého človeka, nie dieťa.
- Pridať štvrtú, samostatnú ponuku: **žiaci do 15 rokov — O2 Junior**, s vlastným popisom a odkazom na stránku O2 Junior. Sem patrí detská postava z kampane.

## 6. Sekcia Médiá
- Zrušiť farebné boxy. Zostanú iba názvy médií v riadku a pri každom šípka na preklik.
- Nadpis sekcie zmeniť na znenie **„O paušáli a našej spolupráci v médiách“**.
- Zostáva presne 9 existujúcich odkazov, otvárajú sa v novom okne.

## 7. FAQ
- Prvé dve otázky spojiť do jednej s odpoveďou v zmysle: **ponuka platí od 1. 9. 2026 a trvá, kým má držiteľ platný preukaz**; ak preukaz stratí platnosť, paušál sa po skončení fakturačného obdobia zmení na O2 Fér.

## Technické detaily
- Zmeny v `src/routes/index.tsx` (hero, poradie sekcií), `src/components/O2MaxxSections.tsx` (fotogaléria, cenová os, O2 Spolu, cieľové skupiny, médiá) a `src/components/CampaignFaq.tsx`.
- Bez nových tvrdých farieb — použijú sa existujúce dizajnové tokeny.
- Zachová sa prístupnosť (klávesnica, dotyk), lazy loading a `prefers-reduced-motion`.

## Overenie
- Kontrola na 390 px a 1280 px: bez pretekania, bez prekrytých tvárí, os a médiá funkčné.
- Po dokončení odpoviem do všetkých 13 vlákien komentárov.
