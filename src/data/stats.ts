// REAL ONLY (PLAN.md §11). No invented counts.

export interface Stat {
  id: string
  value: string
  label: string
  source?: string
}

export const stats: Stat[] = [
  { id: 'coin', value: '1987', label: 'une boulangerie sur ce coin de rue depuis 1987' },
  { id: 'ouvert', value: '1er juillet 2021', label: 'ouverture du Fournil de Prosper' },
  { id: 'ans', value: '5 ans', label: 'fêtés en juillet 2026' },
  { id: 'metier', value: '14 ans', label: 'de métier pour Prosper avant de se lancer' },
  { id: 'jours', value: '6 jours sur 7', label: 'ouvert, dimanche matin compris' },
  { id: 'google', value: '4,4/5', label: 'sur Google, environ 150 avis' },
  { id: 'metro', value: '4 min', label: 'à pied du métro Cleunay' },
]
