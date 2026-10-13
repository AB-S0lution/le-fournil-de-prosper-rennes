import { esc } from '../core/dom.ts'
import { art } from '../core/art.ts'
import { pageHero, mockTag } from '../core/ui.ts'
import { posts, postTags } from '../data/posts.ts'
import { href } from '../core/dom.ts'
import { formatLongDate } from '../data/shop.ts'
import { photos, photoImg } from '../data/photos.ts'

const card = (p: (typeof posts)[number], i: number): string => `<a class="post-card" href="${href('actus/' + p.slug + '.html')}" data-post data-tag="${p.tag}" data-reveal>
  <div class="post-card__art post-card__art--photo">${photoImg(photos[(i * 7 + 3) % photos.length], 'photo')}<span class="photo-cap photo-cap--over">Photo d’illustration</span><span class="post-card__badge" aria-hidden="true">${art(p.illustration)}</span></div><div class="post-card__body"><div class="post-card__meta"><span class="tag">${esc(p.tag)}</span><time datetime="${p.date}">${esc(formatLongDate(p.date))}</time>${p.mock ? mockTag('Exemple') : ''}</div>
  <h2 class="post-card__title">${esc(p.title)}</h2><p class="muted" style="margin:0;font-size:.95rem">${esc(p.excerpt)}</p></div></a>`
export function render(): string {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))
  return `${pageHero({ crumb: [{ label: 'La gazette' }], kicker: 'La gazette du fournil', title: 'Nouveautés, Flankies, coulisses', lede: `${posts.length} articles, inspirés des publications du fournil ou rédigés pour la démonstration (marqués « Exemple »).`, art: 'brioche' })}
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="chips" role="group" aria-label="Filtrer par thème" style="margin-bottom:26px"><button class="chip" type="button" aria-pressed="true" data-f="tout">Tout</button>${postTags.map((t) => `<button class="chip" type="button" aria-pressed="false" data-f="${t}">${esc(t)}</button>`).join('')}</div>
    <div class="grid-auto" data-posts>${sorted.map(card).join('')}</div></div></section>`
}
export function init(main: HTMLElement): void {
  const chips = Array.from(main.querySelectorAll<HTMLElement>('[data-f]'))
  const cards = Array.from(main.querySelectorAll<HTMLElement>('[data-post]'))
  chips.forEach((c) => c.addEventListener('click', () => {
    chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)))
    cards.forEach((k) => { k.hidden = c.dataset.f !== 'tout' && k.dataset.tag !== c.dataset.f })
  }))
}
