import { photo, photoFig } from '../data/photos.ts'
import { cardMedia } from '../core/ui.ts'
import { esc } from '../core/dom.ts'
import { icon } from '../core/icons.ts'
import { pageHero, sectionHead, mockTag } from '../core/ui.ts'
import { shop } from '../data/shop.ts'

const near = [['Roazhon Park', 'Le stade du Stade Rennais, à environ 900 m. Les soirs de match, le quartier se remplit.'], ['Le Mabilay', 'La tour de télécommunications de Louis Arretche (1971-1973), à environ 800 m.'], ['La Prévalaye', 'Environ 400 hectares de campagne, d’étangs et de chemins de halage, sur le bord ouest.'], ['Métro Cleunay', 'Ligne B, ouverte en septembre 2022, à 4 minutes à pied du fournil.']]
const ritualPhotos = ['croissants-tas', 'sandwich', 'baguette']
const rituals = [['Avant la classe', 'Le groupe scolaire est dans la rue : pain au lait et baguette sur le chemin.'], ['Le midi', 'Les bureaux de La Courrouze passent au coin snacking.'], ['Le dimanche matin', 'Quand plusieurs boulangeries sont fermées, le fournil ouvre de 7h30 à 13h.']]
export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Le quartier' }], kicker: 'Cleunay, Rennes', title: 'Le quartier du fournil', lede: 'Cleunay est né après la guerre. La rue Champion de Cicé en est aujourd’hui l’axe commerçant : des immeubles, des commerces, une école.', art: 'loaf' })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2">
    <div class="mapbox" data-reveal><svg viewBox="0 0 400 300" role="img" aria-label="Schéma du quartier : le fournil, la rue Champion de Cicé, le métro Cleunay, Roazhon Park, la Prévalaye" focusable="false">
      <rect width="400" height="300" fill="none"/><path d="M20 250 C120 230 220 170 380 150" stroke="#22232f" stroke-width="14" fill="none" stroke-linecap="round" opacity=".18"/>
      <path d="M40 40 C100 90 160 100 250 130" stroke="#5c7c99" stroke-width="10" fill="none" stroke-linecap="round" opacity=".5"/>
      <circle cx="200" cy="185" r="14" fill="#a9472a"/><text x="200" y="166" text-anchor="middle" font-size="14" font-weight="700" fill="#22232f">Le fournil</text>
      <circle cx="150" cy="215" r="8" fill="#22232f"/><text x="150" y="240" text-anchor="middle" font-size="12" fill="#22232f">Métro Cleunay</text>
      <circle cx="320" cy="160" r="8" fill="#22232f"/><text x="320" y="144" text-anchor="middle" font-size="12" fill="#22232f">Roazhon Park</text>
      <circle cx="70" cy="90" r="8" fill="#22232f"/><text x="76" y="76" text-anchor="middle" font-size="12" fill="#22232f">La Prévalaye</text>
      <text x="260" y="262" font-size="12" fill="#22232f" opacity=".7">Schéma indicatif, pas à l’échelle</text></svg></div>
    <div class="stack" style="--stack:1rem"><h2 class="h2" data-split>${esc(shop.street)}</h2><p class="lede">Cleunay – Arsenal-Redon compte environ 14 000 habitants, sur la rive gauche de la Vilaine. Ici, le coin de rue a une boulangerie depuis 1987.</p>
      <a class="btn" href="${shop.mapsUrl}" rel="noopener" target="_blank">Itinéraire${icon('arrowUpRight')}</a></div></div></section>
  <div class="wrap">${photoFig(photo('boutique-soir'), 'photo-slim')}</div>
  <section class="section section--band"><div class="wrap">${sectionHead('Autour', 'À deux pas, ou presque')}
    <div class="grid-auto">${near.map(([t, d]) => `<article class="card" data-reveal style="color:var(--ink)"><h3 class="h3">${esc(t)}</h3><p class="muted" style="margin:8px 0 0">${esc(d)}</p></article>`).join('')}</div></div></section>
  <section class="section"><div class="wrap">${sectionHead('Vos rituels de quartier', 'Une journée, trois habitudes', 'Texte éditorial d’exemple.')}
    <div class="grid-auto">${rituals.map(([t, d], i) => `<article class="card" data-reveal>${cardMedia(photo(ritualPhotos[i]))}<h3 class="h3">${esc(t)}</h3><p class="muted" style="margin:8px 0 10px">${esc(d)}</p>${mockTag('Exemple')}</article>`).join('')}</div></div></section>`
}
