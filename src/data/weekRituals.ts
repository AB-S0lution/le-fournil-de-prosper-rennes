// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// Real: Monday pizza, Wednesday closed, Sunday 7h30-13h with crêpes and levain T150. Friday offer: "à confirmer".
// Tuesday / Thursday / Saturday suggestions are mock and marked.

export interface WeekRitual {
  /** 0 = dimanche */
  weekday: number
  title: string
  text: string
  real: boolean
  mock: boolean
  pending?: boolean
  productIds: string[]
  source?: string
}

export const weekRituals: WeekRitual[] = [
  { weekday: 1, title: 'Pizza du lundi', text: 'Chaque lundi, des pizzas préparées sur place.', real: true, mock: false, productIds: ['pizza-mediterraneenne', 'pizza-americaine'], source: 'https://www.instagram.com/p/DdDnvQxlzmI/' },
  { weekday: 2, title: 'Pain aux noix du mardi', text: 'Une fournée de pain aux noix pour les fromages de la semaine.', real: false, mock: true, productIds: ['pain-noix', 'baguette-tradition'] },
  { weekday: 3, title: 'Fermé : on souffle !', text: 'Le fournil se repose le mercredi. Retour jeudi dès 6h45.', real: true, mock: false, productIds: [], source: 'https://www.instagram.com/reel/DcTCuM3Nr3J/' },
  { weekday: 4, title: 'Retour de fournée', text: 'Le jeudi, on repart de zéro : toutes les viennoiseries au comptoir dès 6h45.', real: false, mock: true, productIds: ['croissant', 'pain-chocolat', 'brioche'] },
  { weekday: 5, title: 'Offre du vendredi', text: 'Trois viennoiseries achetées, un croissant ou un pain au chocolat offert.', real: true, mock: false, pending: true, productIds: ['croissant', 'pain-chocolat'], source: 'https://www.instagram.com/p/DMPWCMUoJBD/' },
  { weekday: 6, title: 'Samedi de la baguette moulée', text: 'La baguette moulée part vite le samedi : venez tôt pour la rapporter.', real: false, mock: true, productIds: ['baguette-moulee', 'flan'] },
  { weekday: 0, title: 'Dimanche, crêpes et levain', text: 'Ouvert de 7h30 à 13h. Crêpes maison et pain au levain pur T150.', real: true, mock: false, productIds: ['crepe-maison', 'pain-levain-t150'], source: 'https://www.instagram.com/p/DdDnvQxlzmI/' },
]
