// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// The year as 12 tear-off months. productIds point to products.ts; eventIds to annualEvents.ts.

export interface Season {
  month: number
  name: string
  tagline: string
  productIds: string[]
  eventIds: string[]
  real: boolean
}

export const seasons: Season[] = [
  { month: 1, name: 'Janvier', tagline: 'Galettes et couronnes des rois, une édition spéciale chaque semaine.', productIds: ['galette-rois', 'couronne-rois', 'galette-choco-noisettes', 'flankie'], eventIds: ['galettes', 'flankie'], real: true },
  { month: 2, name: 'Février', tagline: 'Chandeleur : les crêpes maison partent par lots.', productIds: ['crepes-chandeleur', 'crepes-lot-5', 'crepe-caramel', 'flankie'], eventIds: ['flankie'], real: false },
  { month: 3, name: 'Mars', tagline: 'Les premiers chocolats de Pâques sortent des moules.', productIds: ['chocolats-paques', 'tarte-citron', 'flan', 'flankie'], eventIds: ['paques'], real: true },
  { month: 4, name: 'Avril', tagline: 'Œufs, cocottes, poissons et fritures, en petits et grands formats.', productIds: ['chocolats-paques', 'far-breton', 'macaron-chocolat', 'flankie'], eventIds: ['paques'], real: true },
  { month: 5, name: 'Mai', tagline: 'Les fraises arrivent : tarte et fraisier.', productIds: ['tarte-fraises', 'fraisier', 'meringue', 'flankie'], eventIds: ['flankie'], real: false },
  { month: 6, name: 'Juin', tagline: 'Fête des Pères et premiers goûters en terrasse.', productIds: ['papouney', 'tarte-fraises', 'fraisier', 'flankie'], eventIds: ['papouney'], real: true },
  { month: 7, name: 'Juillet', tagline: 'L’anniversaire du 1er juillet, puis les congés d’été.', productIds: ['entremets', 'tarte-citron', 'crepe-maison', 'flankie'], eventIds: ['anniversaire', 'conges'], real: true },
  { month: 8, name: 'Août', tagline: 'Le fournil rouvre le 6 août en 2026. Flankie citron meringué.', productIds: ['flankie', 'tarte-citron', 'meringue', 'pain-levain-t150'], eventIds: ['conges', 'flankie'], real: true },
  { month: 9, name: 'Septembre', tagline: 'La rentrée : pizzas du lundi, pain au levain et Tennis Ball.', productIds: ['pizza-mediterraneenne', 'pizza-americaine', 'pain-levain-t150', 'tennis-ball'], eventIds: ['rentree', 'tennis'], real: true },
  { month: 10, name: 'Octobre', tagline: 'Pomme, poire, noisette : le Flankie d’automne.', productIds: ['flankie', 'chausson-pommes', 'crepes-lot-pot', 'pain-noix'], eventIds: ['flankie'], real: true },
  { month: 11, name: 'Novembre', tagline: 'La journée dégustation, un samedi de fin de mois.', productIds: ['buches-noel', 'plateau-aperitif', 'buche-chocolat-praline', 'flankie'], eventIds: ['degustation'], real: true },
  { month: 12, name: 'Décembre', tagline: 'Saint-Nicolas, carte des fêtes, Sapin Feuilleté et bûches.', productIds: ['brioches-saint-nicolas', 'sapin-feuillete', 'buche-chocolat-praline', 'plateau-mignardises', 'pain-surprise'], eventIds: ['nicolas', 'carte-fetes', 'sapin', 'nouvel-an'], real: true },
]
