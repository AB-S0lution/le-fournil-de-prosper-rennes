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
  ['croissant-farine', '1555507036-ab1f4038808a', 1400, 1120, 'viennoiseries', 'Croissant doré saupoudré de sucre glace sur une ardoise sombre'],
  ['croissants-tas', '1530610476181-d83430b64dcd', 1100, 1467, 'viennoiseries', 'Un tas de croissants feuilletés tout juste sortis du four'],
  ['plateau-viennoiseries', '1483695028939-5bb13f8648b0', 1400, 933, 'viennoiseries', 'Plaque de pains au chocolat et de viennoiseries alignés'],
  ['vitrine-viennoiseries', '1568254183919-78a4f43a2877', 1400, 935, 'viennoiseries', 'Vitrine de boulangerie garnie de viennoiseries et de brioches'],
  ['cinnamon-rolls', '1509365465985-25d11c17e812', 818, 1000, 'viennoiseries', 'Roulés à la cannelle vus du dessus, saupoudrés de sucre'],
  ['beignets', '1612240498936-65f5101365d2', 1100, 1650, 'viennoiseries', 'Beignets glacés en suspension sur fond sombre'],
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
  ['gateau-chocolat', '1541783245831-57d6fb0926d3', 1400, 2100, 'patisseries', 'Nappage au chocolat coulant sur un gâteau en couronne'],
  ['chocolat-eclats', '1606312619070-d48b4c652a52', 1400, 2100, 'patisseries', 'Éclats de chocolat noir empilés'],
  ['cookies-plaque', '1499636136210-6f4ee915583e', 799, 1000, 'patisseries', 'Cookies aux pépites de chocolat sur papier cuisson'],
  ['cookies-panier', '1558961363-fa8fdf82db35', 1100, 1375, 'patisseries', 'Panier de cookies maison'],
  ['cookie-gourmand', '1621236378699-8597faf6a176', 1400, 1923, 'patisseries', 'Cookie gourmand aux éclats colorés dans une assiette'],
  ['cake-tranche', '1606101273945-e9eba91c0dc4', 1400, 933, 'patisseries', 'Cake aux noix de pécan et pépites de chocolat tranché sur une grille'],
  ['pizza-lundi', '1513104890138-7c749659a591', 1100, 733, 'midi', 'Pizza tomates cerises et romarin, découpée en parts'],
  ['pizza-planche', '1565299624946-b28f40a0ae38', 828, 1000, 'midi', 'Pizza garnie sur une planche en bois'],
  ['croque-monsieur', '1528735602780-2552fd46c7af', 1400, 930, 'midi', 'Croque grillé coupé en triangles avec ses sauces'],
  ['crepes', '1519676867240-f03562e64548', 667, 1000, 'midi', 'Crêpes pliées en quatre dans des assiettes'],
  ['petrissage', '1517686469429-8bdb88b9f907', 1400, 933, 'fournil', 'Mains qui pétrissent une pâte sur un plan fariné'],
  ['boutique-soir', '1571942948809-74637bfc59b9', 1400, 933, 'fournil', 'Intérieur de boulangerie avec étagères de miches, comptoir vitré de brioches et bouquet de fleurs séchées'],
  ['baguette', '1554475659-9fd915c8f156', 1200, 1500, 'pains', 'Baguettes croustillantes posées sur un torchon'],
  ['sandwich', '1553909489-cd47e0907980', 1200, 960, 'midi', 'Sandwich garni coupé en deux sur une surface claire'],
  ['sandwich-legumes', '1509722747041-616f39b57569', 1200, 800, 'midi', 'Pain garni de légumes sur une planche à découper'],
  ['quiche', '1608855725042-e95ffd4ca487', 1200, 1800, 'midi', 'Part de quiche dorée et petite salade dans une assiette'],
  ['salade', '1512621776951-a57141f2eefd', 1200, 800, 'midi', 'Bol de salade composée aux légumes frais'],
  ['macarons', '1569864358642-9d1684040f43', 1200, 800, 'patisseries', 'Macarons de toutes les couleurs alignés'],
  ['galette', '1547675999-f71c79b90fb6', 1200, 1794, 'patisseries', 'Galette feuilletée dorée, rayée en soleil, entourée de noix de pécan'],
  ['confiture', '1633084426862-3a8c25aa7ce5', 1200, 1600, 'fournil', 'Bocal de confiture de fruits rouges avec une cuillère en bois'],
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

/** Which illustration photo best matches an SVG illustration key (products, posts, offers). */
const byIllustration: Record<string, string> = {
  baguette: 'baguette', loaf: 'pain-campagne', levain: 'miche-tranchee', seigle: 'pains-cereales',
  croissant: 'croissant-farine', painchoc: 'plateau-viennoiseries', raisins: 'vitrine-viennoiseries', brioche: 'vitrine-viennoiseries',
  tressee: 'plateau-viennoiseries', roll: 'cinnamon-rolls', babka: 'cake-tranche', chausson: 'croissants-tas', kouign: 'croissant-farine',
  palmier: 'vitrine-viennoiseries', minis: 'plateau-viennoiseries', flankie: 'cookies-plaque', flan: 'tarte-citron', far: 'cake-tranche',
  meringue: 'tarte-citron', macaron: 'macarons', tarte: 'tarte-fruits-rouges', entremets: 'gateau-mures', number: 'gateau-anniversaire',
  wedding: 'gateau-mures', cake: 'gateau-anniversaire', eclair: 'chocolat-eclats', tartecitron: 'tarte-citron', parisbrest: 'verrines-fraises',
  gateaubreton: 'cake-tranche', chouquette: 'beignets', crepe: 'crepes', crepes: 'crepes', sandwich: 'sandwich', croque: 'croque-monsieur',
  quiche: 'quiche', salade: 'salade', pizza: 'pizza-lundi', cafe: 'boutique-soir', galette: 'galette', couronne: 'galette',
  egg: 'chocolat-eclats', fraisier: 'verrines-fraises', papouney: 'gateau-chocolat', tennis: 'tartelettes-fruits', nicolas: 'croissants-tas',
  buche: 'gateau-chocolat', sapin: 'plateau-viennoiseries', tray: 'tartelettes-fruits', surprise: 'sandwich-legumes', jam: 'confiture',
}
export function photoFor(illustration: string, fallback = 'corbeille-pains'): Photo {
  return photo(byIllustration[illustration] ?? fallback)
}

/** A captioned figure; `cls` picks the frame (photo-tile, photo-band, photo-slim). */
export function photoFig(p: Photo, cls = 'photo-band', reveal = 'clip'): string {
  return `<figure class="${cls}"${reveal ? ` data-reveal="${reveal}"` : ''}>${photoImg(p, 'photo')}<figcaption class="photo-cap">Photo d’illustration</figcaption></figure>`
}
