import { photo, photoFig } from '../data/photos.ts'
import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { pageHero, mockTag, realTag } from '../core/ui.ts'
import { shop, weeklyHours, dayNames, fmtTime, upcomingClosures, pastClosures, formatLongDate, formatShortDate } from '../data/shop.ts'
import { todayIso, pillHTML } from '../core/state.ts'
import { weekdayOf } from '../data/shop.ts'

export function render(): string {
  const today = todayIso()
  const wd = weekdayOf(today)
  const up = upcomingClosures(today)
  const past = pastClosures(today).slice(0, 5)
  const row = (c: (typeof up)[number]) => `<div class="closure ${c.confirmed ? '' : 'closure--future'}"><div class="closure__head"><span class="closure__date">${esc(formatShortDate(c.start))}${c.end ? ' au ' + esc(formatLongDate(c.end)) : ' ' + c.start.slice(0, 4)}</span><span class="bracket">${esc(c.label)}</span>${c.confirmed ? realTag('Constaté') : mockTag('À confirmer')}</div><span class="muted">${esc(c.detail)}</span></div>`
  return `${pageHero({ crumb: [{ label: 'Infos et accès' }], kicker: 'Passer nous voir', title: 'Horaires, accès, infos', lede: 'Ouvert du lundi au samedi (sauf le mercredi) de 6h45 à 19h15, le dimanche de 7h30 à 13h.', extra: `<div style="margin-top:20px">${pillHTML()}</div>` })}
  <div class="wrap" style="margin-bottom:clamp(28px,4vw,48px)">${photoFig(photo('vitrine-pains'), 'photo-slim')}</div>
  <section class="section" style="padding-top:0"><div class="wrap cols-2">
    <div><h2 class="h2" data-split style="margin-bottom:18px">Les horaires</h2>
      <table class="hours"><caption class="sr-only">Horaires d’ouverture de la semaine</caption><tbody>${[1, 2, 3, 4, 5, 6, 0].map((d) => { const h = weeklyHours[d]; return `<tr class="${d === wd ? 'is-today' : ''}"><th scope="row">${dayNames[d]}</th><td class="${h ? 'tnum' : 'closed'}">${h ? `${fmtTime(h.open)} à ${fmtTime(h.close)}` : 'Fermé'}</td></tr>` }).join('')}</tbody></table></div>
    <div><h2 class="h2" style="margin-bottom:18px">Fermetures et jours fériés</h2><div class="stack" style="--stack:10px">${up.map(row).join('')}</div>
      <h3 class="label" style="margin:24px 0 10px">Déjà vus</h3><div class="stack" style="--stack:10px">${past.map(row).join('')}</div></div></div></section>
  <section class="section section--band"><div class="wrap cols-2">
    <div><h2 class="h2" data-split>Adresse et contact</h2>
      <ul class="ticklist" style="margin-top:20px"><li>${icon('pin')}<span>${shop.street}<br>${shop.postalCode} ${shop.city}</span></li><li>${icon('phone')}<a href="tel:${shop.phoneTel}">${shop.phone}</a></li><li>${icon('envelope')}<a href="mailto:${shop.email}">${shop.email}</a></li><li>${icon('instagram')}<a href="${shop.instagram}" rel="noopener" target="_blank">${shop.instagramHandle}</a></li><li>${icon('facebook')}<a href="${shop.facebook}" rel="noopener" target="_blank">Facebook</a></li></ul>
      <p style="margin-top:20px"><a class="btn btn--store" href="${shop.mapsUrl}" rel="noopener" target="_blank">Ouvrir le plan${icon('arrowUpRight')}</a></p></div>
    <div>${photoFig(photo('corbeille-pains'), 'photo-tile photo-tile--43')}<h2 class="h3" style="margin-top:26px">Comment venir</h2><ul class="ticklist" style="margin-top:14px"><li>${icon('subway')}<span>${esc(shop.transport.metro)}</span></li><li>${icon('bus')}<span>${esc(shop.transport.bus)}</span></li></ul>
      <h2 class="h3" style="margin-top:26px">Accessibilité</h2><ul class="ticklist" style="margin-top:14px">${shop.accessibility.map((a) => `<li>${icon('wheelchair')}<span>${esc(a)}</span></li>`).join('')}</ul></div></div></section>
  <section class="section"><div class="wrap"><h2 class="h3" style="margin-bottom:14px">Moyens de paiement</h2><div class="badge-list">${shop.payments.map((p) => `<span class="badge">${icon('card')}${esc(p)}</span>`).join('')}</div></div></section>`
}
