/* Menu QR : Café Village (Ouaga 2000, à 50 m de l'ancien ONASER)
   Sources : page Facebook « CafeVillage » (kakémono : horaires, services ; affiches promos), maquette du 16/11 (photos pro, prix).
   Prix connus : menu du midi, plats, week-end, brunch, brownie, banana bread, cocktail, bière.
   AUTRES PRIX (cafés, boissons, burgers, snacks) = ESTIMATIONS À CONFIRMER. */
const MENU = {
  restaurant: {
    nom: "Café Village",
    devise: "A little shop with great coffee, food & vibe",
    quartier: "Ouaga 2000, à 50 m de l'ancien ONASER",
    horaires: "Lun – Sam : 7 h – 22 h · Dim : 9 h – 22 h",
    telephone: "+226 66 36 54 54",
    logo: "img/logo.jpg",
    monnaie: "F",
    slides: ["img/burger.jpg", "img/frappuccino.jpg", "img/pancakes-choco.jpg", "img/smoothie.jpg"],
    apercu: "Aperçu · prix à confirmer ensemble",
    siteUrl: "https://nour-digital.com/cafe-village",
    slug: "cafe-village",
    // Lien CSV du Google Sheets du patron (Publier sur le Web > CSV). Vide = on garde la carte ci-dessous.
    tableau: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTwqWW_NMiGAd5o80jOlk8U3lEKc3A8yZ7WTtXcE2iWYQl1iJ0Bj6snx7p4xPXYzCYjCWqzlh8vAwbl/pub?gid=0&single=true&output=csv",
    commandes: { actif: true, whatsapp: "+226 66 36 54 54", finTest: "2026-12-15" },
    livraison: { actif: true, info: "Livraison offerte à partir de 5 commandes du midi." },
    umami: "3f86e835-ead8-4199-94fb-1c3d4b0ccd89"
  },
  moments: [
    { id: "matin", nom: "Le matin", icone: "☕", sous: "P'tit déj, cafés & douceurs" },
    { id: "midi", nom: "Le midi", icone: "🍛", sous: "Le menu du jour & nos plats" },
    { id: "soir", nom: "Le soir", icone: "🍔", sous: "Burgers, snacks & soirées" }
  ],
  // Menu du midi, du lundi (1) au vendredi (5), même prix pour tous
  midi: { prix: 2500, jours: [
    { j: 1, nom: "Lundi", plat: "Riz gras, viande de bœuf", photo: "img/riz-gras.jpg" },
    { j: 2, nom: "Mardi", plat: "Riz sauce arachide, viande de bœuf", photo: "" },
    { j: 3, nom: "Mercredi", plat: "Ragoût de pomme de terre et patate douce, bœuf", photo: "img/ragout.jpg" },
    { j: 4, nom: "Jeudi", plat: "Tô ou riz sauce feuille, poisson", photo: "img/to-feuille.jpg" },
    { j: 5, nom: "Vendredi", plat: "Soupe de poisson et son pain", photo: "img/soupe-poisson.jpg" }
  ], note: "Abonnement possible à la semaine ou au mois · livraison offerte dès 5 commandes" },
  promos: [
    { jours: [3], titre: "MERCREDI BURGER", texte: "Burger + frites + boisson + dessert", prix: 5000, photo: "img/burger.jpg", plat: "Formule burger du mercredi" },
    { jours: [5, 6], titre: "PIZZA 1 ACHETÉE = 1 OFFERTE", texte: "Vendredi et samedi, ouvert 24 h/24", prix: 0, photo: "", plat: "" },
    { jours: [5, 6, 0], titre: "MENU SPÉCIAL WEEK-END", texte: "Dessert + verre de vin ou jus offert", prix: 0, photo: "img/poisson-four.jpg", plat: "" },
    { jours: [0], titre: "BRUNCH DU DIMANCHE", texte: "Viennoiseries, œufs, pancakes, jus… 9 h – 22 h", prix: 6500, photo: "img/brunch2.jpg", plat: "Formule brunch" }
  ],
  categories: [
    { nom: "P'tit déj & brunch", moment: "matin", plats: [
      { nom: "Formule brunch", description: "Viennoiseries, œufs, pancakes, jus… Tous les dimanches", prix: 6500, photo: "img/brunch2.jpg", badge: "Dimanche" },
      { nom: "Pancakes chocolat", description: "Sauce chocolat, fruits rouges", prix: 2500, photo: "img/pancakes-choco.jpg" },
      { nom: "Bowl granola & fruits", description: "", prix: 3000, photo: "" }
    ]},
    { nom: "Cafés & lattés", moment: "matin", plats: [
      { nom: "Chai latté", description: "Gingembre et cannelle, pour les saveurs prononcées", prix: 2500, photo: "img/chai.jpg", badge: "Coup de cœur" },
      { nom: "Baobab latté", description: "Le latté au goût d'ici", prix: 2500, photo: "img/latte.jpg" },
      { nom: "Matcha latté", description: "", prix: 3000, photo: "img/matcha.jpg" },
      { nom: "Mocha", description: "Café et chocolat", prix: 2500, photo: "" },
      { nom: "Dalgona", description: "Café fouetté sur lait frais", prix: 2500, photo: "" },
      { nom: "Frappuccino caramel", description: "Bien frais", prix: 3000, photo: "img/frappuccino.jpg" }
    ]},
    { nom: "Bubble tea & smoothies", moment: "matin", plats: [
      { nom: "Bubble tea fraise", description: "", prix: 3000, photo: "" },
      { nom: "Smoothie mangue", description: "Mangue fraîche", prix: 2500, photo: "img/smoothie.jpg" }
    ]},
    { nom: "Douceurs", moment: "matin", plats: [
      { nom: "Brownie maison", description: "1 part (2 parts : 3 000 F)", prix: 2000, photo: "img/brownie.jpg" },
      { nom: "Banana bread", description: "1 part (5 parts : 4 500 F)", prix: 1000, photo: "img/banana-bread.jpg" }
    ]},
    { nom: "Nos plats", moment: "midi", plats: [
      { nom: "Kedjenou de poisson", description: "", prix: 5000, photo: "img/kedjenou.jpg", badge: "Spécialité" },
      { nom: "Riz au curry", description: "Bœuf et légumes", prix: 2500, photo: "img/riz-curry.jpg" },
      { nom: "Igname sauce poisson", description: "", prix: 2500, photo: "img/igname.jpg" },
      { nom: "Tô sauce gombo", description: "", prix: 2500, photo: "img/to-gombo.jpg" },
      { nom: "Thiep au poisson", description: "", prix: 2500, photo: "" },
      { nom: "Salade fraîcheur", description: "", prix: 3000, photo: "img/salade.jpg" }
    ]},
    { nom: "Le menu du week-end", moment: "midi", plats: [
      { nom: "Poisson au four", description: "Sur un lit de légumes · dessert et verre offerts", prix: 7000, photo: "img/poisson-four.jpg", badge: "Ven · Sam · Dim" },
      { nom: "Filet de bœuf", description: "Purée de pommes de terre · dessert et verre offerts", prix: 8500, photo: "img/filet-boeuf.jpg", badge: "Ven · Sam · Dim" }
    ]},
    { nom: "Burgers & sandwichs", moment: "soir", plats: [
      { nom: "Formule burger du mercredi", description: "Burger + frites + boisson + dessert", prix: 5000, photo: "img/burger.jpg", badge: "Mercredi" },
      { nom: "Burger maison", description: "", prix: 4000, photo: "img/burger.jpg" },
      { nom: "Smash burger", description: "", prix: 4500, photo: "img/smash.jpg" },
      { nom: "Cheese steak sandwich", description: "Avec frites", prix: 4500, photo: "img/cheesesteak.jpg" },
      { nom: "Sandwich toasté", description: "Saucisses grillées", prix: 3500, photo: "img/sandwich.jpg" }
    ]},
    { nom: "Snacks & tapas", moment: "soir", plats: [
      { nom: "Chicken wrap", description: "", prix: 3500, photo: "" },
      { nom: "Quesadillas", description: "", prix: 3500, photo: "" },
      { nom: "Chicken waffle", description: "", prix: 4000, photo: "" },
      { nom: "Cheesy fries", description: "", prix: 2500, photo: "" },
      { nom: "Pizza", description: "Ven et sam : 1 achetée = 1 offerte", prix: 6000, photo: "", badge: "1 + 1" }
    ]},
    { nom: "Le bar", moment: "soir", plats: [
      { nom: "Cocktail", description: "Soirées karaoké ven · sam · dim, 18 h – 22 h", prix: 2500, photo: "" },
      { nom: "Bière", description: "", prix: 1000, photo: "" }
    ]}
  ],
  traiteur: { titre: "Traiteur & événements", texte: "Anniversaires, réunions, pauses café, buffets : Café Village s'occupe de tout, chez vous ou chez nous.", message: "Bonjour Café Village, je voudrais un devis traiteur pour un événement le " }
};
