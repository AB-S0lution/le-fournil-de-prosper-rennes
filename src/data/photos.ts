// Photos d'illustration Unsplash (licence Unsplash), pas des photos du commerce.
// SAMPLE DATA: aucune de ces images ne montre Le Fournil de Prosper, ses produits ou son équipe.

export type PhotoTheme = 'viennoiseries' | 'pains' | 'patisseries' | 'midi' | 'fournil'

export interface Photo {
  slug: string
  src: string
  alt: string
  theme: PhotoTheme
  width: number
  height: number
  credit: string
  url: string
}

const base = import.meta.env.BASE_URL

type Row = [slug: string, id: string, w: number, h: number, theme: PhotoTheme, alt: string]

const rows: Row[] = [
  ['croissant-farine', '1555507036-ab1f4038808a', 1400, 1120, 'viennoiseries', 'Croissants dorés saupoudrés de farine sur une planche sombre'],
  ['croissants-tas', '1530610476181-d83430b64dcd', 1100, 1467, 'viennoiseries', 'Un tas de croissants feuilletés tout juste sortis du four'],
  ['plateau-viennoiseries', '1483695028939-5bb13f8648b0', 1400, 933, 'viennoiseries', 'Plaque de pains au chocolat et de viennoiseries alignés'],
  ['vitrine-viennoiseries', '1568254183919-78a4f43a2877', 1400, 935, 'viennoiseries', 'Vitrine de boulangerie garnie de viennoiseries et de brioches'],
  ['cinnamon-rolls', '1509365465985-25d11c17e812', 818, 1000, 'viennoiseries', 'Roulés à la cannelle vus du dessus, saupoudrés de sucre'],
  ['beignets', '1612240498936-65f5101365d2', 1100, 1650, 'viennoiseries', 'Beignets glacés sur fond sombre'],
  ['pain-campagne', '1586444248902-2f64eddc13df', 1400, 933, 'pains', 'Grosse miche de campagne farinée, grigne bien ouverte'],
  ['miche-tranchee', '1549931319-a545dcf3bc73', 1400, 933, 'pains', 'Miche au levain tranchée sur une planche en bois'],
  ['pains-cereales', '1509440159596-0249088772ff', 1100, 732, 'pains', 'Pains aux céréales et épis de blé sur un plan de travail'],
  ['tranches-levain', '1534620808146-d33bb39128b2', 667, 1000, 'pains', 'Tranches de pain au levain alignées, vues du dessus'],
  ['corbeille-pains', '1608198093002-ad4e005484ec', 1400, 788, 'pains', 'Corbeille de pains variés, baguettes et boules'],
  ['vitrine-pains', '1517433670267-08bbd4be890f', 1100, 819, 'pains', 'Étagères de pains et viennoiseries derrière le comptoir'],
  ['pain-de-mie', '1598373182133-52452f7691ef', 1400, 933, 'pains', 'Pain de mie tranché sur une toile de lin'],
  ['tarte-citron', '1519915028121-7d3463d20b13', 1100, 1650, 'patisseries', 'Tarte au citron meringuée entamée'],
  ['tarte-fruits-rouges', '1464305795204-6f5bbfc7fb81', 1400, 933, 'patisseries', 'Tartes aux fruits rouges à croisillons sur nappe blanche'],
  ['tartelettes-fruits', '1495147466023-ac5c588e2e94', 667, 1000, 'patisseries', 'Tartelettes aux fruits frais rangées en damier'],
  ['verrines-fraises', '1488477181946-6428a0291777', 1400, 2100, 'patisseries', 'Petites verrines crème et fraises'],
  ['gateau-anniversaire', '1586985289688-ca3cf47d3e6e', 1400, 2100, 'patisseries', 'Gâteau à étages en cours de décoration à la poche'],
  ['gateau-mures', '1559620192-032c4bc4674e', 1400, 1895, 'patisseries', 'Gâteau crème et mûres sur un présentoir'],
  ['gateau-chocolat', '1541783245831-57d6fb0926d3', 1400, 2100, 'patisseries', 'Nappage au chocolat coulant sur un gâteau'],
  ['chocolat-eclats', '1606312619070-d48b4c652a52', 1400, 2100, 'patisseries', 'Éclats de chocolat noir empilés'],
  ['cookies-plaque', '1499636136210-6f4ee915583e', 799, 1000, 'patisseries', 'Cookies aux pépites de chocolat sur papier cuisson'],
  ['cookies-panier', '1558961363-fa8fdf82db35', 1100, 1375, 'patisseries', 'Panier de cookies maison'],
  ['cookie-gourmand', '1621236378699-8597faf6a176', 1400, 1923, 'patisseries', 'Cookie gourmand aux éclats colorés dans une assiette'],
  ['cake-tranche', '1606101273945-e9eba91c0dc4', 1400, 933, 'patisseries', 'Cake aux pépites de chocolat tranché sur une grille'],
  ['pizza-lundi', '1513104890138-7c749659a591', 1100, 733, 'midi', 'Pizza tomates cerises et romarin, découpée en parts'],
  ['pizza-planche', '1565299624946-b28f40a0ae38', 828, 1000, 'midi', 'Pizza garnie sur une planche en bois'],
  ['croque-monsieur', '1528735602780-2552fd46c7af', 1400, 930, 'midi', 'Croque grillé coupé en triangles avec ses sauces'],
  ['crepes', '1519676867240-f03562e64548', 667, 1000, 'midi', 'Crêpes pliées en quatre dans des assiettes'],
  ['petrissage', '1517686469429-8bdb88b9f907', 1400, 933, 'fournil', 'Mains qui pétrissent une pâte sur un plan fariné'],
  ['boutique-soir', '1587241321921-91a834d6d191', 1400, 933, 'fournil', 'Intérieur de boulangerie éclairé, étagères de pains en arrière-plan'],
]

export const photos: Photo[] = rows.map(([slug, id, width, height, theme, alt]) => ({
  slug,
  src: `${base}photos/${slug}.jpg`,
  alt,
  theme,
  width,
  height,
  credit: 'Unsplash (licence Unsplash)',
  url: `https://images.unsplash.com/photo-${id}`,
}))

export const photoThemes: { id: PhotoTheme | 'tout'; label: string }[] = [
  { id: 'tout', label: 'Tout' },
  { id: 'viennoiseries', label: 'Viennoiseries' },
  { id: 'pains', label: 'Pains' },
  { id: 'patisseries', label: 'Pâtisseries' },
  { id: 'midi', label: 'Le midi' },
  { id: 'fournil', label: 'Au fournil' },
]

export function photo(slug: string): Photo {
  return photos.find((p) => p.slug === slug) ?? photos[0]
}

/** <img> markup for a photo; lazy by default. */
export function photoImg(p: Photo, cls = 'photo', eager = false): string {
  return `<img class="${cls}" src="${p.src}" alt="${p.alt.replace(/"/g, '&quot;')}" width="${p.width}" height="${p.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`
}
