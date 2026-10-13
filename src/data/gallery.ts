// SAMPLE DATA: mock content for the demo site. Original illustrations only: no photo of the bakery is used.

import type { Illustration } from './products.ts'

export type GalleryTheme = 'viennoiseries' | 'pains' | 'flankies' | 'saisons' | 'comptoir' | 'quartier'

export interface GalleryItem {
  id: string
  title: string
  theme: GalleryTheme
  illustration: Illustration
  caption: string
  tone: 'oak' | 'store' | 'brique' | 'sauge' | 'flan'
}

export const galleryThemes: { id: GalleryTheme | 'tout'; label: string }[] = [
  { id: 'tout', label: 'Tout' },
  { id: 'viennoiseries', label: 'Viennoiseries' },
  { id: 'pains', label: 'Pains' },
  { id: 'flankies', label: 'Flankies' },
  { id: 'saisons', label: 'Saisons' },
  { id: 'comptoir', label: 'Comptoir' },
  { id: 'quartier', label: 'Quartier' },
]

export const gallery: GalleryItem[] = [
  { id: 'g1', title: 'Le croissant de 6h45', theme: 'viennoiseries', illustration: 'croissant', caption: 'Illustration du croissant du matin.', tone: 'oak' },
  { id: 'g2', title: 'Pain au chocolat', theme: 'viennoiseries', illustration: 'painchoc', caption: 'Illustration du pain au chocolat.', tone: 'brique' },
  { id: 'g3', title: 'Kouign-amann', theme: 'viennoiseries', illustration: 'kouign', caption: 'Illustration du kouign-amann.', tone: 'flan' },
  { id: 'g4', title: 'Cinnamon roll', theme: 'viennoiseries', illustration: 'roll', caption: 'Illustration du cinnamon roll.', tone: 'oak' },
  { id: 'g5', title: 'Baguette tradition', theme: 'pains', illustration: 'baguette', caption: 'Illustration de la baguette tradition.', tone: 'store' },
  { id: 'g6', title: 'Pain au levain T150', theme: 'pains', illustration: 'levain', caption: 'Illustration du pain au levain pur.', tone: 'oak' },
  { id: 'g7', title: 'Pain de campagne', theme: 'pains', illustration: 'loaf', caption: 'Illustration du pain de campagne.', tone: 'sauge' },
  { id: 'g8', title: 'Flankie d’octobre', theme: 'flankies', illustration: 'flankie', caption: 'Illustration du Flankie du mois.', tone: 'flan' },
  { id: 'g9', title: 'Flankie citron meringué', theme: 'flankies', illustration: 'flankie', caption: 'Illustration du Flankie d’août.', tone: 'sauge' },
  { id: 'g10', title: 'Flankie vanille', theme: 'flankies', illustration: 'flankie', caption: 'Illustration du Flankie vanille.', tone: 'oak' },
  { id: 'g11', title: 'Galette des rois', theme: 'saisons', illustration: 'galette', caption: 'Illustration de la galette.', tone: 'brique' },
  { id: 'g12', title: 'Chocolats de Pâques', theme: 'saisons', illustration: 'egg', caption: 'Illustration des chocolats de Pâques.', tone: 'sauge' },
  { id: 'g13', title: 'Le Tennis Ball', theme: 'saisons', illustration: 'tennis', caption: 'Illustration du trompe-l’œil de septembre.', tone: 'flan' },
  { id: 'g14', title: 'Bûche de Noël', theme: 'saisons', illustration: 'buche', caption: 'Illustration de la bûche.', tone: 'store' },
  { id: 'g15', title: 'Sapin Feuilleté', theme: 'saisons', illustration: 'sapin', caption: 'Illustration du sapin apéritif.', tone: 'sauge' },
  { id: 'g16', title: 'Pile de crêpes', theme: 'comptoir', illustration: 'crepes', caption: 'Illustration de la pile de crêpes maison.', tone: 'oak' },
  { id: 'g17', title: 'Pizza du lundi', theme: 'comptoir', illustration: 'pizza', caption: 'Illustration de la pizza du lundi.', tone: 'brique' },
  { id: 'g18', title: 'Sandwich du midi', theme: 'comptoir', illustration: 'sandwich', caption: 'Illustration du sandwich du midi.', tone: 'flan' },
  { id: 'g19', title: 'Pot de confiture', theme: 'comptoir', illustration: 'jam', caption: 'Illustration d’un pot de confiture.', tone: 'brique' },
  { id: 'g20', title: 'Café à emporter', theme: 'comptoir', illustration: 'cafe', caption: 'Illustration du café du matin.', tone: 'store' },
  { id: 'g21', title: 'Le goûter de Cleunay', theme: 'quartier', illustration: 'chausson', caption: 'Illustration du goûter à la sortie de l’école.', tone: 'oak' },
  { id: 'g22', title: 'Baguette du dimanche', theme: 'quartier', illustration: 'baguette', caption: 'Illustration de la baguette du dimanche matin.', tone: 'flan' },
]
