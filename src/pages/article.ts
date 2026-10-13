import { esc, href } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { art } from '../core/art.ts'
import { pageHero, route, mockTag, postPhoto } from '../core/ui.ts'
import { photoImg } from '../data/photos.ts'
import { postBySlug } from '../data/posts.ts'
import { formatLongDate } from '../data/shop.ts'

export function render(slug?: string): string {
  const p = slug ? postBySlug(slug) : undefined
  if (!p) return `${pageHero({ crumb: [{ label: 'La gazette', to: route('actus') }], kicker: 'La gazette', title: 'Article introuvable' })}`
  const rel = p.related.map((s) => postBySlug(s)).filter(Boolean)
  return `${pageHero({ crumb: [{ label: 'La gazette', to: route('actus') }, { label: p.title }], kicker: `${p.tag} · ${formatLongDate(p.date)}`, title: esc(p.title), lede: esc(p.excerpt), art: p.illustration })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2 cols-2--wide-left"><article class="article stack" style="--stack:1rem"><figure class="photo-band photo-band--cover" data-reveal="clip">${photoImg(postPhoto(p), 'photo', true)}<figcaption class="photo-cap">Photo d’illustration</figcaption></figure>${p.body.map((b) => `<p>${esc(b)}</p>`).join('')}
    ${p.mock ? `<p>${mockTag('Article d’exemple')}</p>` : ''}${p.source ? `<p class="muted" style="font-size:.9rem">Source : <a href="${esc(p.source)}" rel="noopener" target="_blank">publication du fournil</a></p>` : ''}
    <a class="link-arrow" href="${route('actus')}">${icon('arrowLeft')}Toute la gazette</a></article>
    <aside><h2 class="h3" style="margin-bottom:14px">À lire aussi</h2><div class="stack" style="--stack:14px">${rel.map((r) => `<a class="post-card" href="${href('actus/' + r!.slug + '.html')}"><div class="post-card__art post-card__art--photo">${photoImg(postPhoto(r!), 'photo')}<span class="post-card__badge" aria-hidden="true">${art(r!.illustration)}</span></div><div class="post-card__body"><h3 class="post-card__title">${esc(r!.title)}</h3></div></a>`).join('') || '<p class="muted">Pas d’autre article pour l’instant.</p>'}</div></aside></div></section>`
}
