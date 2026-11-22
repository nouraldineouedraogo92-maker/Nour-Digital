/* Menu QR de démo : Sous les Palmiers (restaurant fictif, photos Unsplash) */
const MENU = {
  restaurant: {
    nom: "Sous les Palmiers",
    slogan: "Maquis & grillades",
    quartier: "Ouagadougou",
    horaires: "Tous les jours · 11 h – minuit",
    telephone: "",
    logo: "🌴",
    couleur: "#1f6f3d",
    couleurFond: "#FBF7F0",
    devise: "F",
    lienMaps: "",
    siteUrl: "https://nour-digital.com/sous-les-palmiers",
    slug: "sous-les-palmiers",
    couverture: "img/hero-grill.jpg",
    video: "img/hero-grill.mp4",
    platDuJour: "Poulet braisé + alloco + bissap, 5 500 F",
    commandes: { actif: true, whatsapp: "+226 44 60 87 89", finTest: "2026-12-15" },
    livraison: { actif: true, info: "Livraison dans tout Ouaga, frais selon le quartier (à partir de 500 F)." },
    paiement: { orangeMoney: "70 00 00 00", wave: "60 00 00 00", info: "Envoyez la capture du paiement sur WhatsApp, ou payez en espèces." },
    umami: "3f86e835-ead8-4199-94fb-1c3d4b0ccd89"
  },
  categories: [
    {
      nom: "Grillades",
      plats: [
        { nom: "Poulet braisé entier", description: "Poulet bicyclette mariné, braisé au feu de bois", prix: 5000, photo: "img/poulet-entier.webp", badge: "Le plus commandé" },
        { nom: "Demi-poulet braisé", description: "Piment maison, oignons et crudités", prix: 2500, photo: "img/poulet.webp" },
        { nom: "Brochettes de bœuf (×5)", description: "Bœuf mariné, oignons, piment doux", prix: 1500, photo: "img/brochettes.webp" },
        { nom: "Ailes de poulet braisées", description: "8 ailes, sauce piquante maison", prix: 2000, photo: "img/ailes.webp" }
      ]
    },
    {
      nom: "Poissons",
      plats: [
        { nom: "Carpe braisée", description: "Poisson entier, braisé sur feuille de bananier", prix: 4000, photo: "img/poisson.webp", badge: "Spécialité" },
        { nom: "Poisson + alloco", description: "Carpe braisée, alloco, oignons, crudités", prix: 4500, photo: "img/poisson-alloco.webp" },
        { nom: "Plateau des Palmiers", description: "Pour 4 : poissons, poulet, brochettes, alloco, attiéké", prix: 15000, photo: "img/plateau.webp", badge: "À partager" }
      ]
    },
    {
      nom: "Accompagnements",
      plats: [
        { nom: "Banane plantain braisée", description: "Mûre et caramélisée sur la braise", prix: 500, photo: "img/alloco.webp" },
        { nom: "Attiéké", description: "Semoule de manioc", prix: 500, photo: "img/attieke.webp" },
        { nom: "Frites d'igname", description: "Croustillantes", prix: 700, photo: "img/igname.webp" }
      ]
    },
    {
      nom: "Boissons",
      plats: [
        { nom: "Bissap maison", description: "Bien frais", prix: 500, photo: "img/boissons.webp" },
        { nom: "Gingembre maison", description: "Bien frais", prix: 500, photo: "img/gingembre.webp" },
        { nom: "Eau minérale", description: "1,5 L", prix: 600, photo: "img/eau.webp" }
      ]
    }
  ]
};
