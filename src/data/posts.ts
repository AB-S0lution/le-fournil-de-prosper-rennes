// SAMPLE DATA: mock content for the demo site. Real facts are marked { real: true, source }.
// ~14 posts paraphrase the bakery's real posts (date + source). 4 are mock editorial (mock: true).
// Quotes in « » are exact; everything else is paraphrased.

export type PostTag = 'nouveauté' | 'Flankie' | 'saison' | 'coulisses' | 'quartier'

export interface Post {
  slug: string
  title: string
  date: string
  tag: PostTag
  excerpt: string
  body: string[]
  illustration: string
  real: boolean
  mock?: boolean
  source?: string
  related: string[]
}

export const postTags: PostTag[] = ['nouveauté', 'Flankie', 'saison', 'coulisses', 'quartier']

export const posts: Post[] = [
  {
    slug: 'flankie-octobre-2026', title: 'Le Flankie d’octobre : pomme, poire, noisette', date: '2026-10-09', tag: 'Flankie',
    excerpt: 'Pâte à cookie, compote pomme-poire-noisette, appareil à flan praliné. Jusqu’au 31, pas un jour de plus.',
    body: ['Le Flankie d’octobre est une pâte à cookie, une compote pomme-poire-noisette et un appareil à flan praliné. Il est disponible jusqu’au 31.', 'Le Flankie change chaque mois : on le sert pendant quatre semaines, puis il passe dans le carnet.'],
    illustration: 'flankie', real: true, source: 'https://www.instagram.com/p/DeR8nVtCJRP/', related: ['flankie-aout-2026', 'rentree-pizzas-2026'],
  },
  {
    slug: 'prosper-metier-exigeant', title: 'Un mot de Prosper sur le métier', date: '2026-09-15', tag: 'coulisses',
    excerpt: 'Le gérant prend la parole sur la boulangerie artisanale et sur le respect entre le comptoir et les clients.',
    body: ['Le 15 septembre 2026, Prosper a écrit un message sur l’exigence du métier : « Le monde de la boulangerie artisanale souffre, et ce depuis des années. »', 'Il y invite les clients à pousser la porte de leur boulanger pour en discuter. Le message a reçu beaucoup de réponses dans le quartier.'],
    illustration: 'loaf', real: true, source: 'https://www.instagram.com/p/DdTULkQlyvV/', related: ['trusttheprocess-viennoiserie', 'levain-t150-maison-lucie'],
  },
  {
    slug: 'tennis-ball-open-rennes', title: 'Le Tennis Ball de l’Open de Rennes', date: '2026-09-13', tag: 'saison',
    excerpt: 'Un trompe-l’œil de balle de tennis : cheesecake sur sablé breton et cœur framboise, du 17 au 20 septembre.',
    body: ['Pour l’Open de Rennes, le fournil a fabriqué un trompe-l’œil : un cheesecake sur une base de sablé breton, avec un cœur framboise.', 'Édition limitée du 17 au 20 septembre 2026, à réserver par téléphone ou en message.'],
    illustration: 'tennis', real: true, source: 'https://www.instagram.com/p/DdO9726F17w/', related: ['rentree-pizzas-2026', 'flankie-octobre-2026'],
  },
  {
    slug: 'levain-t150-maison-lucie', title: 'Le levain T150, les confitures de Maison Lucie', date: '2026-09-08', tag: 'nouveauté',
    excerpt: 'Un sondage auprès des clients a donné un pain au levain pur, farine T150, et des confitures peu sucrées.',
    body: ['Les clients voulaient du pain au levain : le fournil a lancé un pain au levain pur à la farine T150, d’abord le dimanche seulement.', 'La même semaine arrivent les confitures de Maison Lucie, six parfums en pot de 150 g, et l’offre 5 crêpes + 1 pot pour 10 €.'],
    illustration: 'levain', real: true, source: 'https://www.instagram.com/p/DdDnvQxlzmI/', related: ['crepes-indispensables-n1', 'prosper-metier-exigeant'],
  },
  {
    slug: 'rentree-pizzas-2026', title: 'Rentrée : deux pizzas, chaque lundi', date: '2026-08-31', tag: 'nouveauté',
    excerpt: 'La Méditerranéenne et L’Américaine, préparées sur place, avec poulet et poivrons français.',
    body: ['Pour la rentrée, deux pizzas : La Méditerranéenne (aubergine et courgette grillées, mozzarella, tomates confites, fromage frais, herbes de Provence) et L’Américaine (sauce tomate, poulet rôti, poivrons, cheddar, cornichons).', 'Elles sont préparées sur place, avec du poulet et des poivrons français. La pizza du lundi, c’est chaque lundi.'],
    illustration: 'pizza', real: true, source: 'https://www.instagram.com/p/Dcs36IOl9Mf/', related: ['tennis-ball-open-rennes', 'levain-t150-maison-lucie'],
  },
  {
    slug: 'crepes-indispensables-n1', title: 'Les indispensables N°1 : nos crêpes maison', date: '2026-08-26', tag: 'coulisses',
    excerpt: 'Une recette transmise par les anciens propriétaires, devenue l’âme de la boulangerie.',
    body: ['Quand le fournil s’est installé à Cleunay en 2021, les anciens propriétaires ont fait découvrir leurs crêpes puis proposé la recette. Elle fait partie du quartier.', 'On les prépare depuis plus de cinq ans avec la même recette et la même quantité généreuse. Première histoire de la série « Les indispensables ».'],
    illustration: 'crepes', real: true, source: 'https://www.instagram.com/p/DciKshoF5iG/', related: ['levain-t150-maison-lucie', 'anniversaire-5-ans'],
  },
  {
    slug: 'flankie-aout-2026', title: 'Le Flankie d’août : citron meringué', date: '2026-08-14', tag: 'Flankie',
    excerpt: 'Un Flankie citron meringué, disponible jusqu’au 31 août et pas un jour de plus.',
    body: ['Le Flankie d’août était au citron meringué. Il était disponible jusqu’au 31 août, pas un jour de plus.', 'C’est le premier Flankie documenté de l’été, après la reprise du 6 août.'],
    illustration: 'flankie', real: true, source: 'https://www.instagram.com/p/DcBINa1F3u4/', related: ['flankie-octobre-2026', 'conges-ete-2026'],
  },
  {
    slug: 'conges-ete-2026', title: 'Congés d’été 2026', date: '2026-07-14', tag: 'coulisses',
    excerpt: 'Ouvert le 14 juillet de 7h30 à 13h, puis toute l’équipe en congés jusqu’au 5 août inclus.',
    body: ['Le 14 juillet 2026, la boulangerie était ouverte de 7h30 à 13h. L’équipe est ensuite partie en congés jusqu’au mercredi 5 août inclus.', 'Retour le jeudi 6 août dès 6h45.'],
    illustration: 'loaf', real: true, source: 'https://www.facebook.com/lefournildeprosper/photos/899085712466281', related: ['anniversaire-5-ans', 'flankie-aout-2026'],
  },
  {
    slug: 'anniversaire-5-ans', title: 'Les 5 ans de la boulangerie', date: '2026-06-25', tag: 'coulisses',
    excerpt: 'Un tirage au sort et un gros lot : un an de viennoiseries le dimanche.',
    body: ['Pour les 5 ans, deux concours. Le deuxième lot : 1 pain au chocolat et 1 croissant chaque dimanche d’ouverture, du 5 juillet 2026 au 1er juillet 2027.', 'Le principe : on achète son produit préféré, on reçoit un papier, on le glisse dans l’urne en boutique. Tirage le 1er juillet, la date anniversaire officielle.'],
    illustration: 'brioche', real: true, source: 'https://www.facebook.com/lefournildeprosper/posts/place-aux-5-ans-de-notre-boulangerie-le-1er-juillet-nous-f%C3%AAterons-les-5-ann%C3%A9es-p/1057772803264237', related: ['quatre-ans-14-ans-boulanger', 'conges-ete-2026'],
  },
  {
    slug: 'carte-des-fetes-2025', title: 'La carte des fêtes 2025', date: '2025-12-13', tag: 'saison',
    excerpt: 'Bûches, mignardises et pain : réservations jusqu’au 20 décembre pour le 24, jusqu’au 26 pour le 31.',
    body: ['La carte des fêtes propose la bûche, le plateau de mignardises et même le pain. Les commandes sont prises en boutique jusqu’au 20 décembre pour le 24 et jusqu’au 26 pour le 31.', 'Les commandes réglées d’avance se retirent dans une file à part. Le 24 et le 31, ouvert de 8h à 18h ; fermé les 25 décembre et 1er janvier.'],
    illustration: 'buche', real: true, source: 'https://www.instagram.com/reel/DSMn2gOiHB6/', related: ['degustation-buches-2025', 'sapin-feuillete-2024'],
  },
  {
    slug: 'degustation-buches-2025', title: 'Journée dégustation : les bûches', date: '2025-11-29', tag: 'saison',
    excerpt: 'Un samedi de dégustation pour goûter les quatre variétés de bûches de l’année.',
    body: ['Le samedi 29 novembre 2025, de 9h à 15h, le fournil proposait de goûter les quatre variétés de bûches de l’année.', 'C’est un rendez-vous annuel : en 2024, la dégustation avait eu lieu le 23 novembre, avec les pains spéciaux et les plateaux.'],
    illustration: 'buche', real: true, source: 'https://www.facebook.com/lefournildeprosper/photos/journ%C3%A9e-d%C3%A9gustation-sp%C3%A9cial-b%C3%BBches-de-no%C3%ABl-chez-votre-boulanger-le-fournil-de-pr/894991976208988', related: ['carte-des-fetes-2025', 'sapin-feuillete-2024'],
  },
  {
    slug: 'quatre-ans-14-ans-boulanger', title: '4 ans : Prosper a été boulanger pendant 14 ans', date: '2025-07-01', tag: 'coulisses',
    excerpt: 'Le saviez-vous ? Le gérant a travaillé 14 ans comme boulanger avant de se lancer.',
    body: ['Pour les 4 ans de la boulangerie, le fournil a partagé une anecdote : « Prosper, le gérant de la boulangerie, a été boulanger pendant 14 ans avant de se lancer à son tour. »', 'Le message ajoute que le métier est difficile, mais que la motivation et la passion permettent d’aller au-delà des difficultés.'],
    illustration: 'croissant', real: true, source: 'https://www.instagram.com/reel/DLkTRg9of2a/', related: ['anniversaire-5-ans', 'prosper-metier-exigeant'],
  },
  {
    slug: 'chocolats-de-paques-2025', title: 'Chocolats de Pâques faits maison', date: '2025-04-04', tag: 'saison',
    excerpt: 'Œufs ou cocottes, poissons et fritures, en petits et grands formats.',
    body: ['Pour Pâques 2025, le fournil a proposé des chocolats faits maison : œufs ou cocottes, poissons et fritures.', 'Plusieurs tailles, du petit format au grand.'],
    illustration: 'egg', real: true, source: 'https://www.instagram.com/p/DIB84NqIEeZ/', related: ['galette-choco-noisettes-2025', 'carte-des-fetes-2025'],
  },
  {
    slug: 'galette-choco-noisettes-2025', title: 'Janvier 2025 : une galette spéciale chaque semaine', date: '2025-01-02', tag: 'saison',
    excerpt: 'La Galette Choco-Noisettes, première édition spéciale de l’année.',
    body: ['Chaque semaine de janvier 2025, une nouvelle édition spéciale de galette des rois. La première : la Galette Choco-Noisettes, faite d’une pâte feuilletée, d’une crème d’amande au gianduja et de pépites de chocolat.', 'Le tout fait maison, en quantité limitée, à réserver.'],
    illustration: 'galette', real: true, source: 'https://www.instagram.com/reel/DEhP8X6IWpn/', related: ['chocolats-de-paques-2025', 'sapin-feuillete-2024'],
  },
  {
    slug: 'sapin-feuillete-2024', title: 'Le Sapin Feuilleté pour l’apéritif', date: '2024-12-20', tag: 'nouveauté',
    excerpt: 'Un sapin de feuilleté, moitié saumon fumé, moitié pesto, à commander.',
    body: ['Le Sapin Feuilleté est une pâte feuilletée en forme de sapin : une moitié saumon fumé et fromage frais, l’autre pesto et tomates séchées.', 'À commander pour les repas de fin d’année.'],
    illustration: 'sapin', real: true, source: 'https://www.instagram.com/p/DDzlwezoBC6/', related: ['carte-des-fetes-2025', 'brioches-saint-nicolas-2024'],
  },
  {
    slug: 'brioches-saint-nicolas-2024', title: 'Les petites brioches Saint-Nicolas', date: '2024-12-06', tag: 'nouveauté',
    excerpt: 'Une nouveauté exclusive, en forme de Saint Nicolas, du jeudi au dimanche.',
    body: ['Le 6 décembre 2024, le fournil a lancé les petites brioches Saint-Nicolas, en forme de Saint Nicolas, moelleuses et dorées.', 'Disponibles du jeudi au dimanche seulement.'],
    illustration: 'nicolas', real: true, source: 'https://www.instagram.com/reel/DDRMb9bseJk/', related: ['sapin-feuillete-2024', 'degustation-buches-2025'],
  },
  // ---- mock editorial ----
  {
    slug: 'conserver-son-pain', title: 'Comment conserver son pain plus longtemps', date: '2026-10-02', tag: 'coulisses',
    excerpt: 'Quelques gestes simples pour une baguette croustillante le lendemain.',
    body: ['Notre exemple de conseil : un torchon en tissu pour le pain de campagne, un sac en papier pour la baguette, jamais le frigo.', 'Pour redonner de la vie à un pain rassis, 5 minutes au four chaud suffisent. Ce texte est un exemple de contenu éditorial.'],
    illustration: 'loaf', real: false, mock: true, related: ['prosper-metier-exigeant', 'levain-t150-maison-lucie'],
  },
  {
    slug: 'quartier-jours-de-match', title: 'Le quartier les jours de match', date: '2026-09-27', tag: 'quartier',
    excerpt: 'Roazhon Park est à 900 m : à quelle heure passer prendre son pain quand il y a un match.',
    body: ['Les jours de match, des supporters passent dans le quartier. Notre exemple de conseil : venir avant 9h pour avoir toute la gamme.', 'Ce texte est un exemple de contenu éditorial, sans information officielle sur les horaires des matchs.'],
    illustration: 'baguette', real: false, mock: true, related: ['tennis-ball-open-rennes', 'conserver-son-pain'],
  },
  {
    slug: 'coulisses-du-feuilletage', title: 'Dans les coulisses du feuilletage', date: '2026-09-18', tag: 'coulisses',
    excerpt: 'Beurre, farine, repos : comment naît une viennoiserie croustillante.',
    body: ['Exemple de texte sur le tourage : on plie la pâte autour du beurre, on la laisse reposer, on recommence. La patience fait le croustillant.', 'Ce texte est un exemple de contenu éditorial, pas une description du procédé exact du fournil.'],
    illustration: 'croissant', real: false, mock: true, related: ['quatre-ans-14-ans-boulanger', 'trusttheprocess-viennoiserie'],
  },
  {
    slug: 'trusttheprocess-viennoiserie', title: '#trusttheprocess : la viennoiserie, de la matière première au comptoir', date: '2026-09-17', tag: 'coulisses',
    excerpt: 'Formation, matières premières ciblées, cours avancés et apprentis.',
    body: ['Le 17 septembre 2026, le fournil a publié une série sur ses viennoiseries : la formation, des « matières premières ciblées », des cours avancés et la formation d’apprentis.', 'La série montre aussi des chaussons et d’autres viennoiseries du comptoir.'],
    illustration: 'painchoc', real: true, source: 'https://www.instagram.com/lefournildeprosper/', related: ['prosper-metier-exigeant', 'coulisses-du-feuilletage'],
  },
]

export const postBySlug = (s: string): Post | undefined => posts.find((p) => p.slug === s)
