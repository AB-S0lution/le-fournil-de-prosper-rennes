import { photoFig, photoFor } from '../data/photos.ts'
import { productById } from '../data/products.ts'
const monthPhoto = (id?: string): string => { const p = id ? productById(id) : undefined; return p ? photoFig(photoFor(p.illustration), 'photo-tile photo-tile--month', '') : '' }
import { esc } from '../core/dom.ts'
import { art } from '../core/art.ts'
import { pageHero, eventsOfMonth, shelfItem } from '../core/ui.ts'
import { seasons } from '../data/seasons.ts'
import { todayIso } from '../core/state.ts'
import { mockTag } from '../core/ui.ts'

export function render(): string {
  const cur = Number(todayIso().slice(5, 7))
  return `${pageHero({ crumb: [{ label: 'Les saisons' }], kicker: 'Le calendrier du fournil', title: 'Douze mois, douze feuillets', lede: 'Galettes en janvier, chocolats à Pâques, anniversaire le 1er juillet, rentrée, journée dégustation, carte des fêtes. Le mois en cours est marqué.', art: 'galette' })}
  <section class="section" style="padding-top:0"><div class="wrap">${seasons.map((s) => `<article class="month" id="m${s.month}" data-reveal aria-labelledby="mt${s.month}">
    <div><p class="label">${String(s.month).padStart(2, '0')} ${s.month === cur ? '<span class="real-tag">Ce mois-ci</span>' : ''}</p><h2 class="month__name" id="mt${s.month}">${esc(s.name)}</h2>${s.real ? '' : mockTag('Idées d’exemple')}${monthPhoto(s.productIds[0])}</div>
    <div><p class="lede" style="margin-top:0">${esc(s.tagline)}</p>${eventsOfMonth(s.month)}
      <div class="grid-auto" style="margin-top:18px;grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">${s.productIds.slice(0, 4).map(shelfItem).join('')}</div></div></article>`).join('')}</div></section>
  <div class="wrap" style="display:none">${art('loaf')}</div>`
}
