import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { art } from '../core/art.ts'
import { gsap, motionOn, ScrollTrigger } from '../core/motion.ts'
import { pageHero, sectionHead, realTag, mockTag, route, tickets } from '../core/ui.ts'
import { team } from '../data/team.ts'
import { stats } from '../data/stats.ts'
import { photo, photoImg } from '../data/photos.ts'

const rows = [
  { y: '1987', t: 'Boulangerie Leduc', d: 'Le 15 avril 1987, René Leduc ouvre « Boulangerie Leduc » au 42 rue Champion de Cicé. Le numéro de téléphone d’aujourd’hui est déjà le sien.', main: false },
  { y: '30 juin 2021', t: 'Le fonds change de mains', d: 'Un acte notarié acte la reprise de la boulangerie par la SARL du Fournil de Prosper.', main: false },
  { y: '1er juillet 2021', t: 'Le Fournil de Prosper ouvre', d: 'Prosper, gérant, boulanger pendant 14 ans avant de se lancer, rouvre le même comptoir sous son nom.', main: true },
  { y: '2021', t: 'La recette des crêpes', d: 'Les anciens propriétaires font découvrir leurs crêpes, puis proposent la recette. Elles deviennent « l’âme de la boulangerie ».', main: true },
  { y: '2022', t: 'Un an', d: 'Premier anniversaire, avec un sondage et un tirage au sort.', main: false },
  { y: '2024', t: 'Trois ans', d: 'Le 1er juillet, trois années d’ouverture.', main: false },
  { y: '2026', t: 'Cinq ans, et le levain', d: 'Cinq ans en juillet. En septembre, un pain au levain pur T150, né d’un sondage client, d’abord le dimanche.', main: true },
]
export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Notre histoire' }], kicker: 'Une boulangerie sur ce coin depuis 1987', title: 'De Leduc à Prosper, le même coin de rue', lede: 'Une reprise, pas une création : le comptoir, le numéro de téléphone et une recette de crêpes ont changé de mains en 2021.', art: 'loaf' })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2 cols-2--wide-left">
    <div class="ledger" data-ledger>${rows.map((r) => `<div class="ledger__row ${r.main ? 'ledger__row--main' : ''}" data-reveal><div class="ledger__year tnum">${esc(r.y)}</div><h2 class="h3">${esc(r.t)}</h2><p class="ledger__text">${esc(r.d)}</p></div>`).join('')}</div>
    <aside class="stack" style="--stack:1.2rem"><div class="saviez" data-reveal><p class="label">Le saviez-vous ?</p><p style="margin:10px 0 0">Prosper, le gérant, a été boulanger pendant 14 ans avant de se lancer à son tour.</p></div>
      <figure class="quote" data-reveal style="margin:0"><blockquote style="margin:0">Quand on fait maison et qu’on veut respecter le client, on doit faire des choix.</blockquote><p class="sign-off">Prosper</p><figcaption class="muted" style="font-size:.85rem">Extrait d’un message du fournil, Instagram, septembre 2026.</figcaption></figure></aside>
  </div></section>
  <section class="section" style="padding-top:0" aria-label="Photos d’ambiance"><div class="wrap photo-trio">${['petrissage', 'pain-campagne', 'crepes'].map((s) => `<figure class="photo-tile" data-reveal="clip">${photoImg(photo(s))}<figcaption class="photo-cap">Photo d’illustration</figcaption></figure>`).join('')}</div></section>
  <section class="section section--band"><div class="wrap">${sectionHead('Repères', 'Le fournil en chiffres vrais')}
    <div class="grid-auto stats-grid">${stats.map((s) => `<div class="card" style="color:var(--ink)" data-reveal><div class="score__n tnum" style="font-size:clamp(2rem,1.6rem + 2vw,3.2rem)">${esc(s.value)}</div><p class="muted" style="margin:8px 0 0">${esc(s.label)}</p></div>`).join('')}</div></div></section>
  <section class="section"><div class="wrap">${sectionHead('L’équipe', 'Des métiers, pas des portraits', 'Le seul nom public est celui de Prosper. Les autres rôles sont décrits sans nom.')}
    <div class="grid-auto">${team.map((t) => `<article class="card" data-reveal><div style="max-width:120px">${art(t.id.includes('patissier') ? 'eclair' : t.id === 'vendeuses' ? 'cafe' : 'baguette')}</div><h3 class="h3" style="margin:10px 0 6px">${esc(t.role)}</h3><p class="muted" style="margin:0 0 10px">${esc(t.text)}</p>${t.real ? realTag('Annoncé') : mockTag('Exemple')}</article>`).join('')}</div></div></section>
  <section class="section section--surface"><div class="wrap">${sectionHead('Ce qu’on en dit', 'Les anciens clients sont restés')}${tickets(4, 0)}
    <p style="margin-top:28px"><a class="link-arrow" href="${route('anniversaire')}">Les anniversaires du 1er juillet${icon('arrowRight')}</a></p></div></section>`
}
export function init(main: HTMLElement): void {
  const l = main.querySelector<HTMLElement>('[data-ledger]')
  if (l && motionOn()) gsap.fromTo(l, { scaleY: 0.01 }, { scaleY: 1, ease: 'none', transformOrigin: 'top', scrollTrigger: { trigger: l, start: 'top 75%', end: 'bottom 60%', scrub: true } })
  void ScrollTrigger
}
