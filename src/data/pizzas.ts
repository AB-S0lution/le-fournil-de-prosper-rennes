// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// Two real pizzas (31 août 2026). Six mock pizzas and a mock rotation of Mondays, all marked.

export interface Pizza {
  id: string
  name: string
  ingredients: string[]
  real: boolean
  source?: string
  veggie?: boolean
  note: string
}

export const pizzas: Pizza[] = [
  { id: 'mediterraneenne', name: 'La Méditerranéenne', ingredients: ['aubergine et courgette grillées', 'mozzarella', 'tomates confites', 'fromage frais', 'herbes de Provence'], real: true, veggie: true, source: 'https://www.instagram.com/p/Dcs36IOl9Mf/', note: 'Préparée sur place' },
  { id: 'americaine', name: 'L’Américaine', ingredients: ['sauce tomate', 'poulet rôti', 'poivrons', 'cheddar', 'cornichons'], real: true, source: 'https://www.instagram.com/p/Dcs36IOl9Mf/', note: 'Poulet et poivrons français, préparée sur place' },
  { id: 'bretonne', name: 'La Bretonne', ingredients: ['crème', 'oignons', 'pommes', 'andouille', 'emmental'], real: false, note: 'Idée de pizza (exemple)' },
  { id: 'vegetarienne', name: 'La Végétarienne', ingredients: ['sauce tomate', 'poivrons', 'champignons', 'olives', 'mozzarella'], real: false, veggie: true, note: 'Idée de pizza (exemple)' },
  { id: 'chevre-miel', name: 'La Chèvre-miel', ingredients: ['crème', 'chèvre', 'miel', 'noix', 'roquette'], real: false, veggie: true, note: 'Idée de pizza (exemple)' },
  { id: 'savoyarde', name: 'La Savoyarde', ingredients: ['crème', 'pommes de terre', 'lardons', 'reblochon', 'oignons'], real: false, note: 'Idée de pizza (exemple)' },
  { id: 'reine', name: 'La Reine', ingredients: ['sauce tomate', 'jambon blanc', 'champignons', 'mozzarella'], real: false, note: 'Idée de pizza (exemple)' },
  { id: 'margherita', name: 'La Margherita', ingredients: ['sauce tomate', 'mozzarella', 'basilic', 'huile d’olive'], real: false, veggie: true, note: 'Idée de pizza (exemple)' },
]

/** Mock rotation: which pizzas on which Monday. */
export const pizzaRotation: { iso: string; pizzaIds: string[]; real: boolean }[] = [
  { iso: '2026-08-31', pizzaIds: ['mediterraneenne', 'americaine'], real: true },
  { iso: '2026-10-19', pizzaIds: ['chevre-miel', 'reine'], real: false },
  { iso: '2026-10-26', pizzaIds: ['mediterraneenne', 'savoyarde'], real: false },
  { iso: '2026-11-02', pizzaIds: ['bretonne', 'margherita'], real: false },
  { iso: '2026-11-09', pizzaIds: ['americaine', 'vegetarienne'], real: false },
  { iso: '2026-11-16', pizzaIds: ['chevre-miel', 'savoyarde'], real: false },
]
