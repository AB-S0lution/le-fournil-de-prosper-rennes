// SAMPLE DATA: mock content for the demo site. Compositions and prices are samples.

export interface Formule {
  id: string
  name: string
  includes: string[]
  priceEUR: number
  veggie?: boolean
  note: string
}

export const formules: Formule[] = [
  { id: 'classique', name: 'La formule du midi', includes: ['un sandwich au choix', 'une boisson fraîche', 'une pâtisserie du jour'], priceEUR: 8.5, note: 'Du lundi au samedi' },
  { id: 'quiche', name: 'Quiche et salade', includes: ['une part de quiche', 'une salade composée', 'une boisson fraîche'], priceEUR: 9.9, note: 'Du lundi au samedi' },
  { id: 'vegetarienne', name: 'Formule végétarienne', includes: ['le sandwich végétarien', 'une boisson fraîche', 'un fruit ou une pâtisserie'], priceEUR: 8.9, veggie: true, note: 'Du lundi au samedi' },
  { id: 'lundi', name: 'Pizza et boisson', includes: ['une pizza du lundi', 'une boisson fraîche'], priceEUR: 7.5, note: 'Le lundi seulement' },
  { id: 'petit-dej', name: 'Petit-déjeuner à emporter', includes: ['un café', 'un croissant ou un pain au chocolat'], priceEUR: 2.5, note: 'Dès 6h45' },
]
