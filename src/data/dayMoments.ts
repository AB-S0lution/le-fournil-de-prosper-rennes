// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// Time slots of the day and what the counter holds. Opening hours themselves live in shop.ts / closures.ts.

import type { Slot } from './shop.ts'

export interface DayMoment {
  id: string
  time: string
  title: string
  text: string
  productIds: string[]
}

export const dayMoments: DayMoment[] = [
  { id: 'ouverture', time: '6h45', title: 'Ouverture et café à emporter', text: 'La première fournée sort du four. Croissants, pains au chocolat, baguettes tradition et un café pour la route.', productIds: ['croissant', 'pain-chocolat', 'baguette-tradition', 'cafe-emporter'] },
  { id: 'ecole', time: '8h30', title: 'L’heure de l’école', text: 'Le quartier passe au comptoir avant la classe : pains au lait, baguettes, une crêpe pour la récré.', productIds: ['pain-lait', 'baguette', 'crepe-maison'] },
  { id: 'midi', time: '11h30', title: 'La formule du midi', text: 'Sandwichs, quiches, salades et, le lundi, la pizza préparée sur place. Le coin snacking est fourni tous les midis de la semaine.', productIds: ['sandwich-jambon', 'quiche-lorraine', 'pizza-mediterraneenne', 'salade-composee'] },
  { id: 'gouter', time: '16h', title: 'Le goûter', text: 'À la sortie d’école : crêpes, pains suisses, flan et le Flankie du mois.', productIds: ['flankie', 'flan', 'crepe-maison', 'pain-suisse'] },
  { id: 'soir', time: '18h', title: 'La dernière fournée du soir', text: 'Une baguette pour le dîner, un dessert à partager. Le fournil ferme à 19h15.', productIds: ['baguette-tradition', 'tarte-citron', 'pain-campagne'] },
]

export interface SlotCopy {
  headline: string
  sub: string
  productIds: string[]
}

export const slotCopy: Record<Slot, SlotCopy> = {
  aube: { headline: 'Les croissants sont chauds.', sub: 'Pain au chocolat, croissant, baguette tradition : la première fournée est au comptoir.', productIds: ['croissant', 'pain-chocolat', 'baguette-tradition', 'cafe-emporter'] },
  matin: { headline: 'La fournée du matin est là.', sub: 'Viennoiseries, pains et crêpes, cuits en continu depuis l’ouverture.', productIds: ['pain-raisins', 'brioche', 'baguette', 'crepe-maison'] },
  midi: { headline: 'La formule du midi vous attend.', sub: 'Sandwichs, quiches et salades faits maison, avec un dessert si le cœur vous en dit.', productIds: ['sandwich-poulet', 'quiche-chevre', 'salade-composee', 'flan'] },
  'apres-midi': { headline: 'Une pause sucrée ?', sub: 'Le Flankie du mois, un éclair ou un flan, pendant que la fournée refroidit.', productIds: ['flankie', 'eclair-chocolat', 'flan', 'macaron-caramel'] },
  gouter: { headline: 'C’est l’heure du goûter.', sub: 'Crêpes maison, pains suisses et le Flankie du mois, pour la sortie d’école.', productIds: ['crepe-maison', 'pain-suisse', 'flankie', 'palmier'] },
  soir: { headline: 'La dernière fournée du soir.', sub: 'Une baguette pour le dîner et un dessert à partager, jusqu’à 19h15.', productIds: ['baguette-tradition', 'pain-campagne', 'tarte-citron', 'far-breton'] },
  ferme: { headline: 'Le fournil se repose.', sub: 'Les fours sont éteints. Voici ce qui vous attend à la prochaine ouverture.', productIds: ['croissant', 'pain-chocolat', 'baguette-tradition', 'flankie'] },
}

export const mondayPizza: SlotCopy = {
  headline: 'Pizza du lundi !',
  sub: 'La Méditerranéenne et L’Américaine, préparées sur place, chaque lundi.',
  productIds: ['pizza-mediterraneenne', 'pizza-americaine', 'sandwich-vegetarien', 'salade-composee'],
}

export const sundayCopy: SlotCopy = {
  headline: 'Dimanche, crêpes et levain.',
  sub: 'Ouvert de 7h30 à 13h. Le pain au levain pur T150 est au comptoir le dimanche.',
  productIds: ['pain-levain-t150', 'crepe-maison', 'croissant', 'pain-chocolat'],
}

export const congesCopy: SlotCopy = {
  headline: 'Le fournil est en congés.',
  sub: 'Toute l’équipe se repose. Voici ce qu’on retrouvera au retour.',
  productIds: ['croissant', 'pain-chocolat', 'baguette-tradition', 'flankie'],
}

export const wednesdayCopy: SlotCopy = {
  headline: 'Le fournil se repose.',
  sub: 'Fermé le mercredi : on souffle. Retour demain dès 6h45.',
  productIds: ['croissant', 'pain-chocolat', 'baguette-tradition', 'flankie'],
}
