/* Menu QR : Restaurant La Vieille Marmite Lauviah (Zagtouli, Ouagadougou)
   Sources : page Facebook « Restaurant La Vieille Marmite » (photos, menu de la semaine, menu spécial avec prix),
   maquette du 16/11. Prix connus : grillades, salade, bouchées, jus. AUTRES PRIX = ESTIMATIONS À CONFIRMER. */
const MENU = {
  restaurant: {
    nom: "La Vieille Marmite",
    sousNom: "Restaurant · Lauviah",
    accroche: "Les vieilles marmites font les meilleures sauces…",
    quartier: "Zagtouli, non loin du grand terrain",
    telephone: "+226 79 18 18 18",
    telephone2: "+226 55 93 51 59",
    logo: "img/logo.jpg",
    couleur: "#1d1b1a",
    accent: "#E3A13A",
    couleurFond: "#F4EDE1",
    devise: "F",
    slides: ["img/riz-soumbala.jpg", "img/viande-sauce.jpg", "img/poulet-four.jpg", "img/riz-gras-poisson.jpg"],
    apercu: "Aperçu · prix à confirmer ensemble",
    siteUrl: "https://nour-digital.com/la-vieille-marmite",
    slug: "la-vieille-marmite",
    // Lien CSV du Google Sheets du patron (Publier sur le Web > CSV). Vide = on garde la carte ci-dessous.
    tableau: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjaKtUrGv1DniWd3VETCLyNEembt-FkMYSUEYiHoWEIVmSlj2z-GlieoFOwy0piK8fFEoxO3OmC69h/pub?gid=0&single=true&output=csv",
    commandes: { actif: true, whatsapp: "+226 79 18 18 18", finTest: "2026-12-15" },
    livraison: { actif: false, info: "" },
    umami: "3f86e835-ead8-4199-94fb-1c3d4b0ccd89"
  },
  // Menu du jour, affiché automatiquement selon le jour de la semaine (0 = dimanche)
  semaine: [
    { jours: [1], nom: "Lundi", plats: ["Riz sauce arachide ou sauce feuille", "Attiéké poisson"] },
    { jours: [2], nom: "Mardi", plats: ["Riz sauce tomate", "Fonio sauce tomate ou arachide"] },
    { jours: [3], nom: "Mercredi", plats: ["Foutou d'igname sauce graine", "Riz sauce graine"] },
    { jours: [4], nom: "Jeudi", plats: ["Spaghetti sauce tomate", "Couscous sauce tomate"] },
    { jours: [5], nom: "Vendredi", plats: ["Haricot", "Tô sauce feuilles ou gombo", "Attiéké poisson"] },
    { jours: [6, 0], nom: "Week-end", plats: [{ n: "Riz soumbala poulet", p: 3000 }, { n: "Spaghetti au soumbala", p: 2000 }, { n: "Poulet flambé, sauté ou à l'ail", p: 4000 }, { n: "Pizza maison", p: 4000 }, { n: "Gratin de pommes de terre", p: 5000 }] }
  ],
  prixPlatDuJour: 1500,
  signature: { nom: "Riz soumbala poulet", description: "Notre spécialité du week-end : riz parfumé au soumbala, poulet mijoté puis doré. La recette de la maison.", prix: 3000, photo: "img/riz-soumbala.jpg" },
  evenements: [
    { photo: "img/lieu-salle.jpg", titre: "La salle des fêtes", texte: "Mariages, baptêmes, anniversaires, réunions : une grande salle décorée, et la cuisine de la maison pour vos invités.", bouton: "Réserver la salle", message: "Bonjour La Vieille Marmite, je voudrais des informations pour réserver la salle pour un événement le " },
    { photo: "img/lieu-ateliers.jpg", pos: "top", titre: "Les ateliers de cuisine", texte: "Recettes africaines, européennes, pâtisserie, jus locaux, dressage de table. Pour les enfants pendant les vacances, et des séances pour les adultes.", bouton: "S'inscrire à un atelier", message: "Bonjour La Vieille Marmite, je voudrais des informations sur les ateliers de cuisine." }
  ],
  categories: [
    {
      nom: "Cuisine de la maison", icone: "🍲", style: "grille",
      plats: [
        { nom: "Riz soumbala poulet", description: "La spécialité du week-end", prix: 3000, photo: "img/riz-soumbala.jpg", badge: "Spécialité" },
        { nom: "Riz gras au poisson", description: "Riz rouge mijoté, poisson et légumes", prix: 2000, photo: "img/riz-gras-poisson.jpg" },
        { nom: "Viande en sauce", description: "Mijotée longtemps, comme à la maison", prix: 2500, photo: "img/viande-sauce.jpg" },
        { nom: "Poisson braisé, foutou", description: "Poisson braisé, foutou et sauce", prix: 3000, photo: "img/poisson-braise.jpg" },
        { nom: "Poisson & alloco", description: "Poisson, alloco et crudités", prix: 2500, photo: "img/poisson-alloco.jpg" },
        { nom: "Alloco & viande", description: "Alloco doré, viande en sauce", prix: 2000, photo: "img/alloco-viande.jpg" },
        { nom: "Haricot & poulet", description: "Le vendredi", prix: 2000, photo: "img/haricot-poulet.jpg" },
        { nom: "Spaghetti au poulet", description: "Au soumbala", prix: 2000, photo: "img/spaghetti-poulet.jpg" }
      ]
    },
    {
      nom: "Grillades & poulets", icone: "🍗", style: "grille",
      plats: [
        { nom: "Poulet au four", description: "Poulet entier, doré au four", prix: 4000, photo: "img/poulet-four.jpg", badge: "Le plus commandé" },
        { nom: "Poulet aux légumes", description: "Petits pois, oignons, carottes", prix: 4000, photo: "img/poulet-legumes.jpg" },
        { nom: "Poulet flambé", description: "Poulet entier", prix: 4000, photo: "" },
        { nom: "Poulet sauté", description: "Poulet entier", prix: 4000, photo: "" },
        { nom: "Brochette de filet de bœuf", description: "À l'unité", prix: 500, photo: "" },
        { nom: "Mouton entier au four", description: "Sur commande, pour vos fêtes", prix: 80000, photo: "", badge: "Sur commande" }
      ]
    },
    {
      nom: "Salades, pizzas & gratins", icone: "🥗", style: "grille",
      plats: [
        { nom: "Plateau de salade composée", description: "Petit plateau (grand plateau : 10 000 F)", prix: 5000, photo: "img/salade.jpg" },
        { nom: "Pizza maison", description: "Le week-end", prix: 4000, photo: "img/pizza.jpg" },
        { nom: "Gratin de pommes de terre", description: "En barquette", prix: 5000, photo: "" }
      ]
    },
    {
      nom: "Bouchées & snacks", icone: "🥟", style: "liste",
      plats: [
        { nom: "Mini burgers", description: "À l'unité", prix: 500, photo: "img/mini-burgers.jpg" },
        { nom: "Nems", description: "À l'unité", prix: 100, photo: "" },
        { nom: "Mini pizza", description: "À l'unité", prix: 250, photo: "" },
        { nom: "Saucisse roulée", description: "À l'unité", prix: 300, photo: "" }
      ]
    },
    {
      nom: "Jus naturels", icone: "🍹", style: "liste",
      plats: [
        { nom: "Gingembre", description: "Fait maison", prix: 1000, photo: "" },
        { nom: "Bissap", description: "Fait maison", prix: 1000, photo: "" },
        { nom: "Toédo au lait", description: "Fait maison", prix: 1000, photo: "" },
        { nom: "Dêguê couscous ou mil", description: "Fait maison", prix: 2000, photo: "" }
      ]
    }
  ]
};
