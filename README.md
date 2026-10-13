# Le Fournil de Prosper, site de démonstration

Site vitrine fictif (démonstration) pour la boulangerie-pâtisserie **Le Fournil de Prosper**, 42 rue Champion de Cicé, Cleunay, Rennes.
Concept « 6 jours sur 7 » : le site suit le vrai calendrier de la boulangerie (fermé le mercredi, ouvert le dimanche de 7h30 à 13h, fermetures exceptionnelles lues avant la règle hebdomadaire) et met en scène le **Flankie du mois**, monté couche par couche au défilement.

Aucune photo ni logo du commerce : toutes les illustrations sont des SVG originaux. Les faits (adresse, horaires, histoire, quelques prix) sont vérifiés; le reste (catalogue, gazette, FAQ, galerie, formules) est un exemple, marqué comme tel.

## Pile
Vite 8, TypeScript strict, Tailwind v4, GSAP (ScrollTrigger, SplitText, Flip), Lenis, Fontsource (Bricolage Grotesque, Marcellus SC, Pinyon Script), Phosphor (icônes).

## Commandes
```
npm install
npm run dev        # développement
npm run typecheck
npm run build      # tsc + vite build (dist/)
npm run preview    # base /le-fournil-de-prosper-rennes/
npm run pages      # régénère les coques HTML depuis src/data/pages.ts
```

## Pages
Accueil, La carte (+ fiche produit), Le midi et la pizza du lundi, Le Flankie du mois, Les indispensables, Commandes et événements, Les saisons, La carte des fêtes, Les anniversaires, Zéro gaspi, Notre histoire, Le quartier, Infos et accès, La gazette (+ 20 articles), Galerie, Questions fréquentes, Contact, Mentions légales, Confidentialité, Plan du site, 404.

## Accessibilité et mouvement
`prefers-reduced-motion` : pas de défilement lissé, pas d'épinglage, pas de marquee, fondu court. Thème « allumé / éteint » mémorisé localement. Aperçu d'un autre moment : `?date=2026-07-20&time=10:30`.

Déploiement : GitHub Pages (`.github/workflows/deploy.yml`).
