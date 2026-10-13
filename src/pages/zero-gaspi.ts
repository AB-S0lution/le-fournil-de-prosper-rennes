import { photo, photoFig } from '../data/photos.ts'
import { cardMedia } from '../core/ui.ts'
import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { art } from '../core/art.ts'
import { pageHero, sectionHead, mockTag, realTag, shelfItem, route } from '../core/ui.ts'

const tipPhotos = ['baguette', 'tranches-levain', 'cake-tranche', 'pains-cereales']
const tips = [
  ['Le pain rassis, on le sauve', 'Passez la baguette sous l’eau, puis 8 minutes au four chaud : elle redevient croustillante.'],
  ['Au congélateur, en tranches', 'Tranchez avant de congeler et sortez seulement ce qu’il faut.'],
  ['Le pain perdu du dimanche', 'Un bon moyen de finir une brioche de la veille.'],
  ['La chapelure maison', 'Mixez le pain sec et gardez-le dans un bocal.'],
]
export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Zéro gaspi' }], kicker: 'Produits de saison', title: 'Zéro gaspi, sans en faire un slogan', lede: 'Le fournil le dit lui-même : fait maison, zéro gaspi, produits de saison. Voici ce que cela veut dire au comptoir.', art: 'loaf' })}
  <section class="section" style="padding-top:0"><div class="wrap grid-auto">
    <article class="card" data-reveal>${icon('recycle')}<h2 class="h3" style="margin:10px 0">Les paniers surprise</h2><p>Le fournil propose des paniers anti-gaspi via Too Good To Go : un assortiment de boulangerie, pâtisserie, viennoiseries et traiteur. Les prix ne sont pas affichés ici.</p>${realTag('Annoncé par le fournil')}</article>
    <article class="card" data-reveal>${icon('leaf')}<h2 class="h3" style="margin:10px 0">Les produits de saison</h2><p>Les fruits changent avec les mois : pomme, poire et noisette en octobre, citron en été.</p><a class="link-arrow" href="${route('saisons')}">Voir les saisons${icon('arrowRight')}</a></article>
    <article class="card" data-reveal>${icon('basket')}<h2 class="h3" style="margin:10px 0">Point relais paniers</h2><p>Le fournil est un point relais pour des paniers de fruits et légumes. Les jours de retrait sont à demander au comptoir.</p>${mockTag('Jours à confirmer')}</article>
  </div></section>
  <section class="section section--band"><div class="wrap">${sectionHead('Astuces', 'Garder son pain, du lundi au dimanche', 'Conseils d’exemple, rédigés pour la démonstration.')}
    <div class="grid-auto">${tips.map(([t, d], i) => `<div class="card" data-reveal style="color:var(--ink)">${cardMedia(photo(tipPhotos[i]))}<h3 class="h3">${esc(t)}</h3><p class="muted" style="margin:8px 0 0">${esc(d)}</p></div>`).join('')}</div></div></section>
  <section class="section"><div class="wrap">${sectionHead('Au comptoir', 'Pour finir la journée')}<div class="grid-auto" style="max-width:700px">${['baguette-tradition', 'pain-campagne'].map(shelfItem).join('')}</div>
    <div class="cols-2" style="margin-top:28px;align-items:center"><div style="max-width:200px">${art('loaf')}</div>${photoFig(photo('corbeille-pains'), 'photo-tile photo-tile--43')}</div></div></section>`
}
