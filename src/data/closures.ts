// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// Exceptions to the weekly rule. getShopState() reads this table BEFORE the weekly hours.
// Entries with confirmed:false are announced "à confirmer" and never change the computed hours.

export type ClosureType = 'ferie' | 'conges' | 'horaires-speciaux'

export interface Closure {
  id: string
  /** First day, ISO yyyy-mm-dd (Europe/Paris calendar day) */
  start: string
  /** Last day inclusive; omit for a single day */
  end?: string
  type: ClosureType
  /** Opening hours that day; omit (or null) when the shop is closed */
  hours?: { open: string; close: string } | null
  label: string
  detail: string
  real: boolean
  /** false = announced as "à confirmer", does not override the weekly rule */
  confirmed: boolean
  source?: string
}

export const closures: Closure[] = [
  {
    id: 'ferie-2024-11-11',
    start: '2024-11-11',
    type: 'horaires-speciaux',
    hours: { open: '06:45', close: '12:30' },
    label: 'Jour férié',
    detail: 'Lundi 11 novembre 2024 : ouvert jusqu’à 12h30, retour le jeudi 14 novembre dès 6h45.',
    real: true,
    confirmed: true,
    source: 'https://www.facebook.com/lefournildeprosper/videos/la-boulangerie-le-fournil-de-prosper-situ%C3%A9e-au-42-rue-champion-de-cic%C3%A9-%C3%A0-rennes-/445805111878147',
  },
  {
    id: 'ferie-2025-05-01',
    start: '2025-05-01',
    type: 'ferie',
    hours: null,
    label: 'Jour férié',
    detail: 'Jeudi 1er mai 2025 : la boulangerie était exceptionnellement fermée.',
    real: true,
    confirmed: true,
    source: 'https://www.facebook.com/lefournildeprosper/posts/jour-f%C3%A9ri%C3%A9-jeudi-1er-maila-boulangerie-le-fournil-de-prosper-au-42-rue-champion-/732634699111384',
  },
  {
    id: 'noel-2025-12-24',
    start: '2025-12-24',
    type: 'horaires-speciaux',
    hours: { open: '08:00', close: '18:00' },
    label: 'Veille de Noël',
    detail: 'Mercredi 24 décembre 2025 : ouvert de 8h à 18h, un mercredi, jour de fermeture habituel.',
    real: true,
    confirmed: true,
    source: 'https://www.instagram.com/reel/DSMn2gOiHB6/',
  },
  {
    id: 'noel-2025-12-25',
    start: '2025-12-25',
    type: 'ferie',
    hours: null,
    label: 'Noël',
    detail: 'Jeudi 25 décembre 2025 : fermé.',
    real: true,
    confirmed: true,
    source: 'https://www.instagram.com/reel/DSMn2gOiHB6/',
  },
  {
    id: 'nye-2025-12-31',
    start: '2025-12-31',
    type: 'horaires-speciaux',
    hours: { open: '08:00', close: '18:00' },
    label: 'Réveillon du Nouvel An',
    detail: 'Mercredi 31 décembre 2025 : ouvert de 8h à 18h, un mercredi, jour de fermeture habituel.',
    real: true,
    confirmed: true,
    source: 'https://www.instagram.com/reel/DSMn2gOiHB6/',
  },
  {
    id: 'nouvelan-2026-01-01',
    start: '2026-01-01',
    type: 'ferie',
    hours: null,
    label: 'Jour de l’An',
    detail: 'Jeudi 1er janvier 2026 : fermé.',
    real: true,
    confirmed: true,
    source: 'https://www.instagram.com/reel/DSMn2gOiHB6/',
  },
  {
    id: 'ferie-2026-07-14',
    start: '2026-07-14',
    type: 'horaires-speciaux',
    hours: { open: '07:30', close: '13:00' },
    label: 'Fête nationale',
    detail: 'Mardi 14 juillet 2026 : ouvert de 7h30 à 13h, puis début des congés d’été.',
    real: true,
    confirmed: true,
    source: 'https://actu.fr/bretagne/rennes_35238/14-juillet-a-rennes-voici-quels-sont-les-restos-boulangeries-tabacs-et-centres-commerciaux-ouverts-en-ce-jour-ferie_64532706.html',
  },
  {
    id: 'conges-ete-2026',
    start: '2026-07-15',
    end: '2026-08-05',
    type: 'conges',
    hours: null,
    label: 'Congés d’été',
    detail: 'Toute l’équipe en congés du 14 juillet à partir de 13h jusqu’au mercredi 5 août 2026 inclus. Retour le jeudi 6 août dès 6h45.',
    real: true,
    confirmed: true,
    source: 'https://www.facebook.com/lefournildeprosper/photos/899085712466281',
  },
  // ---- à confirmer: never overrides the weekly rule ----
  {
    id: 'noel-2026-12-24',
    start: '2026-12-24',
    type: 'horaires-speciaux',
    hours: null,
    label: 'Veille de Noël 2026',
    detail: 'Horaires à confirmer. En 2025 : ouvert de 8h à 18h. Les dates de réservation seront publiées avec la carte des fêtes.',
    real: false,
    confirmed: false,
  },
  {
    id: 'noel-2026-12-25',
    start: '2026-12-25',
    type: 'ferie',
    hours: null,
    label: 'Noël 2026',
    detail: 'À confirmer. En 2025 : fermé le 25 décembre.',
    real: false,
    confirmed: false,
  },
  {
    id: 'nye-2026-12-31',
    start: '2026-12-31',
    type: 'horaires-speciaux',
    hours: null,
    label: 'Réveillon 2026',
    detail: 'Horaires à confirmer. En 2025 : ouvert de 8h à 18h.',
    real: false,
    confirmed: false,
  },
  {
    id: 'nouvelan-2027-01-01',
    start: '2027-01-01',
    type: 'ferie',
    hours: null,
    label: 'Jour de l’An 2027',
    detail: 'À confirmer. En 2026 : fermé le 1er janvier.',
    real: false,
    confirmed: false,
  },
  {
    id: 'ferie-2027-07-14',
    start: '2027-07-14',
    type: 'horaires-speciaux',
    hours: null,
    label: 'Fête nationale 2027',
    detail: 'À confirmer. En 2026 : ouvert de 7h30 à 13h.',
    real: false,
    confirmed: false,
  },
  {
    id: 'conges-ete-2027',
    start: '2027-07-15',
    end: '2027-08-05',
    type: 'conges',
    hours: null,
    label: 'Congés d’été 2027',
    detail: 'À confirmer. En 2026 : de mi-juillet au 5 août. Les dates 2027 ne sont pas encore connues.',
    real: false,
    confirmed: false,
  },
]
