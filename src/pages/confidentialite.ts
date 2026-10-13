import { pageHero } from '../core/ui.ts'

export function render(): string {
  return `${pageHero({ crumb: [{ label: 'Confidentialité' }], kicker: 'Vos données', title: 'Confidentialité', lede: 'Pas de cookies, pas de suivi.' })}
  <section class="section" style="padding-top:0"><div class="wrap article stack" style="--stack:1rem">
    <h2 class="h3">Ce que le site enregistre</h2><p>Rien sur un serveur. Votre navigateur garde seulement votre choix de thème (allumé ou éteint) et, le temps de la visite, votre bon de commande.</p>
    <h2 class="h3">Formulaires</h2><p>Les formulaires de contact et de commande n’envoient rien : ils ouvrent votre messagerie avec un message prérempli, que vous envoyez ou non.</p>
    <h2 class="h3">La lettre du fournil</h2><p>C’est une démonstration : l’adresse saisie n’est pas enregistrée.</p>
    <h2 class="h3">Liens externes</h2><p>Instagram, Facebook et Google Maps appliquent leurs propres règles.</p></div></section>`
}
