// Shared renderers (strings) and small behaviours used by several pages.
import { href, esc, safeGet, safeSet } from './dom.ts'
import { icon } from './icons.ts'
import { art } from './art.ts'
import { gsap, motionOn, ScrollTrigger, mm } from './motion.ts'
import { pageByKey } from '../data/pages.ts'
import { products, productById, allergenLabels, tagLabels, formatPrice, categoryLabels } from '../data/products.ts'
import type { Product } from '../data/products.ts'
import { reviews } from '../data/reviews.ts'
import { weekRituals } from '../data/weekRituals.ts'
import { seasons } from '../data/seasons.ts'
import { annualEvents } from '../data/annualEvents.ts'
import { dayMoments } from '../data/dayMoments.ts'
import type { Flankie } from '../data/flankies.ts'
import { addDays, dayNames, dayShort, fmtTime, formatShortDate, getDayPlan, monthNames, weekdayOf, isoToUTC, toMinutes } from '../data/shop.ts'
import { todayIso } from './state.ts'

export const route = (key: string, q = ''): string => href((pageByKey(key)?.path ?? '') + q)
export const prodLink = (id: string): string => href('la-carte/produit.html?id=' + encodeURIComponent(id))

export interface Crumb { label: string; to?: string }
export function crumbs(items: Crumb[]): string {
  const all: Crumb[] = [{ label: 'Accueil', to: route('home') }, ...items]
  return `<nav class="wrap" aria-label="Fil d’Ariane"><ol class="crumbs">${all
    .map((c, i) => (i === all.length - 1 ? `<li aria-current="page">${esc(c.label)}</li>` : `<li><a href="${c.to}">${esc(c.label)}</a></li>`))
    .join('')}</ol></nav>`
}

export interface HeroOpts {
  crumb: Crumb[]
  kicker: string
  title: string
  lede?: string
  art?: string
  extra?: string
}
export function pageHero(o: HeroOpts): string {
  return `${crumbs(o.crumb)}
  <header class="page-hero"><div class="wrap page-hero__grid">
    <div>
      <p class="label" data-reveal>${esc(o.kicker)}</p>
      <h1 class="display" data-split>${o.title}</h1>
      ${o.lede ? `<p class="lede" data-reveal>${o.lede}</p>` : ''}
      ${o.extra ?? ''}
    </div>
    ${o.art ? `<div class="page-hero__art" data-reveal><div class="medal">${art(o.art)}</div></div>` : ''}
  </div></header>`
}

export function sectionHead(kicker: string, title: string, lede?: string): string {
  return `<div class="section__head"><p class="label" data-reveal>${esc(kicker)}</p><h2 class="h2" data-split style="margin-top:12px">${title}</h2>${lede ? `<p class="lede" data-reveal>${lede}</p>` : ''}</div>`
}

export function ctaLink(to: string, text: string, cls = ''): string {
  return `<a class="btn ${cls}" href="${to}">${text}${icon('arrowRight')}</a>`
}

export function mockTag(text = 'Exemple'): string {
  return `<span class="mock-tag">${esc(text)}</span>`
}
export function realTag(text = 'Vrai'): string {
  return `<span class="real-tag">${icon('check')}${esc(text)}</span>`
}

// ---------- products ----------
export function priceTag(p: Product): string {
  if (p.priceEUR == null) return `<span class="price price--note">${esc(formatPrice(p))}</span>`
  const pre = p.priceNote && /partir/.test(p.priceNote) ? 'dès ' : ''
  return `<span class="price tnum">${pre}${esc(formatPrice(p))}</span>`
}

export function shelfItem(id: string): string {
  const p = productById(id)
  if (!p) return ''
  return `<a class="shelf-item" href="${prodLink(p.id)}" data-shelf>
    <div class="shelf-item__art">${art(p.illustration)}</div><div class="shelf-item__board"></div>
    <div class="shelf-item__meta"><span class="shelf-item__name">${esc(p.name)}</span>${priceTag(p)}</div></a>`
}

export function prodCard(p: Product): string {
  const tags = p.tags.slice(0, 3).map((t) => `<span class="tag ${t === 'vegetarien' ? 'tag--veg' : ''}">${esc(tagLabels[t])}</span>`).join('')
  return `<article class="prod-wrap" data-prod="${p.id}" data-cat="${p.category}"><button class="prod" type="button" data-open="${p.id}" aria-haspopup="dialog">
    <div class="prod__shelf">${art(p.illustration)}</div><div class="prod__board"></div>
    <div class="prod__body"><div class="prod__title"><h3 class="prod__name">${esc(p.name)}</h3>${priceTag(p)}</div>
    <p class="prod__desc">${esc(p.description)}</p><div class="prod__tags">${tags}${p.flag ? `<span class="tag">${esc(p.flag)}</span>` : ''}</div></div></button></article>`
}

const dayDots = (days: number[]): string =>
  `<div class="days" role="img" aria-label="Jours de disponibilité : ${days.map((d) => dayNames[d]).join(', ')}">${[1, 2, 3, 4, 5, 6, 0].map((d) => `<span class="${days.includes(d) ? 'on' : ''}" aria-hidden="true">${dayShort[d][0].toUpperCase()}</span>`).join('')}</div>`

export function productDetail(p: Product): string {
  return `<div class="drawer__art">${art(p.illustration, p.name)}</div>
    <div><p class="label">${esc(categoryLabels[p.category])}</p><h2 class="h3" style="margin-top:6px">${esc(p.name)}</h2></div>
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">${priceTag(p)}<span class="muted">${esc(p.unit)}</span>${p.real ? realTag('Produit du fournil') : mockTag('Prix exemple')}</div>
    ${p.flag ? `<p class="note-demo">${esc(p.flag)}</p>` : ''}
    <p>${esc(p.description)}</p>
    <div><h3 class="label" style="margin-bottom:8px">Ingrédients (indicatif)</h3><p class="muted" style="margin:0">${esc(p.ingredients.join(', '))}</p></div>
    <div><h3 class="label" style="margin-bottom:8px">Allergènes (indicatif)</h3><div class="allergens">${p.allergens.length ? p.allergens.map((a) => `<span class="tag">${esc(allergenLabels[a])}</span>`).join('') : '<span class="muted">Aucun allergène majeur déclaré</span>'}</div></div>
    <div><h3 class="label" style="margin-bottom:8px">Disponible</h3>${dayDots(p.availableDays)}</div>`
}

let drawerEl: HTMLDialogElement | null = null
export function openProduct(id: string, trigger?: HTMLElement): void {
  const p = productById(id)
  if (!p) return
  if (!drawerEl) {
    drawerEl = document.createElement('dialog')
    drawerEl.className = 'drawer'
    drawerEl.setAttribute('data-lenis-prevent', '')
    drawerEl.setAttribute('aria-label', 'Fiche produit')
    document.body.appendChild(drawerEl)
    drawerEl.addEventListener('click', (e) => {
      if (e.target === drawerEl) drawerEl?.close()
    })
  }
  const d = drawerEl
  d.innerHTML = `<div class="drawer__close"><button class="iconbtn" type="button" aria-label="Fermer la fiche" data-close>${icon('x')}</button></div>
    <div class="drawer__body">${productDetail(p)}
    <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" type="button" data-slip-add="${p.id}">${icon('plus')}Au bon de commande</button><a class="btn btn--ghost" href="${prodLink(p.id)}">Voir la fiche${icon('arrowRight')}</a></div></div>`
  d.querySelector('[data-close]')?.addEventListener('click', () => d.close())
  d.showModal()
  d.addEventListener('close', () => trigger?.focus(), { once: true })
}

// ---------- accordion ----------
export function accordion(items: { q: string; a: string }[], open = -1): string {
  return `<div class="acc">${items
    .map((it, i) => `<details${i === open ? ' open' : ''}><summary>${it.q}${icon('plus')}</summary><div class="acc__a">${it.a}</div></details>`)
    .join('')}</div>`
}

// ---------- reviews as receipt tickets ----------
export function tickets(n = 6, offset = 0): string {
  const list = reviews.slice(offset, offset + n)
  return `<div class="tickets">${list
    .map((r, i) => `<figure class="ticket" data-reveal="clip" style="margin:0"><div class="ticket__head"><span>Ticket n°${String(offset + i + 1).padStart(3, '0')}</span><span>${esc(r.platform)}</span></div>
    <blockquote lang="${r.lang}">« ${esc(r.quote)} »</blockquote>
    <figcaption class="ticket__foot">${esc(r.platform)}${r.lang === 'en' ? ' (traduit)' : ''} · <a href="${esc(r.source)}" rel="noopener" target="_blank">source</a></figcaption></figure>`)
    .join('')}</div>`
}

// ---------- the week as a calendar ----------
export function weekStrip(): string {
  const start = todayIso()
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i))
  return `<div class="week" role="list">${days
    .map((iso, i) => {
      const plan = getDayPlan(iso)
      const r = weekRituals.find((w) => w.weekday === plan.weekday)
      const closed = !plan.hours
      const first = r && r.productIds.length ? productById(r.productIds[0]) : undefined
      const hours = plan.hours ? `${fmtTime(plan.hours.open)} à ${fmtTime(plan.hours.close)}` : 'Fermé'
      const label = plan.exception && !r?.real ? `[${plan.exception.label}]` : null
      return `<article class="day ${i === 0 ? 'is-today' : ''} ${closed ? 'is-closed' : ''}" role="listitem" data-day>
        <div><div class="day__name">${dayNames[plan.weekday]}</div><div class="day__date">${formatShortDate(iso)}</div></div>
        <div class="day__hours">${hours}</div>
        ${label ? `<p class="day__text bracket">${esc(plan.exception!.label)}</p>` : ''}
        ${r ? `<div class="day__ritual">${esc(r.title)}</div><p class="day__text">${esc(r.text)}</p>` : ''}
        ${r?.mock ? mockTag('Exemple') : ''}${r?.pending ? mockTag('À confirmer') : ''}
        ${first && !closed ? `<div class="day__art">${art(first.illustration)}</div>` : closed ? `<div class="day__art" style="color:var(--chene)">${icon('moon', '')}</div>` : ''}
      </article>`
    })
    .join('')}</div>`
}

// ---------- seasons rail ----------
export function seasonRail(): string {
  const cur = Number(todayIso().slice(5, 7))
  return `<div class="rail" data-rail tabindex="0" aria-label="Les douze mois du fournil, faites défiler">${seasons
    .map((s) => {
      const arts = s.productIds.slice(0, 2).map((id) => productById(id)).filter(Boolean) as Product[]
      return `<article class="sheet ${s.month === cur ? 'is-now' : ''}"><div class="sheet__top"><span class="sheet__month">${s.name}</span><span class="sheet__num">${String(s.month).padStart(2, '0')}</span></div>
      <div class="sheet__body"><p class="sheet__tag">${esc(s.tagline)}</p><div class="sheet__arts">${arts.map((p) => `<div>${art(p.illustration)}</div>`).join('')}</div></div></article>`
    })
    .join('')}</div>
  <div class="rail-controls" style="margin-top:6px"><button class="iconbtn" type="button" data-rail-prev aria-label="Mois précédents" style="background:var(--surface-2);color:var(--ink)">${icon('caretLeft')}</button><button class="iconbtn" type="button" data-rail-next aria-label="Mois suivants" style="background:var(--surface-2);color:var(--ink)">${icon('caretRight')}</button></div>`
}

/** Drag-to-scroll with the mouse (touch uses native momentum). */
export function bindRail(scope: ParentNode): void {
  scope.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
    let down = false, sx = 0, sl = 0, moved = false
    rail.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return
      down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft
    })
    window.addEventListener('pointermove', (e) => {
      if (!down) return
      const dx = e.clientX - sx
      if (Math.abs(dx) > 4) { moved = true; rail.classList.add('is-drag') }
      rail.scrollLeft = sl - dx
    })
    window.addEventListener('pointerup', () => { down = false; setTimeout(() => rail.classList.remove('is-drag'), 30) })
    rail.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation() } }, true)
    const step = () => Math.min(rail.clientWidth * 0.8, 640)
    const scope2 = rail.parentElement
    scope2?.querySelector('[data-rail-prev]')?.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }))
    scope2?.querySelector('[data-rail-next]')?.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }))
    const cur = rail.querySelector<HTMLElement>('.is-now')
    if (cur) rail.scrollLeft = Math.max(0, cur.offsetLeft - 16 - rail.offsetLeft)
  })
}

export function eventsOfMonth(month: number): string {
  const list = annualEvents.filter((e) => e.month === month)
  if (!list.length) return ''
  return `<ul class="month__events">${list.map((e) => `<li><b>${esc(e.title)}</b><span>${esc(e.text)}</span></li>`).join('')}</ul>`
}

// ---------- the day (pan) ----------
export function dayPan(): string {
  return `<section class="pan no-pin" id="journee" aria-labelledby="pan-title" data-pan>
    <div class="pan__tint" data-pan-tint></div>
    <div class="pan__sticky">
      <div class="wrap pan__head">
        <p class="label" data-reveal>Une journée au Fournil</p>
        <h2 class="h2" id="pan-title" data-split style="margin-top:12px;max-width:16ch">De 6h45 à 19h15, la fournée change d’heure en heure.</h2>
        <div class="pan__sun" data-pan-sun aria-hidden="true"></div>
        <div class="pan__clock tnum" data-pan-clock aria-hidden="true">6h45</div>
      </div>
      <div class="pan__track" data-pan-track>${dayMoments
        .map((m) => `<article class="pan-card" data-pan-card><div class="pan-card__time">${esc(m.time)}</div><h3 class="h3">${esc(m.title)}</h3><p class="muted" style="margin:0">${esc(m.text)}</p>
          <div class="pan-card__items">${m.productIds.map((id) => productById(id)).filter(Boolean).map((p) => `<figure>${art(p!.illustration)}<figcaption>${esc(p!.name)}</figcaption></figure>`).join('')}</div></article>`)
        .join('')}</div>
    </div></section>`
}

export function bindPan(scope: ParentNode): void {
  const sec = scope.querySelector<HTMLElement>('[data-pan]')
  if (!sec) return
  const track = sec.querySelector<HTMLElement>('[data-pan-track]')!
  const sun = sec.querySelector<HTMLElement>('[data-pan-sun]')!
  const clock = sec.querySelector<HTMLElement>('[data-pan-clock]')!
  const tint = sec.querySelector<HTMLElement>('[data-pan-tint]')!
  const times = dayMoments.map((m) => m.time)
  mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
    if (!motionOn()) return
    sec.classList.remove('no-pin')
    const dist = () => track.scrollWidth - window.innerWidth + 80
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + dist() * 1.1, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: (self) => { clock.textContent = times[Math.min(times.length - 1, Math.round(self.progress * (times.length - 1)))] } },
    })
    tl.to(track, { x: () => -dist(), ease: 'none' }, 0)
    tl.fromTo(sun, { x: 0, y: 40 }, { x: () => window.innerWidth - 140, y: -10, ease: 'sine.inOut' }, 0)
    tl.to(tint, { opacity: 0.55, ease: 'none' }, 0)
    return () => {
      sec.classList.add('no-pin')
      gsap.set(track, { clearProps: 'transform' })
    }
  })
  mm.add('(max-width: 899px)', () => {
    sec.querySelectorAll('[data-pan-card]').forEach((c) => {
      if (motionOn()) gsap.from(c, { y: 36, opacity: 0, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 88%', once: true } })
    })
  })
}

// ---------- Flankie cross-section ----------
export function flankieSVG(f: Flankie): string {
  const cx = 300, rx = 230, ry = 70, h = 52
  const ys = [330, 250, 170] // bottom, middle, top layers (top ellipse centre)
  const layer = (i: number): string => {
    const l = f.layers[i]; const cy = ys[i]
    return `<g class="fl" data-fl="${i}"><path d="M${cx - rx},${cy} v${h} a${rx},${ry} 0 0 0 ${2 * rx},0 v${-h} a${rx},${ry} 0 0 1 ${-2 * rx},0z" fill="${l.shade}"/><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${l.color}"/>${
      i === 2 ? `<ellipse cx="${cx - 60}" cy="${cy - 14}" rx="90" ry="18" fill="#fff" opacity=".18"/><g fill="${l.shade}" opacity=".45">${[[-120, 6], [-40, 22], [50, -4], [130, 14], [10, 30], [-150, -12]].map(([x, y]) => `<circle cx="${cx + x}" cy="${cy + y}" r="6"/>`).join('')}</g>` : ''
    }${i === 0 ? `<g fill="${l.shade}" opacity=".5">${[[-150, 4], [-80, 26], [0, 8], [90, 24], [160, 2]].map(([x, y]) => `<circle cx="${cx + x}" cy="${cy + y}" r="7"/>`).join('')}</g>` : ''}</g>`
  }
  return `<svg class="flankie__svg" viewBox="0 0 600 420" role="img" aria-label="Coupe du Flankie ${esc(f.name)} : ${f.layers.map((l) => l.name).join(', ')}" focusable="false">
    <ellipse cx="300" cy="392" rx="250" ry="16" fill="#988265" opacity=".35"/>${layer(0)}${layer(1)}${layer(2)}</svg>`
}

export function flankieStage(f: Flankie, heading = 'h2'): string {
  const tag = heading
  return `<section class="flankie" data-flankie aria-labelledby="fl-title"><div class="flankie__stage"><div class="wrap flankie__grid">
    <div class="flankie__svgwrap" data-fl-wrap>${flankieSVG(f)}<div class="flankie__stamp"><div class="stamp" aria-hidden="true"><div>Flankie du mois<strong>${f.month ? monthNames[f.month - 1].slice(0, 3) + '.' : ''}</strong>${f.year ?? ''}</div></div></div></div>
    <div>
      <p class="label" data-reveal>Le Flankie du mois, ${esc(f.monthLabel)}</p>
      <${tag} class="display flankie__title" id="fl-title" data-split style="font-size:clamp(2.2rem,1.2rem + 4vw,4.4rem)">${esc(f.name)}</${tag}>
      <p class="lede" style="color:inherit;opacity:.85" data-reveal>Un mélange de flan et de cookie, monté couche par couche. ${f.until ? esc(f.until) + '.' : ''}</p>
      <ol class="flankie__steps" data-fl-steps>${f.layers
        .map((l, i) => `<li class="flankie__step" data-step="${i}" style="--c:${l.color}"><i></i><div><b>${i + 1}. ${esc(l.name)}</b><span>${esc(l.copy)}</span></div></li>`)
        .join('')}</ol>
      ${f.note ? `<p class="flankie__note">${esc(f.note)}</p>` : f.layersReal ? '<p class="flankie__note">Les couches suivent la recette annoncée par le fournil.</p>' : ''}
    </div></div></div></section>`
}

export function bindFlankie(scope: ParentNode): void {
  const sec = scope.querySelector<HTMLElement>('[data-flankie]')
  if (!sec) return
  const layers = [0, 1, 2].map((i) => sec.querySelector<SVGGElement>(`[data-fl="${i}"]`)!)
  const steps = Array.from(sec.querySelectorAll<HTMLElement>('[data-step]'))
  const setOn = (n: number) => steps.forEach((s, i) => s.classList.toggle('is-on', i === n))
  sec.classList.add('flankie--static')
  setOn(2)
  const build = (pin: boolean) => {
    sec.classList.remove('flankie--static')
    layers.forEach((l) => gsap.set(l, { opacity: 0, y: -260 }))
    steps.forEach((s) => s.classList.remove('is-on'))
    const tl = gsap.timeline({
      scrollTrigger: pin
        ? { trigger: sec, start: 'top top', end: '+=1500', pin: true, scrub: 0.7, anticipatePin: 1, invalidateOnRefresh: true, onUpdate: (s) => setOn(Math.min(2, Math.floor(s.progress * 3.2))) }
        : { trigger: sec, start: 'top 55%', end: 'bottom 70%', scrub: 0.7, onUpdate: (s) => setOn(Math.min(2, Math.floor(s.progress * 3.2))) },
    })
    layers.forEach((l, i) => {
      tl.to(l, { opacity: 1, y: 0, duration: 1, ease: 'bounce.out' }, i * 1.1)
      // after landing, spread the stack a little so each layer reads
      tl.to(l, { y: (i - 1) * 14 - 0, duration: 0.6, ease: 'power2.out' }, 3.4)
    })
    tl.to({}, { duration: 0.4 })
    return () => {
      sec.classList.add('flankie--static')
      layers.forEach((l) => gsap.set(l, { clearProps: 'all' }))
      setOn(2)
    }
  }
  mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => (motionOn() ? build(true) : undefined))
  mm.add('(max-width: 899px) and (prefers-reduced-motion: no-preference)', () => (motionOn() ? build(false) : undefined))
}

// ---------- order slip (sessionStorage) ----------
export interface SlipLine { id: string; qty: number }
export function slipItems(): SlipLine[] {
  try { return JSON.parse(safeGet('fdp-slip', 'session') ?? '[]') as SlipLine[] } catch { return [] }
}
export function slipSave(l: SlipLine[]): void {
  safeSet('fdp-slip', JSON.stringify(l), 'session')
  document.dispatchEvent(new CustomEvent('slip:change'))
}
export function slipAdd(id: string): void {
  const l = slipItems()
  const f = l.find((x) => x.id === id)
  if (f) f.qty += 1; else l.push({ id, qty: 1 })
  slipSave(l)
}
export function slipText(): string {
  return slipItems().map((l) => `- ${l.qty} x ${productById(l.id)?.name ?? l.id}`).join('\n')
}

/** Mini croissant flies from the button to the floating slip button. */
export function flyTo(from: HTMLElement): void {
  const to = document.querySelector<HTMLElement>('.slip-btn')
  if (!to || !motionOn()) return
  const a = from.getBoundingClientRect(), b = to.getBoundingClientRect()
  const el = document.createElement('div')
  el.className = 'fly'
  el.innerHTML = art('croissant')
  document.body.appendChild(el)
  gsap.fromTo(el, { x: a.left + a.width / 2 - 20, y: a.top, scale: 1, opacity: 1 },
    { x: b.left + b.width / 2 - 20, y: b.top + 4, scale: 0.6, duration: 0.8, ease: 'power3.in', rotate: 360, onComplete: () => {
      el.remove()
      gsap.fromTo(to, { scale: 1.12 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' })
    } })
}

// ---------- date picker (greys Wednesdays + closures, limits Sunday hours) ----------
export function datePicker(host: HTMLElement, onPick: (iso: string, times: string[]) => void): void {
  const today = todayIso()
  let y = Number(today.slice(0, 4)), m = Number(today.slice(5, 7)) - 1
  let picked = ''
  const draw = (): void => {
    const first = isoToUTC(`${y}-${String(m + 1).padStart(2, '0')}-01`)
    const lead = (first.getUTCDay() + 6) % 7
    const len = new Date(Date.UTC(y, m + 1, 0)).getUTCDate()
    let cells = ''
    for (let i = 0; i < lead; i++) cells += '<span></span>'
    for (let d = 1; d <= len; d++) {
      const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      const plan = getDayPlan(iso)
      const off = iso < addDays(today, 1) || !plan.hours
      const why = iso < addDays(today, 1) ? 'passé ou trop proche' : plan.weekday === 3 ? 'fermé le mercredi' : plan.exception ? plan.exception.label : ''
      cells += `<button type="button" class="cal__d" data-iso="${iso}" ${off ? 'disabled' : ''} aria-pressed="${iso === picked}" aria-label="${dayNames[plan.weekday]} ${d} ${monthNames[m]}${off ? ', indisponible (' + why + ')' : ''}">${d}</button>`
    }
    host.innerHTML = `<div class="cal"><div class="cal__head"><button type="button" class="iconbtn" data-prev aria-label="Mois précédent" style="background:var(--surface-2);color:var(--ink)">${icon('caretLeft')}</button><b>${monthNames[m]} ${y}</b><button type="button" class="iconbtn" data-next aria-label="Mois suivant" style="background:var(--surface-2);color:var(--ink)">${icon('caretRight')}</button></div>
      <div class="cal__grid">${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d) => `<span class="cal__dow" aria-hidden="true">${d}</span>`).join('')}${cells}</div>
      <p class="hint muted" style="font-size:.82rem;margin:8px 0 0">Fermé le mercredi et les jours de fermeture. Le dimanche : 7h30 à 13h.</p></div>`
    host.querySelector('[data-prev]')?.addEventListener('click', () => { m--; if (m < 0) { m = 11; y-- } draw() })
    host.querySelector('[data-next]')?.addEventListener('click', () => { m++; if (m > 11) { m = 0; y++ } draw() })
    host.querySelectorAll<HTMLButtonElement>('.cal__d').forEach((b) => b.addEventListener('click', () => {
      picked = b.dataset.iso!
      const plan = getDayPlan(picked)
      const times: string[] = []
      if (plan.hours) for (let t = toMinutes(plan.hours.open); t <= toMinutes(plan.hours.close) - 30; t += 30) times.push(`${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`)
      onPick(picked, times)
      draw()
    }))
  }
  draw()
}
export const weekdayName = (iso: string): string => dayNames[weekdayOf(iso)]

export { products, ScrollTrigger }
