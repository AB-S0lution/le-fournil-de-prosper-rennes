# Le Fournil de Prosper — Research & Plan

> **Le Fournil de Prosper** is a single-shop artisan *boulangerie-pâtisserie-snacking* on the corner of 42 rue Champion de Cicé, in Cleunay, the post-war working-class district in south-west Rennes. It is named after its gérant, **Prosper**, who signs the bakery's Instagram posts with his first name. The company bought the long-running Boulangerie Leduc on this corner (a bakery since at least 1987) on 30 June 2021 and opened on 1 July 2021. The previous owners also passed on their **crêpe recipe**, which the team now calls "l'âme de la boulangerie". It describes itself as a "petite boulangerie de quartier qui peut se vanter de tout faire maison", with "FAIT MAISON miam • Zéro gaspi • Produits de saison" in its Instagram bio. Its week has a rhythm: open "6 jours sur 7", baking continuously from 6h45 to 19h15, **closed on Wednesday**, open on Sunday morning from 7h30, pizza every Monday, and a new **"Flankie" du mois** (a flan-cookie hybrid). Customers are mostly local regulars and families. They praise the crisp pain au chocolat ("best in town"), the flan or Flankie, celebration cakes and the friendly counter staff. Google rates it 4.4/5 from about 150 reviews. The voice is warm, funny, full of emoji and ALL CAPS, and it speaks up for the craft ("vive L'ARTISANAT"). It has **no website**: Instagram, Facebook and listings are all there is.

---

## 0. Status & confidence

| Item | Value |
|---|---|
| **Identity verdict** | **CONFIRMED. One business, one shop, no ambiguity.** "Le Fournil de Prosper" = SARL LE FOURNIL DE PROSPER, SIREN 900 157 413, SIRET 900 157 413 00015 (its only establishment), 42 rue Champion de Cicé, 35000 Rennes (Cleunay). Active and trading. |
| **Who / what is "Prosper"** | **A person**, not a street or place: the first name of the gérant, Prosper Orrière (register: ORRIERE Prosper Paul Pierre, gérant since 17 June 2021). He signs Instagram posts "Prosper". The street name, Champion de Cicé, honours an 18th-century Rennes-born archbishop and has nothing to do with the shop name. |
| **Number of shops** | **One.** No other "Prosper" bakery is registered in Ille-et-Vilaine. Unrelated name-alikes: SARL "PROSPER" in Quimperlé (29), SIREN 939662722, formerly "Le Fournil de Kervail", with a different gérant; and a closed music business in Cavaillon. |
| **Renaming / move / closure** | None found. The shop is the successor of **Boulangerie Leduc** at the same address with the same phone number. |
| **Research date** | **2026-10-13** |
| **Tools used** | Official company register API (recherche-entreprises.api.gouv.fr / annuaire-entreprises), BODACC open-data API, societe.com, WebSearch / WebFetch, Tavily (rate-limited after one call in one pass), DNS checks on likely domains, OpenStreetMap / Nominatim geocoding, Instagram og:description and post pages, public Facebook og data, PagesJaunes, Mappy, 118712, acceslibre, Wanderlog (embedded Google data), Restaurant Guru, ARennes, tgtg-alerts, Banette directory, Wikipedia / Wikisource, Awwwards / SiteInspire for references. Skills for the design section: `ui-ux-pro-max:ui-ux-pro-max`, `design-taste-frontend`. |
| **Tools unavailable / blocked** | Local Google Maps scraper (`localhost:8080`) not running (404 on API endpoints). Apify was not used. Pappers: HTTP 403. Tripadvisor: 403 on re-check. Too Good To Go: HTTP 429 / bot check. Citoo France: 403. justacote, wanderboat.ai, 118712 (partly): 403/429. Facebook posts, follower count and recommendations: login wall. Ouest-France Commerces: could not be re-fetched by the fact-check. Google Maps listing never read directly (only via aggregators). Yelp / Waze / Apple Plans / Bing Places under the current name: not retrieved. |
| **Critic pass (2026-10-13)** | Tavily worked this time (no 429) and read the full Ouest-France page plus several Facebook posts. STAR open data re-verified the buses. About 15 older own posts (Nov 2024 to May 2026) filled in the founder fact, the anniversaries, the holiday hours and the festive products. See §15 |
| **Overall confidence** | **High** for identity, legal data, address, phone, hours (with one refuted source), history and product range. **Medium** for services, payment and accessibility details (single or old sources). **Low** for the outdoor bread vending machine, Phénix, vegan options, TGTG prices and any Uber Eats delivery. |

---

## 1. Verified facts

Status key: **verified** = 2+ independent sources or official register · **single-source** = one reliable source · **conflicting** = sources disagree (resolution given) · **refuted** = shown wrong.

| Field | Value | Status | Sources |
|---|---|---|---|
| Trading name | **Le Fournil de Prosper**. Instagram display "Boulangerie Le Fournil de Prosper Rennes" (@lefournildeprosper); Facebook "Le Fournil de Prosper \| Rennes"; Tripadvisor "Boulangerie Le Fournil de Prosper"; register enseigne "LE FOURNIL DE PROSPER" | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper · https://www.pagesjaunes.fr/pros/61027562 · https://www.instagram.com/lefournildeprosper/ · https://www.facebook.com/lefournildeprosper/ · https://www.banette.fr/nos-boulangeries |
| Legal name / form / capital | LE FOURNIL DE PROSPER, **SARL** (nature juridique 5499; "SARL à associé unique" per legal notice / aggregators), share capital **EUR 5,000** | verified (single-partner: aggregator only) | https://www.societe.com/societe/le-fournil-de-prosper-900157413.html · https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22900157413%22 |
| SIREN / SIRET | **SIREN 900 157 413**; **SIRET 900 157 413 00015** (head office = shop, only establishment) | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper · https://annuaire-entreprises.data.gouv.fr/etablissement/90015741300015 · https://www.societe.com/societe/le-fournil-de-prosper-900157413.html |
| VAT number | FR11900157413 | single-source (consistent with SIREN key) | https://www.societe.com/societe/le-fournil-de-prosper-900157413.html |
| RCS | RCS Rennes, registered 10 June 2021 | verified | https://www.societe.com/societe/le-fournil-de-prosper-900157413.html · https://www.pappers.fr/entreprise/le-fournil-de-prosper-900157413 (snippet) |
| NAF / IDCC / staff | NAF **10.71C** Boulangerie et boulangerie-pâtisserie (NAF 2025: 10.71H); IDCC 0843; staff band 03 = **6 to 9 employees** (2024 data); PME | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper · https://www.societe.com/societe/le-fournil-de-prosper-900157413.html |
| Registered purpose | Boulangerie, pâtisserie, viennoiserie, traiteur, snacking, sandwicherie, confiseur, chocolatier, vente de glaces, petite épicerie dont boissons fermentées non distillées | verified (register + BODACC) | https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22900157413%22 |
| Founded | Company created **7 June 2021** (articles signed 1 June 2021); fonds bought by deed **30 June 2021**; trading from **1 July 2021**. A bakery has stood on this corner since at least **15 April 1987** (Boulangerie Leduc) | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper · https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22900157413%22 · https://recherche-entreprises.api.gouv.fr/search?q=341884229 |
| Owner (public only) | Gérant: **Prosper** (Prosper Orrière in the register, since 17 June 2021). The bakery itself signs only "Prosper" or "L'équipe du Fournil de Prosper". **On the website use "Prosper" only.** **Background (own post, 1 July 2025):** « Prosper, le gérant de la boulangerie, a été boulanger pendant 14 ans avant de se lancer à son tour. » (https://www.instagram.com/reel/DLkTRg9of2a/ · same text on FB: https://www.facebook.com/lefournildeprosper/videos/4-ans-de-la-boulangerie-le-saviez-vous-prosper-le-g%C3%A9rant-de-la-boulangerie-a-%C3%A9t%C3%A9/1814226999139347). Where he trained or worked is not public. (Pappers' manager URL exposes a birth month: **private, never use**.) | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper · https://www.societe.com/societe/le-fournil-de-prosper-900157413.html · https://www.banette.fr/nos-boulangeries · https://www.instagram.com/p/DdTULkQlyvV/ |
| Address | **42 rue Champion de Cicé, 35000 Rennes**. Corner shop. Banette directory abbreviates it to "42 RUE DE CHAMPION" | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper · https://www.pagesjaunes.fr/pros/61027562 · https://acceslibre.beta.gouv.fr/app/35-rennes/a/boulangerie-patisserie/erp/le-fournil-de-prosper/ · https://www.instagram.com/reel/DcTCuM3Nr3J/ · https://wanderlog.com/place/details/8770749/le-fournil-de-prosper |
| Quartier | **Cleunay**, in the Rennes quartier **Cleunay – Arsenal-Redon** ("Quartiers Ouest" in OSM). The bakery's own words: "Boulangerie artisanale à Rennes (Cleunay)", "dans le quartier de Cleunay" | verified | https://www.instagram.com/lefournildeprosper/ · https://www.instagram.com/reel/DcTCuM3Nr3J/ · https://nominatim.openstreetmap.org/search?q=42+rue+Champion+de+Cic%C3%A9,+Rennes&format=json |
| GPS | **48.102779, -1.703291** (register); OSM 48.10284, -1.70332 | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper |
| Phone | **02 99 67 31 73** (+33 2 99 67 31 73); used in own posts as "02.99.67.31.73"; inherited from Boulangerie Leduc | verified | https://www.pagesjaunes.fr/pros/61027562 · https://acceslibre.beta.gouv.fr/app/35-rennes/a/boulangerie-patisserie/erp/le-fournil-de-prosper/ · https://wanderlog.com/place/details/8770749/le-fournil-de-prosper · https://restaurantguru.com/Le-fournil-de-Prosper-Rennes · https://www.instagram.com/p/DdDnvQxlzmI/ |
| Email | **lefournildeprosper@gmail.com** (published by the bakery for order quotes) | single-source (own post) | https://www.instagram.com/p/DdDnvQxlzmI/ |
| Website | **None.** lefournildeprosper.fr / .com and fournildeprosper.fr / .com do not resolve (NXDOMAIN, 2026-10-13). bottin.fr's "boulangeries-patisseries.fr" is a directory, not their site | verified | https://restaurantguru.com/Le-fournil-de-Prosper-Rennes · https://wanderlog.com/place/details/8770749/le-fournil-de-prosper · https://acceslibre.beta.gouv.fr/app/35-rennes/a/boulangerie-patisserie/erp/le-fournil-de-prosper/ |
| Instagram | **@lefournildeprosper**: 314 followers, about 162-164 following, 252 posts (13 Oct 2026). Main, active channel (1-2 posts/week) | verified | https://www.instagram.com/lefournildeprosper/ |
| Facebook | **facebook.com/lefournildeprosper** "Le Fournil de Prosper \| Rennes"; 221 followers, "44 personnes étaient ici" (not re-readable) | verified (page) / single-source (counts) | https://www.facebook.com/lefournildeprosper/ |
| Other listings | Tripadvisor (claimed by owner), Too Good To Go, Google Business profile (via aggregators), PagesJaunes, Mappy, 118712, Ouest-France Commerces, bottin.fr, ARennes | verified | see §14 |
| Hours: Monday | **06:45-19:15** (continuous, "en continu") | verified | https://www.instagram.com/reel/DcTCuM3Nr3J/ · https://www.instagram.com/p/DdDnvQxlzmI/ · https://wanderlog.com/place/details/8770749/le-fournil-de-prosper · https://restaurantguru.com/Le-fournil-de-Prosper-Rennes · https://commerces.ouest-france.fr/rennes-35000/le-fournil-de-prosper.html |
| Hours: Tuesday | **06:45-19:15** | verified | same |
| Hours: Wednesday | **Closed** ("Fermé le mercredi") | verified | same |
| Hours: Thursday | **06:45-19:15** | verified | same |
| Hours: Friday | **06:45-19:15** | verified | same |
| Hours: Saturday | **06:45-19:15** (PagesJaunes / Mappy / 118712 "Saturday closed" is **REFUTED** by the bakery's own posts) | verified | same; refuted: https://www.pagesjaunes.fr/pros/61027562 |
| Hours: Sunday | **07:30-13:00** ("ouverte 6 jours sur 7, dont le dimanche matin de 7h30 à 13h") | verified | same |
| Hours: holidays | **Pattern found (critic pass)**. Each jour férié is announced individually in a "[Jour férié : …]" post, so there is no fixed rule. Known cases: **Mon 11 Nov 2024 open until 12:30**, back "jeudi 14 novembre dès 6h45" (FB video, 10 Nov 2024). **Thu 1 May 2025 closed** ("sera exceptionnellement fermée ce jeudi 1er mai"). **Christmas 2025**: Wed 24 Dec and Wed 31 Dec **8h-18h** (the shop opens on its usual closing day), **closed Thu 25 Dec and Thu 1 Jan**. **Tue 14 July 2026 open 7h30-13h** (own FB post; also listed by Actu Rennes). **Summer closure 2026: from 14 July at 13h to Wed 5 Aug inclusive** ("toute l'équipe sera en congés du 14 juillet à partir de 13h jusqu'au mercredi 5 août inclus"; an IG version says "à partir du mercredi 15 juillet"). The bakery was therefore closed when the 5 Aug "Les vacances" video was posted. Earlier one-off: a FB "Mesure exceptionnelle" one August (Tuesday 6:45-14:00, year unknown) | verified for the listed dates (own posts) | https://www.facebook.com/lefournildeprosper/videos/la-boulangerie-le-fournil-de-prosper-situ%C3%A9e-au-42-rue-champion-de-cic%C3%A9-%C3%A0-rennes-/445805111878147 · https://www.facebook.com/lefournildeprosper/posts/jour-f%C3%A9ri%C3%A9-jeudi-1er-maila-boulangerie-le-fournil-de-prosper-au-42-rue-champion-/732634699111384 (snippet) · https://www.instagram.com/reel/DSMn2gOiHB6/ · https://www.facebook.com/lefournildeprosper?locale=fr_FR (snippets) · https://www.instagram.com/p/DDRMb9bseJk/ (snippet of the closure text) · https://actu.fr/bretagne/rennes_35238/14-juillet-a-rennes-voici-quels-sont-les-restos-boulangeries-tabacs-et-centres-commerciaux-ouverts-en-ce-jour-ferie_64532706.html · https://www.facebook.com/lefournildeprosper/photos/899085712466281 |
| Services | Takeaway coffee and drinks; traiteur and order quotes (**-10% from 20 minis**); custom, event and wedding cakes; fruit and vegetable basket pick-up point; in-store pick-up; weekday lunch formulas ("formules déjeuners", "coin snacking fourni tous les midis de la semaine"); **pizza every Monday**; anti-waste via Too Good To Go | verified | https://www.pagesjaunes.fr/pros/61027562 · https://www.instagram.com/p/DdDnvQxlzmI/ · https://tgtg-alerts.com/en/stores/744120 · https://www.boulangeries-patisseries.fr/boulangeries/35238-rennes/bgaieeeaicdceedgbfea.htm |
| Services (weak) | Outdoor bread / baguette vending machine ("distributeur"); Phénix anti-waste app; vegan options; homemade burgers; regional products; "service drive" | low confidence. **Critic pass:** the Ouest-France page was read in full (via Tavily). Its "Le mot du commerçant" and hours are the bakery's own text, but its FAQ and "Description du commerce" are **generic template copy**: it calls the "Distributeur" a « distributeur de billets » (a cash machine), and it also promises a car "service drive", which no other source mentions. So "distributeur" is contradictory: Wanderlog reads it as a bread dispenser and Ouest-France as a cash machine. **Treat every Ouest-France service icon except café à emporter / ouvert samedi et dimanche as unverified** | https://wanderlog.com/place/details/8770749/le-fournil-de-prosper · https://commerces.ouest-france.fr/rennes-35000/le-fournil-de-prosper.html |
| Ordering | By phone, email, or Instagram / Facebook DM. No online click-and-collect found | verified | https://www.instagram.com/p/DdDnvQxlzmI/ · https://www.instagram.com/p/DdO9726F17w/ |
| Payment | CB, Visa, Mastercard, Amex, cash, cheque, Apple Pay, Google Pay, titres-restaurant (contactless per Ouest-France; Sodexo per boulangeries-patisseries.fr) | single-source (PJ data, reused) | https://www.pagesjaunes.fr/pros/61027562 · https://commerces.ouest-france.fr/rennes-35000/le-fournil-de-prosper.html · https://www.boulangeries-patisseries.fr/boulangeries/35238-rennes/bgaieeeaicdceedgbfea.htm |
| Access / transport | **Métro ligne B, station Cleunay**, "à 4 minutes à pied" (bakery's own words); about **300 m** straight-line from the shop (STAR station coordinates). La Courrouze and Mabilais stations are about 0.8 km away. **Bus stop "Champion de Cicé" about 45 m from the door**, served by **line 10** (Beaulieu Chimie ↔ Porte de Cleunay), **N3** (night: République ↔ Bruz) and the seasonal **Api'Bus** (République ↔ Étangs d'Apigné) (**re-verified on STAR open data, processed 12 Oct 2026**; a TTZ service is also listed). "4 min du périphérique / rocade" (job ad, low confidence) | verified (STAR open data + own post + acceslibre) | https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-bus-topologie-dessertes-td/records?where=nomarret%20like%20%22Champion%22&limit=50 · https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-metro-topologie-stations-td/records?where=nom%20like%20%22Cleunay%22 · https://www.instagram.com/p/DdDnvQxlzmI/ · https://www.instagram.com/reel/DcTCuM3Nr3J/ · https://acceslibre.beta.gouv.fr/app/35-rennes/a/boulangerie-patisserie/erp/le-fournil-de-prosper/ |
| Accessibility | Step-free entrance; automatic sliding glass door 100 cm wide with contrast markings; aisles ≥ 90 cm; no customer toilets; no hearing loop; staff not trained in disability reception; no private parking (public parking nearby) — data of 26 Apr 2023 | single-source (official, old) | https://acceslibre.beta.gouv.fr/app/35-rennes/a/boulangerie-patisserie/erp/le-fournil-de-prosper/ · https://restaurantguru.com/Le-fournil-de-Prosper-Rennes |
| Parking | acceslibre: no own parking, parking nearby. Ouest-France: "Parking gratuit". bottin.fr: accessible parking | conflicting (minor) | acceslibre · https://commerces.ouest-france.fr/rennes-35000/le-fournil-de-prosper.html · https://www.bottin.fr/fiche-locale/bgaieeeaicdceedgbfea--le-fournil-de-prosper--rennes.htm |
| Price range | **EUR 1-10 per person**; baguette from EUR 1 (not re-verified). **One more real price (critic pass):** « Brioche tressée au Chocolat: Brioche Pur beurre tressée, aux pépites de chocolat », **7,50 €** (Ouest-France Commerces product card, date unknown) | single-source | https://restaurantguru.com/Le-fournil-de-Prosper-Rennes · https://www.pagesjaunes.fr/pros/61027562 · https://commerces.ouest-france.fr/produit/brioche-tressee-au-chocolat-1.html |
| Start-up support | **Initiative Rennes** (the honour-loan network for business creators and buyers) publicly congratulated "Prosper Orrière qui a repris la boulangerie-pâtisserie Le Fournil de Prosper" on 22 Oct 2021, and the bakery replied « Merci beaucoup ! ». This implies, but does not prove, an honour loan. Say only "accompagné par Initiative Rennes" if the client confirms | single-source (public post) | https://www.facebook.com/initiativerennes/posts/nous-adressons-tous-nos-v%C5%93ux-de-succ%C3%A8s-%C3%A0-prosper-orri%C3%A8re-qui-a-repris-la-boulang/4280770261992147 |
| Network / label | **Banette network** member (directory: "ORRIERE . LE FOURNIL DE PROSPER", Rennes). Signage reportedly reads "ARTISAN BOULANGER & BANETTE" (photo, not re-checked). No Maître Artisan, no organic or other label | single-source | https://www.banette.fr/nos-boulangeries |
| Google rating | **4.4/5**, 153 reviews (Wanderlog, 2026-10-13: 5★ 109 · 4★ 21 · 3★ 7 · 2★ 7 · 1★ 9); 158 on Restaurant Guru; 148 on ARennes (3 Apr 2026). **Quote as "about 150 reviews".** | verified | https://wanderlog.com/place/details/8770749/le-fournil-de-prosper · https://restaurantguru.com/Le-fournil-de-Prosper-Rennes · https://arennes.com/boulangeries/le-fournil-de-prosper/ |
| Press / awards | **No feature, contest result, guide listing or award.** The only press trace is a one-line listing in Actu Rennes' "14-Juillet à Rennes : … boulangeries … ouverts" round-up (July 2026): "Fournil de Prosper, 42 rue Champion de Cice, 7h30-13h" (seen in the Actu Rennes FB snippet; the article body was only partly readable) | verified (negative) / single-source (listing) | searches documented in §2; https://actu.fr/bretagne/rennes_35238/14-juillet-a-rennes-voici-quels-sont-les-restos-boulangeries-tabacs-et-centres-commerciaux-ouverts-en-ce-jour-ferie_64532706.html · https://www.facebook.com/Rennes24/posts/une-envie-de-pain-frais-dun-resto-%EF%B8%8F/1705636980527965 · https://www.gillespudlowski.com/?p=239117 (unrelated) |
| Financials | FY ends 31 July; accounts filed 2022-2025 with confidentiality declaration, so **no public turnover** | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper |
| Status | **Active** (register état A, 2026-10-13; Instagram posts up to 9 Oct 2026; PagesJaunes updated 1 Oct 2026) | verified | https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper · https://www.instagram.com/p/DeR8nVtCJRP/ |

---

## 2. Story & history

**The corner before Prosper (1987-2021).** 42 rue Champion de Cicé was already a bakery. **René Leduc** traded there as a sole trader, known as **"Boulangerie Leduc"** (SIREN 341884229, NAF 10.71C), from **15 April 1987 until 30 June 2021** (BODACC radiation notice 6 July 2021). An earlier company, **R.C.L.** (SIREN 441171360, NAF 10.71C), was also registered at this address. The phone number 02 99 67 31 73 is the same one Leduc used, and old directories (Yelp, au-magasin, koifaire, les-horaires) still list "Boulangerie Leduc" at this address. So a neighbourhood bakery has stood on this corner for at least 39 years. Whether one stood there before 1987 is unknown. (koifaire's Leduc text about "regional flours, honey, terrines…" reads as generic SEO filler: **do not use it**.)

**The handover (June-July 2021).**
- 1 June 2021: articles of the SARL signed in Rennes.
- 7 June 2021: company created (INSEE); 10 June: registered at RCS Rennes; 17 June: Prosper named gérant.
- **30 June 2021**: notarial deed buying René Leduc's fonds de commerce for **EUR 245,000**.
- 3 July 2021: legal notice in *Les Petites Affiches de Bretagne*; BODACC notices 30 July and 17 August 2021.
- **1 July 2021: Le Fournil de Prosper opens.**

**The crêpe recipe: what the bakery says about the handover.** In the bakery's own words (Instagram, 26 Aug 2026): « Quand on s'est installés à Cleunay, en 2021, les anciens propriétaires nous ont fait découvrir leurs crêpes, puis nous ont proposés la recette… » The crêpes became "l'âme de la boulangerie" and were chosen as **"Les indispensables – N°1 : Nos crêpes maisons"**, with the joke "on aurait pu ajouter 'crêperie' à la façade". This is the strongest true story for the site: **continuity of a corner bakery, with a recipe handed from one baker to the next.** (https://www.instagram.com/p/DciKshoF5iG/)

**Customer continuity.** Regulars write that they have come "depuis l'époque des anciens patrons" and that "la qualité est au rendez-vous" (ARennes). A minority miss the old owners: a Nov 2025 Tripadvisor review regrets that the "baguette moulée" is gone by 10:30 or on Sundays.

**Anniversaries the shop celebrated with customers.**
- **1 year, July 2022**: Facebook video "La boulangerie Le Fournil de Prosper fête ses 1 an d'ouverture !", with a customer survey and a draw for an EUR 10 voucher on Sunday 3 July 2022.
- **3 years, 1 July 2024**: "Le 1er juillet, le Fournil de Prosper fêtera ses 3 années d'ouverture ❤️" (Instagram location page snippet; not re-verified).
- **4 years, 1 July 2025** (critic pass): a reel and FB video « [4 ans de la boulangerie 🥳] Le saviez-vous ? Prosper, le gérant de la boulangerie, a été boulanger pendant 14 ans avant de se lancer à son tour. 4 ans plus tard, il sourit et continue l'aventure avec plaisir ! Il est très difficile ce métier, mais la motivation et la passion permettent d'aller au delà des difficultés. Le projet de Prosper en est la preuve. » (https://www.instagram.com/reel/DLkTRg9of2a/)
- **5 years, 1 July 2026** (critic pass): « Place aux 5 ans de notre boulangerie 🥳 Le 1er juillet, nous fêterons les 5 années passées à vous servir, à fabriquer nos produits et à investir notre temps et notre savoir-faire pour vous, chers clients ✨️ ». There were **two contests**. The second prize was **« 1 AN DE VIENNOISERIES LE DIMANCHE »**: 1 pain au chocolat + 1 croissant every Sunday the shop is open, from 5 July 2026 to 1 July 2027. Customers bought their favourite product, got a slip and dropped it in the in-store urn; the draw was on Wed 1 July, « la DATE ANNIVERSAIRE OFFICIELLE ». It closes: « Vous êtes adorables avec nous depuis 5 ans 💖 ». Posted 25 June 2026 (https://www.facebook.com/lefournildeprosper/posts/place-aux-5-ans-de-notre-boulangerie-le-1er-juillet-nous-f%C3%AAterons-les-5-ann%C3%A9es-p/1057772803264237). The first contest's prize is unknown.
- A 2023 "Nouveauté à la boulangerie ✨️ En 2023, le Fournil de Prosper…" post exists, but the text is cut off, so the novelty is unknown.
- Pinned posts: 16 Sep 2023 (Sunday crêpes) and 17 Jul 2025 (Friday offer).

**Support at the start.** On 22 Oct 2021, **Initiative Rennes** wished "tous nos vœux de succès à Prosper Orrière qui a repris la boulangerie-pâtisserie", and the bakery answered « Merci beaucoup ! » (https://www.facebook.com/initiativerennes/posts/nous-adressons-tous-nos-v%C5%93ux-de-succ%C3%A8s-%C3%A0-prosper-orri%C3%A8re-qui-a-repris-la-boulang/4280770261992147). This is a *reprise* (takeover) story, not a creation from scratch.

**The festive-season ritual (2024-2025, critic pass).** These are the bakery's biggest moments after the anniversary:
- **Journée dégustation, Sat 23 Nov 2024, 9h30-15h**: tasting of « les bûches de la carte 2024 », « pains spéciaux », and « nos plateaux apéritifs et sucrées », with a draw. The post adds an eco touch: « n'hésitez pas à amener votre propre cuillère si vous le pouvez, cela contribuera à réduire l'impact écologique de cette dégustation 😉 » (https://www.instagram.com/reel/DCZuDKgs2iB/)
- **6 Dec 2024 (Saint-Nicolas)**: « Nouveauté exclusive : Les petites Brioches Saint Nicolas », shaped like Saint Nicolas, available Thursday to Sunday only (https://www.instagram.com/reel/DDRMb9bseJk/)
- **20 Dec 2024**: « Le Sapin Feuilleté », a puff-pastry tree for apéritifs, half « Saumon fumé & fromage frais », half « Pesto & tomates séchées », to order (https://www.instagram.com/p/DDzlwezoBC6/)
- **28 Dec 2024**: New Year orders of « produits artisanaux et produits locaux », taken until Sunday for the 31st (https://www.instagram.com/reel/DEHj9zvIw6F/)
- **January 2025**: a **different special-edition galette every week**: « Chaque semaine, découvrez une nouvelle édition spéciale de nos galettes des rois ». Week of 2-7 Jan 2025: « La Galette Choco-Noisettes », made of « pâte feuilletée, d'une crème d'amande au gianduja et de pépites de chocolat ». « Le tout : 100% fait maison ! » (https://www.instagram.com/reel/DEhP8X6IWpn/). Galettes were sold until Sun 2 Feb 2025 (snippet, https://www.instagram.com/reel/DFcdaQFoG95/)
- **Easter 2025 (4 Apr)**: homemade Easter chocolates, « Œufs ou Cocottes, Poissons et Fritures… dans des petits et grands formats » (https://www.instagram.com/p/DIB84NqIEeZ/)
- **Fête des Pères (year unknown, probably 2025)**: « le Papouney », « Disponible en édition spéciale pour la Fête des Pères. Pensez à réserver ! » (search snippets only, composition unknown) (https://www.facebook.com/lefournildeprosper/photos/1057772683264249)
- **Sat 29 Nov 2025, 9h-15h**: « Journée dégustation spécial Bûches de Noël … goûtez nos 4 variétés de bûches 2025 » (snippet; bûche names not readable) (https://www.facebook.com/lefournildeprosper/photos/journ%C3%A9e-d%C3%A9gustation-sp%C3%A9cial-b%C3%BBches-de-no%C3%ABl-chez-votre-boulanger-le-fournil-de-pr/894991976208988)
- **13 Dec 2025**: the **« carte des fêtes »**, pinned to the profile, to choose « votre bûche, votre plateaux de mignardises et même votre pain ». Bookings in store until 20 Dec for the 24th and until 26 Dec for the 31st. Prepaid orders are collected from **a separate queue**. Opening hours: 24 and 31 Dec 8h-18h, closed 25 Dec and 1 Jan. A €5 voucher went to readers who ordered before 19 Dec (« Pour ceux qui ont lu jusqu'ici… ») (https://www.instagram.com/reel/DSMn2gOiHB6/)
- « Les commandes pour le 31 sont closes ✨️ Pensez à notre **pain surprise** pour votre prochaine fête » (FB video title, year unknown) (https://www.facebook.com/lefournildeprosper/videos/les-commandes-pour-le-31-sont-closes-%EF%B8%8Fpensez-%C3%A0-notre-pain-surprise-pour-votre-pr/377099728137646)

**Mid-2026.**
- **18 May 2026**: « Le Fournil de Prosper tente chaque jour d'évoluer, on grandit et on apprends de nos erreurs, mais aussi et surtout de vos sourires et de vos retours ultras positifs !! » The opening line, « La 7ème reste un projet… », refers to something in the image that could not be seen (https://www.instagram.com/p/DYfEi-gBD-5/)
- **14 July 2026**: open 7h30-13h, then **summer closure until Wed 5 Aug 2026 inclusive**. This explains the August "POV: … votre boulangerie est en congés?" reel, posted once the shop had reopened, and the line in Prosper's 15 Sep post about « un avis Google laissé pendant nos vacances ».

**2026: the bakery finds its voice.**
- **Aug 2026**: a reel invites people whose usual bakery is "fermée pour congés" ("POV: vous rentrez de vacances... Et votre boulangerie est en congés?"). A 5 Aug video shows "Les vacances" (a short break is possible; unconfirmed). On 14 Aug, the **Flankie of the month** was lemon meringue. On 21 Aug, the reel gave the hours and the metro access. On 26 Aug, the bakery launched the **"Les indispensables" N°1: crêpes** series. On 31 Aug, its **back-to-school pizza Monday** offered "La Méditerranéenne" and "L'Américaine".
- **8 Sep 2026**: a manifesto post. A customer poll had asked for sourdough ("votre envie 1ère : du pain AU LEVAIN !"), so the bakery launched a new **pure-sourdough bread with T150 flour, on Sundays only at first**. The same post introduced **Maison Lucie** jams and the offer **5 crêpes + 1 pot = 10 €**.
- **13 Sep 2026**: the **"Tennis Ball" trompe-l'œil** for the Open de Rennes, a cheesecake on a Breton shortbread base with a raspberry centre, made as a limited edition from 17 to 20 Sept.
- **15 Sep 2026**: **a post signed by Prosper** about how hard artisan baking is and about rude customers and reviews: « Le monde de la boulangerie artisanale souffre… Quand on fait maison et qu'on veut respecter le client, on doit faire des choix. » It drew 247 likes and 53 comments, about ten times their usual engagement. The neighbourhood answered.
- **17 Sep 2026**: a "#trusttheprocess" viennoiserie post covering training, targeted raw materials ("🐄🌱 Des matières premières ciblées"), advanced courses and **training apprentices**.
- **9 Oct 2026**: the October Flankie: cookie dough, apple-pear-hazelnut compote and praline flan filling, "jusqu'au 31".

**Recruitment.** An expired France Travail offer (211DDST, now 404) sought a full-time CDI baker for a "boulangerie 100% artisanale" in Cleunay, "4 min du périphérique". The presence report attributes it to this shop; the market report rates the attribution low-confidence. **Do not say the shop is hiring.**

**Press, awards, guides: none.** The researchers searched Ouest-France, Le Télégramme, 20 Minutes, Unidivers, Le Mensuel de Rennes, France 3 Bretagne, Gault&Millau, Petit Futé, Michelin, Pudlowski, and the best-baguette, galette-saucisse and galette-des-rois contests of Ille-et-Vilaine. Nothing was found for this shop or for Boulangerie Leduc. **Do not confuse it with** the March 2020 "Incendie dans une boulangerie de Cleunay" article (https://www.rennes-infos-autrement.fr/incendie-dans-une-boulangerie-de-cleunay/), which is about Noël Fleury's bakery on rue Jules Lallemand, a different business. The only "rankings" are algorithmic: 15th in Wanderlog's "15 best bakeries in Rennes".

**Owner background.** The only public fact is the bakery's own statement: **a baker for 14 years before taking over this shop in 2021** (IG / FB, 1 July 2025). No press profile, interview, school or previous employer is public. Do not invent one. A safe line for the site: « Prosper a été boulanger pendant 14 ans avant de reprendre la boulangerie de la rue Champion de Cicé en 2021. »

**Prosper's 15 Sep 2026 post, exact key lines** (critic pass, full caption read; https://www.instagram.com/p/DdTULkQlyvV/): « C'est un post pas marrant, pas joli, pas très instagrammable. » … « Un commentaire au magasin face à un vendeur qui n'y peut rien, un avis Google laissé pendant nos vacances… » … « Le monde de la boulangerie artisanale souffre, et ce depuis des années. Quand on fait maison et qu'on veut respecter le client, on doit faire des choix. Parfois, un combo manque + forte affluence impacte plus fort que cela ne devrait. » … « Ce post a pour but de pousser la porte de votre boulanger : lui proposer d'en discuter… » It is signed « Prosper ». The comments came mainly from other artisans (bakers, a food-truck cook, a pizzeria) and from one local customer (see §4.6).

---

## 3. Offer

No full price list is published anywhere. All prices below are the **only real prices found**. Every other price on the site is mock (see §11).

### 3.1 Breads (pains)
| Product | Source | Notes |
|---|---|---|
| Baguette tradition | PagesJaunes, PJ presentation | "baguette tradition"; reviewers rate it excellent (Citoo snippet, low) |
| Baguette (from **1 €**) | PagesJaunes / Restaurant Guru | not re-verified |
| "Baguette moulée" | Tripadvisor review, Nov 2025 | asked for by name by regulars; sells out by 10:30 / on Sundays |
| Pain de campagne | PagesJaunes | |
| Pain aux céréales | PagesJaunes | |
| Pain d'épeautre | PagesJaunes | |
| Pain de mie | PagesJaunes | |
| **Pain au levain pur, farine T150** | Instagram 8 Sep 2026 | **NEW 2026**, Sundays only at first, born from a customer poll |
| Pain aux raisins | Wanderlog / reviews | praised |

### 3.2 Viennoiseries ("100% maison", the products customers say they love most)
Croissant, **pain au chocolat** ("best pain au chocolat in town", per the Wanderlog summary of Google reviews), brioche ("brioche moelleuse"; summaries call it "incredible"), brioche tressée aux pépites de chocolat (Ouest-France), cinnamon rolls, babka, chaussons / turnovers (IG 17 Sep 2026 images), **kouign-amann** (reviews), pain aux raisins. Mini-viennoiseries are sold for events (**-10 % from 20 minis**).

### 3.3 Pâtisseries & desserts
**Flan** ("vraiment super onctueuse"), **far breton**, meringues, **macarons** (chocolat, caramel beurre salé), fresh fruit tarts (**tarte aux fraises**), entremets (TGTG description), **wedding cakes**, custom event and birthday cakes (personal messages on request), **number cakes** for 10 or 12 people (search summary), **galette des rois** ("le feuilletage est parfait") and couronnes des rois, **bûche de Noël chocolat-praliné**, chocolate brioche (one reviewer found it weaker).

### 3.2b Real seasonal and festive products (critic pass, all from the bakery's own posts)
| Product | Real description | When | Source |
|---|---|---|---|
| **Galette Choco-Noisettes** | « pâte feuilletée, crème d'amande au gianduja et pépites de chocolat », "100% fait maison", limited quantity, to reserve | special edition, week of 2-7 Jan 2025 (one of a **weekly series** of special-edition galettes) | https://www.instagram.com/reel/DEhP8X6IWpn/ |
| **Les petites Brioches Saint Nicolas** | brioches shaped like Saint Nicolas, « Moelleuses, dorées et pleines de douceur » | Saint-Nicolas week 2024, Thu-Sun only | https://www.instagram.com/reel/DDRMb9bseJk/ |
| **Le Sapin Feuilleté** | a puff-pastry tree for apéritifs, half « Saumon fumé & fromage frais », half « Pesto & tomates séchées »; to order | Christmas 2024 | https://www.instagram.com/p/DDzlwezoBC6/ |
| **Bûches de Noël** | « 4 variétés de bûches 2025 » (names not found) + the chocolat-praliné bûche praised in reviews | Christmas, with a tasting Saturday in late Nov | FB snippet 894991976208988 |
| **Plateaux de mignardises**, **plateaux apéritifs et sucrés** | festive trays | Christmas / New Year | https://www.instagram.com/reel/DSMn2gOiHB6/ · https://www.instagram.com/reel/DCZuDKgs2iB/ |
| **Pain surprise** | a filled party loaf (garnish unknown) | for parties | FB video title 377099728137646 |
| **Pains spéciaux** | tasted at the Nov 2024 dégustation (names unknown) | Nov-Dec | https://www.instagram.com/reel/DCZuDKgs2iB/ |
| **Chocolats de Pâques** | « Œufs ou Cocottes, Poissons et Fritures », homemade, « petits et grands formats » | Easter 2025 | https://www.instagram.com/p/DIB84NqIEeZ/ |
| **Le Papouney** | Fête des Pères special edition, « Pensez à réserver ! » (composition unknown) | June (year unknown) | search snippet of https://www.facebook.com/lefournildeprosper/photos/1057772683264249 (low) |
| **Flankie Vanille** | a vanilla Flankie (FB video title "Flankie Vanille", hashtags #vanille #patisserie) | month unknown | https://www.facebook.com/lefournildeprosper/videos/flankie-vanille/1501638771465253 |
| **Brioche tressée au Chocolat** | « Brioche Pur beurre tressée, aux pépites de chocolat », **7,50 €** | permanent? | https://commerces.ouest-france.fr/produit/brioche-tressee-au-chocolat-1.html |

### 3.4 Signature items
1. **Les crêpes maison**: the recipe was inherited from the previous owners. They are "l'âme de la boulangerie" and episode N°1 of "Les indispensables". Reviewers call them thick and cheap. Full caption (critic pass): « …la recette qui a fait chavirer le cœur de tant de cleunaysiens depuis bien des années. Ces crêpes font partie du quartier, de l'âme de la boulangerie, et bien entendu de vos habitudes. **Pour le matin, pour le goûter, on vous les prépare depuis plus de 5 ans avec la même recette et la même quantité généreuse.** … On espère que pour les nouvelles générations aussi, ces crêpes deviendront un must have du goûter chez Prosper 😋 » (https://www.instagram.com/p/DciKshoF5iG/). Pinned Sunday-crêpes post (2023). **Offer, Sept 2026: 5 crêpes + 1 pot de confiture Maison Lucie = 10 €.**
2. **Le Flankie du mois**: a recurring monthly flan-cookie creation.
   - **Vanille** (month unknown; FB video "Flankie Vanille": https://www.facebook.com/lefournildeprosper/videos/flankie-vanille/1501638771465253)
   - **August 2026: citron meringué**: « Le flankie du mois d'août au citron meringué vous ravi !! … C'est dispo jusqu'au 31 août et pas un jour de plus 💣 » (https://www.instagram.com/p/DcBINa1F3u4/)
   - **October 2026: pâte à cookie, compote pomme-poire-noisette, appareil à flan praliné**, "jusqu'au 31" (https://www.instagram.com/p/DeR8nVtCJRP/)
   - A reviewer: « Excellent flankie, le meilleur que j'ai jamais mangé ».
3. **Viennoiseries / pain au chocolat**: the most praised product, presented through the "#trusttheprocess" story of training, sourcing and apprentices.
4. **Pizza du lundi**: "chaque lundi". The 31 Aug 2026 back-to-school specials, both « préparées sur place » with « poulet et poivrons français »:
   - **La Méditerranéenne**: aubergine and courgette grillées, mozzarella, tomates confites, fromage frais, herbes de Provence.
   - **L'Américaine**: sauce tomate, poulet rôti, poivrons, cheddar, cornichons.
   (https://www.instagram.com/p/Dcs36IOl9Mf/)
5. **"Tennis Ball" trompe-l'œil** (limited edition, 17-20 Sept 2026, Open de Rennes): a cheesecake on a sablé breton base with a raspberry centre, booked by phone or DM. (https://www.instagram.com/p/DdO9726F17w/)

### 3.5 Snacking & lunch (weekday lunch; "le coin snacking fourni tous les midis de la semaine")
Sandwiches (vegetarian options "depuis plusieurs années"), quiches, salads, "formule déjeuner du midi" / "formules déjeuners", homemade burgers (Ouest-France listing, low confidence), pizza on Mondays. Coffee and cold drinks for breakfast and the school run ("goûter / sortie d'école").

### 3.6 Épicerie / partner products
**Maison Lucie** artisan jams: 6 flavours, 150 g jars, "peu sucrées" (Sept 2026); the bakery invites customers to « découvrir le travail de Lucie et nous dire quelle saveur vous préférez ». **Identified (critic pass, medium confidence: name, "Lucie", "peu sucrées" and the 150 g format all match; the brand's site lists no stockists):** Maison Lucie, Trégueux (Côtes-d'Armor, Bretagne). It was founded in 2023 by Lucie, a "Maître Confiturière". Its jams are 70 % fruit with « seulement 28 % de sucre ajouté » and no preservatives or colourings, and are hand-labelled with an ESAT. Its apricot-peach-passion jam won a **gold medal in 2024** at the international jam championship, and its myrtille-framboise-cassis-hibiscus a silver in 2026. Site flavours include abricot-pêche-passion, myrtille-framboise-cassis-hibiscus, framboise, myrtille, fraise, abricot, clémentine, cassis and fruits rouges. **Which 6 the bakery stocks is unknown.** (https://maison-lucie.fr/ · https://maison-lucie.fr/pages/a-propos · https://www.baiedesaintbrieuc.com/sit/maison-lucie/ · https://www.ici.fr/emissions/bienvenue-chez-vous-les-bretons/la-maison-lucie-dans-les-cotes-d-armor-medaille-d-or-au-championnat-du-monde-de-confiture-5275261). This is a real **Breton artisan-to-artisan partnership** the site can show, worded as « confitures artisanales de Maison Lucie (Côtes-d'Armor) » once the client confirms the producer. "Produits régionaux" (Ouest-France listing, low confidence); « produits artisanaux et produits locaux » for New Year 2025 (own post, https://www.instagram.com/reel/DEHj9zvIw6F/).

### 3.7 Services
- Café et boissons à emporter
- Traiteur / devis (quotes by phone, email or DM), with **-10 % from 20 mini-viennoiseries** for company, seminar or retirement parties
- Gâteaux personnalisés, d'anniversaire, de mariage (Instagram highlight "🎂 vos events")
- Point relais paniers fruits et légumes
- Retrait en boutique
- Too Good To Go baskets ("Zéro gaspi"); Phénix unverified
- "Pain chaud à toute heure" / outdoor distributeur (**unverified**)

### 3.8 Offers & rituals (real, some time-limited)
| Offer | Status | Source |
|---|---|---|
| Pizza **chaque lundi** | current (Sept 2026) | https://www.instagram.com/p/DdDnvQxlzmI/ · https://www.instagram.com/p/Dcs36IOl9Mf/ |
| **Flankie du mois** | current (Oct 2026) | https://www.instagram.com/p/DeR8nVtCJRP/ |
| 5 crêpes + 1 pot = 10 € | Sept 2026 introductory offer | https://www.instagram.com/p/DdDnvQxlzmI/ |
| -10 % from 20 minis | current | https://www.instagram.com/p/DdDnvQxlzmI/ |
| "Offre du Vendredi : 3 viennoiseries achetées = 1 croissant ou 1 pain au chocolat offert" | pinned 17 Jul 2025; **may no longer run** | https://www.instagram.com/p/DMPWCMUoJBD/ |
| Pain au levain T150 on Sundays | Sept 2026 | https://www.instagram.com/p/DdDnvQxlzmI/ |
| Seasonal ranges "Saisons 👑🐰🍓🎃🎄" (galette, Pâques, fraises, Halloween / "spooky season", Noël) | recurring | https://www.instagram.com/lefournildeprosper/ |
| Too Good To Go: Panier surprise, Panier Gourmet, Panier de Pâques | listed; **prices conflicting, do not publish**. Real descriptions (verbatim): Panier surprise « composé de délicieux produits de boulangerie, pâtisserie, viennoiseries, et traiteur »; Panier Gourmet « Célébrez la magie des fêtes… galettes et couronnes des rois, ainsi que des bûches, pains, viennoiseries ou encore des entremets »; Panier de Pâques « Aidez-nous à réduire le gaspillage alimentaire pendant la période de Pâques… » | https://tgtg-alerts.com/en/stores/744120 |
| **5th-anniversary contest « 1 AN DE VIENNOISERIES LE DIMANCHE »** | ran until 30 June 2026; prize served Sundays from 5 July 2026 to 1 July 2027 | https://www.facebook.com/lefournildeprosper/posts/place-aux-5-ans-de-notre-boulangerie-le-1er-juillet-nous-f%C3%AAterons-les-5-ann%C3%A9es-p/1057772803264237 |
| Weekly special-edition galette des rois (January) | Jan 2025 (e.g. Galette Choco-Noisettes) | https://www.instagram.com/reel/DEhP8X6IWpn/ |
| Journée dégustation before Christmas (a Saturday in late Nov, about 9h-15h, with a draw) | Nov 2024 and Nov 2025: **an annual ritual** | https://www.instagram.com/reel/DCZuDKgs2iB/ · FB 894991976208988 |
| Carte des fêtes + reservation deadlines + a separate queue for prepaid orders; €5 voucher for early Christmas orders | Dec 2025 | https://www.instagram.com/reel/DSMn2gOiHB6/ |
| 1-year draw: €10 voucher (survey in store) | July 2022 | https://www.facebook.com/lefournildeprosper/videos/la-boulangerie-le-fournil-de-prosper-f%C3%AAte-ses-1-an-douverture-et-pour-loccasion-/828696861451467 |
| Ouest-France "bon plan" (pay €25, get €35) | **ended**, do not show | https://commerces.ouest-france.fr/produit/bon-plan-valable-chez-le-fournil-de-prosper.html |

---

## 4. Customer voice

### 4.1 Ratings per platform
| Platform | Rating | Count | Date / source |
|---|---|---|---|
| **Google** | **4.4 / 5** | **153** (109 / 21 / 7 / 7 / 9) | 2026-10-13 via https://wanderlog.com/place/details/8770749/le-fournil-de-prosper |
| Google (other readings) | 4.4 | 158 (RG "160 votes"); 148 | https://restaurantguru.com/Le-fournil-de-Prosper-Rennes (updated 2026-09-20); https://arennes.com/boulangeries/le-fournil-de-prosper/ (3 Apr 2026) |
| **Too Good To Go** | **4.6 / 5** | 90 ratings | https://tgtg-alerts.com/en/stores/744120 (third-party tracker) |
| Tripadvisor | 3.5 / 5 | 2 reviews (one Excellent, one Poor); claimed listing | https://www.tripadvisor.co.nz/Restaurant_Review-g187103-d26611238-Reviews-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html. Its rank is conflicting: #7 of 14 bakeries; #603/708 or #610/718 restaurants |
| Citoo France | 4.2 / 5 | 42 | search snippet only, page 403 (low) |
| PagesJaunes | none | 0 reviews | https://www.pagesjaunes.fr/pros/61027562 |
| Yelp | 5.0 | 1, under the **old** name "Boulangerie Leduc" | https://www.yelp.fr/biz/boulangerie-leduc-rennes |
| Facebook | "Not rated" (RG); page unreadable | — | https://www.facebook.com/lefournildeprosper/ |

Reading: about 85 % of Google reviews are 4-5★ (130/153) and about 10 % are 1-2★ (16/153). This is a well-liked neighbourhood bakery with a small group of unhappy reviewers. It is not a polarising shop.

### 4.2 Praise themes (most frequent first)
1. **Crisp viennoiseries**, above all the pain au chocolat ("best in town") and the croissant ("bien croustillant").
2. **Flan / Flankie and festive pâtisserie**: galette des rois, bûche chocolat-praliné, brioche, cinnamon rolls, kouign-amann, pain aux raisins, and thick, cheap crêpes.
3. **Celebration cakes with a personal touch**: "as good as it was beautiful", with a personal note added on request.
4. **Warm, friendly counter staff**: "2 très agréables vendeuses", "gracious staff"; ARennes: « L'accueil et le service sont souvent cités comme un vrai point fort ».
5. **Homemade at fair prices**: "homemade at reasonable prices"; EUR 1-10 per person.
6. **Loyalty and continuity** since the previous owners.
7. **Anti-waste**: people discovered the shop through TGTG baskets, and the basket contents were praised.
8. **Convenience**: open from 6:45, on Sunday mornings, continuous hours, and (unverified) bread around the clock.

### 4.3 Complaints
- **Stock running out**: no "baguette moulée" by 10:30 or on Sundays (Tripadvisor, Nov 2025).
- **Inconsistent freshness some days**: "spoiled cream donuts and dry pastries" (Wanderlog summary of Google reviews: "Check product freshness").
- **Uneven products**: chocolate brioche weaker than the tradition (Citoo snippet, low); one Google review gave Food 3/5 and Atmosphere 3/5.
- **Nostalgia for the previous owners** among a few long-time customers.
- **Discarded**: a "condescending saleswomen" quote belongs to a different bakery ("Il était une fois", Le Perreux-sur-Marne). **Never use it.**
- **How the shop answers**: politely, signed « L'équipe du Fournil de Prosper », for example « N'hésitez pas à nous dire ce qui aurait pu rendre votre expérience plus agréable… Au plaisir de vous revoir à la boulangerie ! » (RG). Prosper's 15 Sep 2026 post also speaks openly about unfair reviews.

### 4.4 Who the customers are
- **Cleunay regulars and families** (mostly inference from several sources): years of loyalty, a daughter's birthday cake, "always customers in this neighborhood bakery", typical visit about 5 minutes (quick daily bread runs). A primary school (Groupe scolaire Champion de Cicé) is on the same street.
- **Early commuters and weekday lunch workers**: 6:45 opening, coffee to go, weekday snacking; offices at Cours Lumière / La Courrouze are nearby.
- **Anti-waste app users**: 90 TGTG ratings.
- **Very few tourists**: only 2 Tripadvisor reviews. A few international residents or students may visit (low confidence).
- Followers called **"cleunaysiens"** by the bakery itself.

### 4.5 Customer vocabulary
French: *fidèles, depuis de nombreuses années, la qualité est au rendez-vous, excellentes, bien croustillant, très agréables, le meilleur que j'ai jamais mangé, vraiment super onctueuse, parfait, gourmand et léger, un délice, savoureux, ravis.* Negative: *on regrette les anciens patrons, déjà plus de baguette.*

### 4.6 Verbatim quotes
**Real quotes, may be used with attribution to the platform only** (never to a reviewer's name). Keep them short and exact, and do not "improve" them.

| # | Quote | Platform / source |
|---|---|---|
| 1 | « Clientes fidèles depuis de nombreuses années » | Avis Google, via https://arennes.com/boulangeries/le-fournil-de-prosper/ |
| 2 | « depuis l'époque des anciens patrons » … « la qualité est au rendez-vous » | Avis Google, via ARennes |
| 3 | « Excellentes viennoiseries : Croissants et pains au chocolat bien croustillant ! » | Avis Google, via ARennes |
| 4 | « l'accueil des 2 très agréables vendeuses » | Avis Google, via ARennes |
| 5 | « Le pain est également très bon » | Avis Google, via ARennes |
| 6 | « Excellent flankie, le meilleur que j'ai jamais mangé » | Avis Google, via ARennes |
| 7 | « vraiment super onctueuse » (le flan) | Avis Google, via ARennes |
| 8 | « le feuilletage est parfait » (la galette des rois) | Avis Google, via ARennes |
| 9 | "the cake was as good as it was beautiful and the little personal note requested, which the patissier kindly put, gave it another twist." | Tripadvisor, April 2025 (Tripadvisor's machine translation from French): https://www.tripadvisor.co.nz/ShowUserReviews-g187103-d26611238-r1001833277-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html |
| 10 | "I appreciate their hospitality, professionalism and the quality of their products, homemade at reasonable prices." | same Tripadvisor review |
| 11 | "there are always customers in this neighborhood bakery, it's a proof of know-how." | same Tripadvisor review |
| 12 | (negative) "on Sunday or at 10:30 there is already no molded baguette the previous owners we miss." | Tripadvisor, November 2025: https://www.tripadvisor.co.nz/ShowUserReviews-g187103-d26611238-r1040834355-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html |
| 13 | « J'apprécie toujours vos pains, vos viennoiseries, vos crêpes bref vous êtes une vraie boulangerie de quartier et j'apprécie votre boulangerie. Ne changez rien » | Commentaire Instagram (a customer), 15 Sep 2026, under Prosper's post: https://www.instagram.com/p/DdTULkQlyvV/. Attribute as « Commentaire Instagram », never by handle |
| 14 | (owner reply style) « Merci beaucoup pour votre note et votre passage chez nous … vos retours nous sont précieux pour continuer à nous améliorer au quotidien. Au plaisir de vous revoir à la boulangerie ! » | Google owner reply, via https://restaurantguru.com/Le-fournil-de-Prosper-Rennes. Voice reference, not a testimonial |

Usage notes:
- Quotes 9-11 exist only as Tripadvisor's English machine translation. On a French site, either show them in English with "(traduit par Tripadvisor)" or use only the French ARennes quotes (preferred).
- Low confidence, do not use: the bûche was "gourmet and light, a delight!" (search-engine summary, not seen on the page).
- Paraphrase, not a quote: customers "declare that it offers the best pain au chocolat in town" (Wanderlog AI summary). It can be used as « D'après les avis Google, le meilleur pain au chocolat du quartier », labelled as a summary.

---

## 5. Brand identity cues

**No website, so no CSS.** All visual cues come from the shopfront photo on the Facebook profile and from Instagram. **Hex values are approximate samples from a JPEG.**

- **Shopfront**: a corner unit at the foot of a **cream and terracotta 1950s-60s house**, with full-height glazing and black window frames.
- **Fascia**: a **light oak wood-effect panel, approx. #CBB89D**. Wood-effect pillars approx. **#988265**.
- **Logotype**: "Le Fournil de Prosper" in **black calligraphic script**, with **"BOULANGERIE" in small, widely spaced serif capitals** underneath. Side fascia panels read **"PÂTISSERIE"** and **"SNACKING"** in black serif caps on wood.
- **Frame and awning**: a black or very dark navy frame with a **thin steel-blue edge**; a **near-black awning, approx. #22232F**, with white serif caps: **"BOULANGERIE • PÂTISSERIE • SNACKING"**.
- **Hanging round sign and beach flag**: "ARTISAN BOULANGER & BANETTE" (Banette network; photo only).
- **Overall look**: anthracite + natural light wood + white. Classic, warm, slightly rustic-chic. The exact typefaces are unknown. **No logo file is available** (TODO).
- **Instagram visual style**: homemade, not studio. Product carousels carry text overlays ("Nouveautés de Septembre", "Les indispensables – N°1 : Nos crêpes maisons"), and there are **calendar mock-ups** and casual reels ("POV", a surfboard for "Les vacances"). Highlights: "🎂 vos events", "Actualités 🧑‍🍳", "Viennoiseries 🥐", "Saisons 👑🐰🍓🎃🎄".
- **Tone of voice**: warm, familiar and funny. Mixes **vous and tu**, uses lots of emoji, **ALL CAPS for emphasis**, winks (😉😂🤭), community questions ("Dites-nous en commentaire…", "Vous pensez qu'on en a fabriqué combien ?") and pop formats ("POV:", "#trusttheprocess", "spooky season"). It is also **candid and committed** about the craft (Prosper's 15 Sep post). Review replies are polite and signed "L'équipe du Fournil de Prosper".
- **Self-descriptions (exact)**:
  - Instagram bio: « Boulangerie artisanale à Rennes (Cleunay) / FAIT MAISON miam • Zéro gaspi • Produits de saison / Ouvert aussi le [dimanche]… »
  - Facebook intro: « Boulangerie-pâtisserie / 📍 Cleunay Rennes / Cuisson en continu / Produits faits maison 🥖🥐 / Suivez-nous 😊 »
  - Google / Tripadvisor owner text: « Petite boulangerie de quartier, nous vous proposons des produits artisanaux de qualité tout au long de l'année. Chez nous, tout est fait maison. Venez découvrir nos viennoiseries gourmandes, le coin snacking fourni tous les midis de la semaine, et les pâtisseries qui raviront les papilles des plus petits aux plus grands. Nous sommes ouverts le dimanche matin dès 7h30, avec le sourire ! »
  - Manifesto (IG 8 Sep 2026): « Par ici, on fait maison, on réclame de la gourmandise… on profite de chaque saison et de chaque moment de la journée, on se lève le dimanche avec l'odeur des croissants chauds... Alors si pour toi aussi c'est important : bienvenue au Fournil de Prosper ! » and « On est une petite boulangerie de quartier qui peut se vanter de tout faire maison ! Et AVEC AMOUR pour notre métier, vive L'ARTISANAT 🤗 »
  - PagesJaunes text (probably written by PJ, so weaker as voice): « Au Fournil de Prosper, chaque jour rime avec fraîcheur et saveurs authentiques… Venez vite au Fournil de Prosper, votre pause gourmande vous attend ! »
- **Recurring words**: *fait maison / 100 % maison*, *artisanal(e) / l'artisanat*, *boulangerie de quartier*, *petite boulangerie*, *Cleunay / cleunaysiens*, *gourmand(ise)*, *avec le sourire*, *cuisson en continu*, *produits de saison*, *zéro gaspi*, *le dimanche matin*, *l'odeur des croissants chauds*, *goûter / sortie d'école*, *petit déjeuner*, *chez Prosper*, *Les indispensables*, *Flankie du mois*.
- **Post formats to reuse as design devices (critic pass, from real posts)**:
  - **Square-bracket headers**: « [4 ans de la boulangerie 🥳] », « [Jour férié : jeudi 1er Mai] », « JOUR FÉRIÉ / Congés de l'été : ». This can become the site's eyebrow / label style for news, closures and the status pill, e.g. `[Fermé le mercredi]`.
  - **« Le saviez-vous ? »** micro-facts (the 14-years-a-baker post).
  - **Countdown urgency**: « jusqu'au 31 oui oui ! 👀 », « dispo jusqu'au 31 août et pas un jour de plus 💣 », « Réservez-la, elle est en quantité très limitée », « Faites vite ».
  - **Arrow lists of deadlines**: « ➡️ jusqu'au 20 décembre pour le 24 ».
  - **The reward for readers who scroll to the end**: « Pour ceux qui ont lu jusqu'ici : en bonus… ». A natural hook for a footer Easter egg.
  - **Contest mechanics**: buy, get a slip, drop it in « l'urne en boutique », draw on the anniversary.
  - **Small eco gestures**: « amener votre propre cuillère » at the tasting day.
  - **Gratitude lines**: « Vous êtes adorables avec nous depuis 5 ans 💖 », « Merci d'être par là 🥰 ».
- **Hashtags**: #dimanchearennes #dessertautomne #chocolatmaison #boulangerierennes #traiteur (critic pass additions) · #rennes #boulangerie #rennesmaville #rennesfoodguide #foodrennes #boulangerieartisanale #faitmaison #patisserie #artisanat #boulangerierennes #ouvertledimanche #crepesmaison.
- **Values and labels**: fait maison, artisanat, produits de saison, zéro gaspi (TGTG), targeted raw materials, ongoing training, training apprentices, French chicken and peppers on the pizzas, vegetarian sandwiches. Label: **Banette** only. ("Increasingly local raw materials" is unsourced: do not use.)

---

## 6. Place & context

- **Street**: rue Champion de Cicé is the **commercial spine of Cleunay**. Buildings of 3 to 8 storeys have flats above shops, and the **Groupe scolaire Champion de Cicé** (primary schools) is on the street. No. 44, next door, is the Rennes Métropole "Calm Cleunay" children's leisure centre. The street name honours the Champion de Cicé family; Jérôme(-Marie) Champion de Cicé was born in Rennes in 1735 and became Archbishop of Bordeaux. The link to the street is a low-confidence inference.
- **The quartier**: Cleunay – Arsenal-Redon, about 14,000 residents, on the **left bank of the Vilaine** in south-west Rennes. It is bounded by the Vilaine (north), boulevard de la Tour d'Auvergne / place de Bretagne (east) and the Rennes-Quimper railway (south). Cleunay began as a **post-war "cité d'urgence"**: the first housing was finished in the mid-1950s, and HLM blocks such as "Cleunay II" (59-63 rue Champion de Cicé, 1960, architect **Albert Hec**) followed. Today it has mostly residents and families, a lot of social housing, schools, a collège and family gardens. It is **gentrifying** through ZAC Bernard-Duval and the La Courrouze eco-district ("Cours Lumière" offices and flats just south).
- **Landmarks (approximate straight-line distances)**:
  - **Roazhon Park** (Stade Rennais): about 0.9 km. Match-day crowds pass through the area.
  - **Le Mabilay**: about 0.8 km. Louis Arretche's tripod-plan telecoms tower (1971-73), rehabilitated in 2013.
  - **E.Leclerc Cleunay / "Cleunay Boulevard"** shopping centre: about 0.85 km.
  - **Le Ciel de Rennes / Centre Culinaire Contemporain**: in Cleunay.
  - **La Prévalaye**: about 400 ha of farmland, ponds and Vilaine towpaths on the western edge. Historically famous for its **butter** (beurre de la Prévalaye). Only claim a sourcing link if the client confirms one.
  - Étangs d'Apigné; Stade Rennais' Henri-Guérin training centre.
  - **Marché des Lices**: about 1.9 km, in the city centre, every Saturday since 1622 (galette-saucisse, kouign-amann, sea-salt butter). Context only, not foot traffic.
- **Transport**:
  - **Métro ligne B, station Cleunay** (38 rue Jules Lallemand), opened 20 Sept 2022; the bakery says "à 4 minutes à pied". La Courrouze and Mabilais stations are also nearby.
  - **Bus 10 and N3 (night), stop "Champion de Cicé"** (2023 data; check on star.fr). Lines C5, C6, 9 and 54 also serve the area.
  - Near the rocade ("4 min du périphérique", job ad).
  - Parking: none on site; public or street parking nearby.
- **Foot-traffic rhythm**: early commuters and school runs in the morning, office lunch from Cours Lumière / La Courrouze, the goûter and "sortie d'école", and **Sunday morning**, when several rivals are closed.
- **Breton / Rennes cues (use as texture, not clichés)**: crêpes (the inherited recipe), kouign-amann, far breton, sablé breton (the Tennis Ball base), "Roazhon" (Breton for Rennes), Pont-Réan purple schist, Rennes' colourful half-timbered houses, the Odorico mosaics, the Mabilay silhouette and Prévalaye butter. **Avoid** using the triskell, hermine, Gwenn-ha-Du or sailor stripes as decoration.

---

## 7. Competitors

Distances are straight-line from 48.10284, -1.70332 (OSM).

| # | Competitor | Address / distance | Rating | Positioning | How Le Fournil de Prosper differs |
|---|---|---|---|---|---|
| 1 | **L'Instant Gourmand** | 32 rue Jules Lallemand, ~0.3 km | not found | Independent artisanal bakery-pâtisserie, no website | Closest independent rival. Prosper adds crêpes, Sunday opening, pizza Monday, the Flankie, zero-waste and an active Instagram |
| 2 | **La Station Gourmande** (possibly now "Aux Délices de Sam & Elo") | 2 rue Jules Vallès / promenade Nicolas-Borie, ~0.3-0.85 km | 4.6 / 243 (Wanderlog, under the new name; medium-low confidence it is the same shop) | Snacking specialist: build-your-own sandwiches, ~€7.50 meal deals; closed at weekends | Prosper is the fuller craft bakery (pâtisserie, cakes, crêpes) and is open Saturday and Sunday |
| 3 | **Mariette** | 21 allée Jacques-Noël Sané, ~0.4 km | not found | National franchise ("réinvente l'art du pain") | Independent, owner-run, everything "fait maison", with the corner's own story |
| 4 | **Brioche Dorée** (Leclerc gallery) | 1-2 rue Jules Vallès, ~0.8 km | not found | Fast-casual chain in a hypermarket | Craft versus industrial |
| 5 | **Maison Quénot** | 70 bd Marbeuf, ~0.8 km | not found | Traditional bakery, **Banette** network | **Both are Banette members** (the market report's "Prosper is not tied to a network brand" is wrong). Prosper wins on crêpes, Sunday, seasonal and zero-waste identity, and voice |
| 6 | **Le Fournil de la Courrouze** | 11 av. Germaine-Tillion, Saint-Jacques-de-la-Lande, ~1.0 km | 3.7 / 59 (myboulange snippet) | Lunch bakery and tea room for offices, Mon-Fri 7:00-15:00 only | Prosper covers early morning, evening, Saturday and Sunday, and rates higher |
| 7 | **Thierry Bouvier / Maison Bouvier** | 21 rue de la Motte-Picquet, ~1.35 km | 4.1 / 420 Google; 4.0 / 17 TA | Prestige pâtissier-boulanger (gianduja bread, cannelé, Odorico-themed galette); website; closed Sun-Mon | Prosper is the friendly, affordable daily bakery that is open on Sunday |
| 8 | **Boulangerie Ange** | 220 rue de Lorient, ~2.0 km | 4 / 1 (PJ) | Franchise (~80 shops, 3 in Rennes), drive-to, pizzas, click & collect | A walk-in neighbourhood shop versus a chain on a big road |
| 9 | **Augustin** (Le Colombier) | 21 place du Colombier, ~1.9 km | mixed | Chain with in-store bake-off ovens and a sourdough range | Same craft-versus-chain contrast |

Also within about 1.5 km (not profiled): Au four et au moulin (rue Vaneau), Maison Roignant / "L'Atelier Boulanger" (248 rue de Nantes, 7.8/10 on top10boulangeries), Levain (121 rue de Nantes), Au Bonheur du Pain (35 rue Vaneau, 5/5 from 7 on PJ). City-centre benchmarks are 2 km or more away: Pâtisserie Le Daniel (MOF), Boulangerie Hoche, Grand-Père Jules, Le Fournil des Halles, Elluard. Other "Fournils" in Rennes (Vasselot, des Halles, de Gaëtan) are unrelated.

**How Le Fournil de Prosper wins**
1. **The neighbourhood's daily bakery with a face**: a real person's name on the sign, a team that answers reviews, and a gérant who signs his posts. Chains (Mariette, Brioche Dorée, Ange, Augustin) cannot say this.
2. **Open when others are not**: continuous hours from 6:45 to 19:15, Saturday, and Sunday morning, which many nearby rivals do not offer. Clear communication matters, because the one big listing (PagesJaunes) gets the closing day wrong.
3. **Rituals people come back for**: crêpes (an inherited recipe), the Flankie du mois, pizza du lundi, Sunday levain, the seasons.
4. **Fait maison + zéro gaspi + saison**, said with humour rather than as corporate claims.
5. **Celebration cakes and minis for events** at neighbourhood prices.
6. **The best-reviewed independent in Cleunay**: 4.4 from about 150 Google reviews.
7. **No competitor in the immediate quartier has a strong website**, and Prosper has none. The first good site wins the search "boulangerie Cleunay".

---

## 8. Inspiration

| Reference | URL | What to take | What to avoid |
|---|---|---|---|
| **Union Boulangerie** (Paris), on SiteInspire | https://unionboulangerie.com · https://www.siteinspire.com/websites?search=bakery | The closest analogue: "Une boulangerie de quartier / Pour le quartier". A method section naming ingredient origins, "Find us" with hours, a catering contact form, an ingredient mini-game | Its Paris polish; Prosper is more familiar and funnier |
| **Mamiche** (Paris) | https://www.mamiche.fr/ | Personality carried **through words** ("Make miches, not war", "Craquages en tout genre"), a glossary definition device | Its one-page format; we need a full site |
| **Sonoma Bakery** (Sydney), Awwwards HM 2022 | https://sonomabakery.com/ · https://www.awwwards.com/sites/sonoma-bakery | A founder line, a heritage date stamp in the hero, large product cards | The monochrome luxury tone |
| **For the Love of Bread** (Sonoma), Awwwards SOTD 2021 | https://fortheloveofbread.com · https://www.awwwards.com/sites/for-the-love-of-bread | Scroll storytelling with pinned chapters | The night-in-the-fournil narrative (already used by the sibling Fleur de Sel site) |
| **Bernice Bakery** (Montréal), Awwwards HM 2025 | https://bernicebakery.com/ · https://www.awwwards.com/sites/bernice-bakery | Joyful but practical; pick-up rules up front; illustrated SVG dividers; playful micro-interactions ("cookie crumbs") | Its teal / pink palette |
| **Black Star Pastry** (Sydney), Awwwards HM 2022 | https://blackstarpastry.com/ · https://www.awwwards.com/sites/black-star-pastry | Illustration plus typography on a plain ground; product cards with ingredient-level descriptions | — |
| **Wildwood Bakery** (AU), Awwwards HM 2021 | https://www.awwwards.com/sites/wildwood-bakery (domain wildwoodbakery.com.au no longer resolves) | Illustration mixed with motion | Its palette |
| **CAFE STUDIO BAKERY** (Tokyo), Awwwards HM 2018 | http://cafestudiobakery.tokyo/ · https://www.awwwards.com/sites/cafe-studio-bakery | Calm restraint, parallax | Brown monotone |
| **Poilâne** (Paris) | https://www.poilane.com/ | Savoir-faire section on hands and gesture; recipe hub; store-locator clarity | Its heritage gravitas (Prosper's story starts in 2021) |
| **Lune Croissanterie** (AU) | https://www.lunecroissanterie.com/ | A focus on one hero product (for us, the pain au chocolat "#trusttheprocess"); a gamified loyalty "passport" idea for the Flankie collection | Lab / science tone |

---

## 9. Design direction

**Skills consulted.**
- **`ui-ux-pro-max:ui-ux-pro-max`**: design-system query "artisan bakery neighbourhood warm homemade" (variance 7 / motion 8 / density 4), plus a typography query "handwritten script warm serif bakery".
  - **Rejected**: its output of "Vibrant & Block-based" with Fredoka / Nunito (a children's-app pairing), amber-on-cream (#92400E / #FEF3C7, the generic bakery template), and a "3-step funnel" pattern. Its script suggestions (Caveat, Great Vibes) were also rejected: Caveat is already used by sibling sites, and Great Vibes is bridal.
  - **Kept**: its "avoid poor food photos + hidden hours" rule (hours are visible everywhere), Flip-based page transitions with a reduced-motion final state, and the 4.5:1 contrast and 375/768/1024/1440 checks.
- **`design-taste-frontend`**:
  - Design read and dials (below).
  - **One locked accent**; one radius system.
  - Serif only with a justification: here it is the real shopfront's serif signage caps, so the serif is a **label face only**, never the default display.
  - **No beige + brass + espresso default**: the palette comes from the real awning, oak fascia and terracotta house.
  - No em-dashes in site copy; at most one marquee; eyebrow restraint; no scroll cues; no custom cursor; motion must be motivated.

**Design read**: *a complete local-business site for Cleunay neighbours, families and lunchtime workers, with a warm, funny, everyday-craft language, leaning toward Vite + Tailwind v4 + GSAP (ScrollTrigger, Flip, SplitText) + Lenis, with original SVG/CSS illustration instead of photos.* Dials: **VARIANCE 7 · MOTION 8 · DENSITY 4.**

**Sibling differentiation (mandatory).**
- **Boulangerie Fleur de Sel** = « Tourage »: a night-to-dawn story (1h → 6h30), near-black with gold, Schibsted Grotesk.
- **Maison Bécam** = « Lys & Hermine »: a daylight story in navy and gold, Cormorant / Montserrat.
- **Seize Heures Trente** will have its own direction.
- Prosper must therefore **not** be a night or dawn fournil story, **not** gold, and **not** navy-led. Its story is **daytime and calendar-driven**: the day, the week, the month and the year of a neighbourhood shop. Fonts used by any sibling are excluded (Cormorant, Montserrat, Bodoni Moda, Playfair, Gloock, Instrument Sans, Schibsted / Hanken Grotesk, Archivo, Barlow, Big Shoulders, Caveat, Outfit, Sora).

### Concept: **« 6 jours sur 7 »**
*One-line idea:* **the site is the corner bakery's living calendar.** It reads today's date and time in Rennes and opens on what Prosper's counter holds right now: the 6h45 croissant, the weekday lunch formule, Monday's pizza, Sunday's crêpes and levain, the Flankie of the month, the season's galette or bûche. On Wednesdays the shop is closed, and the site says so with a smile.

Why it is *this* business:
- The bakery's own claim is "ouverte **6 jours sur 7**, dont le dimanche matin".
- Its Instagram already uses **calendar mock-ups**, monthly rituals (Flankie du mois), weekly rituals (pizza du lundi, the Friday offer, Sunday levain) and seasonal highlights (👑🐰🍓🎃🎄).
- Its most practical problem is real: a major directory shows the **wrong closing day**.
- The concept turns "when to come and what you'll find" into the hero, which is exactly what a neighbourhood customer needs.

**Personality keywords**: *de quartier · fait maison · malicieux · généreux · franc · rituel · Cleunay · avec le sourire.*

### Palette (from the real shopfront; hex approximations from a photo, adjusted for contrast)
| Token | Hex | Origin | Role |
|---|---|---|---|
| `--store` (awning anthracite) | **#22232F** | awning, approx. #22232F | Primary text on light; dark bands (the awning strip, footer, "fermé" state). 14:1 on `--enseigne` |
| `--enseigne` (sign white) | **#F3F3EF** | white serif caps on the awning | Page background. A neutral, slightly cool white, deliberately **not** cream |
| `--chene` (oak fascia) | **#CBB89D** | fascia, approx. #CBB89D | Material bands: the fascia header, product "shelves", price tags. Text on it is `--store` (8:1) |
| `--pilier` (oak pillar) | **#988265** | pillars, approx. #988265 | Illustration shading, hairlines, large decorative numerals only (3.3:1, **never body text**) |
| `--brique` (the terracotta house above the shop) | **#A9472A** | proposed; the house colour is described but has no measured hex | **The one accent**: CTAs, links, "ouvert maintenant", the Flankie badge. 5.2:1 on `--enseigne` |
| `--brique-clair` | **#D9714C** | lighter accent for dark surfaces | The accent on `--store` (4.8:1) |
| `--acier` (steel-blue frame edge) | **#5C7C99** | proposed; the frame edge is described but has no measured hex | **Structural hairline only**, echoing the frame's thin edge (e.g. the 1px rule under the awning band). Never interactive, never text |
| Illustration pigments (not UI) | croûte #B5772F · flan #E7C46B · fraise #C9483F · pistache-sauge #8C9A6B | food | Only inside product illustrations, never on buttons or text |

**Dark mode** (`prefers-color-scheme`, plus a toggle styled like a shop sign "allumé / éteint"): background #1A1B24, surfaces `--store`, text #ECEBE6, oak #CBB89D unchanged, accent `--brique-clair`. Oak bands become the warm light of the dark page, like the fascia lit at night. The theme is locked page-wide, with no section inversions.

### Typography
- **Display + body: Bricolage Grotesque** (Google Fonts, variable `opsz` 12-96, `wdth` 75-100, `wght` 200-800). It is a warm, slightly irregular grotesk with a printed-ephemera feel. It carries the **funny, ALL-CAPS, emphatic voice** (wide heavy caps for « FAIT MAISON », condensed for price tags) and stays readable at body size with low optical size. Body 17px / 1.6; display `opsz` 96, tracking -0.02em. Emphasis inside a headline uses italic or weight of the **same family**.
- **Signage label face: Marcellus SC**. A small, widely spaced serif capital that echoes the real "BOULANGERIE" / "PÂTISSERIE" / "SNACKING" fascia lettering. Use it **only** for the awning band, category labels, and the "6/7" calendar day names, at 12-15px, tracking 0.18em. It is not a display face.
- **Signature script: Pinyon Script**, a calligraphic face close to the black script logotype. Use it **only** for the wordmark lockup "Le Fournil de Prosper" (a typeset approximation **until the real logo file is supplied**) and for the "Prosper" sign-off under his notes. Never in body text and never for more than 4 words.
- Self-host all three (`@font-face`, `font-display: swap`, subset latin + latin-ext for French accents). French typography throughout: non-breaking spaces before `: ; ! ?`, « guillemets », and "6h45" in the shop's own style.

### Imagery approach (we may not use their photos)
- **No scraped Instagram or Facebook photos.** Imagery is **original SVG and CSS**:
  - **"Étiquettes de comptoir"**: each product is a flat, cut-paper-style illustration (bold silhouettes in the 4 food pigments, with `--pilier` shading and visible paper grain via a fixed `pointer-events:none` noise overlay) sitting on an **oak shelf band**, with a Marcellus SC label and a Bricolage price tag. One illustration family covers the whole site: croissant, pain au chocolat, baguette tradition, levain, crêpe stack, Flankie cross-section, far, flan, kouign-amann, tarte aux fraises, galette, bûche, pizza, sandwich and the pot of jam.
  - **The shopfront as UI chrome**: the header is the oak fascia with the script wordmark, and the awning band (anthracite with white Marcellus caps "BOULANGERIE • PÂTISSERIE • SNACKING") sits under it with the steel-blue hairline. These are geometric bands, not an illustration of the building.
  - **The calendar as imagery**: monthly pages, day tabs and tear-off sheets, echoing their Instagram calendar mock-ups.
- If an image-generation tool is available, overhead flat-lays on an anthracite surface in daylight may complement the illustrations. **Label them "illustration"** and never present them as the shop's own products. Hand-drawn SVG icons are not allowed: use **Phosphor** icons (one family, 1.5 stroke).
- Real photos can be added later only with the owner's permission (TODO).

### Layout ideas
- **Header = fascia + awning**: an oak band with the script wordmark on the left, nav in Bricolage, and a live status pill on the right ("Ouvert jusqu'à 19h15" / "Fermé le mercredi, à demain 6h45"). The awning strip below it scrolls very slowly as the **page's only marquee**.
- **Hero « Le comptoir du moment »** (asymmetric split, `min-h-[100dvh]`):
  - Left: a headline that changes with the time slot, for example « Les croissants sont chauds. » at 6h45-10h, « La formule du midi vous attend. » at 11h30-14h, « C'est l'heure du goûter. » at 16h-18h, « Pizza du lundi ! » on Mondays, and « Le fournil se repose. » on Wednesdays. Subtext ≤ 20 words. Two CTAs: « Voir la carte » and « Commander un gâteau ».
  - Right: an oak shelf showing 3-4 illustrated products for that slot. Mock data maps slots to products.
- **Week strip « 6 jours sur 7 »**: seven tall day columns (Marcellus day names). Each shows hours and that day's ritual. Wednesday is a dark `--store` column with « Fermé : on souffle ! » (mock line). Today's column is outlined in `--brique`.
- **Flankie du mois**: a full-width oak section with a giant cross-section illustration (see the signature interaction) and an archive « carnet de Flankies ».
- **La carte**: filters as fascia-style tabs (Pains · Viennoiseries · Pâtisseries · Crêpes · Snacking · Saisons · Épicerie), with masonry shelves, not equal cards.
- **Notre histoire**: a vertical **ledger timeline** of the corner (1987 Leduc → 30 June 2021 → 1 July 2021 → 2022 1st anniversary → 2024 3rd → 2026 levain), with the crêpe-recipe handover as the centrepiece.
- **Infos pratiques**: a big hours table that highlights today, a métro / bus block, accessibility facts, payment icons and a static map illustration with a link to Google Maps.
- **Critic-pass grounding (from the 2024-2026 posts found in the critic pass)**:
  - **The calendar must handle exceptions, because the real one does.** The shop opened on two Wednesdays (24 and 31 Dec 2025, 8h-18h), closed on 25 Dec, 1 Jan and 1 May, ran half-days on 11 Nov 2024 and 14 July 2026, and took a summer break (14 July 13h → 5 Aug 2026). `getShopState(now)` must therefore read a `closures.ts` exceptions table before the weekly rule. The status pill then uses their own bracket format, e.g. « [Congés d'été] On revient le jeudi 6 août à 6h45 ». This is the strongest real argument for the concept: the shop already publishes these notices by hand on two networks.
  - **« Les rendez-vous de l'année »**: the seasons calendar gets real anchors instead of generic ones: weekly special-edition galettes (Jan), Easter chocolates « Œufs, Cocottes, Poissons et Fritures » (Mar-Apr), the Papouney for Fête des Pères (June), the anniversary on **1 July** with its urn draw, summer closure (mid-July to early Aug), the Flankie each month, rentrée pizzas (Sept), the Tennis Ball (Sept 2026), the **journée dégustation** (a late-Nov Saturday), Brioches Saint Nicolas (6 Dec), the carte des fêtes with reservation deadlines and the Sapin Feuilleté (Dec).
  - **Anniversary stamp**: the hero or footer shows a « depuis le 1er juillet 2021 » stamp. Around 1 July it switches to « [6 ans de la boulangerie 🥳] » (a mock for 2027, labelled).
  - **The "Le saviez-vous ?" card** carries the one true founder fact (14 years a baker), styled like their square-bracket posts. This replaces any invented founder bio.
  - **The reader reward**: a small footer line « Pour ceux qui ont lu jusqu'ici… » rewards people who scroll to the end with a real-voice wink. Keep it as copy only, with no fake voucher.
- At least 4 different layout families per page. No 3 equal cards. The radius system is **6px for tags and inputs, 14px for shelves and cards, pill for status and filter chips**, applied everywhere.

### Signature interaction (unique to this business)
**« Le Flankie, couche par couche »**: on the home page and the Flankie page, a pinned, scroll-scrubbed **cross-section of the month's Flankie assembles layer by layer**. For October 2026 the layers are the real recipe: **pâte à cookie** (a base slab rises), then **compote pomme-poire-noisette** (pours and settles with a slight wobble), then **appareil à flan praliné** (fills to the rim, and the top bakes from pale to caramel via a filter / gradient shift). Each layer gets a Marcellus label and one line of copy. At the end, a "Jusqu'au 31" stamp lands. The archive lets users flip between months (August: citron meringué, real; other months: mock, labelled). It is driven by `src/data/flankies.ts`, so a new month means a new data entry.

**Secondary signature: the live calendar**. The hero, the week strip, the status pill and the footer all use one `getShopState(now)` helper (Europe/Paris via `Intl.DateTimeFormat`) that returns `{ open, closesAt, nextOpen, slot, dayRitual, season }`. A small **"tear-off calendar" page** in the footer shows today's date and flips (3D `rotateX`) at midnight or when the user steps through days with arrows. Users can preview any day: « Et dimanche ? » shows crêpes, levain, 7h30-13h.

### Motion language
Libraries: **GSAP 3** (ScrollTrigger, Flip, SplitText; free since 2025, confirm the current licence and version before install), **Lenis** smooth scroll (disabled under reduced motion), and the **View Transitions API** for cross-page navigation where supported (Flip fallback). Check current docs and caniuse before building, per CLAUDE.md. Animate transform, opacity and clip-path only.

- **Hero (load, about 1.4 s total)**:
  1. The oak fascia slides down (`yPercent -100 → 0`, 0.6 s, `expo.out`), then the awning band rolls out under it (`scaleY 0 → 1` from the top, 0.45 s) and the steel-blue hairline draws left to right.
  2. The script wordmark is revealed with a left-to-right `clip-path` wipe, like a pen stroke.
  3. The time-slot headline splits by word with SplitText and rises in a stagger (0.04 s).
  4. Products drop onto the oak shelf with a small spring settle (`back.out(1.6)`, staggered), and the status pill "prints" in last.
- **Scroll storytelling (home)**:
  1. **« Une journée au Fournil »**: a pinned horizontal pan from 6h45 to 19h15 (daytime only). The panels are ouverture et café à emporter, l'heure de l'école, la formule du midi, le goûter, and la dernière fournée du soir. A sun-disc glyph crosses the top; the background tint shifts only within the palette (`--enseigne` → a warmer oak wash → `--enseigne`).
  2. **« 6 jours sur 7 »**: the day columns fan in from the centre; Wednesday drops in last and darker.
  3. **Flankie couche par couche**: the signature interaction above.
  4. **« Les saisons »**: a drag or scroll horizontal calendar of 12 tear-off months with seasonal ranges (👑 galette in January, 🐰 Pâques, 🍓 fraises, 🎃 Halloween, 🎄 Noël). Emoji are not used as icons; show the illustrations and use the emoji only in copy where it quotes their voice.
  5. **Avis**: real ARennes quotes appear as **receipt tickets** printed from a counter till (`clipPath inset` from the top, with a slight paper curl). Each carries the attribution "Avis Google".
- **Page transitions**: the **crêpe spread**. A circular `clip-path: circle()` in `--chene` grows from the clicked link's position and spins slightly, like batter spread on a crêpe plate, then reveals the new page (0.55 s `expo.inOut`). The exit is faster than the entry. Shared elements (the product illustration from the carte → product detail) morph with Flip / `view-transition-name`.
- **Micro-interactions**:
  - CTAs press down 1px with a tag-shaped notch that slides.
  - Filter tabs move an oak "underline" with Flip.
  - The "Ajouter à ma commande" note bounces a mini croissant into the order-slip counter (mock).
  - The open / closed pill breathes very slowly only when open; this is real state, so it is allowed.
  - Product illustrations tilt 2-3° on hover (desktop only).
  - The order form's date picker greys out Wednesdays and Sunday afternoons.
- **Reduced motion** (`prefers-reduced-motion: reduce`):
  - Lenis is off, there is no pinning, and the horizontal pan becomes a vertical list of the 5 day moments.
  - The Flankie renders fully assembled with its 3 labelled layers.
  - The crêpe transition becomes a 150 ms opacity cross-fade, and the status pill is static.
  - All content stays in the DOM and is readable. Nothing exists only in a canvas.
  - Low-power and phone devices get shorter pins (`ScrollTrigger.matchMedia`) and lighter illustrations.

---

## 10. Site map

Vite multi-page build. `base: '/le-fournil-de-prosper-rennes/'` (already set in `vite.config.ts`). Site language is French. Every page has the fascia header with its live status pill, the awning marquee, a breadcrumb, a footer, a **newsletter « La gazette du Fournil » (mock, no backend; the form shows a local success state)**, and LocalBusiness JSON-LD (Bakery) with verified data only.

| Route | Page | Sections |
|---|---|---|
| `/` | **Accueil** | 1. Hero « Le comptoir du moment » (time-aware). 2. Strip « Fait maison · Zéro gaspi · Produits de saison » (their words). 3. « Une journée au Fournil » (pinned pan). 4. « 6 jours sur 7 » week strip. 5. Flankie du mois (signature). 6. Les indispensables (N°1 crêpes, real; teasers for next episodes, mock). 7. Pizza du lundi (the 2 real pizzas + mock rotation). 8. Les saisons calendar. 9. Real avis tickets + Google 4,4/5 « environ 150 avis ». 10. Commandes & événements teaser. 11. Notre histoire teaser (« Une boulangerie à ce coin de rue depuis 1987 »). 12. Infos pratiques mini-block + map link. 13. Newsletter |
| `/la-carte/` | **La carte** | Category tabs; search; filters (tags: végétarien, de saison, sans œufs?, jour: dimanche only, lundi only); masonry product shelves; product quick-view drawer (description, allergens, mock price, "disponible" days); « Prix indicatifs, demandez en boutique » note |
| `/la-carte/produit.html?id=` (or per-category pages) | **Fiche produit** | Large illustration, description, ingredients, allergens, when available, pairing suggestions, "Commander pour un événement" link |
| `/flankie/` | **Le Flankie du mois** | Couche par couche (pinned), current month (Oct 2026 real), « carnet de Flankies » archive (Aug 2026 real + mock months, marked), « Proposez votre Flankie » (mock poll, echoing their customer polls) |
| `/les-indispensables/` | **Les indispensables** | Episode list: N°1 Nos crêpes maisons (real, with the inherited-recipe story); further episodes as clearly mock drafts (viennoiseries #trusttheprocess, le levain T150, le flan) |
| `/dejeuner/` | **Le midi & la pizza du lundi** | Formules (mock compositions & prices), sandwiches (vegetarian badge), quiches, salads, pizza du lundi with the 2 real pizzas and a mock rotation calendar, café à emporter |
| `/commandes/` | **Commandes & événements** | Gâteaux personnalisés / d'anniversaire / number cakes / pièces de mariage; plateaux de mini-viennoiseries (**-10 % dès 20 minis**, real); traiteur; how to order (phone **02 99 67 31 73**, email **lefournildeprosper@gmail.com**, DM); lead-time guidance (mock, marked TODO); a quote-request form that composes a `mailto:` (no backend); date picker excluding Wednesdays |
| `/saisons/` | **Les saisons** | 12-month calendar: galette des rois / couronnes with the **weekly special editions** (Jan, real format; Galette Choco-Noisettes real), Chandeleur crêpes (Feb, mock), Pâques chocolates « Œufs, Cocottes, Poissons et Fritures » (real 2025), fraises (spring-summer), Fête des Pères « Papouney » (real name, composition TODO), **1 July anniversary** (real: 1st, 4th and 5th editions), congés d'été (real 2026 dates), rentrée (pizza back-to-school), Open de Rennes "Tennis Ball" (Sept 2026, real, past), Halloween / spooky season, **journée dégustation** (late Nov, real 2024 / 2025), Brioches Saint Nicolas (6 Dec, real), Noël: carte des fêtes, 4 bûches (names TODO), Sapin Feuilleté, plateaux, pain surprise (real); each month with product cards (real ones flagged) |
| `/fetes/` | **La carte des fêtes** (seasonal landing, live Nov-Jan) | Real model from Dec 2025: bûches (4 varieties, mock names marked), plateaux de mignardises, plateaux apéritifs et sucrés, Sapin Feuilleté, pain surprise, pains spéciaux; **reservation deadlines** (« jusqu'au 20 décembre pour le 24 », « jusqu'au 26 décembre pour le 31 », real 2025, the year to update), holiday hours (24 / 31 Dec 8h-18h; closed 25 Dec / 1 Jan, real 2025), the « file à part » for prepaid orders, the journée dégustation announcement; `mailto:` pre-order form |
| `/anniversaire/` (or a section of Notre histoire) | **Les anniversaires** | 1 July timeline: 2022 survey + €10 voucher draw, 2024 3 ans, 2025 « Le saviez-vous ? » (14 years a baker), 2026 « 1 an de viennoiseries le dimanche »; how the urn draw works (real mechanics) |
| `/zero-gaspi/` | **Zéro gaspi** | What "zéro gaspi" means at the shop (TGTG, real; no prices), produits de saison, point relais paniers fruits et légumes, tips to keep bread (mock editorial) |
| `/notre-histoire/` | **Notre histoire** | Ledger timeline 1987 → 2026; « la recette des crêpes » handover; Prosper's craft note (quote only from the real 15 Sep post, short, signed "Prosper"); l'équipe as **roles** (gérant, boulangers, pâtissier·ère, vendeuses, apprenti·es), no names except "Prosper"; Banette; values; anniversaries |
| `/le-quartier/` | **Le quartier** | Cleunay story (cité d'urgence → today), rue Champion de Cicé, nearby: Roazhon Park, Le Mabilay, La Prévalaye, métro Cleunay; "vos rituels de quartier" (mock editorial); match-day note (mock) |
| `/infos-pratiques/` | **Infos & accès** | Hours table (today highlighted), **« Fermetures & jours fériés » block driven by `closures.ts`** (real past examples, the next ones as « à confirmer »), address, phone, email, métro B Cleunay "4 min à pied", bus 10 / N3 (+ Api'Bus in summer) stop "Champion de Cicé" next to the shop, accessibility (acceslibre 2023 facts), payment methods, parking, map link, "Où nous suivre" (IG, FB) |
| `/actus/` + `/actus/<slug>.html` | **La gazette** (blog) | 10-12 posts, filter by tag (nouveauté, Flankie, saison, coulisses, quartier); post pages with related posts |
| `/galerie/` | **Galerie** | 18-24 illustrated tiles (products, seasons, the counter), lightbox, filters |
| `/faq/` | **Questions fréquentes** | 14-16 accordion entries, grouped (horaires, commandes, allergènes, paiement, accès, zéro gaspi) |
| `/contact/` | **Contact** | Phone (tel:), email (mailto:), DM links, address + map link, hours, `mailto:` message form |
| `/mentions-legales/` | **Mentions légales** | Verified: SARL LE FOURNIL DE PROSPER, capital 5 000 €, SIREN 900 157 413, RCS Rennes, siège 42 rue Champion de Cicé, TVA FR11900157413 (single-source), phone, email; directeur de publication: **TODO (ask client)**; hébergeur: GitHub Pages; note that the site is a showcase demo |
| `/confidentialite/` | **Confidentialité** | No cookies or tracking; forms open the mail client; localStorage only for the theme |
| `/plan-du-site/` | **Plan du site** | All routes |
| `404.html` | **404** | « Plus de baguette ici… » with a link to the carte and the home page (keep the existing `public/404.html` and `public/.nojekyll`) |

---

## 11. Mock-data plan

Everything lives in typed files under `src/data/` with exported interfaces. Each file starts with `// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.` Real items carry `real: true` and a `source` URL.

| File | Items | Content & rules |
|---|---|---|
| `shop.ts` | 1 | **Real only**: names, legal data, address, GPS, phone, email, socials, hours per day (Wed closed), transport, accessibility, payment, Banette, ratings (Google 4.4 / about 150; TGTG 4.6 / 90). Exports `getShopState(now)` |
| `products.ts` | **70-80** | Categories: `pains` (12), `viennoiseries` (14), `patisseries` (16), `crepes` (6), `snacking` (12), `saisons` (10), `epicerie` (6). Real names to draw from (§3): baguette tradition, baguette moulée, pain de campagne, pain aux céréales, pain d'épeautre, pain de mie, pain au levain T150, pain aux raisins, croissant, pain au chocolat, brioche moelleuse, brioche tressée pépites de chocolat, cinnamon roll, babka, chausson aux pommes, kouign-amann, flan, far breton, meringue, macarons chocolat / caramel beurre salé, tarte aux fraises, entremets, number cake, pièce de mariage, galette des rois, couronne des rois, bûche chocolat-praliné, crêpes maison, sandwichs (incl. végétarien), quiches, salades, Maison Lucie confitures (6 flavours: flavour names are **mock**). Mock additions must stay classic French / Breton bakery items (e.g. pain complet, ficelle, chouquettes, éclair, tarte au citron, paris-brest, gâteau breton, palmier, pain viennois); no exotic items. Fields: `id, name, category, description, ingredients[], allergens[] (gluten, lait, œufs, fruits à coque, soja, sésame), tags[] (fait-maison, de-saison, vegetarien, dimanche, lundi, signature), priceEUR, unit, availableDays[], slot[] (matin, midi, gouter, soir), illustration, real?, source?` |
| Prices (mock, plausible, within "1-10 € per person") | — | baguette 1,00-1,30 €; tradition 1,20-1,40 €; special breads 2,50-5,50 €; croissant 1,10-1,40 €; pain au chocolat 1,20-1,50 €; other viennoiseries 1,60-3,20 €; individual pastries 2,80-4,80 €; flan slice 2,50-3,20 €; Flankie 3,50-4,50 €; crêpes 1,00-1,50 each / pack of 5 for 5-6 €; sandwiches 4,50-6,90 €; formule midi 7,50-9,90 €; pizza 3,50-6,50 € (slice or individual, TODO size); celebration cakes 3,50-5,00 € per part. **The only real prices**: baguette "from 1 €", "5 crêpes + 1 pot = 10 €", "-10 % dès 20 minis". |
| `closures.ts` (new, critic pass) | 10-14 | `{ date or range, type: 'ferie' \| 'conges' \| 'horaires-speciaux', hours?, label, real, source }`. **Real past entries:** 11 Nov 2024 until 12h30; 1 May 2025 closed; 24 Dec 2025 8h-18h; 25 Dec 2025 closed; 31 Dec 2025 8h-18h; 1 Jan 2026 closed; 14 July 2026 7h30-13h; congés 14 July 13h → 5 Aug 2026. Future entries (Christmas 2026, 1 Jan 2027, summer 2027): `real: false`, label « à confirmer ». `getShopState` reads this first |
| `annualEvents.ts` (new) | 12-14 | Real anchors with source: weekly galette editions (Jan), Pâques chocolates, Papouney (June), 1 July anniversary (+ 2026 contest), congés d'été, Flankie monthly, rentrée pizza, Tennis Ball (Sept 2026), journée dégustation (late Nov; 2024: 23 Nov 9h30-15h; 2025: 29 Nov 9h-15h), Saint-Nicolas brioches (6 Dec), carte des fêtes (deadlines 20 / 26 Dec), Sapin Feuilleté, New Year traiteur |
| `flankies.ts` | 12 | **Real**: Vanille (month unknown, mark `month: null`); Aug 2026 citron meringué; Oct 2026 cookie / compote pomme-poire-noisette / flan praliné. Nine mock months (e.g. fraise-pistache in June, pomme-cannelle, chocolat-caramel beurre salé, marron, coco-passion, framboise…), each with 3 `layers[]`, colours from the illustration pigments, `real: false` and the label "idée de Flankie (exemple)" |
| `dayMoments.ts` | 5-6 | 6h45 ouverture, l'école, midi, goûter, fin de journée (+ Sunday 7h30-13h variant) → product ids, headlines (French, no em-dashes) |
| `weekRituals.ts` | 7 | Real: Mon pizza, Wed closed, Sun 7h30-13h + crêpes + levain T150. Fri offer (from Jul 2025 pinned post, "à confirmer"). Tue / Thu / Sat: mock suggestions, marked |
| `seasons.ts` | 12 months | Real anchors: galette / couronne (Jan), Pâques, fraises, rentrée pizza, Open de Rennes Tennis Ball (Sept 2026), Halloween, Noël bûche. Each month gets 3-5 product ids |
| `pizzas.ts` | 8 | 2 real (La Méditerranéenne, L'Américaine, recipes exact) + 6 mock (e.g. La Bretonne andouille-pomme, La Végétarienne, La Chèvre-miel, La Savoyarde…), marked |
| `formules.ts` | 4-5 | Mock lunch formulas (sandwich + boisson + dessert, etc.) |
| `events.ts` (commandes) | 12 | Cake types, mini-viennoiserie trays (20 / 40 / 60 pieces, with the real -10 % rule), traiteur boards, number cakes for 10 or 12 parts (search summary), wedding pieces; mock lead times |
| `posts.ts` (gazette) | **18** | **~14 based on real posts**, paraphrased with date + source: dégustation Nov 2024, Brioches Saint Nicolas (Dec 2024), Sapin Feuilleté (Dec 2024), Galette Choco-Noisettes (Jan 2025), chocolats de Pâques (Apr 2025), 4 ans « Le saviez-vous ? » (Jul 2025), dégustation bûches (Nov 2025), carte des fêtes (Dec 2025), 5 ans « 1 an de viennoiseries le dimanche » (Jun 2026), congés d'été (Jul 2026), Flankie Aug, crêpes N°1, rentrée pizzas, levain T150 + Maison Lucie, Tennis Ball, Prosper's craft note [short exact quote only], Flankie Oct (keep the best 14). ~4 mock (conserver son pain, le quartier les jours de match, coulisses du feuilletage, l'apprentissage) with `mock: true` |
| `reviews.ts` | 8-12 | **Only the real quotes of §4.6**, attributed to "Avis Google" / "Tripadvisor (traduit)". **No invented reviews.** The generic testimonial style ("Cliente fidèle") only if it is clearly labelled as an example and never next to the real ones; preferably none |
| `faq.ts` | 16 | Hours, Wednesday closure, Sunday, ordering cakes (how far ahead: TODO / mock), minis -10 %, allergens, vegetarian, payment, titres-restaurant, accessibility, métro / bus, parking, TGTG, point relais paniers, pizza Monday, Flankie |
| `gallery.ts` | 20-24 | Illustration tiles by theme (viennoiseries, pains, Flankies, saisons, comptoir, quartier) |
| `team.ts` | 6 roles | Gérant "Prosper"; boulanger·ère; pâtissier·ère; vendeuses (2, as in reviews); apprenti·e boulanger; apprenti·e pâtissier. **Roles only, no invented names or faces** |
| `stats.ts` | 6-7 | Real only: "depuis 1987 sur ce coin de rue", "ouvert le 1er juillet 2021", "5 ans en juillet 2026", "14 ans de métier avant de se lancer" (Prosper), "6 jours sur 7", "4,4/5 Google, environ 150 avis", "4 min du métro Cleunay". No invented counts ("12 000 croissants par an" is **banned**; the crêpe count is a real unanswered question in their post, « Vous pensez qu'on en a fabriqué combien ? », so it can be a quiz with **no** answer) |
| `products.ts` additions (critic pass) | +10 real | Galette Choco-Noisettes, Brioches Saint Nicolas, Sapin Feuilleté (2 flavours), bûches ×4 (names mock, flagged), plateau de mignardises, plateau apéritif, pain surprise, chocolats de Pâques (œufs, cocottes, poissons, fritures), Papouney (composition mock, flagged), Flankie Vanille, brioche tressée au chocolat (**7,50 €, the 4th real price**). This brings the real share of the catalogue to about 45 products |

---

## 12. Content rules

**Real and must stay exact**
- Name **Le Fournil de Prosper**; address **42 rue Champion de Cicé, 35000 Rennes**; phone **02 99 67 31 73**; email **lefournildeprosper@gmail.com**; Instagram @lefournildeprosper; Facebook /lefournildeprosper.
- Hours: **lun, mar, jeu, ven, sam 6h45-19h15 · mer fermé · dim 7h30-13h**. Never copy PagesJaunes' Saturday closure.
- Legal data (SARL, capital 5 000 €, SIREN / SIRET, RCS Rennes).
- History dates: 1987 Boulangerie Leduc, 30 June 2021 purchase, 1 July 2021 opening; 1st anniversary 2022; 3rd anniversary 2024 (single-source); 4th (1 July 2025, the 14-years-a-baker fact) and 5th (1 July 2026, the contest), both from own posts.
- Real past holiday hours and closures (§1) and the 2025 Christmas reservation deadlines; present them as past examples or as « à confirmer » for the coming year.
- Real prices: baguette "from 1 €", "5 crêpes + 1 pot = 10 €", "-10 % dès 20 minis", brioche tressée au chocolat 7,50 €.
- Métro B Cleunay "4 minutes à pied", bus 10 / N3 "Champion de Cicé".
- Real product names, the 2 real pizza recipes, the real Flankie recipes, and the real offers with their dates.
- Their own phrases, quoted exactly: « FAIT MAISON miam », « Zéro gaspi », « Produits de saison », « petite boulangerie de quartier », « avec le sourire », « vive L'ARTISANAT », « cuisson en continu », « 6 jours sur 7 ».
- Ratings exactly as in §4.1, with the platform and the approximate count ("environ 150 avis Google").

**Can be mock (label as such in data, and on the site where a reader might take it as fact)**
- Prices other than the three real ones; formule compositions; most product descriptions; allergens.
- Flankie months other than Aug and Oct 2026; mock pizzas; seasonal product line-ups; most gazette posts; FAQ answers beyond the facts; gallery; lead times; tray sizes.
- Add a site-wide footnote: « Site de démonstration : prix et certaines descriptions sont indicatifs. »

**Must never be invented**
- Prosper's surname, birth year, home address, face or biography beyond the one public fact (« boulanger pendant 14 ans avant de se lancer »). **Use "Prosper" only**, as the bakery does. The register surname is not to be printed on the site, and neither is any birth date from aggregator URLs.
- Names of the 4 Christmas 2025 bûches, the Papouney's composition, the pain surprise filling, the Maison Lucie flavours stocked, the first 5th-anniversary contest prize, an Initiative Rennes honour loan, and anything after « La 7ème… » in the May 2026 post.
- Ouest-France template claims: "distributeur de billets", "service drive", "burgers maison", "produits vegans", "pain chaud à toute heure".
- Team members' names or photos.
- Awards, contest results, press articles, guide listings, Maître Artisan or organic labels. Only Banette may be mentioned.
- Customer reviews under real-looking names; review counts other than the sourced ones.
- Ingredient sourcing (mill, butter origin, Prévalaye link, "local" claims) beyond what was found: "matières premières ciblées", "poulet et poivrons français", T150 flour.
- The baguette vending machine, Phénix, vegan range, homemade burgers or delivery (Uber Eats) as facts. Leave them out, or phrase them conditionally after client confirmation.
- Too Good To Go basket prices.
- A current job offer.
- Holiday closures or public-holiday hours.
- Any link to the Cleunay fire article bakery.
- The koifaire Leduc description.
- Site copy: **no em-dashes**; French typography rules apply.

---

## 13. Unknowns / TODO

| # | Unknown / conflict | How to resolve |
|---|---|---|
| 1 | **Logo file and exact brand fonts / colours** (only approximated from a photo; terracotta and steel-blue hex are proposals) | Ask the client for the logo (SVG / PDF) and signage specs |
| 2 | **Holiday hours**: *largely resolved in the critic pass* (11 Nov 2024, 1 May 2025, Christmas 2025, 14 July 2026, summer 2026 closure). Still unknown: future dates, and whether the summer break always falls in mid-July to early August | Ask the client for the 2026-27 closure calendar; future entries in `closures.ts` stay « à confirmer » |
| 3 | **Saturday hours**: settled as open (own posts), but PagesJaunes / Mappy / 118712 still say closed | The client should fix their Solocal listing; the site uses the own-post hours |
| 4 | **Outdoor bread vending machine** (Wanderlog summary only) and "pain chaud à toute heure". The Ouest-France template calls its "Distributeur" a cash machine, so the sources now **contradict** each other | Ask the client; omit until confirmed |
| 5 | **Phénix**, vegan options, homemade burgers, regional products (Ouest-France listing) | Ask the client |
| 6 | **Uber Eats** store page exists (reported closed around March 2026, low confidence) | Ask the client; do not show delivery |
| 7 | **TGTG prices** conflicting (Panier Gourmet 5.99 € on tgtg-alerts vs 8.99 € for 18 € value on a TGTG snippet) | Do not publish; link to the TGTG app only |
| 8 | **Full price list** (none published); baguette "from 1 €" not re-verified | Ask the client for a price sheet |
| 9 | Whether the **Friday offer** (3 viennoiseries = 1 offerte) still runs | Ask the client; show as "à confirmer" or omit |
| 10 | Whether the **Sunday-only levain** has become daily; which 6 Maison Lucie flavours are stocked (the producer is identified with medium confidence as Maison Lucie, Trégueux) | Ask the client / check the latest Instagram posts |
| 11 | End of the Instagram bio "Ouvert aussi le…" (truncated, most likely dimanche) and the second bio link (Linktree?) | Read the profile while logged in, or ask |
| 12 | **Facebook** posts, follower count (221) and recommendations unreadable | Ask the client or read while logged in |
| 13 | **Google Maps** never read directly; review count drifts (148 / 153 / 158) | Use "environ 150 avis"; refresh before launch |
| 14 | Tripadvisor rank (#7 of 14 bakeries vs #603/708 or #610/718 restaurants) and its opening time (07:00, outdated) | Do not show the rank |
| 15 | ~~Bus lines~~ **Resolved**: STAR open data (processed 12 Oct 2026) confirms lines 10, N3 and Api'Bus at "Champion de Cicé" | Re-check only if the site launches after a STAR network change |
| 16 | **Parking**: "parking gratuit" (Ouest-France) vs "no own parking, public nearby" (acceslibre) | Phrase as "stationnement à proximité" |
| 17 | Accessibility data from April 2023 | Ask the client to confirm |
| 18 | Whether Prosper wants his first name and story shown, and any photos of the shop or team | Ask the client before launch |
| 19 | **Directeur de publication** for the mentions légales | Ask the client |
| 20 | The **2023 "Nouveauté"** post content; the 3rd-anniversary post (not re-verified) | Read Instagram / Facebook while logged in |
| 21 | Banette signage claim ("ARTISAN BOULANGER & BANETTE") seen only in a photo | Ask the client / look at the shopfront |
| 22 | Building history of no. 42 before 1987; the R.C.L. company's dates and its link to Leduc | Archives or the client |
| 23 | France Travail job ad attribution (presence report says this shop; market report says low confidence) | Irrelevant to the site; do not show hiring |
| 24 | La Station Gourmande vs "Aux Délices de Sam & Elo" (competitor identity) | Only matters for the competitor analysis |
| 25 | Cake lead times, sizes and pizza format (slice or individual) | Ask the client; mock values are marked |
| 26 | Names of the 4 bûches 2025, the Papouney's composition and year, the pain surprise, the first 5th-anniversary contest prize, and what « La 7ème » (May 2026) refers to | Ask the client or read the FB / IG posts while logged in |
| 27 | Whether the Initiative Rennes link (2021) can be mentioned | Ask the client |
| 28 | A second Facebook page "Le fournil de prosper" (Interest page, ID 101161574980536, 0 likes) exists, probably auto-generated | Ignore; link only to /lefournildeprosper |

---

## 14. Sources

**Official registers & legal**
- https://recherche-entreprises.api.gouv.fr/search?q=fournil%20de%20prosper
- https://recherche-entreprises.api.gouv.fr/search?q=900157413
- https://recherche-entreprises.api.gouv.fr/search?q=341884229
- https://annuaire-entreprises.data.gouv.fr/etablissement/90015741300015
- https://annuaire-entreprises.data.gouv.fr/entreprise/900157413
- https://annuaire-entreprises.data.gouv.fr/entreprise/le-fournil-de-prosper-le-fournil-de-prosper-900157413
- https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22900157413%22
- https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=commercant%20like%20%22FOURNIL%20DE%20PROSPER%22
- https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22341884229%22
- https://www.societe.com/societe/le-fournil-de-prosper-900157413.html
- https://www.societe.com/manager/Prosper.ORRIERE.2IxA7s_gZ5Q.html
- https://www.societe.com/societe/monsieur-rene-leduc-341884229.html
- https://www.pappers.fr/entreprise/le-fournil-de-prosper-900157413 (403; snippet only)
- https://acceslibre.beta.gouv.fr/app/35-rennes/a/boulangerie-patisserie/erp/le-fournil-de-prosper/

**Own channels**
- https://www.instagram.com/lefournildeprosper/
- https://www.instagram.com/reel/DcTCuM3Nr3J/
- https://www.instagram.com/reel/DbqG6z2vt-C/
- https://www.instagram.com/p/DdDnvQxlzmI/
- https://www.instagram.com/p/DdTULkQlyvV/
- https://www.instagram.com/p/DciKshoF5iG/
- https://www.instagram.com/p/DcBINa1F3u4/
- https://www.instagram.com/p/DeR8nVtCJRP/
- https://www.instagram.com/p/Dcs36IOl9Mf/
- https://www.instagram.com/p/DdO9726F17w/
- https://www.instagram.com/p/DdZTqftF6mT/
- https://www.instagram.com/p/DMPWCMUoJBD/
- https://www.instagram.com/explore/locations/107132211658976/le-fournil-de-prosper
- https://www.facebook.com/lefournildeprosper/
- https://www.facebook.com/lefournildeprosper?locale=fr_FR
- https://www.facebook.com/lefournildeprosper/videos/la-boulangerie-le-fournil-de-prosper-f%C3%AAte-ses-1-an-douverture-et-pour-loccasion-/828696861451467
- https://www.facebook.com/lefournildeprosper/photos/899085712466281
- https://www.facebook.com/lefournildeprosper/videos/…/445805111878147 (URL truncated in the research)

**Listings, ratings & reviews**
- https://www.pagesjaunes.fr/pros/61027562
- https://fr.mappy.com/poi/64032a042b281f5e408278bd
- https://www.118712.fr/professionnels/WUNRXFBQGwM
- https://commerces.ouest-france.fr/rennes-35000/le-fournil-de-prosper.html
- https://www.boulangeries-patisseries.fr/boulangeries/35238-rennes/bgaieeeaicdceedgbfea.htm
- https://www.bottin.fr/fiche-locale/bgaieeeaicdceedgbfea--le-fournil-de-prosper--rennes.htm
- https://www.banette.fr/nos-boulangeries
- https://wanderlog.com/place/details/8770749/le-fournil-de-prosper
- https://wanderlog.com/list/geoCategory/4887/best-bakeries-in-rennes
- https://restaurantguru.com/Le-fournil-de-Prosper-Rennes
- https://arennes.com/boulangeries/le-fournil-de-prosper/
- https://www.tripadvisor.co.nz/Restaurant_Review-g187103-d26611238-Reviews-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html
- https://www.tripadvisor.com/Restaurant_Review-g187103-d26611238-Reviews-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html
- https://www.tripadvisor.fr/Restaurant_Review-g187103-d26611238-Reviews-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html
- https://www.tripadvisor.co.nz/ShowUserReviews-g187103-d26611238-r1001833277-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html
- https://www.tripadvisor.co.nz/ShowUserReviews-g187103-d26611238-r1040834355-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html
- https://tgtg-alerts.com/en/stores/744120
- https://www.toogoodtogo.com/fr/find/rennes/lefournildeprosper/bakedgoods/paniergourmet-1105352
- https://citoofrance.com/boulangerie/rennes/le-fournil-de-prosper/
- https://www.ubereats.com/fr/store/le-fournil-de-prosper/0W5upAAKXdKc4Key847gAA
- https://candidat.francetravail.fr/offres/recherche/detail/211DDST

**Added in the critic pass**
- https://www.instagram.com/reel/DLkTRg9of2a/ (4 ans, 1 Jul 2025)
- https://www.facebook.com/lefournildeprosper/videos/4-ans-de-la-boulangerie-le-saviez-vous-prosper-le-g%C3%A9rant-de-la-boulangerie-a-%C3%A9t%C3%A9/1814226999139347
- https://www.facebook.com/lefournildeprosper/posts/place-aux-5-ans-de-notre-boulangerie-le-1er-juillet-nous-f%C3%AAterons-les-5-ann%C3%A9es-p/1057772803264237 (5 ans, 25 Jun 2026)
- https://www.instagram.com/reel/DCZuDKgs2iB/ (dégustation, 15 Nov 2024)
- https://www.instagram.com/reel/DDRMb9bseJk/ (Brioches Saint Nicolas, 6 Dec 2024)
- https://www.instagram.com/p/DDzlwezoBC6/ (Sapin Feuilleté, 20 Dec 2024)
- https://www.instagram.com/reel/DEHj9zvIw6F/ (Nouvel an, 28 Dec 2024)
- https://www.instagram.com/reel/DEhP8X6IWpn/ (Galette Choco-Noisettes, 7 Jan 2025)
- https://www.instagram.com/reel/DFcdaQFoG95/ (galette last days, snippet)
- https://www.instagram.com/p/DIB84NqIEeZ/ (chocolats de Pâques, 4 Apr 2025)
- https://www.instagram.com/reel/DSMn2gOiHB6/ (carte des fêtes + holiday hours, 13 Dec 2025)
- https://www.instagram.com/p/DYfEi-gBD-5/ (18 May 2026)
- https://www.facebook.com/lefournildeprosper/photos/journ%C3%A9e-d%C3%A9gustation-sp%C3%A9cial-b%C3%BBches-de-no%C3%ABl-chez-votre-boulanger-le-fournil-de-pr/894991976208988 (snippet)
- https://www.facebook.com/lefournildeprosper/videos/la-boulangerie-le-fournil-de-prosper-situ%C3%A9e-au-42-rue-champion-de-cic%C3%A9-%C3%A0-rennes-/445805111878147 (11 Nov 2024)
- https://www.facebook.com/lefournildeprosper/posts/jour-f%C3%A9ri%C3%A9-jeudi-1er-maila-boulangerie-le-fournil-de-prosper-au-42-rue-champion-/732634699111384 (snippet)
- https://www.facebook.com/lefournildeprosper/photos/1057772683264249 (Papouney, snippet)
- https://www.facebook.com/lefournildeprosper/videos/flankie-vanille/1501638771465253
- https://www.facebook.com/lefournildeprosper/videos/les-commandes-pour-le-31-sont-closes-%EF%B8%8Fpensez-%C3%A0-notre-pain-surprise-pour-votre-pr/377099728137646 (title)
- https://www.facebook.com/initiativerennes/posts/nous-adressons-tous-nos-v%C5%93ux-de-succ%C3%A8s-%C3%A0-prosper-orri%C3%A8re-qui-a-repris-la-boulang/4280770261992147
- https://www.facebook.com/pages/Le-fournil-de-prosper/101161574980536 (stray page)
- https://actu.fr/bretagne/rennes_35238/14-juillet-a-rennes-voici-quels-sont-les-restos-boulangeries-tabacs-et-centres-commerciaux-ouverts-en-ce-jour-ferie_64532706.html · https://www.facebook.com/Rennes24/posts/une-envie-de-pain-frais-dun-resto-%EF%B8%8F/1705636980527965
- https://commerces.ouest-france.fr/produit/brioche-tressee-au-chocolat-1.html · https://commerces.ouest-france.fr/produit/bon-plan-valable-chez-le-fournil-de-prosper.html
- https://maison-lucie.fr/ · https://maison-lucie.fr/pages/a-propos · https://www.baiedesaintbrieuc.com/sit/maison-lucie/ · https://www.ici.fr/emissions/bienvenue-chez-vous-les-bretons/la-maison-lucie-dans-les-cotes-d-armor-medaille-d-or-au-championnat-du-monde-de-confiture-5275261 · https://oumangerenbretagne.fr/2024/12/10/maison-lucie-les-confitures-medaillees-dor-dans-les-cotes-darmor/
- https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-bus-topologie-dessertes-td/records?where=nomarret%20like%20%22Champion%22&limit=50 · https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-bus-topologie-lignes-td/records · https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-metro-topologie-stations-td/records
- https://www.mapquest.com/directions/to/fr/boulangerie-le-fournil-de-prosper-777474149 (listing only)

**Predecessor (Boulangerie Leduc)**
- https://www.koifaire.com/bretagne/boulangerie,leduc-43378.html
- https://www.yelp.fr/biz/boulangerie-leduc-rennes
- https://www.au-magasin.fr/35000-rennes/boulangerie-leduc-264758.html

**Place & context**
- https://fr.wikipedia.org/wiki/Cleunay_(m%C3%A9tro_de_Rennes)
- https://fr.wikipedia.org/wiki/Quartier_Cleunay_-_Arsenal-Redon
- https://fr.wikisource.org/wiki/Page:Notices_sur_les_rues_de_Rennes_1883.djvu/7
- https://fr.wikisource.org/wiki/Page:Notices_sur_les_rues_de_Rennes_1883.djvu/63
- https://Heraldry-Wiki.com/wiki/J%C3%A9r%C3%B4me-Marie_Champion_de_Cic%C3%A9
- https://www.pss-archi.eu/immeubles/FR-35238-84672.html
- https://www.pss-archi.eu/immeubles/FR-35238-2466.html
- https://www.pagesjaunes.fr/pros/09629353
- https://nominatim.openstreetmap.org/search?q=42+rue+Champion+de+Cic%C3%A9,+Rennes&format=json
- https://rennes.evous.fr/shopping/centre-commercial-e-leclerc-cleunay/
- https://tablejourney.com/neighborhood/rennes/cleunay/
- https://unidivers.fr/rennes-prevalaye-paysans-ecologie-urbaine/
- https://unidivers.fr/rennes-ligne-b-metro-retards/
- https://www.lejournaldesentreprises.com/article/la-mise-en-service-de-la-ligne-b-du-metro-de-rennes-repoussee-2022-1160946
- https://www.tourismebretagne.com/app/uploads/crt-bretagne/2023/04/Press-Release-marche-des-Lices-400-th-anniversary.pdf
- https://www.bretagne.developpement-durable.gouv.fr/IMG/pdf/fiche_cluses_rv_leger.pdf
- https://m.shabretagne.com/scripts/files/63cfa6e5912845.68988270/2016_01.pdf
- https://www.techno-science.net/fr/definitions/patrimoine-architectural-de-rennes
- https://www.lalibre.be/culture/arts/2018/08/11/odorico-lart-deco-rennais-K5255OYJKJE7ZEPROFBJE7UAKY/
- https://www.pariszigzag.fr/rennes-actu/piscine-saint-georges/
- https://www.rennes-infos-autrement.fr/incendie-dans-une-boulangerie-de-cleunay/ (unrelated bakery, do not confuse)
- https://www.gillespudlowski.com/?p=239117 (unrelated, Ty Vorn)

**Competitors**
- https://www.pagesjaunes.fr/annuaire/zac-de-cleunay-rennes-35/boulangerie
- https://www.pagesjaunes.fr/annuaire/centre-commercial-cleunay-rennes-rennes-35/boulangerie
- https://wanderlog.com/place/details/3644079/la-station-gourmande
- https://www.myboulange.fr/35/rennes/la-station-gourmande-13471
- https://www.observatoiredelafranchise.fr/indiscretions-actualite/MARIETTE-PAINS-ET-PATISSERIES-mariette-pains-et-patisseriess-implante-a-rennes-avec-ses-premieres-cafeterias-universitaires-82311.htm
- https://www.myboulange.fr/35/rennes/brioche-doree-140943
- https://www.cylex-locale.fr/entreprises/le-fournil-de-la-courrouze-12780465.html
- https://www.myboulange.fr/35/saint-jacques-de-la-lande/le-fournil-de-la-courrouze-167033
- https://wanderlog.com/place/details/2653373/bouvier-thierry
- http://www.thierrybouvier.fr/
- https://www.lejournaldesentreprises.com/breve/une-troisieme-boulangerie-ange-rennes-117404
- https://ac-franchise.com/article/les-ouvertures-de-la-franchise-de-boulangerie-ange-9094
- https://www.pagesjaunes.fr/pros/54233340
- https://www.gillespudlowski.com/?p=46367
- https://top10boulangeries.fr/Rennes/Cleunay/
- https://tablejourney.com/france/rennes/bakeries/

**Inspiration**
- https://sonomabakery.com/ · https://www.awwwards.com/sites/sonoma-bakery
- https://fortheloveofbread.com · https://www.awwwards.com/sites/for-the-love-of-bread
- https://bernicebakery.com/ · https://www.awwwards.com/sites/bernice-bakery
- https://blackstarpastry.com/ · https://www.awwwards.com/sites/black-star-pastry
- https://www.awwwards.com/sites/wildwood-bakery
- http://cafestudiobakery.tokyo/ · https://www.awwwards.com/sites/cafe-studio-bakery
- https://unionboulangerie.com · https://www.siteinspire.com/websites?search=bakery
- https://www.poilane.com/
- https://www.mamiche.fr/
- https://www.lunecroissanterie.com/

---

## 15. Critic pass

**Gaps found in the earlier draft**
- **Story**: no founder fact at all; the anniversaries stopped at 2024 and were unverified; the yearly rhythm (tastings, Christmas, galettes, Easter) was almost empty. The "6 jours sur 7 / living calendar" concept had no real exception data, so it rested on a weekly rule that the shop itself breaks.
- **Holiday hours**: marked "Unknown" in §1.
- **Seasonal products**: mostly generic ("galette", "bûche"), with few real named items; only 3 real prices.
- **Maison Lucie**: a partner with no identity.
- **Bus data**: from 2023, not re-checked.
- **Customer voice**: thin (8 short French fragments). The Facebook account had never been read past its title, and Ouest-France had not been re-read.
- **Weak inferences**: the "distributeur" (vending machine) claim rested on one summary and was not challenged.
- **Mock-data plan**: no closures table; gazette mostly mock; seasons calendar anchored on generic months.

**Filled in this pass (all with sources)**
1. **Founder fact**: Prosper was **a baker for 14 years** before taking over the shop (own IG and FB post, 1 July 2025). The bakery started with **Initiative Rennes** congratulating the *reprise* (Oct 2021).
2. **Anniversaries**: the 4th (2025) and the **5th (1 July 2026)**, with the real contest « 1 AN DE VIENNOISERIES LE DIMANCHE » and its urn draw.
3. **Holiday hours and closures**: 11 Nov 2024 (half day), 1 May 2025 (closed), Christmas 2025 (24 / 31 Dec 8h-18h, closed 25 Dec / 1 Jan), 14 July 2026 (7h30-13h, also listed by Actu Rennes), summer closure 14 July → 5 Aug 2026. Added `closures.ts` and an exceptions-first `getShopState`.
4. **Ten real festive and seasonal products, verbatim**: Galette Choco-Noisettes (weekly special-edition galettes), Brioches Saint Nicolas, Sapin Feuilleté (saumon / pesto), Easter chocolates (œufs, cocottes, poissons, fritures), Papouney, pain surprise, plateaux de mignardises / apéritifs, 4 bûches 2025 (unnamed), Flankie Vanille, and brioche tressée au chocolat **7,50 €** (the 4th real price).
5. **Annual rituals**: the journée dégustation (Nov 2024, Nov 2025), the carte des fêtes with real reservation deadlines and a separate queue for prepaid orders. Added the new `/fetes/` and `/anniversaire/` pages and `annualEvents.ts`.
6. **Maison Lucie identified** (medium confidence): Trégueux, Côtes-d'Armor, 28 % sugar, 2024 gold medal.
7. **Bus and métro re-verified** on STAR open data (10 / N3 / Api'Bus; stop about 45 m, métro about 300 m).
8. **Ouest-France page read in full**: its "mot du commerçant" and hours are genuine, but its services and FAQ are template filler (cash machine, drive). The vending-machine claim is now flagged as contradictory.
9. **Prosper's 15 Sep 2026 post** read in full, with key lines quoted. One new customer quote (IG comment) and the owner-reply voice were added.
10. **Voice devices** taken from real posts (square-bracket headers, « Le saviez-vous ? », countdowns, « Pour ceux qui ont lu jusqu'ici ») and turned into grounded design moves in §9.
11. Full crêpe and Flankie captions; verbatim TGTG basket texts.

**Still unknown**
- Logo file, exact typefaces and colours (photo approximations only).
- Names of the 4 bûches 2025; the Papouney's composition and year; the pain surprise; which 6 Maison Lucie flavours are stocked; the first 5th-anniversary contest prize; what « La 7ème » refers to; the 2023 "Nouveauté".
- Future holiday and closure dates; whether the summer break is always in mid-July to early August.
- A full price list (4 real prices only), cake lead times, pizza format.
- Whether the Friday offer and the Sunday-only levain still run.
- Bread vending machine, Phénix, vegan range, burgers: still unverified, and now contradicted.
- Google reviews never read directly. Tripadvisor (403) and Citoo (blocked) could not be re-read in French, so no new Google review text was found beyond the ARennes fragments.
- Facebook follower count and most post bodies (login wall; only some posts were readable through Tavily).
- Whether Prosper agrees to his name, story and photos being used; the directeur de publication.
- No press feature or award exists (re-confirmed). The only press trace is the Actu Rennes 14-Juillet listing.
