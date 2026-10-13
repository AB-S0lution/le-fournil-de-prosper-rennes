// SAMPLE DATA: mock content for the demo site. ROLES ONLY: no invented names or faces.
// The only public name is "Prosper", the gérant.

export interface TeamRole {
  id: string
  role: string
  text: string
  real: boolean
}

export const team: TeamRole[] = [
  { id: 'gerant', role: 'Gérant', text: 'Prosper, boulanger pendant 14 ans avant de se lancer.', real: true },
  { id: 'boulanger', role: 'Boulanger·ère', text: 'Les fournées du matin et la cuisson en continu.', real: false },
  { id: 'patissier', role: 'Pâtissier·ère', text: 'Le Flankie du mois, les gâteaux personnalisés, les bûches.', real: false },
  { id: 'vendeuses', role: 'Vendeuses', text: 'Au comptoir : le sourire que citent les clients.', real: true },
  { id: 'apprenti-boulanger', role: 'Apprenti·e boulanger', text: 'La relève, formée au fournil.', real: false },
  { id: 'apprenti-patissier', role: 'Apprenti·e pâtissier', text: 'La relève, côté pâtisserie.', real: false },
]
