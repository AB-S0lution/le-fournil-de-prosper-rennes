// SAMPLE DATA: mock content for the demo site. Page manifest: used by vite.config.ts, scripts/make-pages.mjs,
// the header menu, the footer and the sitemap page. Add a page = add a row + src/pages/<key>.ts.

import { posts } from './posts.ts'

export interface PageDef {
  key: string
  /** route relative to the base path, '' for the home page */
  path: string
  /** HTML file in the repo */
  file: string
  title: string
  description: string
  nav?: 'main' | 'more' | 'legal'
  label: string
  slug?: string
}

const base: PageDef[] = [
  { key: 'home', path: '', file: 'index.html', label: 'Accueil', title: 'Le Fournil de Prosper, boulangerie artisanale à Rennes (Cleunay)', description: 'Boulangerie-pâtisserie artisanale au 42 rue Champion de Cicé, à Rennes (Cleunay). Fait maison, ouvert 6 jours sur 7, dimanche matin compris. Le Flankie du mois, les crêpes, la pizza du lundi.' },
  { key: 'carte', path: 'la-carte/', file: 'la-carte/index.html', label: 'La carte', nav: 'main', title: 'La carte, pains, viennoiseries et pâtisseries | Le Fournil de Prosper', description: 'Pains, viennoiseries, pâtisseries, crêpes, snacking, produits de saison : la carte du Fournil de Prosper à Rennes. Prix indicatifs.' },
  { key: 'produit', path: 'la-carte/produit.html', file: 'la-carte/produit.html', label: 'Fiche produit', title: 'Fiche produit | Le Fournil de Prosper', description: 'Description, ingrédients, allergènes et jours de disponibilité d’un produit du Fournil de Prosper.' },
  { key: 'dejeuner', path: 'dejeuner/', file: 'dejeuner/index.html', label: 'Le midi et la pizza du lundi', nav: 'main', title: 'Le midi et la pizza du lundi | Le Fournil de Prosper', description: 'Formules du midi, sandwichs, quiches, salades et pizza du lundi préparée sur place, à Rennes Cleunay.' },
  { key: 'flankie', path: 'flankie/', file: 'flankie/index.html', label: 'Le Flankie du mois', nav: 'main', title: 'Le Flankie du mois, couche par couche | Le Fournil de Prosper', description: 'Le Flankie, mélange de flan et de cookie, change chaque mois. Octobre 2026 : pomme, poire, noisette, flan praliné.' },
  { key: 'indispensables', path: 'les-indispensables/', file: 'les-indispensables/index.html', label: 'Les indispensables', nav: 'more', title: 'Les indispensables | Le Fournil de Prosper', description: 'Les produits qui font la boulangerie. N°1 : nos crêpes maison, une recette transmise par les anciens propriétaires.' },
  { key: 'commandes', path: 'commandes/', file: 'commandes/index.html', label: 'Commandes et événements', nav: 'main', title: 'Commandes et événements | Le Fournil de Prosper', description: 'Gâteaux personnalisés, number cakes, mini-viennoiseries (-10 % dès 20 minis), plateaux et pièces de mariage. Commande par téléphone ou e-mail.' },
  { key: 'saisons', path: 'saisons/', file: 'saisons/index.html', label: 'Les saisons', nav: 'main', title: 'Les saisons, le calendrier du fournil | Le Fournil de Prosper', description: 'Galettes, Pâques, anniversaire du 1er juillet, rentrée, journée dégustation, carte des fêtes : les douze mois du Fournil de Prosper.' },
  { key: 'fetes', path: 'fetes/', file: 'fetes/index.html', label: 'La carte des fêtes', nav: 'more', title: 'La carte des fêtes | Le Fournil de Prosper', description: 'Bûches, plateaux de mignardises, Sapin Feuilleté, pain surprise : la carte des fêtes, les dates de réservation et les horaires de fin d’année.' },
  { key: 'anniversaire', path: 'anniversaire/', file: 'anniversaire/index.html', label: 'Les anniversaires', nav: 'more', title: 'Les anniversaires du 1er juillet | Le Fournil de Prosper', description: 'Depuis le 1er juillet 2021, chaque année, le fournil fête son anniversaire avec les clients : sondage, tirage au sort, un an de viennoiseries.' },
  { key: 'zero-gaspi', path: 'zero-gaspi/', file: 'zero-gaspi/index.html', label: 'Zéro gaspi', nav: 'more', title: 'Zéro gaspi | Le Fournil de Prosper', description: 'Paniers anti-gaspi, produits de saison, point relais de paniers de fruits et légumes : l’engagement zéro gaspi du fournil.' },
  { key: 'histoire', path: 'notre-histoire/', file: 'notre-histoire/index.html', label: 'Notre histoire', nav: 'main', title: 'Notre histoire, une boulangerie sur ce coin depuis 1987 | Le Fournil de Prosper', description: 'De la Boulangerie Leduc au Fournil de Prosper : une boulangerie à Cleunay depuis 1987, la recette des crêpes transmise, Prosper boulanger depuis 14 ans.' },
  { key: 'quartier', path: 'le-quartier/', file: 'le-quartier/index.html', label: 'Le quartier', nav: 'more', title: 'Le quartier de Cleunay | Le Fournil de Prosper', description: 'Cleunay, la rue Champion de Cicé, le métro, Roazhon Park, La Prévalaye : le quartier du fournil.' },
  { key: 'infos', path: 'infos-pratiques/', file: 'infos-pratiques/index.html', label: 'Infos et accès', nav: 'main', title: 'Horaires, accès et infos pratiques | Le Fournil de Prosper', description: 'Ouvert du lundi au samedi (sauf mercredi) de 6h45 à 19h15, le dimanche de 7h30 à 13h. 42 rue Champion de Cicé, Rennes. Métro Cleunay.' },
  { key: 'actus', path: 'actus/', file: 'actus/index.html', label: 'La gazette', nav: 'more', title: 'La gazette du Fournil | Le Fournil de Prosper', description: 'Nouveautés, Flankies, saisons et coulisses : la gazette du Fournil de Prosper, à Rennes Cleunay.' },
  { key: 'galerie', path: 'galerie/', file: 'galerie/index.html', label: 'Galerie', nav: 'more', title: 'Galerie | Le Fournil de Prosper', description: 'Une galerie d’illustrations originales des produits du fournil : viennoiseries, pains, Flankies, saisons.' },
  { key: 'faq', path: 'faq/', file: 'faq/index.html', label: 'Questions fréquentes', nav: 'more', title: 'Questions fréquentes | Le Fournil de Prosper', description: 'Horaires, commandes, allergènes, paiement, accès, zéro gaspi : les réponses aux questions fréquentes.' },
  { key: 'contact', path: 'contact/', file: 'contact/index.html', label: 'Contact', nav: 'main', title: 'Contact | Le Fournil de Prosper', description: 'Téléphone 02 99 67 31 73, e-mail, Instagram, Facebook et adresse du Fournil de Prosper, 42 rue Champion de Cicé à Rennes.' },
  { key: 'mentions', path: 'mentions-legales/', file: 'mentions-legales/index.html', label: 'Mentions légales', nav: 'legal', title: 'Mentions légales | Le Fournil de Prosper', description: 'Mentions légales du site de démonstration du Fournil de Prosper.' },
  { key: 'confidentialite', path: 'confidentialite/', file: 'confidentialite/index.html', label: 'Confidentialité', nav: 'legal', title: 'Confidentialité | Le Fournil de Prosper', description: 'Pas de cookies ni de suivi. Les formulaires ouvrent votre messagerie.' },
  { key: 'plan', path: 'plan-du-site/', file: 'plan-du-site/index.html', label: 'Plan du site', nav: 'legal', title: 'Plan du site | Le Fournil de Prosper', description: 'Toutes les pages du site du Fournil de Prosper.' },
]

const articles: PageDef[] = posts.map((p) => ({
  key: 'article',
  path: `actus/${p.slug}.html`,
  file: `actus/${p.slug}.html`,
  label: p.title,
  slug: p.slug,
  title: `${p.title} | La gazette du Fournil de Prosper`,
  description: p.excerpt,
}))

export const pages: PageDef[] = [...base, ...articles]
export const pageByKey = (k: string): PageDef | undefined => pages.find((p) => p.key === k)
