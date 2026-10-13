import { photo, photoFig } from '../data/photos.ts'
import { esc } from '../core/dom.ts'
import { pageHero, accordion } from '../core/ui.ts'
import { faq, faqGroups } from '../data/faq.ts'

export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Questions fréquentes' }], kicker: 'FAQ', title: 'Les questions qu’on nous pose', lede: `${faq.length} réponses, en six thèmes.`, art: 'cafe' })}
  <div class="wrap" style="margin-bottom:clamp(28px,4vw,48px)">${photoFig(photo('corbeille-pains'), 'photo-slim')}</div>
  <section class="section" style="padding-top:0"><div class="wrap">${faqGroups.map((g) => `<div class="cols-2 cols-2--wide-right" style="margin-bottom:clamp(30px,5vw,60px)"><h2 class="h2" data-split>${esc(g)}</h2>${accordion(faq.filter((f) => f.group === g).map((f) => ({ q: esc(f.q), a: esc(f.a) })), 0)}</div>`).join('')}</div></section>`
}
