// SAMPLE DATA: mock content for the demo site. Answers stick to verified facts (PLAN.md §1); anything else is marked "indicatif".

export type FaqGroup = 'Horaires' | 'Commandes' | 'Allergènes et régimes' | 'Paiement' | 'Accès' | 'Zéro gaspi'

export interface FaqItem {
  id: string
  group: FaqGroup
  q: string
  a: string
}

export const faqGroups: FaqGroup[] = ['Horaires', 'Commandes', 'Allergènes et régimes', 'Paiement', 'Accès', 'Zéro gaspi']

export const faq: FaqItem[] = [
  { id: 'horaires', group: 'Horaires', q: 'Quels sont vos horaires ?', a: 'Du lundi au samedi (sauf mercredi) de 6h45 à 19h15, cuisson en continu. Le dimanche de 7h30 à 13h. Fermé le mercredi. Les jours fériés sont annoncés au cas par cas : voir la page Infos et accès.' },
  { id: 'mercredi', group: 'Horaires', q: 'Pourquoi êtes-vous fermés le mercredi ?', a: 'C’est le jour de repos de l’équipe : la boulangerie est ouverte six jours sur sept. Exceptionnellement, le fournil a ouvert deux mercredis, les 24 et 31 décembre 2025, de 8h à 18h.' },
  { id: 'samedi', group: 'Horaires', q: 'Êtes-vous ouverts le samedi ?', a: 'Oui, de 6h45 à 19h15. Certains annuaires indiquent à tort « fermé le samedi » : les horaires de cette page sont ceux annoncés par le fournil.' },
  { id: 'dimanche', group: 'Horaires', q: 'Ouvrez-vous le dimanche ?', a: 'Oui, le dimanche matin de 7h30 à 13h. C’est aussi le jour du pain au levain pur T150 et des crêpes maison.' },
  { id: 'feries', group: 'Horaires', q: 'Quelles sont vos horaires les jours fériés ?', a: 'Chaque jour férié est annoncé séparément, sans règle fixe. Exemples passés : ouvert jusqu’à 12h30 le 11 novembre 2024, fermé le 1er mai 2025, ouvert de 7h30 à 13h le 14 juillet 2026. Les dates à venir sont « à confirmer ».' },
  { id: 'gateaux', group: 'Commandes', q: 'Comment commander un gâteau ?', a: 'Par téléphone au 02 99 67 31 73, par e-mail à lefournildeprosper@gmail.com, par message sur Instagram ou Facebook, ou au comptoir. Il n’y a pas de commande en ligne. Le délai de trois à quatre jours donné sur ce site est indicatif.' },
  { id: 'minis', group: 'Commandes', q: 'Y a-t-il une remise pour les mini-viennoiseries ?', a: 'Oui : -10 % à partir de 20 mini-viennoiseries, pour les petits-déjeuners d’entreprise, séminaires et pots de départ.' },
  { id: 'personnalise', group: 'Commandes', q: 'Peut-on faire écrire un message sur un gâteau ?', a: 'Oui, un petit mot personnalisé peut être ajouté sur demande. Précisez-le à la commande.' },
  { id: 'mariage', group: 'Commandes', q: 'Faites-vous des pièces de mariage ?', a: 'Oui, sur devis. Le mieux est de passer au comptoir ou de téléphoner pour en parler.' },
  { id: 'allergenes', group: 'Allergènes et régimes', q: 'Où trouver les allergènes ?', a: 'Sur chaque fiche de la carte, à titre indicatif. Demandez toujours confirmation au comptoir : tout est fait maison et les ateliers contiennent du gluten, du lait, des œufs et des fruits à coque.' },
  { id: 'vegetarien', group: 'Allergènes et régimes', q: 'Avez-vous des options végétariennes ?', a: 'Oui, des sandwichs végétariens existent depuis plusieurs années, ainsi que la pizza La Méditerranéenne le lundi.' },
  { id: 'paiement', group: 'Paiement', q: 'Quels moyens de paiement acceptez-vous ?', a: 'Carte bancaire (Visa, Mastercard, American Express), espèces, chèque, Apple Pay, Google Pay et titres-restaurant, d’après les listings publics. À confirmer au comptoir.' },
  { id: 'metro', group: 'Accès', q: 'Comment venir en transport ?', a: 'Métro ligne B, station Cleunay, à quatre minutes à pied. Bus 10 et N3 (de nuit) à l’arrêt Champion de Cicé, à environ 45 m, et Api’Bus en saison.' },
  { id: 'parking', group: 'Accès', q: 'Y a-t-il un parking ?', a: 'Il n’y a pas de parking privé. Du stationnement public se trouve à proximité.' },
  { id: 'tgtg', group: 'Zéro gaspi', q: 'Proposez-vous des paniers anti-gaspi ?', a: 'Oui, via l’application Too Good To Go. Les prix et les contenus changent : consultez l’application.' },
  { id: 'paniers', group: 'Zéro gaspi', q: 'Êtes-vous un point relais de paniers de fruits et légumes ?', a: 'Oui, le fournil est un point de retrait pour des paniers de fruits et légumes.' },
]
