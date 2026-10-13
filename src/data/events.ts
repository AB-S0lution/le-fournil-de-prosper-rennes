// SAMPLE DATA: mock content for the demo site. Real: the -10 % rule from 20 minis, the types of orders offered.
// Lead times, sizes and prices are mock (marked TODO in PLAN.md).

export interface OrderOffer {
  id: string
  title: string
  category: 'gateaux' | 'minis' | 'traiteur' | 'mariage' | 'fetes'
  description: string
  sizes: string[]
  leadTime: string
  fromEUR: number | null
  real: boolean
  illustration: 'number' | 'cake' | 'minis' | 'tray' | 'wedding' | 'sapin' | 'surprise' | 'buche' | 'galette'
  note?: string
}

export const orderOffers: OrderOffer[] = [
  { id: 'gateau-anniv', title: 'Gâteau d’anniversaire', category: 'gateaux', description: 'Sur mesure, avec un petit mot écrit à la main si vous le demandez.', sizes: ['6 parts', '8 parts', '10 parts', '12 parts'], leadTime: '3 jours (délai indicatif)', fromEUR: 4.2, real: true, illustration: 'cake', note: 'Prix à la part, indicatif' },
  { id: 'number-cake', title: 'Number cake', category: 'gateaux', description: 'Le gâteau en forme de chiffre, pour 10 ou 12 personnes.', sizes: ['10 parts', '12 parts'], leadTime: '4 jours (délai indicatif)', fromEUR: null, real: true, illustration: 'number', note: 'Sur devis' },
  { id: 'entremets-commande', title: 'Entremets sur commande', category: 'gateaux', description: 'L’entremets du moment en grand format.', sizes: ['6 parts', '8 parts'], leadTime: '3 jours (délai indicatif)', fromEUR: 4.4, real: false, illustration: 'cake', note: 'Prix à la part, indicatif' },
  { id: 'minis-20', title: 'Plateau de 20 mini-viennoiseries', category: 'minis', description: 'Mini croissants, pains au chocolat et pains aux raisins. -10 % dès 20 pièces.', sizes: ['20 pièces'], leadTime: '2 jours (délai indicatif)', fromEUR: 12, real: true, illustration: 'minis', note: 'Remise de 10 % incluse à partir de 20 minis' },
  { id: 'minis-40', title: 'Plateau de 40 mini-viennoiseries', category: 'minis', description: 'Pour un petit-déjeuner d’équipe ou un séminaire.', sizes: ['40 pièces'], leadTime: '2 jours (délai indicatif)', fromEUR: 23, real: true, illustration: 'minis', note: 'Remise de 10 % incluse' },
  { id: 'minis-60', title: 'Plateau de 60 mini-viennoiseries', category: 'minis', description: 'Pour un pot de départ en retraite ou une réunion générale.', sizes: ['60 pièces'], leadTime: '3 jours (délai indicatif)', fromEUR: 34, real: true, illustration: 'minis', note: 'Remise de 10 % incluse' },
  { id: 'plateau-aperitif', title: 'Plateau apéritif', category: 'traiteur', description: 'Feuilletés, mini-sandwichs et pièces salées à partager.', sizes: ['pour 6', 'pour 10', 'pour 15'], leadTime: '3 jours (délai indicatif)', fromEUR: 22, real: true, illustration: 'tray', note: 'Prix indicatif' },
  { id: 'pain-surprise-commande', title: 'Pain surprise', category: 'traiteur', description: 'Un pain garni à découper, pour les repas de fête.', sizes: ['40 pièces', '60 pièces'], leadTime: '3 jours (délai indicatif)', fromEUR: 28, real: true, illustration: 'surprise', note: 'Garniture à confirmer' },
  { id: 'wedding', title: 'Pièce de mariage', category: 'mariage', description: 'Pièce montée ou wedding cake, pensés avec vous.', sizes: ['sur mesure'], leadTime: '3 semaines (délai indicatif)', fromEUR: null, real: true, illustration: 'wedding', note: 'Sur devis' },
  { id: 'galette-commande', title: 'Galette et couronne des rois', category: 'fetes', description: 'À réserver en janvier pour la famille ou le bureau.', sizes: ['4 parts', '6 parts', '8 parts'], leadTime: '2 jours (délai indicatif)', fromEUR: 14, real: false, illustration: 'galette', note: 'Prix indicatif' },
  { id: 'sapin-commande', title: 'Sapin Feuilleté', category: 'fetes', description: 'Moitié saumon fumé et fromage frais, moitié pesto et tomates séchées.', sizes: ['1 sapin'], leadTime: 'Selon la carte des fêtes', fromEUR: null, real: true, illustration: 'sapin', note: 'Sur commande' },
  { id: 'buche-commande', title: 'Bûche de Noël', category: 'fetes', description: 'Quatre variétés à la carte des fêtes, à retirer dans une file à part.', sizes: ['4 parts', '6 parts', '8 parts'], leadTime: 'Jusqu’au 20 décembre pour le 24 (2025)', fromEUR: null, real: true, illustration: 'buche', note: 'Noms des variétés à venir' },
]
