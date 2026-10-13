// REAL QUOTES ONLY (PLAN.md §4.6). Attributed to the platform, never to a reviewer name. No invented reviews.

export interface Review {
  id: string
  quote: string
  platform: string
  lang: 'fr' | 'en'
  about?: string
  source: string
}

export const reviews: Review[] = [
  { id: 'r1', quote: 'Clientes fidèles depuis de nombreuses années', platform: 'Avis Google', lang: 'fr', source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' },
  { id: 'r2', quote: 'depuis l’époque des anciens patrons … la qualité est au rendez-vous', platform: 'Avis Google', lang: 'fr', source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' },
  { id: 'r3', quote: 'Excellentes viennoiseries : Croissants et pains au chocolat bien croustillant !', platform: 'Avis Google', lang: 'fr', about: 'viennoiseries', source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' },
  { id: 'r4', quote: 'l’accueil des 2 très agréables vendeuses', platform: 'Avis Google', lang: 'fr', about: 'comptoir', source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' },
  { id: 'r5', quote: 'Le pain est également très bon', platform: 'Avis Google', lang: 'fr', about: 'pain', source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' },
  { id: 'r6', quote: 'Excellent flankie, le meilleur que j’ai jamais mangé', platform: 'Avis Google', lang: 'fr', about: 'flankie', source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' },
  { id: 'r7', quote: 'vraiment super onctueuse', platform: 'Avis Google, à propos du flan', lang: 'fr', about: 'flan', source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' },
  { id: 'r8', quote: 'le feuilletage est parfait', platform: 'Avis Google, à propos de la galette des rois', lang: 'fr', about: 'galette', source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' },
  { id: 'r13', quote: 'J’apprécie toujours vos pains, vos viennoiseries, vos crêpes bref vous êtes une vraie boulangerie de quartier et j’apprécie votre boulangerie. Ne changez rien', platform: 'Commentaire Instagram', lang: 'fr', source: 'https://www.instagram.com/p/DdTULkQlyvV/' },
  { id: 'r9', quote: 'the cake was as good as it was beautiful and the little personal note requested, which the patissier kindly put, gave it another twist.', platform: 'Tripadvisor, avril 2025 (traduit par Tripadvisor)', lang: 'en', about: 'gâteau', source: 'https://www.tripadvisor.co.nz/ShowUserReviews-g187103-d26611238-r1001833277-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html' },
  { id: 'r10', quote: 'I appreciate their hospitality, professionalism and the quality of their products, homemade at reasonable prices.', platform: 'Tripadvisor, avril 2025 (traduit par Tripadvisor)', lang: 'en', source: 'https://www.tripadvisor.co.nz/ShowUserReviews-g187103-d26611238-r1001833277-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html' },
]
