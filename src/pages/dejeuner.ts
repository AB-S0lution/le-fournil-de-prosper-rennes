import { photo, photoFig } from '../data/photos.ts'
import { cardMedia } from '../core/ui.ts'
const formulePhotos: Record<string, string> = { classique: 'sandwich', quiche: 'quiche', vegetarienne: 'sandwich-legumes', lundi: 'pizza-lundi', 'petit-dej': 'croissants-tas' }
import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'

import { pageHero, sectionHead, prodCard, mockTag, realTag, route, accordion } from '../core/ui.ts'
import { formules } from '../data/formules.ts'
import { pizzas, pizzaRotation } from '../data/pizzas.ts'
import { productsByCategory, productById } from '../data/products.ts'
import { priceFmt } from '../core/dom.ts'
import { formatLongDate } from '../data/shop.ts'

export function render(): string {
  const snack = productsByCategory('snacking').filter((p) => p.illustration !== 'pizza')
  return `${pageHero({ crumb: [{ label: 'Le midi et la pizza du lundi' }], kicker: 'Le coin snacking', title: 'Le midi, et la pizza du lundi', lede: 'Le coin snacking est fourni tous les midis de la semaine. Sandwichs (dont végétariens), quiches, salades, formules. Le lundi : pizza, préparée sur place.', art: 'sandwich' })}
  <section class="section" style="padding-top:0"><div class="wrap">${sectionHead('Les formules', 'Une formule, et c’est réglé', 'Compositions et prix d’exemple pour la démonstration.')}
    <div class="grid-auto">${formules.map((f) => `<article class="card" data-reveal>${cardMedia(photo(formulePhotos[f.id] ?? 'sandwich'))}<div style="display:flex;justify-content:space-between;gap:10px;align-items:baseline"><h3 class="h3">${esc(f.name)}</h3><span class="price tnum">${priceFmt(f.priceEUR)}</span></div>
      <ul class="ticklist" style="margin-top:14px">${f.includes.map((i) => `<li>${icon('check')}<span>${esc(i)}</span></li>`).join('')}</ul>
      <p class="muted" style="margin:14px 0 0">${esc(f.note)} ${f.veggie ? ' · végétarien' : ''}</p>${mockTag('Exemple')}</article>`).join('')}</div></div></section>

  <section class="section section--band" id="pizza"><div class="wrap">
    ${sectionHead('Pizza du lundi', 'Chaque lundi, deux pizzas', 'La Méditerranéenne et L’Américaine, préparées sur place, avec du poulet et des poivrons français pour la seconde.')}
    <div class="grid-auto">${pizzas.map((p) => `<article class="card pizza" data-reveal style="color:var(--ink)">${cardMedia(photo(p.veggie ? 'pizza-lundi' : 'pizza-planche'), 'pizza')}<h3 class="h3">${esc(p.name)}</h3>
      <p class="muted" style="margin:0">${esc(p.ingredients.join(', '))}</p><div>${p.real ? realTag('Pizza du fournil') : mockTag('Exemple')} ${p.veggie ? '<span class="tag tag--veg">végétarien</span>' : ''}</div></article>`).join('')}</div>
    <h3 class="h3" style="margin:40px 0 14px">Les prochains lundis</h3>
    <div class="rotation">${pizzaRotation.slice(0, 6).map((r) => `<div class="rotation__row"><span class="rotation__date">${esc(formatLongDate(r.iso))}</span><span>${r.pizzaIds.map((id) => esc(pizzas.find((p) => p.id === id)?.name ?? id)).join(' et ')} ${r.real ? '' : mockTag('Exemple')}</span></div>`).join('')}</div>
    <p class="note-demo" style="margin-top:14px;color:var(--band-ink)">Format et prix des pizzas : à confirmer avec le fournil.</p>
  </div></section>

  <section class="section"><div class="wrap">${sectionHead('Au comptoir', 'Sandwichs, quiches, salades')}
    <div class="masonry">${snack.map(prodCard).join('')}</div></div></section>

  <section class="section section--surface"><div class="wrap cols-2 cols-2--wide-right">
    <div>${photoFig(photo('croissant-farine'), 'photo-tile photo-tile--43')}<p class="label" style="margin-top:22px">Café à emporter</p><h2 class="h2" style="margin:12px 0">Le café de la route</h2><p class="lede">Café et boissons à emporter, pour le matin ou la sortie d’école.</p><p>${productById('cafe-emporter') ? `<a class="link-arrow" href="${route('carte')}">Voir la carte${icon('arrowRight')}</a>` : ''}</p></div>
    ${accordion([{ q: 'Y a-t-il des options végétariennes ?', a: 'Oui, des sandwichs végétariens depuis plusieurs années, et la pizza Méditerranéenne.' }, { q: 'Peut-on réserver sa formule ?', a: 'Au comptoir, sans réservation. Pour un groupe, appelez le fournil.' }, { q: 'Accepte-t-on les titres-restaurant ?', a: 'Oui, ils figurent parmi les moyens de paiement du fournil.' }], 0)}
  </div></section>`
}
