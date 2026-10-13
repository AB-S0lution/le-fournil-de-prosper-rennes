import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { art } from '../core/art.ts'
import { pageHero, sectionHead, mockTag, realTag, datePicker, slipItems, slipText, weekdayName, route } from '../core/ui.ts'
import { orderOffers } from '../data/events.ts'
import { shop, formatLongDate } from '../data/shop.ts'
import { productById } from '../data/products.ts'

const catLabel: Record<string, string> = { gateaux: 'Gâteaux', minis: 'Minis et plateaux', traiteur: 'Traiteur', mariage: 'Mariage', fetes: 'Fêtes' }
export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Commandes et événements' }], kicker: 'Sur commande', title: 'Un gâteau pour la fête', lede: 'Anniversaires, number cakes, plateaux de mini-viennoiseries, pièces de mariage. Mini-viennoiseries : -10 % dès 20 pièces. Commande par téléphone, e-mail ou message.', art: 'number',
    extra: `<div class="hero__cta"><a class="btn" href="tel:${shop.phoneTel}">${icon('phone')}${shop.phone}</a><a class="btn btn--ghost" href="#devis">Préparer ma demande</a></div>` })}
  <section class="section" style="padding-top:0"><div class="wrap">${sectionHead('Les formules', `${orderOffers.length} façons de commander`, 'Délais, tailles et prix sont des exemples (à confirmer avec le fournil).')}
    <div class="grid-auto">${orderOffers.map((o) => `<article class="card" data-reveal><div style="background:var(--band);border-radius:10px;padding:12px 26%">${art(o.illustration === 'galette' ? 'galette' : o.illustration === 'sapin' ? 'sapin' : o.illustration === 'buche' ? 'buche' : o.illustration === 'surprise' ? 'surprise' : o.illustration === 'tray' ? 'tray' : o.illustration === 'minis' ? 'minis' : o.illustration === 'wedding' ? 'wedding' : o.illustration === 'number' ? 'number' : 'cake')}</div>
      <p class="label" style="margin-top:12px">${esc(catLabel[o.category])}</p><h3 class="h3">${esc(o.title)}</h3><p class="muted" style="margin:6px 0 10px">${esc(o.description)}</p>
      <p style="margin:0;font-size:.92rem">${esc(o.sizes.join(' · '))}</p><p class="muted" style="margin:4px 0 10px;font-size:.92rem">Délai : ${esc(o.leadTime)}</p>
      ${o.real ? realTag('Offre réelle') : mockTag('Exemple')} ${o.note ? `<p class="note-demo" style="margin-top:10px">${esc(o.note)}</p>` : ''}</article>`).join('')}</div></div></section>

  <section class="section section--surface" id="devis"><div class="wrap cols-2">
    <div><p class="label">Votre demande</p><h2 class="h2" data-split style="margin:12px 0 14px">Choisissez une date</h2>
      <p class="lede">Le mercredi et les jours de fermeture sont grisés. Le dimanche, retrait entre 7h30 et 13h.</p><div data-cal style="margin-top:20px"></div></div>
    <form class="form card" data-quote novalidate aria-label="Demande de devis">
      <div class="field"><label for="q-name">Votre nom</label><input id="q-name" name="name" autocomplete="name" required><span class="err" data-err="name" role="alert"></span></div>
      <div class="field"><label for="q-tel">Téléphone</label><input id="q-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="06 12 34 56 78"></div>
      <div class="field"><label for="q-type">Type de commande</label><select id="q-type" name="type">${orderOffers.map((o) => `<option>${esc(o.title)}</option>`).join('')}</select></div>
      <div class="field"><label for="q-date">Date de retrait</label><input id="q-date" name="date" readonly placeholder="Choisissez dans le calendrier"><span class="err" data-err="date" role="alert"></span></div>
      <div class="field"><label for="q-time">Heure</label><select id="q-time" name="time" disabled><option>Choisissez d’abord une date</option></select></div>
      <div class="field"><label for="q-msg">Votre message</label><textarea id="q-msg" name="msg" placeholder="Nombre de personnes, parfum, allergies, message à écrire">${esc(slipItems().length ? 'Produits du bon de commande :\n' + slipText() : '')}</textarea></div>
      <button class="btn" type="submit">Ouvrir ma messagerie${icon('envelope')}</button>
      <p class="muted" style="margin:0;font-size:.88rem">Aucun envoi automatique : le bouton ouvre votre messagerie avec le message prêt.</p>
    </form>
  </div></section>
  <section class="section"><div class="wrap cols-2"><div><h2 class="h2">Comment commander</h2></div>
    <ul class="ticklist"><li>${icon('phone')}<span>Par téléphone : <a href="tel:${shop.phoneTel}">${shop.phone}</a></span></li><li>${icon('envelope')}<span>Par e-mail : <a href="mailto:${shop.email}">${shop.email}</a></span></li><li>${icon('instagram')}<span>Par message sur <a href="${shop.instagram}" rel="noopener" target="_blank">Instagram</a></span></li><li>${icon('storefront')}<span>Retrait en boutique, au ${shop.street}.</span></li><li>${icon('users')}<span>-10 % dès 20 mini-viennoiseries, pour les entreprises, séminaires et pots de départ.</span></li></ul></div></div></section>
  <p class="wrap" style="padding-bottom:40px"><a class="link-arrow" href="${route('fetes')}">La carte des fêtes${icon('arrowRight')}</a></p>`
}

export function init(main: HTMLElement): void {
  const host = main.querySelector<HTMLElement>('[data-cal]')!
  const dateIn = main.querySelector<HTMLInputElement>('#q-date')!
  const timeSel = main.querySelector<HTMLSelectElement>('#q-time')!
  datePicker(host, (iso, times) => {
    dateIn.value = `${formatLongDate(iso)}`
    dateIn.dataset.iso = iso
    timeSel.disabled = false
    timeSel.innerHTML = times.map((t) => `<option>${t.replace(':', 'h')}</option>`).join('')
    void weekdayName
  })
  const f = main.querySelector<HTMLFormElement>('[data-quote]')!
  f.addEventListener('submit', (e) => {
    e.preventDefault()
    const d = new FormData(f)
    const name = String(d.get('name') ?? '').trim()
    const errN = f.querySelector<HTMLElement>('[data-err="name"]')!
    const errD = f.querySelector<HTMLElement>('[data-err="date"]')!
    errN.textContent = name ? '' : 'Indiquez votre nom pour que le fournil puisse vous répondre.'
    errD.textContent = dateIn.value ? '' : 'Choisissez une date dans le calendrier.'
    if (!name || !dateIn.value) return
    const body = `Bonjour,\n\nJe souhaite commander : ${d.get('type')}\nPour le : ${dateIn.value} à ${timeSel.value}\nNom : ${name}\nTéléphone : ${d.get('tel') ?? ''}\n\n${d.get('msg') ?? ''}\n\nMerci !`
    location.href = `mailto:${shop.email}?subject=${encodeURIComponent('Demande de commande')}&body=${encodeURIComponent(body)}`
  })
  void productById
}
