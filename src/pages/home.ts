import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { gsap, motionOn, splitReveal, mm } from '../core/motion.ts'
import { nowState, pillHTML, todayIso } from '../core/state.ts'
import { route, shelfItem, weekStrip, dayPan, bindPan, flankieStage, bindFlankie, seasonRail, tickets, sectionHead, ctaLink, accordion, mockTag, cardMedia } from '../core/ui.ts'
import { slotCopy, mondayPizza, sundayCopy, congesCopy, wednesdayCopy } from '../data/dayMoments.ts'
import type { SlotCopy } from '../data/dayMoments.ts'
import { currentFlankie } from '../data/flankies.ts'
import { shop, upcomingClosures, formatShortDate, weeklyHours, dayNames, fmtTime } from '../data/shop.ts'
import { stats } from '../data/stats.ts'
import { faq } from '../data/faq.ts'
import { orderOffers } from '../data/events.ts'
import { art } from '../core/art.ts'
import { photo, photoImg, photoFor } from '../data/photos.ts'

function copyFor(): SlotCopy {
  const s = nowState()
  if (s.plan.exception?.type === 'conges') return congesCopy
  if (s.weekday === 3 && !s.plan.hours) return wednesdayCopy
  if (s.weekday === 1 && s.open) return mondayPizza
  if (s.weekday === 0 && s.open) return sundayCopy
  return slotCopy[s.slot]
}

export function render(): string {
  const s = nowState()
  const c = copyFor()
  const notices = upcomingClosures(todayIso()).slice(0, 2)
  const faqTop = faq.slice(0, 5).map((f) => ({ q: esc(f.q), a: esc(f.a) }))
  return `
  <section class="hero" aria-labelledby="h-title"><div class="wrap hero__grid">
    <div>
      <div class="hero__eyebrow" data-hero="eyebrow">${pillHTML(s)}<span class="label">Cleunay, Rennes</span></div>
      <h1 class="display" id="h-title" data-split="hero">${esc(c.headline)}</h1>
      <p class="hero__sub" data-hero="sub">${esc(c.sub)}</p>
      <div class="hero__cta" data-hero="cta"><a class="btn" href="${route('carte')}" data-magnet>Voir la carte${icon('arrowRight')}</a><a class="btn btn--ghost" href="${route('infos')}">Horaires et accès</a>
        <span class="stamp" aria-hidden="true"><span>Ouvert<strong>6/7</strong>jours</span></span></div>
      ${notices.length ? `<p class="note-demo" style="margin-top:22px" data-hero="sub">${notices.map((n) => `<span class="bracket">${esc(n.label)}</span> ${esc(formatShortDate(n.start))}${n.end ? ' au ' + esc(formatShortDate(n.end)) : ''}${n.confirmed ? '' : ' (à confirmer)'}`).join(' · ')}</p>` : ''}
    </div>
    <div class="shelf" data-hero="shelf"><div class="shelf__label"><span class="label">Sur le comptoir maintenant</span>${mockTag('Prix exemple')}</div>
      <div class="shelf__grid">${c.productIds.slice(0, 4).map(shelfItem).join('')}</div></div>
  </div></section>

  <section class="section section--tight section--band" aria-label="Le fournil en trois mots"><div class="wrap strip">
    <div class="strip__item" data-reveal>${icon('bread')}<span>Six jours sur sept<small>Fermé le mercredi seulement</small></span></div>
    <div class="strip__item" data-reveal>${icon('sun')}<span>Dimanche ouvert<small>7h30 à 13h, crêpes et levain</small></span></div>
    <div class="strip__item" data-reveal>${icon('clock')}<span>6h45 à 19h15<small>Du lundi au samedi</small></span></div>
  </div></section>

  <section class="section" aria-labelledby="ph-title"><div class="wrap">
    ${sectionHead('Le fournil en images', 'Croûtes, feuilletages et comptoir', 'Une sélection de photos d’ambiance pour donner le ton : pains, viennoiseries, pâtisseries et pizza du lundi.').replace('<h2 class="h2"', '<h2 id="ph-title" class="h2"')}
    <figure class="photo-band" data-reveal="clip">${photoImg(photo('boutique-soir'), 'photo')}<figcaption class="photo-cap">Photo d’illustration</figcaption></figure>
    <div class="photo-mosaic">${['croissant-farine', 'pain-campagne', 'tarte-citron', 'pizza-lundi', 'cinnamon-rolls', 'petrissage', 'crepes', 'vitrine-viennoiseries'].map((s) => `<figure class="photo-tile" data-reveal>${photoImg(photo(s))}<figcaption class="photo-cap">Photo d’illustration</figcaption></figure>`).join('')}</div>
    <p style="margin-top:22px">${ctaLink(route('galerie'), 'Toute la galerie', 'btn--ghost')}</p>
  </div></section>

  <section class="section" aria-labelledby="week-title"><div class="wrap">
    <div class="section__head"><p class="label" data-reveal>Le calendrier du fournil</p><h2 class="h2" id="week-title" data-split style="margin-top:12px">Les sept prochains jours</h2>
    <p class="lede" data-reveal>Le site suit la vraie semaine du fournil : horaires du jour, fermetures, rituels. Les rituels marqués « Exemple » sont des idées.</p></div>
    ${weekStrip()}
  </div></section>

  ${dayPan()}

  ${flankieStage(currentFlankie)}

  <section class="section" aria-labelledby="ind-title"><div class="wrap cols-2">
    <div class="ind-media"><figure class="photo-tile photo-tile--43" data-reveal="clip">${photoImg(photo('crepes'))}<figcaption class="photo-cap">Photo d’illustration</figcaption></figure><div class="medal ind-media__medal" data-reveal>${art('crepes', 'Une pile de crêpes maison')}</div></div>
    <div class="stack" style="--stack:1rem"><p class="label" data-reveal>Les indispensables, n°1</p><h2 class="h2" id="ind-title" data-split>Nos crêpes maison</h2>
      <p class="lede" data-reveal>Une recette transmise par les anciens propriétaires, devenue « l’âme de la boulangerie ». 5 crêpes + 1 pot de confiture = 10 €.</p>
      <p data-reveal>${ctaLink(route('indispensables'), 'La série complète', 'btn--ghost')}</p></div>
  </div></section>

  <section class="section section--band" aria-labelledby="piz-title"><div class="wrap">
    ${sectionHead('Chaque lundi', 'Pizza du lundi', 'La Méditerranéenne et L’Américaine, préparées sur place.').replace('<h2 class="h2"', '<h2 id="piz-title" class="h2"')}
    <p style="margin-bottom:14px">${mockTag('Prix exemple')}</p>
    <div class="cols-2" style="align-items:center"><div class="shelf__grid">${['pizza-mediterraneenne', 'pizza-americaine'].map(shelfItem).join('')}</div><figure class="photo-tile photo-tile--43" data-reveal="clip">${photoImg(photo('pizza-lundi'))}<figcaption class="photo-cap">Photo d’illustration</figcaption></figure></div>
    <p style="margin-top:20px">${ctaLink(route('dejeuner') + '#pizza', 'Le midi et la pizza', 'btn--store')}</p>
  </div></section>

  <section class="section" aria-labelledby="sea-title"><div class="wrap">
    ${sectionHead('Les douze mois', 'Chaque mois a son feuillet', 'Galettes en janvier, chocolats à Pâques, anniversaire le 1er juillet, carte des fêtes en décembre.').replace('<h2 class="h2"', '<h2 id="sea-title" class="h2"')}
    ${seasonRail()}
    <p style="margin-top:18px">${ctaLink(route('saisons'), 'Voir le calendrier complet', 'btn--ghost')}</p>
  </div></section>

  <section class="section section--surface" aria-labelledby="av-title"><div class="wrap">
    <div class="cols-2 cols-2--wide-right">
      <div><p class="label" data-reveal>Ce qu’on en dit</p><h2 class="h2" id="av-title" data-split style="margin:12px 0 18px">Des tickets de caisse, pas des étoiles</h2>
        <div class="score" data-reveal><span class="score__n tnum">${shop.ratings.google.value.toString().replace('.', ',')}</span><span class="muted">sur 5<br>${esc(shop.ratings.google.label)}</span></div>
        <p class="muted" style="margin-top:14px">Extraits d’avis publics, cités sans nom d’auteur.</p>
        <p style="margin-top:14px"><a class="link-arrow" href="${route('histoire')}">Notre histoire${icon('arrowRight')}</a></p></div>
      ${tickets(4)}
    </div></div></section>

  <section class="section" aria-labelledby="cmd-title"><div class="wrap">
    ${sectionHead('Commandes et événements', 'Un gâteau, des minis, un plateau', `${orderOffers.length} formules sur commande. Minis : -10 % dès 20 pièces.`).replace('<h2 class="h2"', '<h2 id="cmd-title" class="h2"')}
    <div class="grid-auto">${orderOffers.slice(0, 4).map((o) => `<a class="card cardlink" href="${route('commandes')}" data-reveal>${cardMedia(photoFor(o.illustration), o.illustration)}<h3 class="h3">${esc(o.title)}</h3><p class="muted" style="margin:0">${esc(o.description)}</p></a>`).join('')}</div>
  </div></section>

  <section class="section section--band" aria-labelledby="inf-title"><div class="wrap cols-2">
    <div><p class="label" data-reveal>Passer nous voir</p><h2 class="h2" id="inf-title" data-split style="margin:12px 0 18px">${esc(shop.street)}, ${esc(shop.quarter)}</h2>
      <p>${esc(shop.transport.metro)}.</p>
      <p><a class="btn btn--store" href="${shop.mapsUrl}" rel="noopener" target="_blank">Itinéraire${icon('arrowUpRight')}</a></p></div>
    <table class="hours"><caption class="sr-only">Horaires d’ouverture</caption><tbody>${[1, 2, 3, 4, 5, 6, 0].map((d) => { const h = weeklyHours[d]; return `<tr><th scope="row">${dayNames[d]}</th><td class="${h ? '' : 'closed'}">${h ? `${fmtTime(h.open)} à ${fmtTime(h.close)}` : 'Fermé'}</td></tr>` }).join('')}</tbody></table>
  </div></section>

  <section class="section" aria-labelledby="his-title"><div class="wrap cols-2 cols-2--wide-left">
    <div class="stack" style="--stack:1rem"><p class="label" data-reveal>Notre histoire</p><h2 class="h2" id="his-title" data-split>Une boulangerie sur ce coin de rue depuis 1987</h2>
      <p class="lede" data-reveal>De Boulangerie Leduc au Fournil de Prosper : le même comptoir, le même numéro de téléphone, une recette de crêpes qui a changé de mains.</p>
      <p data-reveal>${ctaLink(route('histoire'), 'Lire l’histoire', 'btn--ghost')}</p></div>
    <div class="stack" style="--stack:1rem"><figure class="photo-tile" data-reveal="clip">${photoImg(photo('vitrine-pains'))}<figcaption class="photo-cap">Photo d’illustration</figcaption></figure>
    <div class="saviez" data-reveal><p class="label">Le saviez-vous ?</p><p style="margin:10px 0 0">Prosper a été boulanger pendant 14 ans avant de se lancer à son tour.</p></div></div>
  </div></section>

  <section class="section" aria-labelledby="chiffres"><div class="wrap">
    <h2 class="sr-only" id="chiffres">Repères</h2>
    <div class="grid-auto">${stats.slice(0, 4).map((st) => `<div class="card" data-reveal><div class="score__n tnum" style="font-size:clamp(2.2rem,1.6rem + 2vw,3.4rem)">${esc(st.value)}</div><p class="muted" style="margin:8px 0 0">${esc(st.label)}</p></div>`).join('')}</div>
  </div></section>

  <section class="section section--surface" aria-labelledby="faq-title"><div class="wrap cols-2 cols-2--wide-right">
    <div><p class="label" data-reveal>Questions fréquentes</p><h2 class="h2" id="faq-title" data-split style="margin-top:12px">Avant de venir</h2><p style="margin-top:18px"><a class="link-arrow" href="${route('faq')}">Toutes les réponses${icon('arrowRight')}</a></p></div>
    ${accordion(faqTop, 0)}
  </div></section>`
}

export function init(main: HTMLElement, ready: Promise<void>): void {
  bindPan(main)
  bindFlankie(main)
  if (!motionOn()) return
  const h1 = main.querySelector<HTMLElement>('[data-split="hero"]')
  const eyebrow = main.querySelector('[data-hero="eyebrow"]')
  const subs = main.querySelectorAll('[data-hero="sub"]')
  const cta = main.querySelector('[data-hero="cta"]')
  const shelf = main.querySelector<HTMLElement>('[data-hero="shelf"]')
  const items = main.querySelectorAll('[data-shelf]')
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } })
  if (eyebrow) { gsap.set(eyebrow, { opacity: 0, y: 16 }); tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.7 }, 0) }
  if (shelf) { gsap.set(shelf, { opacity: 0, y: 40 }); tl.to(shelf, { opacity: 1, y: 0, duration: 1 }, 0.1) }
  items.forEach((it) => gsap.set(it, { y: -160, opacity: 0, rotate: (Math.random() - 0.5) * 24 }))
  tl.to(items, { y: 0, opacity: 1, rotate: 0, duration: 0.9, ease: 'back.out(1.5)', stagger: 0.11 }, 0.55)
  subs.forEach((el) => gsap.set(el, { opacity: 0, y: 18 }))
  if (subs.length) tl.to(subs, { opacity: 1, y: 0, duration: 0.8 }, 0.55)
  if (cta) { gsap.set(cta, { opacity: 0, y: 18 }); tl.to(cta, { opacity: 1, y: 0, duration: 0.8 }, 0.7) }
  if (h1) {
    const h = splitReveal(h1, { paused: true })
    ready.then(() => { tl.play(); h?.play() })
  } else ready.then(() => tl.play())
  mm.add('(min-width: 960px) and (pointer: fine)', () => {
    if (shelf) gsap.to(shelf, { y: -30, ease: 'none', scrollTrigger: { trigger: shelf, start: 'top 70%', end: 'bottom top', scrub: 0.6 } })
  })
}
