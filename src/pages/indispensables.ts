import { icon } from '../core/icons.ts'
import { art } from '../core/art.ts'
import { pageHero, mockTag, realTag, route, shelfItem, sectionHead } from '../core/ui.ts'

const eps = [
  { n: 2, t: 'Les viennoiseries, #trusttheprocess', d: 'La formation, les matières premières ciblées, les apprentis. Le pain au chocolat, étape par étape.', ill: 'painchoc' },
  { n: 3, t: 'Le levain pur T150', d: 'Le pain au levain né d’un sondage client, d’abord le dimanche.', ill: 'levain' },
  { n: 4, t: 'Le flan', d: 'Le classique du goûter, et son cousin devenu Flankie.', ill: 'flan' },
]
export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Les indispensables' }], kicker: 'Une série du fournil', title: 'Les indispensables', lede: 'Une série de portraits de produits. Le numéro 1 est réel ; les suivants sont des brouillons d’exemple.', art: 'crepes' })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2">
    <div class="medal" style="max-width:420px" data-reveal>${art('crepes', 'Une pile de crêpes maison')}</div>
    <div class="stack" style="--stack:1.1rem"><p class="label">N°1 ${realTag('Épisode réel')}</p><h2 class="h2" data-split>Nos crêpes maison</h2>
      <p class="lede">Quand le fournil s’est installé à Cleunay, en 2021, les anciens propriétaires ont fait découvrir leurs crêpes, puis ont proposé la recette.</p>
      <p>Les crêpes sont devenues « l’âme de la boulangerie ». On aurait pu ajouter « crêperie » sur la façade, dit le fournil en plaisantant. Les clients les décrivent épaisses et pas chères.</p>
      <blockquote class="quote">La recette qui a fait chavirer le cœur de tant de cleunaysiens depuis bien des années.</blockquote>
      <p class="muted">Citation du fournil (Instagram).</p>
      <div class="hero__cta"><a class="btn" href="${route('carte')}?cat=crepes">Voir les crêpes${icon('arrowRight')}</a></div></div>
  </div></section>
  <section class="section section--band"><div class="wrap">${sectionHead('Offre', '5 crêpes + 1 pot = 10 €', 'L’offre annoncée avec les confitures de la Maison Lucie. Les parfums en stock ne sont pas confirmés.')}
    <div class="grid-auto" style="max-width:640px">${['crepe-maison', 'confiture-fraise'].map(shelfItem).join('')}</div></div></section>
  <section class="section"><div class="wrap">${sectionHead('Les prochains numéros', 'Brouillons d’exemple', 'Pour montrer comment la série pourrait continuer.')}
    <div class="grid-auto">${eps.map((e) => `<article class="card" data-reveal><p class="label">N°${e.n} ${mockTag('Brouillon')}</p><div style="background:var(--band);border-radius:10px;padding:10px 26%;margin:12px 0">${art(e.ill)}</div><h3 class="h3">${e.t}</h3><p class="muted" style="margin:8px 0 0">${e.d}</p></article>`).join('')}</div></div></section>`
}
