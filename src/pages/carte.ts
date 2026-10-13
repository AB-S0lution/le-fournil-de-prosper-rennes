import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { gsap, Flip, motionOn } from '../core/motion.ts'
import { pageHero, prodCard, route, sectionHead } from '../core/ui.ts'
import { products, categoryLabels, tagLabels } from '../data/products.ts'
import type { Category, Tag } from '../data/products.ts'
import { orderOffers } from '../data/events.ts'

const cats = Object.keys(categoryLabels) as Category[]
const filterTags: Tag[] = ['fait-maison', 'vegetarien', 'dimanche', 'lundi', 'de-saison', 'signature']

export function render(): string {
  return `${pageHero({
    crumb: [{ label: 'La carte' }], kicker: 'La carte', title: 'Pains, viennoiseries, pâtisseries, crêpes',
    lede: `${products.length} produits au comptoir. Les prix marqués d’un « exemple » sont indicatifs ; seuls quelques prix sont ceux du fournil.`, art: 'croissant',
  })}
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="toolbar" data-toolbar>
      <div class="tabs" role="tablist" aria-label="Catégories" data-tabs><span class="tabs__ink" data-ink></span>
        <button class="tab" role="tab" aria-selected="true" data-cat="tout" type="button">Tout (${products.length})</button>
        ${cats.map((c) => `<button class="tab" role="tab" aria-selected="false" data-cat="${c}" type="button">${esc(categoryLabels[c])} (${products.filter((p) => p.category === c).length})</button>`).join('')}</div>
      <div class="chips" role="group" aria-label="Filtres">${filterTags.map((t) => `<button class="chip" type="button" aria-pressed="false" data-tag="${t}">${esc(tagLabels[t])}</button>`).join('')}</div>
      <label class="search"><span class="sr-only">Rechercher un produit</span>${icon('search')}<input type="search" placeholder="Chercher un produit, un ingrédient" data-q autocomplete="off"></label>
      <p class="muted" role="status" data-count style="margin:0"></p>
    </div>
    <div class="masonry" data-grid>${products.map(prodCard).join('')}</div>
    <div class="empty" data-empty hidden><p class="h3">Rien ne correspond.</p><p class="muted">Essayez un autre mot ou retirez un filtre.</p></div>
  </div></section>
  <section class="section section--band"><div class="wrap">${sectionHead('Sur commande', 'Pour les grandes occasions', `${orderOffers.length} formules, du gâteau d’anniversaire à la pièce de mariage.`)}
    <a class="btn btn--store" href="${route('commandes')}">Voir les commandes${icon('arrowRight')}</a></div></section>`
}

export function init(main: HTMLElement): void {
  let cat: string = 'tout'
  const tags = new Set<string>()
  let q = ''
  const grid = main.querySelector<HTMLElement>('[data-grid]')!
  const items = Array.from(grid.querySelectorAll<HTMLElement>('[data-prod]'))
  const count = main.querySelector<HTMLElement>('[data-count]')!
  const empty = main.querySelector<HTMLElement>('[data-empty]')!
  const ink = main.querySelector<HTMLElement>('[data-ink]')!
  const tabs = Array.from(main.querySelectorAll<HTMLButtonElement>('.tab'))
  const norm = (s: string): string => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  const byId = new Map(products.map((p) => [p.id, p]))
  const moveInk = (): void => {
    const t = tabs.find((b) => b.getAttribute('aria-selected') === 'true')!
    gsap.to(ink, { x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight, duration: motionOn() ? 0.45 : 0, ease: 'expo.out' })
  }
  const apply = (): void => {
    const state = motionOn() ? Flip.getState(items) : null
    let n = 0
    items.forEach((el) => {
      const p = byId.get(el.dataset.prod!)!
      const text = norm([p.name, p.description, p.ingredients.join(' ')].join(' '))
      const ok = (cat === 'tout' || p.category === cat) && [...tags].every((t) => p.tags.includes(t as Tag)) && (!q || text.includes(norm(q)))
      el.hidden = !ok
      if (ok) n++
    })
    count.textContent = `${n} produit${n > 1 ? 's' : ''}`
    empty.hidden = n > 0
    if (state) Flip.from(state, { duration: 0.55, ease: 'expo.out', absolute: false, scale: false, onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }), onLeave: (els) => gsap.set(els, { opacity: 0 }) })
  }
  tabs.forEach((b) => b.addEventListener('click', () => {
    cat = b.dataset.cat!
    tabs.forEach((x) => x.setAttribute('aria-selected', String(x === b)))
    moveInk(); apply()
  }))
  main.querySelectorAll<HTMLElement>('[data-tag]').forEach((b) => b.addEventListener('click', () => {
    const t = b.dataset.tag!
    if (tags.has(t)) tags.delete(t); else tags.add(t)
    b.setAttribute('aria-pressed', String(tags.has(t))); apply()
  }))
  main.querySelector<HTMLInputElement>('[data-q]')?.addEventListener('input', (e) => { q = (e.target as HTMLInputElement).value.trim(); apply() })
  const hash = new URLSearchParams(location.search).get('cat')
  if (hash) { const b = tabs.find((x) => x.dataset.cat === hash); b?.click() }
  count.textContent = `${products.length} produits`
  document.fonts.ready.then(moveInk)
  addEventListener('resize', moveInk)
}
