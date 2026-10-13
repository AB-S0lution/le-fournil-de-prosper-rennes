// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// Real Flankies: October 2026 (recipe layers), August 2026 (citron meringué, layer details are illustrative),
// Vanille (month unknown). The other nine months are "idée de Flankie (exemple)" and are labelled as such.

export interface FlankieLayer {
  id: string
  name: string
  copy: string
  /** main colour (illustration pigment) */
  color: string
  /** shading colour */
  shade: string
}

export interface Flankie {
  id: string
  /** 1-12 or null when unknown */
  month: number | null
  year: number | null
  monthLabel: string
  name: string
  flavour: string
  until?: string
  status: 'current' | 'past' | 'idea'
  layers: [FlankieLayer, FlankieLayer, FlankieLayer]
  real: boolean
  /** true only when the layer list itself comes from the bakery's post */
  layersReal: boolean
  source?: string
  note?: string
}

const L = (id: string, name: string, copy: string, color: string, shade: string): FlankieLayer => ({ id, name, copy, color, shade })

export const flankies: Flankie[] = [
  {
    id: 'octobre-2026', month: 10, year: 2026, monthLabel: 'Octobre 2026', name: 'Pomme, poire, noisette', flavour: 'pâte à cookie, compote, flan praliné',
    until: 'Jusqu’au 31', status: 'current', real: true, layersReal: true, source: 'https://www.instagram.com/p/DeR8nVtCJRP/',
    layers: [
      L('cookie', 'Pâte à cookie', 'Une base de cookie cuite avant tout le reste, dorée sur les bords.', '#B5772F', '#8A5520'),
      L('compote', 'Compote pomme-poire-noisette', 'Une compote maison versée sur le cookie, qui se pose en tremblant.', '#D9B25C', '#A88434'),
      L('flan', 'Appareil à flan praliné', 'Le flan praliné remplit jusqu’au bord, puis cuit jusqu’au caramel.', '#E7C46B', '#B5772F'),
    ],
  },
  {
    id: 'aout-2026', month: 8, year: 2026, monthLabel: 'Août 2026', name: 'Citron meringué', flavour: 'cookie, crème citron, meringue',
    until: 'Jusqu’au 31 août', status: 'past', real: true, layersReal: false, source: 'https://www.instagram.com/p/DcBINa1F3u4/',
    note: 'Le Flankie d’août était au citron meringué, disponible jusqu’au 31 août. Le détail des couches est une illustration.',
    layers: [
      L('cookie', 'Pâte à cookie', 'La base du Flankie, comme chaque mois.', '#B5772F', '#8A5520'),
      L('creme', 'Crème au citron', 'Une crème bien acidulée, qui réveille le cookie.', '#E9D36A', '#C4A83A'),
      L('meringue', 'Meringue', 'Une meringue légèrement dorée au chalumeau.', '#F4EFE6', '#D9CDB8'),
    ],
  },
  {
    id: 'vanille', month: null, year: null, monthLabel: 'Mois inconnu', name: 'Vanille', flavour: 'cookie, flan vanille',
    status: 'past', real: true, layersReal: false, source: 'https://www.facebook.com/lefournildeprosper/videos/flankie-vanille/1501638771465253',
    note: 'Une vidéo du fournil présente un « Flankie Vanille ». Le mois n’est pas connu, les couches sont illustrées.',
    layers: [
      L('cookie', 'Pâte à cookie', 'La base de cookie.', '#B5772F', '#8A5520'),
      L('creme', 'Crème vanille', 'Une crème à la vanille bien parfumée.', '#F0DFA2', '#C9B26A'),
      L('flan', 'Appareil à flan', 'Le flan, cuit lentement jusqu’à la coloration.', '#E7C46B', '#B5772F'),
    ],
  },
  {
    id: 'nov-2026', month: 11, year: 2026, monthLabel: 'Novembre 2026', name: 'Marron, vanille', flavour: 'cookie, crème de marron, flan vanille',
    status: 'idea', real: false, layersReal: false,
    layers: [
      L('cookie', 'Pâte à cookie', 'Cookie aux éclats de chocolat.', '#B5772F', '#8A5520'),
      L('marron', 'Crème de marron', 'Une couche de marron, douce et dense.', '#9A6B45', '#6E4628'),
      L('flan', 'Flan vanille', 'Le flan, tout en douceur.', '#E7C46B', '#B5772F'),
    ],
  },
  {
    id: 'dec-2026', month: 12, year: 2026, monthLabel: 'Décembre 2026', name: 'Chocolat, caramel beurre salé', flavour: 'cookie, caramel, flan chocolat',
    status: 'idea', real: false, layersReal: false,
    layers: [
      L('cookie', 'Pâte à cookie', 'Cookie chocolat noir.', '#7A4A2A', '#4F2D18'),
      L('caramel', 'Caramel beurre salé', 'Un caramel qui file, relevé de fleur de sel.', '#C8873A', '#9A6228'),
      L('flan', 'Flan chocolat', 'Un flan chocolat bien lisse.', '#8B5A3C', '#5E3A24'),
    ],
  },
  {
    id: 'jan-2027', month: 1, year: 2027, monthLabel: 'Janvier 2027', name: 'Coco, passion', flavour: 'cookie coco, gelée passion, flan coco',
    status: 'idea', real: false, layersReal: false,
    layers: [
      L('cookie', 'Cookie à la noix de coco', 'Un cookie coco bien doré.', '#C99A55', '#9A6E32'),
      L('passion', 'Gelée passion', 'Une gelée acidulée.', '#E8B83E', '#BE8A12'),
      L('flan', 'Flan coco', 'Un flan coco, onctueux.', '#F2E5C0', '#C9B26A'),
    ],
  },
  {
    id: 'fev-2027', month: 2, year: 2027, monthLabel: 'Février 2027', name: 'Framboise, chocolat blanc', flavour: 'cookie, framboise, flan chocolat blanc',
    status: 'idea', real: false, layersReal: false,
    layers: [
      L('cookie', 'Pâte à cookie', 'Cookie au beurre.', '#B5772F', '#8A5520'),
      L('framboise', 'Framboises', 'Des framboises écrasées.', '#C9483F', '#9C2E27'),
      L('flan', 'Flan chocolat blanc', 'Un flan blanc, tout doux.', '#F2E6C9', '#CDB989'),
    ],
  },
  {
    id: 'mar-2027', month: 3, year: 2027, monthLabel: 'Mars 2027', name: 'Pomme, cannelle', flavour: 'cookie, pomme cannelle, flan vanille',
    status: 'idea', real: false, layersReal: false,
    layers: [
      L('cookie', 'Pâte à cookie', 'Cookie épicé à la cannelle.', '#B5772F', '#8A5520'),
      L('pomme', 'Pommes à la cannelle', 'Des dés de pomme caramélisés.', '#D9B25C', '#A88434'),
      L('flan', 'Flan vanille', 'Le flan de la maison.', '#E7C46B', '#B5772F'),
    ],
  },
  {
    id: 'avr-2027', month: 4, year: 2027, monthLabel: 'Avril 2027', name: 'Fraise, pistache', flavour: 'cookie, fraise, flan pistache',
    status: 'idea', real: false, layersReal: false,
    layers: [
      L('cookie', 'Pâte à cookie', 'Cookie sablé.', '#B5772F', '#8A5520'),
      L('fraise', 'Compotée de fraises', 'Des fraises cuites doucement.', '#C9483F', '#9C2E27'),
      L('flan', 'Flan pistache', 'Un flan vert tendre.', '#A9B77A', '#6F7E48'),
    ],
  },
  {
    id: 'mai-2027', month: 5, year: 2027, monthLabel: 'Mai 2027', name: 'Abricot, amande', flavour: 'cookie, abricot, flan amande',
    status: 'idea', real: false, layersReal: false,
    layers: [
      L('cookie', 'Pâte à cookie', 'Cookie aux amandes.', '#B5772F', '#8A5520'),
      L('abricot', 'Abricots rôtis', 'Des abricots rôtis au sucre.', '#E39A3F', '#B26F1C'),
      L('flan', 'Flan à l’amande', 'Un flan parfumé à l’amande.', '#EBD28E', '#B5772F'),
    ],
  },
  {
    id: 'jun-2027', month: 6, year: 2027, monthLabel: 'Juin 2027', name: 'Fraise, vanille', flavour: 'cookie, fraise, flan vanille',
    status: 'idea', real: false, layersReal: false,
    layers: [
      L('cookie', 'Pâte à cookie', 'Cookie au beurre.', '#B5772F', '#8A5520'),
      L('fraise', 'Fraises fraîches', 'Des fraises coupées à la main.', '#C9483F', '#9C2E27'),
      L('flan', 'Flan vanille', 'Le flan de la maison.', '#E7C46B', '#B5772F'),
    ],
  },
  {
    id: 'sep-2026', month: 9, year: 2026, monthLabel: 'Septembre 2026', name: 'Poire, chocolat', flavour: 'cookie chocolat, poire, flan',
    status: 'idea', real: false, layersReal: false,
    note: 'Le Flankie de septembre 2026 n’est pas documenté. Cette fiche est un exemple.',
    layers: [
      L('cookie', 'Cookie chocolat', 'Cookie au chocolat noir.', '#7A4A2A', '#4F2D18'),
      L('poire', 'Poires pochées', 'Des poires pochées au sirop.', '#D8C98A', '#A89A58'),
      L('flan', 'Flan vanille', 'Le flan de la maison.', '#E7C46B', '#B5772F'),
    ],
  },
]

export const currentFlankie = flankies.find((f) => f.status === 'current') ?? flankies[0]
