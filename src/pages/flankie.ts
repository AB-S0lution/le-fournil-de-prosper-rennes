import { photo, photoFig } from '../data/photos.ts'
import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { art } from '../core/art.ts'
import { pageHero, flankieStage, bindFlankie, sectionHead, mockTag, realTag, accordion, route } from '../core/ui.ts'
import { flankies, currentFlankie } from '../data/flankies.ts'
import type { Flankie } from '../data/flankies.ts'

const mini = (f: Flankie): string => `<span class="carnet__mini">${f.layers.map((l) => `<i style="--c:${l.color}"></i>`).join('')}</span>`

export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Le Flankie du mois' }], kicker: 'La signature du fournil', title: 'Le Flankie, couche par couche', lede: 'Un mélange de flan et de cookie qui change chaque mois. Faites défiler : le gâteau se monte sous vos yeux.', art: 'flankie' })}
  ${flankieStage(currentFlankie)}
  <section class="section"><div class="wrap">
    ${sectionHead('Le carnet', 'Les Flankies, mois par mois', 'Trois Flankies sont des vrais. Les autres mois sont des idées d’exemple, clairement marquées.')}
    <div class="carnet" role="tablist" aria-label="Choisir un Flankie" data-carnet>${flankies.map((f, i) => `<button class="carnet__tab" role="tab" type="button" aria-selected="${f === currentFlankie}" data-i="${i}"><b>${esc(f.name)}</b><small>${esc(f.monthLabel)}</small>${mini(f)}${f.real ? realTag('Vrai') : mockTag('Idée (exemple)')}</button>`).join('')}</div>
    <div class="carnet__detail" data-detail aria-live="polite"></div>
  </div></section>
  <section class="section" style="padding-top:0" aria-label="Photos d’ambiance"><div class="wrap photo-trio">${['cookies-plaque', 'tarte-citron', 'chocolat-eclats'].map((s) => photoFig(photo(s), 'photo-tile')).join('')}</div></section>
  <section class="section section--surface"><div class="wrap cols-2 cols-2--wide-right">
    <div><p class="label" data-reveal>Le prochain</p><h2 class="h2" data-split style="margin:12px 0 14px">Quel Flankie le mois prochain ?</h2><p class="lede" data-reveal>Une idée de sondage pour la démonstration : votez, rien n’est enregistré.</p></div>
    <div class="poll" data-poll role="group" aria-label="Sondage d’exemple">${['Tarte au citron', 'Caramel beurre salé', 'Fraise et vanille', 'Chocolat et noisette'].map((o) => `<button class="poll__opt" type="button" aria-pressed="false"><span>${o}</span><span class="tnum" data-pct></span></button>`).join('')}<p class="note-demo" data-poll-note>Sondage d’exemple, aucune donnée enregistrée.</p></div>
  </div></section>
  <section class="section"><div class="wrap cols-2 cols-2--wide-right">
    <div><p class="label">Questions</p><h2 class="h2" style="margin-top:12px">Le Flankie en bref</h2></div>
    ${accordion([
      { q: 'C’est quoi, un Flankie ?', a: 'Un mélange de flan et de cookie, préparé par le fournil. Il change chaque mois.' },
      { q: 'Où le trouver ?', a: `Au comptoir du 42 rue Champion de Cicé. <a href="${route('infos')}">Voir les horaires</a>.` },
      { q: 'Combien de temps dure chaque Flankie ?', a: 'Un mois, parfois jusqu’à la fin du mois. Le fournil l’annonce sur ses réseaux.' },
      { q: 'Quels sont les allergènes ?', a: 'Gluten, lait, œufs et fruits à coque selon le mois. Demandez au comptoir.' },
    ], 0)}
  </div></section>`
}

export function init(main: HTMLElement): void {
  bindFlankie(main)
  const detail = main.querySelector<HTMLElement>('[data-detail]')!
  const tabs = Array.from(main.querySelectorAll<HTMLButtonElement>('.carnet__tab'))
  const show = (i: number): void => {
    const f = flankies[i]
    detail.innerHTML = `<div class="medal" style="background:var(--band);max-width:220px">${art('flankie')}</div><div><h3 class="h3">${esc(f.name)}</h3><p class="muted">${esc(f.monthLabel)} · ${esc(f.flavour)}</p>
      <ol class="ticklist" style="list-style:none;padding:0">${f.layers.map((l, k) => `<li>${icon('check')}<span><b>${k + 1}. ${esc(l.name)}</b><br><span class="muted">${esc(l.copy)}</span></span></li>`).join('')}</ol>
      ${f.note ? `<p class="note-demo">${esc(f.note)}</p>` : ''}${f.real ? '' : '<p class="note-demo">Idée de Flankie pour la démonstration, pas une annonce du fournil.</p>'}</div>`
    tabs.forEach((t, k) => t.setAttribute('aria-selected', String(k === i)))
  }
  tabs.forEach((t) => t.addEventListener('click', () => show(Number(t.dataset.i))))
  show(flankies.indexOf(currentFlankie))
  const poll = Array.from(main.querySelectorAll<HTMLButtonElement>('.poll__opt'))
  const base = [32, 28, 22, 18]
  poll.forEach((b, i) => b.addEventListener('click', () => {
    poll.forEach((x, k) => { x.setAttribute('aria-pressed', String(k === i)); x.querySelector('[data-pct]')!.textContent = `${base[k] + (k === i ? 4 : 0)} %` })
  }))
}
