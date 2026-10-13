import { icon } from '../core/icons.ts'
import { pageHero, sectionHead } from '../core/ui.ts'
import { shop, weeklyHours, dayNames, fmtTime } from '../data/shop.ts'

export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Contact' }], kicker: 'Nous joindre', title: 'Une question, une commande ?', lede: 'Le plus simple : le téléphone. Sinon, un message.', art: 'cafe' })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2">
    <div class="stack" style="--stack:1.2rem"><ul class="ticklist"><li>${icon('phone')}<span><a class="h3" href="tel:${shop.phoneTel}">${shop.phone}</a></span></li><li>${icon('envelope')}<a href="mailto:${shop.email}">${shop.email}</a></li><li>${icon('instagram')}<a href="${shop.instagram}" rel="noopener" target="_blank">${shop.instagramHandle}</a></li><li>${icon('facebook')}<a href="${shop.facebook}" rel="noopener" target="_blank">Facebook</a></li><li>${icon('pin')}<span>${shop.street}, ${shop.postalCode} ${shop.city}</span></li></ul>
      <p><a class="btn btn--ghost" href="${shop.mapsUrl}" rel="noopener" target="_blank">Itinéraire${icon('arrowUpRight')}</a></p>
      <table class="hours"><caption class="sr-only">Horaires</caption><tbody>${[1, 2, 3, 4, 5, 6, 0].map((d) => { const h = weeklyHours[d]; return `<tr><th scope="row">${dayNames[d]}</th><td class="${h ? '' : 'closed'}">${h ? `${fmtTime(h.open)} à ${fmtTime(h.close)}` : 'Fermé'}</td></tr>` }).join('')}</tbody></table></div>
    <form class="form card" data-contact novalidate aria-label="Message au fournil"><h2 class="h3">Un message</h2>
      <div class="field"><label for="c-name">Votre nom</label><input id="c-name" name="name" autocomplete="name"><span class="err" data-err="name" role="alert"></span></div>
      <div class="field"><label for="c-mail">Votre e-mail</label><input id="c-mail" name="mail" type="email" inputmode="email" autocomplete="email"><span class="err" data-err="mail" role="alert"></span></div>
      <div class="field"><label for="c-msg">Votre message</label><textarea id="c-msg" name="msg"></textarea><span class="err" data-err="msg" role="alert"></span></div>
      <button class="btn" type="submit">Ouvrir ma messagerie${icon('envelope')}</button><p class="muted" style="margin:0;font-size:.88rem">Rien n’est envoyé par ce site : le bouton ouvre votre messagerie.</p></form>
  </div></section>
  <section class="section section--band"><div class="wrap">${sectionHead('Passer nous voir', 'Ici, au coin de la rue')}<p>${shop.transport.metro}.</p></div></section>`
}
export function init(main: HTMLElement): void {
  const f = main.querySelector<HTMLFormElement>('[data-contact]')!
  f.addEventListener('submit', (e) => {
    e.preventDefault()
    const d = new FormData(f)
    const name = String(d.get('name') ?? '').trim(), mail = String(d.get('mail') ?? '').trim(), msg = String(d.get('msg') ?? '').trim()
    const set = (k: string, t: string): void => { f.querySelector<HTMLElement>(`[data-err="${k}"]`)!.textContent = t }
    set('name', name ? '' : 'Indiquez votre nom.')
    set('mail', /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail) ? '' : 'Cette adresse ne semble pas valide. Exemple : prenom@exemple.fr')
    set('msg', msg ? '' : 'Écrivez quelques mots.')
    if (!name || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail)) return
    location.href = `mailto:${shop.email}?subject=${encodeURIComponent('Message depuis le site')}&body=${encodeURIComponent(`${msg}\n\n${name} (${mail})`)}`
  })
}
