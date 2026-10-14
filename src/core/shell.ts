// Page chrome: fascia (header), awning, full menu, footer with tear-off calendar, order slip, theme toggle, newsletter mock.
import { esc, href, safeGet, safeSet } from './dom.ts'
import { icon } from './icons.ts'
import { art } from './art.ts'
import { gsap, motionOn, stopScroll, startScroll } from './motion.ts'
import { pages, pageByKey } from '../data/pages.ts'
import { shop, weeklyHours, dayNames, fmtTime, getDayPlan, addDays, formatLongDate, weekdayOf, monthNames, isoToUTC } from '../data/shop.ts'
import { weekRituals } from '../data/weekRituals.ts'
import { productById } from '../data/products.ts'
import { pillHTML, refreshPills, todayIso } from './state.ts'
import { route, slipItems, slipSave, slipAdd, flyTo, openProduct, slipText } from './ui.ts'

const navShort: Record<string, string> = { carte: 'La carte', dejeuner: 'Le midi', flankie: 'Le Flankie', commandes: 'Commandes', saisons: 'Saisons', infos: 'Infos et accès' }
const headerKeys = ['carte', 'dejeuner', 'flankie', 'commandes', 'saisons', 'infos']

const awningItems = ['Boulangerie', 'Pâtisserie', 'Snacking', 'Fait maison', '42 rue Champion de Cicé', 'Cleunay', 'Six jours sur sept']

function header(key: string): string {
  const link = (k: string): string => `<li><a href="${route(k)}" ${k === key ? 'aria-current="page"' : ''}>${navShort[k]}</a></li>`
  const awning = [...awningItems, ...awningItems].map((t) => `<span class="awning__item">${t}</span>`).join('')
  const dark = document.documentElement.getAttribute('data-theme') === 'dark' || (!document.documentElement.hasAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches)
  return `<a class="skip-link" href="#main">Aller au contenu</a>
  <header class="fascia" data-fascia><div class="wrap fascia__row">
    <a class="wordmark" href="${route('home')}" aria-label="Le Fournil de Prosper, accueil"><span class="wordmark__script">Le Fournil de Prosper</span><span class="wordmark__sub">Boulangerie · Rennes</span></a>
    <nav class="mainnav" aria-label="Navigation principale"><ul>${headerKeys.map(link).join('')}</ul></nav>
    <div class="fascia__tools">${pillHTML()}
      <button class="sign" type="button" data-theme-toggle aria-pressed="${!dark}" aria-label="Lumière du fournil : allumé ou éteint"><span class="sign__lamp"></span><span data-theme-label>${dark ? 'Éteint' : 'Allumé'}</span></button>
      <button class="iconbtn" type="button" data-menu-open aria-haspopup="dialog" aria-label="Ouvrir le menu">${icon('list')}</button>
    </div></div></header>
  <div class="awning" data-awning aria-hidden="true"><div class="awning__track">${awning}</div></div>`
}

function menu(key: string): string {
  const cur = (k: string): string => (k === key ? ' aria-current="page"' : '')
  const ul = (keys: string[]): string => `<ul>${keys.map((k) => `<li><a href="${route(k)}"${cur(k)}>${esc(pageByKey(k)!.label)}</a></li>`).join('')}</ul>`
  const main = pages.filter((p) => p.nav === 'main' && p.key !== 'contact').map((p) => p.key)
  const more = pages.filter((p) => p.nav === 'more').map((p) => p.key)
  return `<div class="menu" data-menu role="dialog" aria-modal="true" aria-label="Menu" data-lenis-prevent>
    <div class="menu__top"><span class="wordmark__script" style="color:var(--chene)">Le Fournil de Prosper</span><button class="menu__close" type="button" data-menu-close aria-label="Fermer le menu">${icon('x')}</button></div>
    <div class="menu__grid">
      <div class="menu__col"><h2>Le fournil</h2>${ul([...main, 'contact'])}</div>
      <div class="menu__col menu__col--small"><h2>Et aussi</h2>${ul(more)}</div>
      <div class="menu__col menu__foot"><h2>Passer nous voir</h2><p>${shop.street}<br>${shop.postalCode} ${shop.city}, ${shop.quarter}</p><p><a href="tel:${shop.phoneTel}">${shop.phone}</a></p>${pillHTML()}
      <p style="margin-top:18px"><a href="${shop.instagram}" rel="noopener" target="_blank">Instagram</a> · <a href="${shop.facebook}" rel="noopener" target="_blank">Facebook</a></p></div>
    </div></div>`
}

function hoursLines(): string {
  const order = [1, 2, 3, 4, 5, 6, 0]
  return order.map((d) => {
    const h = weeklyHours[d]
    return `<li>${dayNames[d][0].toUpperCase() + dayNames[d].slice(1)} : ${h ? `${fmtTime(h.open)} à ${fmtTime(h.close)}` : '<span class="bracket">Fermé</span>'}</li>`
  }).join('')
}

function footer(): string {
  const legal = pages.filter((p) => p.nav === 'legal')
  const col = (keys: string[]): string => `<ul>${keys.map((k) => `<li><a href="${route(k)}">${esc(pageByKey(k)!.label)}</a></li>`).join('')}</ul>`
  return `<footer class="footer"><div class="wrap">
    <div class="footer__top">
      <div><p class="script">Le Fournil de Prosper</p><p style="margin-top:12px">${shop.street}<br>${shop.postalCode} ${shop.city}, ${shop.quarter}</p>
        <p><a href="tel:${shop.phoneTel}">${shop.phone}</a><br><a href="mailto:${shop.email}">${shop.email}</a></p>${pillHTML()}</div>
      <div><h2>Horaires</h2><ul>${hoursLines()}</ul></div>
      <div><h2>Le site</h2>${col(['carte', 'dejeuner', 'flankie', 'commandes', 'saisons', 'histoire', 'quartier', 'infos', 'actus', 'faq', 'contact'])}</div>
      <form class="footer__news form" data-news novalidate aria-label="Lettre du fournil">
        <h2>La lettre du fournil</h2><p style="margin:0">Le Flankie du mois et les dates de fermeture, une fois par mois. Démonstration : rien n’est envoyé.</p>
        <div class="field"><label for="news-mail">Votre e-mail</label><input id="news-mail" name="mail" type="email" inputmode="email" autocomplete="email" placeholder="vous@exemple.fr"><span class="err" role="alert" data-err></span></div>
        <button class="btn btn--store" type="submit">M’abonner${icon('arrowRight')}</button><p class="form__ok" data-ok hidden>Merci ! C’est une démonstration : aucune adresse n’est enregistrée.</p>
      </form>
    </div>
    <section class="tear" aria-label="Le calendrier du fournil" data-tear>
      <div><div class="tear__wrap" data-tear-wrap></div>
        <div class="tear__ctl"><button type="button" data-tear-prev>${icon('caretLeft')}Jour d’avant</button><button type="button" data-tear-next>Arracher la page${icon('caretRight')}</button></div></div>
      <div class="tear__info" data-tear-info aria-live="polite"></div>
    </section>
    <div class="footer__bottom"><span>© Le Fournil de Prosper, site de démonstration. Illustrations originales et photos d’illustration (Unsplash), aucune photo du commerce.</span>
      <ul>${legal.map((p) => `<li><a href="${route(p.key)}">${esc(p.label)}</a></li>`).join('')}</ul></div>
  </div></footer>`
}

function sheetHTML(iso: string): string {
  const d = isoToUTC(iso)
  const plan = getDayPlan(iso)
  return `<div class="tear__top">${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}</div><div class="tear__num">${d.getUTCDate()}</div><div class="tear__day">${dayNames[d.getUTCDay()]}</div>
    <div class="tear__hours">${plan.hours ? `${fmtTime(plan.hours.open)} à ${fmtTime(plan.hours.close)}` : '[Fermé]'}</div>`
}
function infoHTML(iso: string): string {
  const plan = getDayPlan(iso)
  const r = weekRituals.find((w) => w.weekday === weekdayOf(iso))
  const ids = r?.productIds.length ? r.productIds : ['croissant', 'pain-chocolat', 'baguette-tradition', 'flankie']
  const ps = ids.map((id) => productById(id)).filter(Boolean)
  const note = plan.exception ? `<p class="bracket">${esc(plan.exception.label)}</p><p>${esc(plan.exception.detail)}</p>` : plan.notice ? `<p class="bracket">${esc(plan.notice.label)} (à confirmer)</p>` : ''
  return `<h3>${esc(formatLongDate(iso))}</h3>${note}<p>${esc(r?.title ?? '')}${r && !r.real ? ' (exemple)' : ''}${/[.!?]$/.test(r?.title ?? '') && !(r && !r.real) ? '' : '.'} ${esc(r?.text ?? '')}</p>
    <div class="tear__prods">${ps.map((p) => `<figure>${art(p!.illustration)}<figcaption>${esc(p!.name)}</figcaption></figure>`).join('')}</div>`
}

function bindTear(root: HTMLElement): void {
  const wrap = root.querySelector<HTMLElement>('[data-tear-wrap]')!
  const info = root.querySelector<HTMLElement>('[data-tear-info]')!
  let iso = todayIso()
  const sheet = document.createElement('div')
  sheet.className = 'tear__sheet'
  wrap.appendChild(sheet)
  const paint = (): void => { sheet.innerHTML = sheetHTML(iso); info.innerHTML = infoHTML(iso) }
  paint()
  const go = (n: number): void => {
    const old = sheet.cloneNode(true) as HTMLElement
    old.classList.add('tear__sheet--old')
    old.setAttribute('aria-hidden', 'true')
    iso = addDays(iso, n)
    if (!motionOn()) { paint(); return }
    wrap.appendChild(old)
    paint()
    gsap.to(old, { rotateX: n > 0 ? -105 : 105, y: n > 0 ? 40 : -40, opacity: 0, duration: 0.7, ease: 'power2.in', transformOrigin: n > 0 ? '50% 0%' : '50% 100%', onComplete: () => old.remove() })
    gsap.from(sheet, { scale: 0.97, duration: 0.5, ease: 'expo.out' })
  }
  root.querySelector('[data-tear-next]')?.addEventListener('click', () => go(1))
  root.querySelector('[data-tear-prev]')?.addEventListener('click', () => go(-1))
}

function bindTheme(): void {
  const btn = document.querySelector<HTMLButtonElement>('[data-theme-toggle]')
  btn?.addEventListener('click', () => {
    const r = document.documentElement
    const dark = r.getAttribute('data-theme') === 'dark' || (!r.hasAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches)
    const next = dark ? 'light' : 'dark'
    r.setAttribute('data-theme', next)
    safeSet('fdp-theme', next)
    btn.setAttribute('aria-pressed', String(next === 'light'))
    const l = btn.querySelector('[data-theme-label]')
    if (l) l.textContent = next === 'light' ? 'Allumé' : 'Éteint'
  })
}

function bindMenu(): void {
  const m = document.querySelector<HTMLElement>('[data-menu]')!
  const open = document.querySelector<HTMLButtonElement>('[data-menu-open]')!
  const close = (): void => { m.classList.remove('is-open'); startScroll(); open.focus() }
  open.addEventListener('click', () => {
    m.classList.add('is-open'); stopScroll()
    m.querySelector<HTMLElement>('[data-menu-close]')?.focus()
    if (motionOn()) gsap.from(m.querySelectorAll('.menu__col a'), { y: 24, opacity: 0, duration: 0.7, stagger: 0.025, ease: 'expo.out' })
  })
  m.querySelector('[data-menu-close]')?.addEventListener('click', close)
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && m.classList.contains('is-open')) close() })
  m.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) { m.classList.remove('is-open'); startScroll() } })
}

function bindNews(): void {
  const f = document.querySelector<HTMLFormElement>('[data-news]')
  f?.addEventListener('submit', (e) => {
    e.preventDefault()
    const inp = f.querySelector<HTMLInputElement>('input')!
    const err = f.querySelector<HTMLElement>('[data-err]')!
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(inp.value.trim())
    inp.setAttribute('aria-invalid', String(!ok))
    err.textContent = ok ? '' : 'Cette adresse ne semble pas valide. Exemple : prenom@exemple.fr'
    f.querySelector<HTMLElement>('[data-ok]')!.hidden = !ok
    if (!ok) inp.focus()
  })
}

function slipUI(): void {
  const btn = document.createElement('button')
  btn.className = 'slip-btn'
  btn.type = 'button'
  btn.setAttribute('aria-haspopup', 'dialog')
  document.body.appendChild(btn)
  const dlg = document.createElement('dialog')
  dlg.className = 'drawer'
  dlg.setAttribute('aria-label', 'Bon de commande')
  dlg.setAttribute('data-lenis-prevent', '')
  document.body.appendChild(dlg)
  const paint = (): void => {
    const l = slipItems()
    const n = l.reduce((a, b) => a + b.qty, 0)
    btn.classList.toggle('has-items', n > 0)
    btn.innerHTML = `${icon('receipt')}<span>Bon de commande</span><span class="slip-btn__count tnum">${n}</span>`
  }
  const body = (): string => {
    const l = slipItems()
    return `<div class="drawer__close"><button class="iconbtn" type="button" data-close aria-label="Fermer">${icon('x')}</button></div><div class="drawer__body"><h2 class="h3">Votre bon de commande</h2>
      <p class="muted">Un brouillon de message : rien n’est envoyé tant que vous n’ouvrez pas votre messagerie.</p>
      ${l.length ? `<ul class="ticklist" style="list-style:none;padding:0">${l.map((x) => `<li style="display:flex;justify-content:space-between;gap:10px;align-items:center"><span>${esc(productById(x.id)?.name ?? x.id)}</span><span style="display:flex;gap:6px;align-items:center"><button class="iconbtn" style="background:var(--surface-2);color:var(--ink)" type="button" data-dec="${x.id}" aria-label="Retirer un ${esc(productById(x.id)?.name ?? '')}">${icon('minus')}</button><b class="tnum">${x.qty}</b><button class="iconbtn" style="background:var(--surface-2);color:var(--ink)" type="button" data-inc="${x.id}" aria-label="Ajouter un ${esc(productById(x.id)?.name ?? '')}">${icon('plus')}</button></span></li>`).join('')}</ul>
      <a class="btn" href="mailto:${shop.email}?subject=${encodeURIComponent('Commande')}&body=${encodeURIComponent('Bonjour,\nJe souhaite commander :\n' + slipText() + '\n\nMerci !')}">Ouvrir ma messagerie${icon('envelope')}</a>
      <a class="btn btn--ghost" href="${route('commandes')}">Choisir une date${icon('calendar')}</a>` : '<p>Votre bon est vide. Ajoutez des produits depuis la carte.</p>'}</div>`
  }
  btn.addEventListener('click', () => { dlg.innerHTML = body(); dlg.showModal() })
  dlg.addEventListener('click', (e) => {
    const t = e.target as HTMLElement
    if (t === dlg || t.closest('[data-close]')) return void dlg.close()
    const inc = t.closest<HTMLElement>('[data-inc]'), dec = t.closest<HTMLElement>('[data-dec]')
    if (inc || dec) {
      const id = (inc ?? dec)!.dataset.inc ?? (inc ?? dec)!.dataset.dec!
      const l = slipItems(); const x = l.find((i) => i.id === id)
      if (x) x.qty += inc ? 1 : -1
      slipSave(l.filter((i) => i.qty > 0)); dlg.innerHTML = body()
    }
  })
  document.addEventListener('slip:change', paint)
  paint()
  // global delegated handlers: product drawer + add to slip
  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement
    const open = t.closest<HTMLElement>('[data-open]')
    if (open) return openProduct(open.dataset.open!, open)
    const add = t.closest<HTMLElement>('[data-slip-add]')
    if (add) { slipAdd(add.dataset.slipAdd!); flyTo(add); add.animate?.([{ transform: 'scale(.96)' }, { transform: 'scale(1)' }], { duration: 200 }) }
  })
}

export function buildShell(app: HTMLElement, key: string): { main: HTMLElement } {
  app.innerHTML = `${header(key)}${menu(key)}<main id="main" tabindex="-1"></main>${footer()}`
  const main = app.querySelector<HTMLElement>('#main')!
  bindMenu(); bindTheme(); bindNews(); slipUI(); bindTear(app.querySelector<HTMLElement>('[data-tear]')!)
  const fascia = app.querySelector<HTMLElement>('[data-fascia]')!
  addEventListener('scroll', () => fascia.classList.toggle('is-stuck', scrollY > 8), { passive: true })
  setInterval(refreshPills, 30000)
  void safeGet
  void href
  return { main }
}
