import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { art } from '../core/art.ts'
import { pageHero } from '../core/ui.ts'
import { gallery, galleryThemes } from '../data/gallery.ts'
import { photos, photoThemes, photoImg } from '../data/photos.ts'

export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Galerie' }], kicker: 'Photos et illustrations', title: 'La galerie du comptoir', lede: `${photos.length} photos d’illustration (Unsplash) et ${gallery.length} illustrations dessinées pour ce site. Aucune photo ne montre le commerce lui-même.`, art: 'croissant' })}
  <section class="section" style="padding-top:0" aria-labelledby="ph-gal"><div class="wrap">
    <h2 class="h2" id="ph-gal" data-split style="margin-bottom:10px">Photos d’illustration</h2>
    <p class="muted" style="margin:0 0 20px">Photos Unsplash (licence Unsplash), choisies pour l’ambiance. Ce ne sont pas des photos du Fournil de Prosper.</p>
    <div class="chips" role="group" aria-label="Filtrer les photos" style="margin-bottom:26px">${photoThemes.map((t, i) => `<button class="chip" type="button" aria-pressed="${i === 0}" data-pf="${t.id}">${esc(t.label)}</button>`).join('')}</div>
    <div class="photo-gal">${photos.map((p) => `<figure class="photo-tile" data-ptheme="${p.theme}" data-reveal>${photoImg(p)}<figcaption class="photo-cap">Photo d’illustration · <a href="${p.url}" rel="noopener" target="_blank">Unsplash</a></figcaption></figure>`).join('')}</div>
  </div></section>
  <section class="section" style="padding-top:0" aria-labelledby="il-gal"><div class="wrap">
    <h2 class="h2" id="il-gal" style="margin-bottom:20px">Illustrations originales</h2>
    <div class="chips" role="group" aria-label="Filtrer" style="margin-bottom:26px">${galleryThemes.map((t, i) => `<button class="chip" type="button" aria-pressed="${i === 0}" data-g="${t.id}">${esc(t.label)}</button>`).join('')}</div>
    <div class="gal" data-gal>${gallery.map((g) => `<button class="gal__tile" type="button" data-tone="${g.tone}" data-theme="${g.theme}" data-id="${g.id}" aria-label="Agrandir : ${esc(g.title)}">${art(g.illustration)}<div class="gal__cap">${esc(g.title)}</div></button>`).join('')}</div>
    <dialog class="lightbox" data-lb aria-label="Illustration agrandie"><div class="lightbox__card"><div class="lightbox__art" data-lb-art></div><div><h2 class="h3" data-lb-title></h2><p class="muted" data-lb-cap style="margin:6px 0 0"></p></div><button class="btn" type="button" data-lb-close>${icon('x')}Fermer</button></div></dialog>
  </div></section>`
}
export function init(main: HTMLElement): void {
  const tiles = Array.from(main.querySelectorAll<HTMLElement>('.gal__tile'))
  const chips = Array.from(main.querySelectorAll<HTMLElement>('[data-g]'))
  chips.forEach((c) => c.addEventListener('click', () => {
    chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)))
    tiles.forEach((t) => { t.hidden = c.dataset.g !== 'tout' && t.dataset.theme !== c.dataset.g })
  }))
  const pchips = Array.from(main.querySelectorAll<HTMLElement>('[data-pf]'))
  const ptiles = Array.from(main.querySelectorAll<HTMLElement>('[data-ptheme]'))
  pchips.forEach((c) => c.addEventListener('click', () => {
    pchips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)))
    ptiles.forEach((t) => { t.hidden = c.dataset.pf !== 'tout' && t.dataset.ptheme !== c.dataset.pf })
  }))
  const lb = main.querySelector<HTMLDialogElement>('[data-lb]')!
  tiles.forEach((t) => t.addEventListener('click', () => {
    const g = gallery.find((x) => x.id === t.dataset.id)!
    lb.querySelector('[data-lb-art]')!.innerHTML = art(g.illustration, g.title)
    lb.querySelector('[data-lb-title]')!.textContent = g.title
    lb.querySelector('[data-lb-cap]')!.textContent = g.caption
    lb.showModal()
  }))
  lb.addEventListener('click', (e) => { if (e.target === lb || (e.target as Element).closest('[data-lb-close]')) lb.close() })
}
