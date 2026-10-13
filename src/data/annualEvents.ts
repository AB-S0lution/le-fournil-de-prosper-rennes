// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// Real anchors of the bakery's year, each with a source. Years are those of the posts they come from.

export interface AnnualEvent {
  id: string
  title: string
  /** month 1-12 where it starts */
  month: number
  when: string
  text: string
  real: boolean
  source?: string
  note?: string
}

export const annualEvents: AnnualEvent[] = [
  { id: 'galettes', title: 'Galettes des rois, une édition spéciale par semaine', month: 1, when: 'Janvier', text: 'Chaque semaine de janvier, une nouvelle édition spéciale de galette. En 2025 : la Galette Choco-Noisettes, avec un feuilletage, une crème d’amande au gianduja et des pépites de chocolat.', real: true, source: 'https://www.instagram.com/reel/DEhP8X6IWpn/' },
  { id: 'paques', title: 'Chocolats de Pâques', month: 3, when: 'Mars et avril', text: 'Œufs ou cocottes, poissons et fritures, en petits et grands formats, tous faits maison.', real: true, source: 'https://www.instagram.com/p/DIB84NqIEeZ/' },
  { id: 'papouney', title: 'Le Papouney, Fête des Pères', month: 6, when: 'Juin', text: 'Une édition spéciale à réserver. La composition et l’année exacte restent à confirmer auprès du fournil.', real: true, source: 'https://www.facebook.com/lefournildeprosper/photos/1057772683264249', note: 'Composition à confirmer' },
  { id: 'anniversaire', title: 'L’anniversaire du 1er juillet', month: 7, when: '1er juillet', text: 'Le fournil a ouvert le 1er juillet 2021. Chaque année, on fête ça avec les clients : sondage en 2022, tirage au sort en boutique en 2026.', real: true, source: 'https://www.facebook.com/lefournildeprosper/posts/place-aux-5-ans-de-notre-boulangerie-le-1er-juillet-nous-f%C3%AAterons-les-5-ann%C3%A9es-p/1057772803264237' },
  { id: 'conges', title: 'Congés d’été', month: 7, when: 'Mi-juillet à début août', text: 'En 2026 : du 14 juillet à 13h jusqu’au mercredi 5 août inclus. Les dates 2027 ne sont pas encore connues.', real: true, source: 'https://www.facebook.com/lefournildeprosper/photos/899085712466281' },
  { id: 'flankie', title: 'Le Flankie du mois', month: 1, when: 'Chaque mois', text: 'Un nouveau mélange de flan et de cookie, disponible jusqu’à la fin du mois, pas un jour de plus.', real: true, source: 'https://www.instagram.com/p/DeR8nVtCJRP/' },
  { id: 'rentree', title: 'Pizzas de la rentrée', month: 9, when: 'Fin août et septembre', text: 'Le 31 août 2026, deux pizzas de rentrée : La Méditerranéenne et L’Américaine, préparées sur place.', real: true, source: 'https://www.instagram.com/p/Dcs36IOl9Mf/' },
  { id: 'tennis', title: 'Le Tennis Ball, Open de Rennes', month: 9, when: '17 au 20 septembre 2026', text: 'Un trompe-l’œil de tennis : cheesecake sur sablé breton, cœur framboise. Édition limitée, à réserver par téléphone ou message.', real: true, source: 'https://www.instagram.com/p/DdO9726F17w/' },
  { id: 'degustation', title: 'La journée dégustation', month: 11, when: 'Un samedi de fin novembre', text: 'Les bûches de la carte, des pains spéciaux, des plateaux, et un tirage au sort. En 2024 : samedi 23 novembre, 9h30-15h. En 2025 : samedi 29 novembre, 9h-15h.', real: true, source: 'https://www.instagram.com/reel/DCZuDKgs2iB/' },
  { id: 'nicolas', title: 'Brioches Saint-Nicolas', month: 12, when: '6 décembre', text: 'De petites brioches en forme de Saint Nicolas, du jeudi au dimanche seulement.', real: true, source: 'https://www.instagram.com/reel/DDRMb9bseJk/' },
  { id: 'carte-fetes', title: 'La carte des fêtes', month: 12, when: 'Décembre', text: 'Bûches, plateaux de mignardises, pains et pain surprise. En 2025 : réservations en boutique jusqu’au 20 décembre pour le 24, jusqu’au 26 pour le 31.', real: true, source: 'https://www.instagram.com/reel/DSMn2gOiHB6/' },
  { id: 'sapin', title: 'Le Sapin Feuilleté', month: 12, when: 'Décembre', text: 'Un sapin de pâte feuilletée pour l’apéritif, moitié saumon fumé et fromage frais, moitié pesto et tomates séchées. Sur commande.', real: true, source: 'https://www.instagram.com/p/DDzlwezoBC6/' },
  { id: 'nouvel-an', title: 'Commandes du Nouvel An', month: 12, when: 'Fin décembre', text: 'Produits artisanaux et produits locaux, commandés jusqu’au dimanche pour le 31.', real: true, source: 'https://www.instagram.com/reel/DEHj9zvIw6F/' },
]
