// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// Prices are samples (only 4 are real: baguette "dès 1 €", 5 crêpes + 1 pot = 10 €, -10 % dès 20 minis,
// brioche tressée au chocolat 7,50 €). Descriptions, ingredients and allergens are indicative.

export type Category = 'pains' | 'viennoiseries' | 'patisseries' | 'crepes' | 'snacking' | 'saisons' | 'epicerie'
export type Allergen = 'gluten' | 'lait' | 'oeufs' | 'fruits-a-coque' | 'soja' | 'sesame' | 'poisson'
export type Tag = 'fait-maison' | 'de-saison' | 'vegetarien' | 'dimanche' | 'lundi' | 'signature' | 'sur-commande'
export type Moment = 'matin' | 'midi' | 'gouter' | 'soir'
export type Illustration =
  | 'baguette' | 'loaf' | 'levain' | 'seigle' | 'croissant' | 'painchoc' | 'brioche' | 'tressee' | 'roll' | 'babka'
  | 'chausson' | 'kouign' | 'raisins' | 'palmier' | 'minis' | 'flan' | 'far' | 'meringue' | 'macaron' | 'tarte'
  | 'tartecitron' | 'entremets' | 'number' | 'wedding' | 'cake' | 'eclair' | 'parisbrest' | 'gateaubreton' | 'chouquette'
  | 'flankie' | 'crepes' | 'crepe' | 'sandwich' | 'quiche' | 'salade' | 'pizza' | 'cafe' | 'croque' | 'galette'
  | 'couronne' | 'buche' | 'nicolas' | 'sapin' | 'tray' | 'surprise' | 'egg' | 'tennis' | 'fraisier' | 'jam' | 'papouney'

export interface Product {
  id: string
  name: string
  category: Category
  description: string
  ingredients: string[]
  allergens: Allergen[]
  tags: Tag[]
  priceEUR: number | null
  priceNote?: string
  unit: string
  availableDays: number[]
  slot: Moment[]
  illustration: Illustration
  real: boolean
  source?: string
  /** shown as "à confirmer" when a real name carries a mock detail */
  flag?: string
  /** months (1-12) when the product is a seasonal highlight */
  months?: number[]
}

export const categoryLabels: Record<Category, string> = {
  pains: 'Pains',
  viennoiseries: 'Viennoiseries',
  patisseries: 'Pâtisseries',
  crepes: 'Crêpes',
  snacking: 'Snacking',
  saisons: 'Saisons',
  epicerie: 'Épicerie',
}

const OPEN = [1, 2, 4, 5, 6, 0]
const IG = 'https://www.instagram.com/lefournildeprosper/'

type Opts = Partial<Pick<Product, 'availableDays' | 'slot' | 'real' | 'source' | 'flag' | 'months' | 'priceNote'>>

function p(
  id: string, category: Category, name: string, illustration: Illustration, priceEUR: number | null, unit: string,
  description: string, ingredients: string[], allergens: Allergen[], tags: Tag[], o: Opts = {},
): Product {
  return {
    id, name, category, illustration, priceEUR, unit, description, ingredients, allergens, tags,
    availableDays: o.availableDays ?? OPEN,
    slot: o.slot ?? ['matin', 'midi', 'gouter'],
    real: o.real ?? false,
    source: o.source,
    flag: o.flag,
    months: o.months,
    priceNote: o.priceNote,
  }
}

const FM: Tag[] = ['fait-maison']

export const products: Product[] = [
  // ---------------- PAINS (12) ----------------
  p('baguette', 'pains', 'Baguette', 'baguette', 1.1, 'pièce', 'La baguette du quotidien, croustillante, cuite en continu pour qu’il en reste toute la journée.', ['farine de blé', 'eau', 'sel', 'levure'], ['gluten'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562', priceNote: 'À partir de 1 €', slot: ['matin', 'midi', 'gouter', 'soir'] }),
  p('baguette-tradition', 'pains', 'Baguette tradition', 'baguette', 1.3, 'pièce', 'Pétrie lentement, croûte dorée et mie alvéolée. Celle des habitués du quartier.', ['farine de blé', 'eau', 'sel', 'levain', 'levure'], ['gluten'], [...FM, 'signature'], { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562', slot: ['matin', 'midi', 'gouter', 'soir'] }),
  p('baguette-moulee', 'pains', 'Baguette moulée', 'baguette', 1.4, 'pièce', 'La baguette à la mie tendre que les clients réclament par son nom. Elle part vite : mieux vaut venir tôt.', ['farine de blé', 'eau', 'sel', 'levure'], ['gluten'], FM, { real: true, source: 'https://www.tripadvisor.co.nz/Restaurant_Review-g187103-d26611238-Reviews-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html', slot: ['matin', 'midi'] }),
  p('pain-campagne', 'pains', 'Pain de campagne', 'loaf', 3.8, 'pain', 'Une grosse miche à la croûte épaisse, qui se garde plusieurs jours.', ['farine de blé', 'farine de seigle', 'eau', 'sel', 'levain'], ['gluten'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562' }),
  p('pain-cereales', 'pains', 'Pain aux céréales', 'loaf', 3.9, 'pain', 'Un pain dense parsemé de graines, pour les petits-déjeuners et les tartines.', ['farine de blé', 'graines de lin', 'graines de tournesol', 'millet', 'eau', 'sel'], ['gluten'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562' }),
  p('pain-epeautre', 'pains', 'Pain d’épeautre', 'loaf', 4.2, 'pain', 'Une mie douce, un goût de noisette, et une belle tenue au toasteur.', ['farine d’épeautre', 'farine de blé', 'eau', 'sel', 'levain'], ['gluten'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562' }),
  p('pain-mie', 'pains', 'Pain de mie', 'loaf', 3.2, 'pain', 'Moelleux et régulier, pour les croque-monsieur et les goûters.', ['farine de blé', 'lait', 'beurre', 'sucre', 'sel', 'levure'], ['gluten', 'lait'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562' }),
  p('pain-levain-t150', 'pains', 'Pain au levain pur, farine T150', 'levain', 5.2, 'pain', 'Né d’un sondage auprès des clients : un pain au levain pur, farine T150, d’abord le dimanche seulement.', ['farine T150', 'eau', 'sel', 'levain'], ['gluten'], [...FM, 'dimanche', 'signature'], { real: true, source: 'https://www.instagram.com/p/DdDnvQxlzmI/', availableDays: [0], slot: ['matin'], priceNote: 'Prix indicatif' }),
  p('pain-complet', 'pains', 'Pain complet', 'loaf', 3.6, 'pain', 'Farine complète, mie serrée, un goût franc de céréale.', ['farine complète', 'eau', 'sel', 'levain'], ['gluten'], FM),
  p('ficelle', 'pains', 'Ficelle', 'baguette', 0.9, 'pièce', 'La petite sœur de la baguette : plus croustillante, plus vite mangée.', ['farine de blé', 'eau', 'sel', 'levure'], ['gluten'], FM, { slot: ['matin', 'gouter'] }),
  p('pain-noix', 'pains', 'Pain aux noix', 'loaf', 4.8, 'pain', 'Une mie bise piquée de noix, parfaite avec un fromage.', ['farine de blé', 'noix', 'eau', 'sel', 'levain'], ['gluten', 'fruits-a-coque'], FM, { slot: ['midi', 'soir'] }),
  p('pain-seigle', 'pains', 'Pain de seigle', 'seigle', 4.5, 'pain', 'Compact et acidulé, il accompagne les huîtres, le saumon et le beurre salé.', ['farine de seigle', 'farine de blé', 'eau', 'sel', 'levain'], ['gluten'], FM, { slot: ['midi', 'soir'] }),

  // ---------------- VIENNOISERIES (14) ----------------
  p('croissant', 'viennoiseries', 'Croissant', 'croissant', 1.2, 'pièce', 'Feuilleté, doré, bien croustillant : celui qu’on mange encore tiède à 7 h.', ['farine de blé', 'beurre', 'lait', 'sucre', 'sel', 'levure'], ['gluten', 'lait'], [...FM, 'signature'], { real: true, source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/', slot: ['matin'] }),
  p('pain-chocolat', 'viennoiseries', 'Pain au chocolat', 'painchoc', 1.4, 'pièce', 'Le plus cité par les clients du quartier : une pâte feuilletée bien croustillante, deux barres de chocolat.', ['farine de blé', 'beurre', 'chocolat', 'lait', 'sucre', 'sel'], ['gluten', 'lait', 'soja'], [...FM, 'signature'], { real: true, source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/', slot: ['matin', 'gouter'] }),
  p('pain-raisins', 'viennoiseries', 'Pain aux raisins', 'raisins', 1.9, 'pièce', 'Une spirale de pâte feuilletée, de la crème pâtissière et des raisins gonflés.', ['pâte feuilletée', 'crème pâtissière', 'raisins secs', 'œufs', 'lait'], ['gluten', 'lait', 'oeufs'], FM, { real: true, source: 'https://wanderlog.com/place/details/8770749/le-fournil-de-prosper', slot: ['matin', 'gouter'] }),
  p('brioche', 'viennoiseries', 'Brioche moelleuse', 'brioche', 3.4, 'pièce', 'Une brioche pur beurre à la mie filante, à déchirer à la main.', ['farine de blé', 'beurre', 'œufs', 'sucre', 'lait'], ['gluten', 'lait', 'oeufs'], FM, { real: true, source: 'https://wanderlog.com/place/details/8770749/le-fournil-de-prosper', slot: ['matin', 'gouter'] }),
  p('brioche-tressee-chocolat', 'viennoiseries', 'Brioche tressée au chocolat', 'tressee', 7.5, 'pièce', 'Brioche pur beurre tressée, aux pépites de chocolat.', ['farine de blé', 'beurre', 'œufs', 'pépites de chocolat', 'sucre'], ['gluten', 'lait', 'oeufs', 'soja'], FM, { real: true, source: 'https://commerces.ouest-france.fr/produit/brioche-tressee-au-chocolat-1.html', priceNote: 'Prix relevé sur la fiche produit Ouest-France', slot: ['matin', 'gouter'] }),
  p('cinnamon-roll', 'viennoiseries', 'Cinnamon roll', 'roll', 3.2, 'pièce', 'Une brioche roulée à la cannelle, glacée juste ce qu’il faut.', ['farine de blé', 'beurre', 'cannelle', 'sucre', 'œufs'], ['gluten', 'lait', 'oeufs'], FM, { real: true, source: 'https://www.instagram.com/lefournildeprosper/' }),
  p('babka', 'viennoiseries', 'Babka', 'babka', 3.0, 'part', 'Une brioche torsadée, marbrée de chocolat, qui fond sous la dent.', ['farine de blé', 'beurre', 'chocolat', 'œufs', 'sucre'], ['gluten', 'lait', 'oeufs', 'soja'], FM, { real: true, source: IG }),
  p('chausson-pommes', 'viennoiseries', 'Chausson aux pommes', 'chausson', 1.9, 'pièce', 'De la compote de pommes maison sous une pâte feuilletée bien dorée.', ['pâte feuilletée', 'pommes', 'sucre', 'beurre'], ['gluten', 'lait'], [...FM, 'de-saison'], { real: true, source: 'https://www.instagram.com/p/DdTULkQlyvV/', slot: ['matin', 'gouter'] }),
  p('kouign-amann', 'viennoiseries', 'Kouign-amann', 'kouign', 3.2, 'pièce', 'Le gâteau breton au beurre, caramélisé, croustillant dehors et fondant dedans.', ['farine de blé', 'beurre', 'sucre', 'sel', 'levure'], ['gluten', 'lait'], [...FM, 'signature'], { real: true, source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/', slot: ['matin', 'gouter'] }),
  p('croissant-amandes', 'viennoiseries', 'Croissant aux amandes', 'croissant', 2.4, 'pièce', 'Un croissant garni de crème d’amande et saupoudré d’amandes effilées.', ['croissant', 'crème d’amande', 'amandes effilées', 'sucre glace'], ['gluten', 'lait', 'oeufs', 'fruits-a-coque'], FM, { slot: ['matin', 'gouter'] }),
  p('pain-suisse', 'viennoiseries', 'Pain suisse', 'painchoc', 2.2, 'pièce', 'Brioche, crème pâtissière et pépites de chocolat : le goûter des enfants à la sortie de l’école.', ['brioche', 'crème pâtissière', 'pépites de chocolat'], ['gluten', 'lait', 'oeufs', 'soja'], FM, { slot: ['gouter'] }),
  p('pain-lait', 'viennoiseries', 'Petit pain au lait', 'brioche', 0.95, 'pièce', 'Tout doux, légèrement sucré, parfait pour les petits.', ['farine de blé', 'lait', 'beurre', 'sucre'], ['gluten', 'lait'], FM, { slot: ['matin', 'gouter'] }),
  p('palmier', 'viennoiseries', 'Palmier', 'palmier', 1.7, 'pièce', 'Du feuilletage caramélisé en forme de cœur, très croquant.', ['pâte feuilletée', 'sucre'], ['gluten', 'lait'], FM, { slot: ['gouter'] }),
  p('minis-viennoiseries', 'viennoiseries', 'Mini-viennoiseries assorties', 'minis', 0.6, 'pièce', 'Mini croissants, mini pains au chocolat et mini pains aux raisins pour les petits-déjeuners d’équipe. -10 % dès 20 minis.', ['viennoiseries assorties'], ['gluten', 'lait', 'oeufs', 'soja'], [...FM, 'sur-commande'], { real: true, source: 'https://www.instagram.com/p/DdDnvQxlzmI/', priceNote: 'Prix indicatif, -10 % dès 20 pièces' }),

  // ---------------- PÂTISSERIES (17) ----------------
  p('flankie', 'patisseries', 'Flankie du mois', 'flankie', 4.2, 'pièce', 'Le mélange maison d’un flan et d’un cookie, qui change chaque mois. Octobre : pâte à cookie, compote pomme-poire-noisette, flan praliné.', ['pâte à cookie', 'compote pomme-poire-noisette', 'appareil à flan praliné'], ['gluten', 'lait', 'oeufs', 'fruits-a-coque'], [...FM, 'signature', 'de-saison'], { real: true, source: 'https://www.instagram.com/p/DeR8nVtCJRP/', months: [10] }),
  p('flan', 'patisseries', 'Flan pâtissier', 'flan', 2.9, 'part', 'Vraiment onctueux, sur une pâte fine. Le classique que les clients citent.', ['lait', 'œufs', 'sucre', 'vanille', 'pâte brisée'], ['gluten', 'lait', 'oeufs'], [...FM, 'signature'], { real: true, source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/' }),
  p('far-breton', 'patisseries', 'Far breton', 'far', 2.8, 'part', 'Un far aux pruneaux, dense et fondant, comme on le fait en Bretagne.', ['lait', 'œufs', 'farine', 'pruneaux', 'beurre'], ['gluten', 'lait', 'oeufs'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562' }),
  p('meringue', 'patisseries', 'Meringue', 'meringue', 1.9, 'pièce', 'Croquante dehors, tendre dedans, blanche comme un nuage.', ['blancs d’œufs', 'sucre'], ['oeufs'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562' }),
  p('macaron-chocolat', 'patisseries', 'Macaron chocolat', 'macaron', 1.8, 'pièce', 'Une ganache chocolat noir entre deux coques lisses.', ['poudre d’amandes', 'chocolat', 'sucre', 'œufs', 'crème'], ['oeufs', 'lait', 'fruits-a-coque', 'soja'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562' }),
  p('macaron-caramel', 'patisseries', 'Macaron caramel beurre salé', 'macaron', 1.8, 'pièce', 'Un caramel au beurre salé, comme à Rennes.', ['poudre d’amandes', 'caramel', 'beurre salé', 'sucre', 'œufs'], ['oeufs', 'lait', 'fruits-a-coque'], FM, { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562' }),
  p('tarte-fraises', 'patisseries', 'Tarte aux fraises', 'tarte', 3.9, 'part', 'Crème pâtissière, fraises fraîches et pâte sablée, en saison.', ['pâte sablée', 'crème pâtissière', 'fraises'], ['gluten', 'lait', 'oeufs'], [...FM, 'de-saison'], { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562', months: [5, 6, 7] }),
  p('entremets', 'patisseries', 'Entremets du moment', 'entremets', 4.4, 'part', 'Un entremets monté à la main, dont la recette change avec la saison.', ['biscuit', 'mousse', 'insert fruité', 'glaçage'], ['gluten', 'lait', 'oeufs'], FM, { real: true, source: 'https://tgtg-alerts.com/en/stores/744120', flag: 'Parfum du moment à demander en boutique' }),
  p('number-cake', 'patisseries', 'Number cake', 'number', null, 'pour 10 ou 12', 'Le gâteau en forme de chiffre pour les anniversaires, sur commande, pour 10 ou 12 personnes.', ['biscuit', 'crème', 'fruits', 'décor'], ['gluten', 'lait', 'oeufs'], ['sur-commande', 'fait-maison'], { real: true, source: 'https://www.instagram.com/lefournildeprosper/', priceNote: 'Sur devis', availableDays: OPEN, slot: ['gouter'] }),
  p('piece-mariage', 'patisseries', 'Pièce de mariage', 'wedding', null, 'sur mesure', 'Une pièce montée ou un wedding cake pensé avec vous. On en parle au comptoir ou par téléphone.', ['selon le projet'], ['gluten', 'lait', 'oeufs'], ['sur-commande'], { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562', priceNote: 'Sur devis' }),
  p('gateau-anniversaire', 'patisseries', 'Gâteau d’anniversaire personnalisé', 'cake', 4.2, 'part', 'Le gâteau de la fête, avec un petit mot écrit à la main si vous le demandez.', ['biscuit', 'crème', 'décor selon le thème'], ['gluten', 'lait', 'oeufs'], ['sur-commande', 'fait-maison'], { real: true, source: 'https://www.tripadvisor.co.nz/ShowUserReviews-g187103-d26611238-r1001833277-Boulangerie_Le_Fournil_de_Prosper-Rennes_Ille_et_Vilaine_Brittany.html', priceNote: 'Prix à la part, indicatif', slot: ['gouter'] }),
  p('eclair-chocolat', 'patisseries', 'Éclair au chocolat', 'eclair', 3.1, 'pièce', 'Pâte à choux, crème au chocolat, glaçage brillant.', ['pâte à choux', 'crème pâtissière chocolat', 'fondant'], ['gluten', 'lait', 'oeufs', 'soja'], FM),
  p('eclair-cafe', 'patisseries', 'Éclair au café', 'eclair', 3.1, 'pièce', 'La même pâte à choux, une crème corsée au café.', ['pâte à choux', 'crème pâtissière café', 'fondant'], ['gluten', 'lait', 'oeufs'], FM),
  p('tarte-citron', 'patisseries', 'Tarte au citron', 'tartecitron', 3.6, 'part', 'Crème de citron bien acidulée, meringue légèrement dorée.', ['pâte sablée', 'citrons', 'œufs', 'beurre', 'sucre'], ['gluten', 'lait', 'oeufs'], FM),
  p('paris-brest', 'patisseries', 'Paris-brest', 'parisbrest', 4.1, 'pièce', 'Couronne de pâte à choux, crème mousseline au praliné, amandes effilées.', ['pâte à choux', 'praliné', 'beurre', 'amandes'], ['gluten', 'lait', 'oeufs', 'fruits-a-coque'], FM),
  p('gateau-breton', 'patisseries', 'Gâteau breton', 'gateaubreton', 3.3, 'part', 'Un sablé épais au beurre salé, strié au jaune d’œuf.', ['farine', 'beurre demi-sel', 'sucre', 'jaunes d’œufs'], ['gluten', 'lait', 'oeufs'], FM),
  p('chouquettes', 'patisseries', 'Chouquettes', 'chouquette', 0.35, 'pièce', 'Petites choux au sucre perlé, vendues à la poignée.', ['pâte à choux', 'sucre perlé'], ['gluten', 'lait', 'oeufs'], FM, { slot: ['gouter'], priceNote: 'Prix à la pièce' }),
  p('flankie-vanille', 'patisseries', 'Flankie Vanille', 'flankie', 4.0, 'pièce', 'Une édition vanille du Flankie, passée dans le carnet du fournil.', ['pâte à cookie', 'appareil à flan vanille'], ['gluten', 'lait', 'oeufs'], [...FM, 'signature'], { real: true, source: 'https://www.facebook.com/lefournildeprosper/videos/flankie-vanille/1501638771465253', flag: 'Mois de l’édition inconnu' }),

  // ---------------- CRÊPES (6) ----------------
  p('crepe-maison', 'crepes', 'Crêpe maison', 'crepe', 1.2, 'pièce', 'La recette transmise par les anciens propriétaires, épaisse, généreuse, la même depuis plus de cinq ans.', ['farine de blé', 'lait', 'œufs', 'beurre', 'sucre'], ['gluten', 'lait', 'oeufs'], [...FM, 'signature'], { real: true, source: 'https://www.instagram.com/p/DciKshoF5iG/', slot: ['matin', 'gouter'] }),
  p('crepes-lot-5', 'crepes', 'Lot de 5 crêpes maison', 'crepes', 5.5, 'lot de 5', 'Cinq crêpes pour le goûter ou le petit-déjeuner du dimanche.', ['farine de blé', 'lait', 'œufs', 'beurre', 'sucre'], ['gluten', 'lait', 'oeufs'], [...FM, 'signature'], { real: true, source: 'https://www.instagram.com/p/DciKshoF5iG/', priceNote: 'Prix indicatif' }),
  p('crepes-lot-pot', 'crepes', '5 crêpes + 1 pot de confiture', 'crepes', 10, 'offre', 'L’offre de la rentrée : cinq crêpes et un pot de confiture Maison Lucie pour 10 €.', ['crêpes maison', 'confiture Maison Lucie'], ['gluten', 'lait', 'oeufs'], [...FM], { real: true, source: 'https://www.instagram.com/p/DdDnvQxlzmI/', priceNote: 'Prix de l’offre affichée en septembre 2026' }),
  p('crepe-beurre-sucre', 'crepes', 'Crêpe beurre-sucre', 'crepe', 1.7, 'pièce', 'La plus simple, la plus gourmande, garnie à la demande.', ['crêpe maison', 'beurre', 'sucre'], ['gluten', 'lait', 'oeufs'], FM, { slot: ['gouter'] }),
  p('crepe-chocolat', 'crepes', 'Crêpe au chocolat', 'crepe', 2.1, 'pièce', 'Du chocolat fondu dans une crêpe encore tiède.', ['crêpe maison', 'chocolat'], ['gluten', 'lait', 'oeufs', 'soja'], FM, { slot: ['gouter'] }),
  p('crepe-caramel', 'crepes', 'Crêpe caramel beurre salé', 'crepe', 2.1, 'pièce', 'Un caramel au beurre salé qui file.', ['crêpe maison', 'caramel au beurre salé'], ['gluten', 'lait', 'oeufs'], FM, { slot: ['gouter'] }),

  // ---------------- SNACKING (12) ----------------
  p('sandwich-jambon', 'snacking', 'Sandwich jambon-beurre', 'sandwich', 4.5, 'pièce', 'Baguette tradition, jambon blanc, beurre doux.', ['baguette', 'jambon blanc', 'beurre'], ['gluten', 'lait'], FM, { slot: ['midi'], availableDays: [1, 2, 4, 5, 6] }),
  p('sandwich-poulet', 'snacking', 'Sandwich poulet-crudités', 'sandwich', 5.6, 'pièce', 'Poulet rôti, salade, tomate, mayonnaise légère.', ['baguette', 'poulet rôti', 'salade', 'tomate', 'mayonnaise'], ['gluten', 'oeufs'], FM, { slot: ['midi'], availableDays: [1, 2, 4, 5, 6] }),
  p('sandwich-thon', 'snacking', 'Sandwich thon-crudités', 'sandwich', 5.4, 'pièce', 'Thon, œuf dur, salade, tomate.', ['baguette', 'thon', 'œuf', 'salade', 'tomate'], ['gluten', 'oeufs', 'poisson'], FM, { slot: ['midi'], availableDays: [1, 2, 4, 5, 6] }),
  p('sandwich-vegetarien', 'snacking', 'Sandwich végétarien', 'sandwich', 5.2, 'pièce', 'Légumes grillés, fromage frais, jeunes pousses. Les options végétariennes existent depuis plusieurs années.', ['baguette', 'légumes grillés', 'fromage frais', 'jeunes pousses'], ['gluten', 'lait'], [...FM, 'vegetarien'], { real: true, source: 'https://commerces.ouest-france.fr/rennes-35000/le-fournil-de-prosper.html', slot: ['midi'], availableDays: [1, 2, 4, 5, 6], flag: 'Garniture donnée à titre d’exemple' }),
  p('sandwich-camembert', 'snacking', 'Sandwich camembert-noix', 'sandwich', 5.0, 'pièce', 'Camembert fermier, noix, mesclun.', ['pain aux noix', 'camembert', 'noix', 'mesclun'], ['gluten', 'lait', 'fruits-a-coque'], [...FM, 'vegetarien'], { slot: ['midi'], availableDays: [1, 2, 4, 5, 6] }),
  p('croque-monsieur', 'snacking', 'Croque-monsieur', 'croque', 3.9, 'pièce', 'Pain de mie, jambon, béchamel et gruyère gratiné.', ['pain de mie', 'jambon', 'béchamel', 'gruyère'], ['gluten', 'lait'], FM, { slot: ['midi', 'gouter'], availableDays: [1, 2, 4, 5, 6] }),
  p('quiche-lorraine', 'snacking', 'Quiche lorraine', 'quiche', 3.6, 'part', 'Lardons fumés, appareil à quiche crémeux, pâte brisée maison.', ['pâte brisée', 'lardons', 'œufs', 'crème'], ['gluten', 'lait', 'oeufs'], FM, { slot: ['midi'], availableDays: [1, 2, 4, 5, 6] }),
  p('quiche-chevre', 'snacking', 'Quiche chèvre-poireaux', 'quiche', 3.6, 'part', 'Poireaux fondants et fromage de chèvre.', ['pâte brisée', 'poireaux', 'chèvre', 'œufs', 'crème'], ['gluten', 'lait', 'oeufs'], [...FM, 'vegetarien'], { slot: ['midi'], availableDays: [1, 2, 4, 5, 6] }),
  p('salade-composee', 'snacking', 'Salade composée du jour', 'salade', 6.4, 'barquette', 'La salade du midi, qui change selon les arrivages.', ['salade', 'légumes de saison', 'vinaigrette'], ['oeufs'], [...FM, 'de-saison'], { slot: ['midi'], availableDays: [1, 2, 4, 5, 6] }),
  p('pizza-mediterraneenne', 'snacking', 'Pizza La Méditerranéenne', 'pizza', 5.5, 'pizza', 'Aubergine et courgette grillées, mozzarella, tomates confites, fromage frais, herbes de Provence. Préparée sur place, chaque lundi.', ['pâte à pizza', 'aubergine', 'courgette', 'mozzarella', 'tomates confites', 'fromage frais', 'herbes de Provence'], ['gluten', 'lait'], [...FM, 'lundi', 'vegetarien', 'signature'], { real: true, source: 'https://www.instagram.com/p/Dcs36IOl9Mf/', availableDays: [1], slot: ['midi', 'gouter'], flag: 'Prix et format (part ou individuelle) à confirmer' }),
  p('pizza-americaine', 'snacking', 'Pizza L’Américaine', 'pizza', 5.5, 'pizza', 'Sauce tomate, poulet rôti, poivrons, cheddar, cornichons. Poulet et poivrons français, préparée sur place.', ['pâte à pizza', 'sauce tomate', 'poulet rôti', 'poivrons', 'cheddar', 'cornichons'], ['gluten', 'lait'], [...FM, 'lundi', 'signature'], { real: true, source: 'https://www.instagram.com/p/Dcs36IOl9Mf/', availableDays: [1], slot: ['midi', 'gouter'], flag: 'Prix et format (part ou individuelle) à confirmer' }),
  p('cafe-emporter', 'snacking', 'Café à emporter', 'cafe', 1.4, 'gobelet', 'Un café ou une boisson chaude pour la route, dès l’ouverture.', ['café'], [], ['fait-maison'], { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562', slot: ['matin', 'midi'], priceNote: 'Prix indicatif' }),

  // ---------------- SAISONS (16) ----------------
  p('galette-rois', 'saisons', 'Galette des rois', 'galette', 3.6, 'part', 'Le feuilletage est parfait, disent les clients. Crème d’amande, fève cachée.', ['pâte feuilletée', 'crème d’amande', 'beurre', 'œufs'], ['gluten', 'lait', 'oeufs', 'fruits-a-coque'], [...FM, 'de-saison'], { real: true, source: 'https://arennes.com/boulangeries/le-fournil-de-prosper/', months: [1] }),
  p('couronne-rois', 'saisons', 'Couronne des rois', 'couronne', 3.2, 'part', 'La brioche des rois, parfumée à la fleur d’oranger et couverte de sucre perlé.', ['brioche', 'fruits confits', 'sucre perlé'], ['gluten', 'lait', 'oeufs'], [...FM, 'de-saison'], { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562', months: [1] }),
  p('galette-choco-noisettes', 'saisons', 'Galette Choco-Noisettes', 'galette', 4.2, 'part', 'Édition spéciale de janvier 2025 : pâte feuilletée, crème d’amande au gianduja et pépites de chocolat. Cent pour cent fait maison.', ['pâte feuilletée', 'crème d’amande', 'gianduja', 'pépites de chocolat'], ['gluten', 'lait', 'oeufs', 'fruits-a-coque', 'soja'], [...FM, 'de-saison', 'sur-commande'], { real: true, source: 'https://www.instagram.com/reel/DEhP8X6IWpn/', months: [1], flag: 'Édition de janvier 2025, une nouvelle galette chaque semaine' }),
  p('chocolats-paques', 'saisons', 'Chocolats de Pâques', 'egg', null, 'selon format', 'Œufs ou cocottes, poissons et fritures, en petits et grands formats, faits maison.', ['chocolat'], ['lait', 'soja', 'fruits-a-coque'], [...FM, 'de-saison'], { real: true, source: 'https://www.instagram.com/p/DIB84NqIEeZ/', months: [3, 4], priceNote: 'Prix selon le format' }),
  p('fraisier', 'saisons', 'Fraisier', 'fraisier', 4.4, 'part', 'Génoise, crème mousseline et fraises mûres, au printemps.', ['génoise', 'crème mousseline', 'fraises'], ['gluten', 'lait', 'oeufs'], [...FM, 'de-saison'], { months: [5, 6] }),
  p('papouney', 'saisons', 'Le Papouney', 'papouney', null, 'sur réservation', 'L’édition spéciale de la Fête des Pères, à réserver à l’avance.', ['composition à confirmer'], ['gluten', 'lait', 'oeufs'], ['sur-commande', 'de-saison'], { real: true, source: 'https://www.facebook.com/lefournildeprosper/photos/1057772683264249', months: [6], flag: 'Composition et année à confirmer', priceNote: 'À réserver' }),
  p('tennis-ball', 'saisons', 'Le Tennis Ball', 'tennis', 5.8, 'pièce', 'Trompe-l’œil de l’Open de Rennes : cheesecake sur sablé breton, cœur framboise. Édition limitée du 17 au 20 septembre 2026.', ['cheesecake', 'sablé breton', 'framboise'], ['gluten', 'lait', 'oeufs'], [...FM, 'de-saison', 'sur-commande'], { real: true, source: 'https://www.instagram.com/p/DdO9726F17w/', months: [9], flag: 'Édition passée (septembre 2026)', priceNote: 'Prix indicatif' }),
  p('brioches-saint-nicolas', 'saisons', 'Petites brioches Saint-Nicolas', 'nicolas', 2.6, 'pièce', 'Moelleuses, dorées et pleines de douceur, en forme de Saint Nicolas. Du jeudi au dimanche seulement.', ['brioche', 'sucre perlé'], ['gluten', 'lait', 'oeufs'], [...FM, 'de-saison'], { real: true, source: 'https://www.instagram.com/reel/DDRMb9bseJk/', months: [12], flag: 'Édition de décembre 2024' }),
  p('buche-chocolat-praline', 'saisons', 'Bûche chocolat-praliné', 'buche', 4.9, 'part', 'La bûche que les clients retrouvent chaque Noël : chocolat et praliné.', ['biscuit', 'mousse chocolat', 'praliné croustillant'], ['gluten', 'lait', 'oeufs', 'fruits-a-coque', 'soja'], [...FM, 'de-saison'], { real: true, source: 'https://www.pagesjaunes.fr/pros/61027562', months: [12], priceNote: 'Prix à la part, indicatif' }),
  p('buches-noel', 'saisons', 'Les bûches de la carte des fêtes', 'buche', null, '4 variétés', 'Quatre variétés de bûches à la carte des fêtes, à goûter lors de la journée dégustation de fin novembre. Les noms sont publiés avec la carte de l’année.', ['selon la variété'], ['gluten', 'lait', 'oeufs'], ['sur-commande', 'de-saison'], { real: true, source: 'https://www.facebook.com/lefournildeprosper/photos/journ%C3%A9e-d%C3%A9gustation-sp%C3%A9cial-b%C3%BBches-de-no%C3%ABl-chez-votre-boulanger-le-fournil-de-pr/894991976208988', months: [11, 12], flag: 'Noms des variétés à venir', priceNote: 'Sur la carte des fêtes' }),
  p('sapin-feuillete', 'saisons', 'Le Sapin Feuilleté', 'sapin', null, 'sur commande', 'Un sapin en pâte feuilletée pour l’apéritif : une moitié saumon fumé et fromage frais, l’autre pesto et tomates séchées.', ['pâte feuilletée', 'saumon fumé', 'fromage frais', 'pesto', 'tomates séchées'], ['gluten', 'lait', 'poisson', 'fruits-a-coque'], ['sur-commande', 'de-saison'], { real: true, source: 'https://www.instagram.com/p/DDzlwezoBC6/', months: [12], priceNote: 'Sur commande' }),
  p('plateau-mignardises', 'saisons', 'Plateau de mignardises', 'tray', null, 'sur commande', 'Un plateau de petites douceurs pour finir le repas des fêtes.', ['assortiment de mignardises'], ['gluten', 'lait', 'oeufs', 'fruits-a-coque'], ['sur-commande', 'de-saison'], { real: true, source: 'https://www.instagram.com/reel/DSMn2gOiHB6/', months: [12], priceNote: 'Sur la carte des fêtes' }),
  p('plateau-aperitif', 'saisons', 'Plateau apéritif et sucré', 'tray', null, 'sur commande', 'Des plateaux salés et sucrés pour recevoir.', ['assortiment salé et sucré'], ['gluten', 'lait', 'oeufs'], ['sur-commande'], { real: true, source: 'https://www.instagram.com/reel/DCZuDKgs2iB/', months: [11, 12], priceNote: 'Sur la carte des fêtes' }),
  p('pain-surprise', 'saisons', 'Pain surprise', 'surprise', null, 'sur commande', 'Un pain garni à partager pour les fêtes et les apéritifs.', ['garniture à confirmer'], ['gluten', 'lait'], ['sur-commande'], { real: true, source: 'https://www.facebook.com/lefournildeprosper/videos/les-commandes-pour-le-31-sont-closes-%EF%B8%8Fpensez-%C3%A0-notre-pain-surprise-pour-votre-pr/377099728137646', flag: 'Garniture à confirmer', months: [12] }),
  p('crepes-chandeleur', 'saisons', 'Crêpes de la Chandeleur', 'crepes', 5.5, 'lot de 5', 'La recette de la maison pour la Chandeleur, à sauter dans la poêle ou à manger telle quelle.', ['crêpes maison'], ['gluten', 'lait', 'oeufs'], [...FM, 'de-saison'], { months: [2] }),

  // ---------------- ÉPICERIE (6) ----------------
  p('confiture-fraise', 'epicerie', 'Confiture de fraises', 'jam', 4.9, 'pot de 150 g', 'Une confiture Maison Lucie, peu sucrée. Parfum donné à titre d’exemple.', ['fraises', 'sucre'], [], [], { flag: 'Parfum d’exemple', slot: ['matin'] }),
  p('confiture-abricot', 'epicerie', 'Confiture d’abricots', 'jam', 4.9, 'pot de 150 g', 'Une confiture Maison Lucie, peu sucrée. Parfum donné à titre d’exemple.', ['abricots', 'sucre'], [], [], { flag: 'Parfum d’exemple', slot: ['matin'] }),
  p('confiture-framboise', 'epicerie', 'Confiture de framboises', 'jam', 4.9, 'pot de 150 g', 'Une confiture Maison Lucie, peu sucrée. Parfum donné à titre d’exemple.', ['framboises', 'sucre'], [], [], { flag: 'Parfum d’exemple', slot: ['matin'] }),
  p('confiture-cassis', 'epicerie', 'Confiture de cassis', 'jam', 4.9, 'pot de 150 g', 'Une confiture Maison Lucie, peu sucrée. Parfum donné à titre d’exemple.', ['cassis', 'sucre'], [], [], { flag: 'Parfum d’exemple', slot: ['matin'] }),
  p('confiture-clementine', 'epicerie', 'Confiture de clémentines', 'jam', 4.9, 'pot de 150 g', 'Une confiture Maison Lucie, peu sucrée. Parfum donné à titre d’exemple.', ['clémentines', 'sucre'], [], [], { flag: 'Parfum d’exemple', slot: ['matin'] }),
  p('confiture-fruits-rouges', 'epicerie', 'Confiture de fruits rouges', 'jam', 4.9, 'pot de 150 g', 'Une confiture Maison Lucie, peu sucrée. Parfum donné à titre d’exemple.', ['fruits rouges', 'sucre'], [], [], { flag: 'Parfum d’exemple', slot: ['matin'] }),
]

export const productById = (id: string): Product | undefined => products.find((x) => x.id === id)
export const productsByCategory = (c: Category): Product[] => products.filter((x) => x.category === c)
export const allergenLabels: Record<Allergen, string> = {
  gluten: 'gluten', lait: 'lait', oeufs: 'œufs', 'fruits-a-coque': 'fruits à coque', soja: 'soja', sesame: 'sésame', poisson: 'poisson',
}
export const tagLabels: Record<Tag, string> = {
  'fait-maison': 'fait maison', 'de-saison': 'de saison', vegetarien: 'végétarien', dimanche: 'dimanche', lundi: 'lundi',
  signature: 'signature', 'sur-commande': 'sur commande',
}
export function formatPrice(pr: Product): string {
  if (pr.priceEUR == null) return pr.priceNote ?? 'Sur devis'
  return pr.priceEUR.toFixed(2).replace('.', ',') + ' €'
}
