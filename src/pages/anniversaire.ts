import { photo, photoFig } from '../data/photos.ts'
import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { pageHero, sectionHead, realTag, route } from '../core/ui.ts'
import { gsap, motionOn, ScrollTrigger } from '../core/motion.ts'

const years = [
  { y: '2021', t: 'Le 1er juillet, on ouvre', d: 'Le Fournil de Prosper ouvre ses portes, au 42 rue Champion de Cicé, après la reprise de la boulangerie.', real: true },
  { y: '2022', t: 'Un an, un sondage et 10 €', d: 'Le fournil fête son premier anniversaire avec un sondage clients et le tirage d’un bon d’achat de 10 € le dimanche 3 juillet.', real: true },
  { y: '2024', t: 'Trois ans d’ouverture', d: '« Le 1er juillet, le Fournil de Prosper fêtera ses 3 années d’ouverture. »', real: true },
  { y: '2025', t: 'Le saviez-vous ?', d: 'Prosper, le gérant, a été boulanger pendant 14 ans avant de se lancer. 4 ans plus tard, il sourit et continue l’aventure.', real: true },
  { y: '2026', t: 'Cinq ans, et un an de viennoiseries', d: 'Le 1er juillet, le fournil fête ses 5 années. Un des lots : « 1 an de viennoiseries le dimanche », un pain au chocolat et un croissant chaque dimanche d’ouverture, du 5 juillet 2026 au 1er juillet 2027.', real: true },
]
export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Les anniversaires' }], kicker: 'Chaque 1er juillet', title: 'L’anniversaire du fournil', lede: 'Depuis 2021, le 1er juillet est la date anniversaire officielle. On la fête avec les clients.', art: 'number' })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2 cols-2--wide-left">
    <div class="ledger" data-ledger>${years.map((r) => `<div class="ledger__row" data-reveal><div class="ledger__year tnum">${r.y}</div><h2 class="h3">${esc(r.t)}</h2><p class="ledger__text">${esc(r.d)}</p>${realTag('Annoncé par le fournil')}</div>`).join('')}</div>
    <aside class="saviez" data-reveal><p class="label">Comment marche l’urne</p><ol class="ticklist" style="list-style:none;padding:0;margin-top:12px"><li>${icon('bag')}<span>On achète son produit préféré.</span></li><li>${icon('receipt')}<span>On reçoit un papier.</span></li><li>${icon('ticket')}<span>On le glisse dans l’urne en boutique.</span></li><li>${icon('sparkle')}<span>Tirage le jour anniversaire.</span></li></ol></aside>
  </div></section>
  <section class="section" style="padding-top:0" aria-label="Photos d’ambiance"><div class="wrap photo-trio">${['gateau-anniversaire', 'croissants-tas', 'plateau-viennoiseries'].map((s) => photoFig(photo(s), 'photo-tile')).join('')}</div></section>
  <section class="section section--band"><div class="wrap">${sectionHead('La suite', 'Le prochain 1er juillet', 'La date reste la même chaque année.')}<a class="btn btn--store" href="${route('histoire')}">Notre histoire${icon('arrowRight')}</a></div></section>`
}
export function init(main: HTMLElement): void {
  const l = main.querySelector<HTMLElement>('[data-ledger]')
  if (l && motionOn()) gsap.fromTo(l, { '--p': 0 }, { '--p': 1, scrollTrigger: { trigger: l, start: 'top 80%', end: 'bottom 60%', scrub: true } })
  void ScrollTrigger
}
