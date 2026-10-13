import { pageHero } from '../core/ui.ts'
import { shop } from '../data/shop.ts'

export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Mentions légales' }], kicker: 'Informations légales', title: 'Mentions légales' })}
  <section class="section" style="padding-top:0"><div class="wrap cols-2 cols-2--wide-left"><div class="stack article" style="--stack:1rem">
    <p class="note-demo">Ce site est une démonstration réalisée à titre de proposition. Il n’a pas été commandé par le commerce. Les prix, certaines descriptions et les articles marqués « Exemple » sont fictifs.</p>
    <h2 class="h3">Éditeur</h2><dl class="facts"><div><dt>Société</dt><dd>${shop.legalName}</dd></div><div><dt>Capital</dt><dd>${shop.capital}</dd></div><div><dt>SIREN</dt><dd>${shop.siren}</dd></div><div><dt>SIRET</dt><dd>${shop.siret}</dd></div><div><dt>Immatriculation</dt><dd>${shop.rcs}</dd></div><div><dt>TVA</dt><dd>${shop.vat}</dd></div><div><dt>Siège</dt><dd>${shop.street}, ${shop.postalCode} ${shop.city}</dd></div><div><dt>Téléphone</dt><dd>${shop.phone}</dd></div><div><dt>E-mail</dt><dd>${shop.email}</dd></div></dl>
    <h2 class="h3">Directeur de publication</h2><p>À renseigner avec le commerce.</p>
    <h2 class="h3">Hébergement</h2><p>GitHub Pages (GitHub, Inc.).</p>
    <h2 class="h3">Illustrations</h2><p>Toutes les illustrations sont des créations originales pour ce site. Aucune photographie ni logo du commerce n’est reproduit.</p>
    <h2 class="h3">Avis cités</h2><p>Les extraits d’avis sont cités sans nom d’auteur, avec la plateforme d’origine.</p></div></div></section>`
}
