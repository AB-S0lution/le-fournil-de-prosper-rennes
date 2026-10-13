// Generates one HTML shell per page from src/data/pages.ts (run: npm run pages).
// The page body is rendered by src/pages/<key>.ts; this file only writes <head>, JSON-LD and the mount point.
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { pages } from '../src/data/pages.ts'
import { shop, SITE_URL, weeklyHours } from '../src/data/shop.ts'

const root = resolve(import.meta.dirname, '..')
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const spec = (days, h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens: h.open, closes: h.close })
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  '@id': SITE_URL + '#bakery',
  name: shop.name,
  description: shop.tagline,
  url: SITE_URL,
  telephone: '+33 2 99 67 31 73',
  email: shop.email,
  priceRange: '€',
  foundingDate: shop.openedOn,
  address: {
    '@type': 'PostalAddress',
    streetAddress: shop.street,
    postalCode: shop.postalCode,
    addressLocality: shop.city,
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: shop.geo.lat, longitude: shop.geo.lng },
  sameAs: [shop.instagram, shop.facebook],
  openingHoursSpecification: [
    spec(['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'], weeklyHours[1]),
    spec(['Sunday'], weeklyHours[0]),
  ],
}

const boot = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('fdp-theme');if(t==='dark'||t==='light')d.setAttribute('data-theme',t)}catch(e){}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;d.classList.add(rm?'rm':'js-motion');try{var c=sessionStorage.getItem('fdp-crepe');if(c){sessionStorage.removeItem('fdp-crepe');if(!rm){var o=JSON.parse(c);d.style.setProperty('--cx',o.x+'px');d.style.setProperty('--cy',o.y+'px');d.classList.add('is-entering')}}}catch(e){}})();`

let count = 0
for (const p of pages) {
  const url = SITE_URL + p.path
  const html = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>${esc(p.title)}</title>
    <meta name="description" content="${esc(p.description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="${esc(shop.name)}" />
    <meta property="og:title" content="${esc(p.title)}" />
    <meta property="og:description" content="${esc(p.description)}" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:card" content="summary" />
    <meta name="color-scheme" content="light dark" />
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#CBB89D" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1A1B24" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <script>${boot}</script>
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  </head>
  <body data-page="${p.key}"${p.slug ? ` data-slug="${p.slug}"` : ''}>
    <a class="skip-link" href="#main">Aller au contenu</a>
    <div id="app"></div>
    <div class="crepe" aria-hidden="true"></div>
    <noscript><p style="padding:2rem;font-family:system-ui">Le Fournil de Prosper, 42 rue Champion de Cicé, Rennes. Tél. 02 99 67 31 73. Ce site demande JavaScript pour afficher la carte et les horaires.</p></noscript>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`
  const out = resolve(root, p.file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  count++
}
console.log(`${count} HTML pages written`)
