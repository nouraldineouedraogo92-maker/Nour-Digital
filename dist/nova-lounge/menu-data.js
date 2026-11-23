/* Menu QR : Nova Lounge (Bar & Restaurant, Ouaga 2000)
   Sources : TikTok @nova.lounge0 (plats, slogan), fiche Google Maps (couverture du menu, enseigne, jardin,
   4 000 à 6 000 F par personne, livraison), maquette du 16/11.
   AUCUN PRIX PUBLIÉ : TOUS LES PRIX SONT DES ESTIMATIONS À CONFIRMER AVEC LE PATRON. */
const MENU = {
  restaurant: {
    nom: "Nova Lounge",
    sousNom: "Bar & Restaurant",
    slogan: "Discrétion. Goût. Tenue.",
    quartier: "Ouaga 2000, Ouagadougou",
    horaires: "Tous les jours · 8 h – minuit",
    telephone: "+226 70 70 13 52",
    telephone2: "+226 78 78 71 67",
    logo: "img/logo-blanc.png",
    devise: "F",
    slides: ["img/hero-arbre.jpg", "img/riz-soumbala.jpg", "img/poisson.jpg", "img/pizza.jpg"],
    apercu: "Aperçu · prix à confirmer ensemble",
    siteUrl: "https://nour-digital.com/nova-lounge",
    slug: "nova-lounge",
    // Lien CSV du Google Sheets du patron (Publier sur le Web > CSV). Vide = on garde la carte ci-dessous.
    tableau: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTVmv7u9-4m2XMWtDZrjsZ6SHjjngY9iBvTNPVbEs3T_2ctf0QmEwkK8IkykUr6-YRhxYVxpnYQJWXQ/pub?gid=0&single=true&output=csv",
    commandes: { actif: true, whatsapp: "+226 70 70 13 52", finTest: "2026-12-15" },
    livraison: { actif: true, info: "Livraison possible, frais selon le quartier." },
    umami: "3f86e835-ead8-4199-94fb-1c3d4b0ccd89"
  },
  soiree: {
    photo: "img/enseigne.jpg",
    titre: "Réservez votre soirée",
    texte: "Une table entre amis, un anniversaire, un dîner en toute discrétion : dites-nous quand, on s'occupe du reste.",
    options: ["Une table", "Un anniversaire", "Un groupe"]
  },
  categories: [
    { nom: "Signatures", univers: "cuisine", style: "slider", plats: [
      { nom: "Riz soumbala poulet", description: "Un bon gros poulet sur un riz au soumbala, oignons confits", prix: 4000, photo: "img/riz-soumbala.jpg", badge: "Signature" },
      { nom: "Poisson braisé", description: "Bien doré, servi avec sa salade de crudités", prix: 6000, photo: "img/poisson.jpg", badge: "La maison" },
      { nom: "Escalope de poulet", description: "Gratinée, frites et crudités", prix: 4500, photo: "img/escalope.jpg" },
      { nom: "Spaghetti au soumbala", description: "Le classique revisité", prix: 3000, photo: "img/spaghetti.jpg" }
    ]},
    { nom: "Viandes", univers: "cuisine", plats: [
      { nom: "Brochettes de filet de bœuf", description: "Frites maison et salade", prix: 4000, photo: "img/brochettes.jpg" },
      { nom: "Steak à la crème", description: "Sauce crème, accompagnement au choix", prix: 5500, photo: "" },
      { nom: "Pavé de bœuf", description: "Grillé à votre goût", prix: 6000, photo: "" },
      { nom: "Poulet à l'ail", description: "Doré, parfumé à l'ail", prix: 5000, photo: "" },
      { nom: "Gésiers sautés", description: "Oignons et poivrons", prix: 3000, photo: "" }
    ]},
    { nom: "Pâtes & riz", univers: "cuisine", plats: [
      { nom: "Macaroni au soumbala", description: "", prix: 3000, photo: "" },
      { nom: "Riz cantonais", description: "", prix: 3000, photo: "" },
      { nom: "Riz sauce tomate", description: "", prix: 2500, photo: "" },
      { nom: "Soupe de poulet", description: "Bien chaude", prix: 3500, photo: "" },
      { nom: "Salade composée", description: "", prix: 3000, photo: "" }
    ]},
    { nom: "Burgers & sandwichs", univers: "cuisine", plats: [
      { nom: "Burger Nova", description: "Steak, crudités, coleslaw", prix: 3500, photo: "img/burger.jpg", badge: "Nouveau" },
      { nom: "Philly cheese", description: "À partager, sauces maison", prix: 4000, photo: "img/philly.jpg" }
    ]},
    { nom: "Pizzas", univers: "cuisine", plats: [
      { nom: "Pizza Carnivore", description: "Généreuse en viandes", prix: 6000, photo: "img/pizza.jpg" },
      { nom: "Pizza poulet", description: "Nouveauté de la maison", prix: 5000, photo: "" }
    ]},
    { nom: "Cocktails", univers: "bar", plats: [
      { nom: "Cocktail Nova", description: "Le signature du bar, une touche de fraîcheur", prix: 3000, photo: "img/cocktail.jpg", badge: "Signature" },
      { nom: "Mocktail du moment", description: "Sans alcool, demandez la recette du jour", prix: 2500, photo: "" }
    ]},
    { nom: "Boissons", univers: "bar", plats: [
      { nom: "Jus naturel", description: "Bissap, gingembre ou baobab", prix: 1000, photo: "" },
      { nom: "Bière", description: "Bien fraîche", prix: 1000, photo: "" },
      { nom: "Soda", description: "Coca, Fanta, Sprite…", prix: 700, photo: "" },
      { nom: "Eau minérale", description: "", prix: 500, photo: "" }
    ]}
  ]
};
