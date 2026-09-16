# Návrat plných farebných boxov + farby výhradne z brand manuálu

## Čo je zle teraz
Sekcie sú prevažne biele s tenkým farebným orámovaním — pôsobí to prázdno. Zároveň je v štýloch modrá #0065BD, ktorá v dodanom manuáli vôbec nie je.

## Farebná paleta (iba tieto farby)
- ISIC zelená (tyrkys) #40B8B8, Shadow Green #006666, Highlight #D9F1F1
- ISIC žltá #FEEF00, EYCA žltá #FFC805
- EYCA ružová #EB0578 (striedmo — odkazy, drobné zvýraznenia)
- ITIC oranžová #FF7314, Shadow Orange #B41E00
- Sivá #666666, biela, čierna

Zosúladím tokeny v `src/styles.css` s týmito hodnotami a **odstránim modrú #0065BD / #004F96** aj variant tlačidla `isic`, keďže v manuáli neexistuje. „ISIC modrú“ nahradím ISIC tyrkysovou / Shadow Green — ak si myslela inú konkrétnu modrú, napíš hex a doplním ho.

## Späť na plné boxy
- Cenová os: vybraná úroveň dostane plnú farebnú výplň (tyrkys / shadow green / žltá), nevybrané ostanú v svetlom Highlight podklade.
- Karty „Pre koho je to“: opäť plné farebné pozadia — ISIC tyrkys, ITIC oranžová, EYCA žltá, O2 Junior Highlight/Shadow Green.
- Blok „Čo pre to treba urobiť“ a štítky s výhodami: plná farba namiesto bieleho podkladu s rámikom.
- Mobil v strede sekcie benefitov: opäť plný tyrkysový podklad.
- Hero štítky (offer-pill): plné farebné výplne (žltá, tyrkys, Highlight) s čiernym textom.
- O2 Spolu: plný žltý/tyrkysový podklad za postavami ako predtým.
- Pozadie stránky ostáva biele, farbia sa iba bloky.

## Čierne alebo ISIC tyrkysové „O2 Maxx“
- Každý výskyt „O2 Maxx“ a „Chcem O2 Maxx“ (hero, benefity, karty, footer, spodná lišta) bude čierny alebo Shadow Green — nikdy ružový ani oranžový.
- Hlavné tlačidlá ostanú čierne s bielym textom.
- Cena 17,50 € bude čierna alebo Shadow Green namiesto modrej.

## Technické detaily
Úpravy v `src/styles.css` (tokeny, `offer-pill`), `src/components/ui/button.tsx` (odstránenie variantu `isic`), `src/components/O2MaxxSections.tsx`, `src/routes/index.tsx`, `src/components/CampaignFaq.tsx`, `src/components/MobileActionBar.tsx`. Žiadne farby natvrdo v komponentoch — všetko cez tokeny.

## Overenie
Kontrola v prehliadači na 390 px a 1280 px: plné farebné boxy, nikde modrá, „O2 Maxx“ čierne/tyrkysové, bez pretekania.
