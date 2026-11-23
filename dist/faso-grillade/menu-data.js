/* Menu QR : Faso Grillade (Zone 1, Ouagadougou)
   Photos : vidéos TikTok @faso.grillade (leurs propres images).
   PRIX INDICATIFS (aucune carte en ligne) : à confirmer avec le patron lors de la visite. */
const MENU = {
  restaurant: {
    nom: "Faso Grillade",
    slogan: "Poisson frais · Volaille locale · Saveurs authentiques",
    quartier: "Zone 1, Ouagadougou",
    telephone: "+226 45 67 68 90",
    telephone2: "+226 70 68 23 84",
    logo: "img/logo.jpg",
    couleur: "#16335F",
    accent: "#F08A1C",
    couleurFond: "#FFF8EF",
    devise: "F",
    provenance: ["Kompienga", "Bagré", "Ziga", "Samendéni"],
    slides: ["img/hero-poisson.jpg", "img/hero-grill-nuit.jpg", "img/hero-assiette.jpg", "img/hero-terrasse.jpg"],
    apercu: "Aperçu · prix à confirmer ensemble",
    siteUrl: "https://nour-digital.com/faso-grillade",
    slug: "faso-grillade",
    // Lien CSV du Google Sheets du patron (Fichier > Partager > Publier sur le Web > CSV). Vide = on garde la carte ci-dessous.
    tableau: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxMgS75IDvGJWmmKXaJiDdyJjg09nKB1jaYldWqJjhh3hFMyQ3Vd8T_CnFGMwCAgi4zwlwnWvqbjAq/pub?gid=0&single=true&output=csv",
    commandes: { actif: true, whatsapp: "+226 45 67 68 90", finTest: "2026-12-15" },
    livraison: { actif: false, info: "" },
    paiement: {},
    umami: "3f86e835-ead8-4199-94fb-1c3d4b0ccd89"
  },
  signature: { nom: "L'assiette Faso Grillade", description: "Carpe fraîche braisée au charbon, attiéké, frites, crudités et notre sauce maison. Le plat qui a fait notre réputation.", prix: 5000, photo: "img/assiette-faso.jpg" },
  lieu: [
    { photo: "img/lieu-terrasse.jpg", titre: "La terrasse", texte: "Au grand air, entre amis" },
    { photo: "img/lieu-salle.jpg", titre: "L'espace VIP", texte: "Pour vos repas en famille et vos événements" },
    { photo: "img/lieu-grill.jpg", titre: "Le grill", texte: "Braisé à la minute, sous vos yeux" },
    { photo: "img/lieu-enseigne.jpg", titre: "Zone 1", texte: "Vous ne pouvez pas nous rater" }
  ],
  categories: [
    {
      nom: "Poissons braisés", icone: "🐟",
      plats: [
        { nom: "Carpe braisée", description: "Carpe fraîche entière, braisée au charbon de bois, oignons et piment maison", prix: 3500, photo: "img/carpe-braisee.jpg", badge: "Le plus commandé" },
        { nom: "Grosse carpe à partager", description: "Pour 2 ou 3, braisée lentement, bien dorée", prix: 6000, photo: "img/poisson-grill.jpg", badge: "À partager" },
        { nom: "Capitaine braisé", description: "Chair ferme et généreuse, marinade aux épices", prix: 7000, photo: "" },
        { nom: "Silure braisé", description: "Le poisson de notre logo, fumé et braisé", prix: 5000, photo: "" }
      ]
    },
    {
      nom: "Assiettes complètes", icone: "🍽️",
      plats: [
        { nom: "Assiette Faso Grillade", description: "Carpe braisée, attiéké, frites, crudités, sauce maison", prix: 5000, photo: "img/assiette-faso.jpg", badge: "Signature" },
        { nom: "Assiette du chef", description: "Gros poisson braisé, frites, attiéké, crudités et mayonnaise", prix: 7500, photo: "img/assiette-capitaine.jpg" }
      ]
    },
    {
      nom: "Volaille locale", icone: "🍗",
      plats: [
        { nom: "Poulet bicyclette braisé", description: "Poulet local entier, mariné et braisé au feu de bois", prix: 6500, photo: "", badge: "Volaille locale" },
        { nom: "Demi-poulet braisé", description: "Avec oignons, crudités et piment maison", prix: 3500, photo: "" },
        { nom: "Pintade braisée", description: "Pintade locale, bien relevée", prix: 7500, photo: "" }
      ]
    },
    {
      nom: "Accompagnements", icone: "🥗",
      plats: [
        { nom: "Attiéké", description: "Semoule de manioc fraîche", prix: 500, photo: "img/attieke.jpg" },
        { nom: "Frites", description: "Dorées et croustillantes", prix: 1000, photo: "img/frites.jpg" },
        { nom: "Alloco", description: "Banane plantain frite", prix: 1000, photo: "" },
        { nom: "Crudités", description: "Concombre, tomate, oignon", prix: 500, photo: "img/crudites.jpg" }
      ]
    },
    {
      nom: "Boissons fraîches", icone: "🥤",
      plats: [
        { nom: "Bière bien fraîche", description: "Brakina, Castel, Beaufort…", prix: 800, photo: "img/bieres.jpg" },
        { nom: "Sucrerie", description: "Coca, Fanta, Sprite…", prix: 500, photo: "" },
        { nom: "Eau minérale", description: "1,5 L", prix: 500, photo: "" },
        { nom: "Vin (bouteille)", description: "Rouge ou rosé, demandez notre sélection", prix: 7500, photo: "img/vins.jpg" }
      ]
    }
  ]
};
