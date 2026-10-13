import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { pageHero, productDetail, prodCard, route } from '../core/ui.ts'
import { productById, products } from '../data/products.ts'

function current() {
  const id = new URLSearchParams(location.search).get('id') ?? ''
  return productById(id)
}
export function render(): string {
  const p = current()
  if (!p) {
    return `${pageHero({ crumb: [{ label: 'La carte', to: route('carte') }, { label: 'Fiche produit' }], kicker: 'Fiche produit', title: 'Quel produit ?', lede: 'Choisissez un produit dans la carte pour voir sa fiche.' })}
    <section class="section" style="padding-top:0"><div class="wrap"><a class="btn" href="${route('carte')}">Retour à la carte${icon('arrowRight')}</a></div></section>`
  }
  const same = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 3)
  document.title = `${p.name} | Le Fournil de Prosper`
  return `${pageHero({ crumb: [{ label: 'La carte', to: route('carte') }, { label: p.name }], kicker: 'Fiche produit', title: esc(p.name), lede: esc(p.description), art: p.illustration })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2 cols-2--wide-right">
    <div class="stack card" style="--stack:1rem">${productDetail(p)}
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" type="button" data-slip-add="${p.id}">${icon('plus')}Au bon de commande</button><a class="btn btn--ghost" href="${route('carte')}">Retour à la carte</a></div></div>
    <div><h2 class="h3" style="margin-bottom:16px">À côté</h2><div class="stack" style="--stack:1rem">${same.map(prodCard).join('')}</div></div>
  </div></section>`
}
