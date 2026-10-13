import { esc } from '../core/dom.ts'
import { pageHero, route } from '../core/ui.ts'
import { pages } from '../data/pages.ts'
import { posts } from '../data/posts.ts'
import { href } from '../core/dom.ts'

export function render(): string {
  const main = pages.filter((p) => p.key !== 'article' && p.key !== 'produit')
  return `${pageHero({ crumb: [{ label: 'Plan du site' }], kicker: 'Toutes les pages', title: 'Plan du site' })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2"><div><h2 class="h3" style="margin-bottom:12px">Pages</h2><ul class="ticklist">${main.map((p) => `<li><span></span><a href="${route(p.key)}">${esc(p.label)}</a></li>`).join('')}</ul></div>
    <div><h2 class="h3" style="margin-bottom:12px">La gazette</h2><ul class="ticklist">${posts.map((p) => `<li><span></span><a href="${href('actus/' + p.slug + '.html')}">${esc(p.title)}</a></li>`).join('')}</ul></div></div></section>`
}
