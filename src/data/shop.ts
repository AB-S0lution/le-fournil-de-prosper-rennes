// REAL FACTS ONLY (see PLAN.md §1). The only sample logic here is the demo "today" preview.
// Exports getShopState(now) and getDayPlan(iso): both read closures.ts BEFORE the weekly rule.

import { closures } from './closures.ts'
import type { Closure } from './closures.ts'

export const SITE_URL = 'https://ab-s0lution.github.io/le-fournil-de-prosper-rennes/'

export const shop = {
  name: 'Le Fournil de Prosper',
  tagline: 'Boulangerie artisanale, pâtisserie et snacking à Cleunay',
  legalName: 'SARL LE FOURNIL DE PROSPER',
  capital: '5 000 €',
  siren: '900 157 413',
  siret: '900 157 413 00015',
  rcs: 'RCS Rennes',
  vat: 'FR11900157413',
  naf: '10.71C',
  street: '42 rue Champion de Cicé',
  postalCode: '35000',
  city: 'Rennes',
  quarter: 'Cleunay',
  geo: { lat: 48.102779, lng: -1.703291 },
  phone: '02 99 67 31 73',
  phoneTel: '+33299673173',
  email: 'lefournildeprosper@gmail.com',
  instagram: 'https://www.instagram.com/lefournildeprosper/',
  instagramHandle: '@lefournildeprosper',
  facebook: 'https://www.facebook.com/lefournildeprosper/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=42+rue+Champion+de+Cic%C3%A9+35000+Rennes',
  openedOn: '2021-07-01',
  bakerySince: 1987,
  network: 'Banette',
  ratings: {
    google: { value: 4.4, label: 'environ 150 avis Google' },
    tgtg: { value: 4.6, count: 90 },
  },
  payments: ['Carte bancaire', 'Visa', 'Mastercard', 'American Express', 'Espèces', 'Chèque', 'Apple Pay', 'Google Pay', 'Titres-restaurant'],
  transport: {
    metro: 'Métro ligne B, station Cleunay, à 4 minutes à pied',
    bus: 'Arrêt « Champion de Cicé » à environ 45 m : lignes 10 et N3 (de nuit), Api’Bus en saison',
  },
  accessibility: [
    'Entrée de plain-pied',
    'Porte vitrée coulissante automatique de 100 cm, avec bandes contrastées',
    'Allées de 90 cm ou plus',
    'Pas de toilettes pour la clientèle',
    'Pas de boucle magnétique',
    'Stationnement public à proximité (pas de parking privé)',
  ],
} as const

/** Weekly rule. index = getUTCDay (0 = dimanche). null = fermé. */
export interface Hours { open: string; close: string }
export const weeklyHours: (Hours | null)[] = [
  { open: '07:30', close: '13:00' }, // dimanche
  { open: '06:45', close: '19:15' }, // lundi
  { open: '06:45', close: '19:15' }, // mardi
  null, // mercredi: fermé
  { open: '06:45', close: '19:15' }, // jeudi
  { open: '06:45', close: '19:15' }, // vendredi
  { open: '06:45', close: '19:15' }, // samedi
]

export const dayNames = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
export const dayShort = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.']
export const monthNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

// ---------- date helpers (all on Europe/Paris calendar days) ----------
export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}
export function fmtTime(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number)
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, '0')}`
}
export function isoToUTC(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}
export function utcToIso(d: Date): string {
  return d.toISOString().slice(0, 10)
}
export function addDays(iso: string, n: number): string {
  const d = isoToUTC(iso)
  d.setUTCDate(d.getUTCDate() + n)
  return utcToIso(d)
}
export function weekdayOf(iso: string): number {
  return isoToUTC(iso).getUTCDay()
}
export function formatLongDate(iso: string): string {
  const d = isoToUTC(iso)
  const day = d.getUTCDate()
  return `${dayNames[d.getUTCDay()]} ${day === 1 ? '1er' : day} ${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}
export function formatShortDate(iso: string): string {
  const d = isoToUTC(iso)
  const day = d.getUTCDate()
  return `${day === 1 ? '1er' : day} ${monthNames[d.getUTCMonth()]}`
}

const parisFmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Paris',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})
/** Current Rennes date and minutes since midnight. */
export function parisNow(now: Date = new Date()): { iso: string; minutes: number } {
  const parts = Object.fromEntries(parisFmt.formatToParts(now).map((p) => [p.type, p.value]))
  return {
    iso: `${parts.year}-${parts.month}-${parts.day}`,
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  }
}

export function closureFor(iso: string, confirmedOnly = true): Closure | undefined {
  return closures.find((c) => (!confirmedOnly || c.confirmed) && iso >= c.start && iso <= (c.end ?? c.start))
}

export interface DayPlan {
  iso: string
  weekday: number
  /** null = fermé */
  hours: Hours | null
  exception?: Closure
  /** unconfirmed announcement on that day (never changes hours) */
  notice?: Closure
  /** true when the weekly rule was overridden */
  overridden: boolean
}

/** Exceptions first, then the weekly rule. */
export function getDayPlan(iso: string): DayPlan {
  const weekday = weekdayOf(iso)
  const exception = closureFor(iso, true)
  const notice = closureFor(iso, false)?.confirmed === false ? closureFor(iso, false) : undefined
  if (exception) {
    return { iso, weekday, hours: exception.hours ?? null, exception, notice, overridden: true }
  }
  return { iso, weekday, hours: weeklyHours[weekday], notice, overridden: false }
}

export type Slot = 'aube' | 'matin' | 'midi' | 'apres-midi' | 'gouter' | 'soir' | 'ferme'

export interface ShopState {
  iso: string
  minutes: number
  weekday: number
  plan: DayPlan
  open: boolean
  closesAt?: string
  opensAt?: string
  slot: Slot
  /** next time the shop opens (this day if still to come) */
  next?: { iso: string; weekday: number; open: string; isToday: boolean }
  /** square-bracket label, in the bakery’s own style */
  bracket?: string
  /** short text for the status pill */
  pill: string
  tone: 'open' | 'soon' | 'closed' | 'break'
}

function findNextOpening(fromIso: string, minutes: number): ShopState['next'] {
  for (let i = 0; i < 400; i++) {
    const iso = addDays(fromIso, i)
    const plan = getDayPlan(iso)
    if (!plan.hours) continue
    if (i === 0 && toMinutes(plan.hours.open) <= minutes) continue
    return { iso, weekday: plan.weekday, open: plan.hours.open, isToday: i === 0 }
  }
  return undefined
}

function slotFor(plan: DayPlan, minutes: number): Slot {
  if (!plan.hours) return 'ferme'
  const o = toMinutes(plan.hours.open)
  const c = toMinutes(plan.hours.close)
  if (minutes < o || minutes >= c) return 'ferme'
  if (minutes < 10 * 60) return 'aube'
  if (minutes < 11 * 60 + 30) return 'matin'
  if (minutes < 14 * 60) return 'midi'
  if (minutes < 16 * 60) return 'apres-midi'
  if (minutes < 18 * 60) return 'gouter'
  return 'soir'
}

export function getShopState(now: Date = new Date()): ShopState {
  const { iso, minutes } = parisNow(now)
  return getShopStateAt(iso, minutes)
}

/** Same logic for any date and time (used by the demo preview). */
export function getShopStateAt(iso: string, minutes: number): ShopState {
  const plan = getDayPlan(iso)
  const slot = slotFor(plan, minutes)
  const open = slot !== 'ferme'
  const next = open ? undefined : findNextOpening(iso, minutes)
  const base = { iso, minutes, weekday: plan.weekday, plan, open, slot, next }

  if (open && plan.hours) {
    const left = toMinutes(plan.hours.close) - minutes
    const closesAt = fmtTime(plan.hours.close)
    const bracket = plan.exception ? `[${plan.exception.label}]` : undefined
    if (left <= 45) {
      return { ...base, closesAt, bracket, pill: `${bracket ? bracket + ' ' : ''}Ouvert, ferme à ${closesAt}`, tone: 'soon' }
    }
    return { ...base, closesAt, bracket, pill: `${bracket ? bracket + ' ' : ''}Ouvert jusqu’à ${closesAt}`, tone: 'open' }
  }

  const nextText = next
    ? next.isToday
      ? `ouvre à ${fmtTime(next.open)}`
      : `ouvre ${next.iso === addDays(iso, 1) ? 'demain' : dayNames[next.weekday] + ' ' + formatShortDate(next.iso)} à ${fmtTime(next.open)}`
    : ''

  // exception-first wording
  if (plan.exception?.type === 'conges') {
    const c = plan.exception
    const back = next ? `${dayNames[next.weekday]} ${formatShortDate(next.iso)} à ${fmtTime(next.open)}` : ''
    return { ...base, bracket: `[${c.label}]`, pill: `[${c.label}] On revient le ${back}`, tone: 'break' }
  }
  if (plan.exception && !plan.hours) {
    return { ...base, bracket: `[${plan.exception.label}]`, pill: `[${plan.exception.label}] Fermé, ${nextText}`, tone: 'closed' }
  }
  if (!plan.hours && plan.weekday === 3) {
    return { ...base, bracket: '[Fermé le mercredi]', pill: `[Fermé le mercredi] On se retrouve ${next ? (next.iso === addDays(iso, 1) ? 'demain' : dayNames[next.weekday]) + ' à ' + fmtTime(next.open) : ''}`, tone: 'closed' }
  }
  if (plan.hours && minutes < toMinutes(plan.hours.open)) {
    return { ...base, pill: `Fermé, ouvre à ${fmtTime(plan.hours.open)}`, tone: 'closed' }
  }
  return { ...base, pill: `Fermé, ${nextText}`, tone: 'closed' }
}

/** Opening hours of the next 7 days for the "Fermetures" block. */
export function upcomingClosures(fromIso: string): Closure[] {
  return closures.filter((c) => (c.end ?? c.start) >= fromIso).sort((a, b) => a.start.localeCompare(b.start))
}
export function pastClosures(fromIso: string): Closure[] {
  return closures.filter((c) => c.confirmed && (c.end ?? c.start) < fromIso).sort((a, b) => b.start.localeCompare(a.start))
}

export const sources = {
  hours: 'https://www.instagram.com/reel/DcTCuM3Nr3J/',
}
