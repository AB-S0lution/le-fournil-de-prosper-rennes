import { photo, photoFig } from '../data/photos.ts'
import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { pageHero, sectionHead, shelfItem, mockTag, realTag, accordion, route } from '../core/ui.ts'
import { shop } from '../data/shop.ts'
import { closures } from '../data/closures.ts'
import { formatLongDate } from '../data/shop.ts'

const ids = ['buches-noel', 'buche-chocolat-praline', 'plateau-mignardises', 'plateau-aperitif', 'sapin-feuillete', 'pain-surprise', 'brioches-saint-nicolas']
export function render(): string {
  const past = closures.filter((c) => c.real && c.confirmed && c.start.includes('-12-') || c.id.includes('2026-01-01') && c.confirmed)
  const next = closures.filter((c) => !c.confirmed && c.start.includes('-12-'))
  return `${pageHero({ crumb: [{ label: 'La carte des fêtes' }], kicker: 'Décembre', title: 'La carte des fêtes', lede: 'Bûches, plateaux de mignardises, Sapin Feuilleté, pain surprise. Réservation en boutique ; les commandes prépayées ont une file à part.', art: 'buche' })}
  <section class="section" style="padding-top:0"><div class="wrap">${sectionHead('La carte', 'Pour les tables de fête', 'Les noms des quatre bûches ne sont pas encore publiés : le fournil les annonce chaque année.')}
    ${photoFig(photo('gateau-chocolat'), 'photo-slim')}<div class="grid-auto" style="margin-top:clamp(24px,3vw,40px)">${ids.map(shelfItem).join('')}</div></div></section>
  <section class="section section--band"><div class="wrap cols-2">
    <div><p class="label">Réservations</p><h2 class="h2" data-split style="margin:12px 0">Les dates de l’an dernier</h2><p class="lede">Repères de décembre 2025, à confirmer pour cette année.</p>${photoFig(photo('gateau-mures'), 'photo-tile photo-tile--43')}</div>
    <ul class="ticklist"><li>${icon('calendar')}<span>Jusqu’au 20 décembre pour le 24 (en boutique).</span></li><li>${icon('calendar')}<span>Jusqu’au 26 décembre pour le 31.</span></li><li>${icon('ticket')}<span>Les commandes prépayées se retirent à une file séparée.</span></li><li>${icon('cookie')}<span>Une journée dégustation a lieu fin novembre : bûches, pains spéciaux et plateaux à goûter.</span></li></ul></div></section>
  <section class="section"><div class="wrap">${sectionHead('Horaires de fin d’année', 'Ouvert le 24 et le 31, fermé le 25 et le 1er')}
    <div class="grid-auto">${past.map((c) => `<div class="closure"><div class="closure__head"><span class="closure__date">${esc(formatLongDate(c.start))}</span>${realTag('Constaté')}</div><span>${esc(c.label)} : ${c.hours ? `${c.hours.open.replace(':', 'h')} à ${c.hours.close.replace(':', 'h')}` : 'fermé'}</span></div>`).join('')}
      ${next.map((c) => `<div class="closure closure--future"><div class="closure__head"><span class="closure__date">${esc(formatLongDate(c.start))}</span>${mockTag('À confirmer')}</div><span>${esc(c.label)}. Horaires à confirmer.</span></div>`).join('')}</div></div></section>
  <section class="section section--surface"><div class="wrap cols-2 cols-2--wide-right"><div><h2 class="h2">Précommander</h2></div>
    <div><p>Le fournil prend les commandes en boutique, par téléphone ou par e-mail.</p><p><a class="btn" href="mailto:${shop.email}?subject=${encodeURIComponent('Carte des fêtes')}">Écrire au fournil${icon('envelope')}</a> <a class="btn btn--ghost" href="${route('commandes')}">Choisir une date</a></p>
    ${accordion([{ q: 'Les bûches ont-elles des noms ?', a: 'Elles en ont, mais ils ne sont pas encore connus pour cette saison. Rien n’est inventé ici.' }, { q: 'Et le pain surprise ?', a: 'Un pain garni pour les fêtes. Sa garniture est à confirmer avec le fournil.' }])}</div></div></section>`
}
