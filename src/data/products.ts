// Généré automatiquement — descriptions: ancien site eap-location.fr (37 produits)
// + descriptions génériques rédigées pour les produits sans équivalent ancien site (19, marquées [G])

const images = import.meta.glob('../assets/products/*.webp', { eager: true, import: 'default' }) as Record<string, string>;
export const productImage = (slug: string): string | undefined => images[`../assets/products/${slug}.webp`];

export interface ProductInfo {
  variants?: { label: string; value: string }[];
  name: string;
  category: string;
  spec?: string;
  description?: string[];
}

export const PRODUCTS: Record<string, ProductInfo> = {
  "groupe-electrogene": {
    name: "Groupe électrogène",
    category: "autres",
    spec: "10kVA à 500kVA",
    description: ["EAP location propose le plus large choix de groupes électrogènes pour alimenter vos chantiers en France. Sur notre site vous retrouverez disponible à la location :", "- Groupe électrogène 5kVA", "- Groupe électrogène 10kVA", "- Groupe électrogène 15kVA", "- Groupe électrogène 20kVA", "- Groupe électrogène 30kVA", "- Groupe électrogène 40kVA", "- Groupe électrogène 50kVA", "- Groupe électrogène 60kVA", "- Groupe électrogène 70kVA", "- Groupe électrogène 80kVA", "- Groupe électrogène 100kVA", "- Groupe électrogène 150kVA", "- Groupe électrogène +150kVA"],
  },
  "compresseur": {
    name: "Compresseur d'air",
    category: "autres",
    spec: "Mobile chantier",
    description: ["EAP location propose le plus large choix de compresseur d’air pour alimenter vos chantiers en France. Sur notre site vous retrouverez disponible à la location :", "- Compresseur d’air 2500L", "- Compresseur d’air 5000L", "- Compresseur d’air 7000L", "- Compresseur d’air 10000L", "- Compresseur d’air 14000L", "- Compresseur d’air 21000L"],
  },
  "pompe-eau": {
    name: "Pompe à eau",
    category: "autres",
    spec: "Immergée, surface",
    description: ["Pompes à eau de chantier pour l'épuisement des fouilles, le pompage des eaux chargées ou claires : motopompes thermiques et pompes immergées.", "Plusieurs débits disponibles selon la hauteur de refoulement et la nature des eaux."], // [G]
  },
  "eclairage": {
    name: "Éclairage chantier",
    category: "autres",
    spec: "Tour lumineuse",
    description: ["Mâts et tours d'éclairage pour travailler en sécurité de nuit ou en espace sombre : ballons éclairants, mâts LED sur remorque, projecteurs autonomes.", "Autonomie adaptée aux postes de nuit, location courte ou longue durée."], // [G]
  },
  "betonniere": {
    name: "Bétonnière",
    category: "autres",
    spec: "350L à 750L",
    description: ["Bétonnières de chantier pour la préparation de béton et mortier sur place : modèles électriques ou thermiques, plusieurs capacités de cuve.", "Location à la journée, à la semaine ou au mois, livraison possible."], // [G]
  },
  "broyeur": {
    name: "Broyeur de branches",
    category: "autres",
    spec: "Espaces verts",
    description: ["Broyeurs de branches pour l'entretien des espaces verts et le débroussaillage : réduction des végétaux en copeaux directement sur site.", "Plusieurs diamètres de coupe admissibles, modèles sur remorque faciles à tracter."], // [G]
  },
  "dumper": {
    name: "Dumper",
    category: "autres",
    spec: "1T à 10T",
    description: ["EAP location propose le plus large choix de Dumper sur pneus pour vos travaux de terrassement en France. Sur notre site vous retrouverez disponible à la location :", "- Dumper sur pneus 1T", "- Dumper sur pneus 1.5T", "- Dumper sur pneus 2T", "- Dumper sur pneus 3T", "- Dumper sur pneus 4T", "- Dumper sur pneus 5T", "- Dumper sur pneus 6T", "- Dumper sur pneus 7T", "- Dumper sur pneus 9T"],
  },
  "marteau-piqueur": {
    name: "Marteau piqueur",
    category: "autres",
    spec: "Démolition",
    description: ["Marteaux-piqueurs pour la démolition de béton, dallages et enrobés : modèles électriques, pneumatiques ou thermiques selon l'usage.", "Accessoires fournis (pointes, burins), location à la journée ou plus."], // [G]
  },
  "decoupeuse": {
    name: "Découpeuse thermique",
    category: "autres",
    spec: "Béton, asphalte",
    description: ["Découpeuses thermiques pour la coupe du béton, de l'asphalte et des matériaux durs : disques diamant, coupe à sec ou à eau.", "Location courte durée avec consommables disponibles."], // [G]
  },
  "aspirateur": {
    name: "Aspirateur industriel",
    category: "autres",
    spec: "Chantier",
    description: ["Aspirateurs industriels de chantier pour poussières fines, gravats légers et liquides : filtration renforcée compatible poussières de classe M/H.", "Indispensables pour les travaux de ponçage, perçage et démolition en intérieur."], // [G]
  },
  "bungalow": {
    name: "Bungalow de chantier",
    category: "base-vie",
    spec: "Bureau, réfectoire",
    description: ["EAP location propose le plus large choix de Bungalow en France. Vous retrouverez un grand nombre de choix de dispositions pour les bungalows comme réfectoire, vestiaire, bureau ou encore salle de réunion pouvant accueillir jusqu’à 200 personnes.", "- Bungalow de 6 personnes.", "- Bungalow de 8 personnes.", "- Bungalow de 10 personnes.", "- Bungalow de 12 personnes."],
  },
  "roulotte": {
    name: "Roulotte de chantier",
    category: "base-vie",
    spec: "Mobile",
    description: ["EAP location propose le plus large choix de Roulotte de Chantier pour votre base vie en France. Sur notre site vous retrouverez une multitude de dispositions pour votre roulotte de chantier comme vestiaire, réfectoire, bureau ou encore salle de réunion.", "- Roulotte de chantier 2 personnes isolées avec vestiaire", "- Roulotte de chantier 4 personnes isolées avec vestiaire", "- Roulotte de chantier 6 personnes isolées avec vestiaire", "- Roulotte de chantier 8 personnes isolées avec vestiaire.", "- Roulotte de chantier 10 personnes isolées avec vestiaire.", "- Roulotte de chantier 12 personnes isolées avec vestiaire."],
  },
  "sanitaire": {
    name: "Sanitaire mobile",
    category: "base-vie",
    spec: "WC, douche",
    description: ["EAP location propose le plus large choix de matériel base vie. Sur notre site vous retrouverez disponible à la location :", "- Bungalow 1 WC raccordable.", "- Bungalow 2 WC raccordable.", "- Bungalow 1 WC et 1 douche raccordable.", "- Bungalow 2 WC et 2 douches raccordables.", "- Bungalow 4 douches et 4 lavabos raccordables."],
  },
  "vestiaire": {
    name: "Vestiaire",
    category: "base-vie",
    spec: "Casiers, bancs",
    description: ["Bungalow vestiaire pour équiper la base vie de votre chantier : casiers, bancs, chauffage, éclairage. Conforme aux obligations d'accueil du personnel.", "Plusieurs tailles disponibles, location toute durée, livraison et pose incluses."], // [G]
  },
  "refectoire": {
    name: "Réfectoire",
    category: "base-vie",
    spec: "Cuisine équipée",
    description: ["Bungalow réfectoire équipé pour les repas de vos équipes : tables, bancs, réchauffe-plats, réfrigérateur, chauffage. Conforme au Code du travail.", "Plusieurs capacités disponibles, location toute durée avec livraison et pose."], // [G]
  },
  "bureau": {
    name: "Bureau de chantier",
    category: "base-vie",
    spec: "Espace travail",
    description: ["Bungalow bureau de chantier pour vos réunions et le pilotage des travaux : bureau, chaises, rangements, éclairage, chauffage et climatisation selon modèles.", "Location toute durée, livraison, pose et raccordement sur demande."], // [G]
  },
  "local-technique": {
    name: "Local technique",
    category: "base-vie",
    spec: "Stockage",
    description: ["Local technique de chantier pour le stockage sécurisé de l'outillage et du petit matériel : structure robuste, fermeture sécurisée, plusieurs dimensions.", "Location toute durée avec livraison sur chantier."], // [G]
  },
  "container": {
    name: "Container maritime",
    category: "base-vie",
    spec: "20' / 40'",
    description: ["EAP location propose le plus large choix de Container de Stockage pour vos base vie sur vos chantier en France. Sur notre site vous retrouverez disponible à la location :", "- Container stockage de 8 pieds (12m3) 2,5 mètres", "- Container stockage de 10 pieds (15m3) 3 mètres", "- Container stockage de 20 pieds (32m3) 6 mètres", "- Container stockage de 20 pieds (32m3) 6 mètres « open side »", "- Container stockage de 40 pieds (77m3) 12 mètres"],
  },
  "rouleau-tandem": {
    name: "Rouleau vibrant tandem",
    category: "compactage",
    spec: "1T à 4T",
    description: ["EAP location propose le plus large choix de compacteur tandem en France. Sur notre site vous retrouverez à la location des compacteurs tandem allant jusqu’à 12.25t.", "Les disponibilités et caractéristiques de nos compacteurs tandems :", "- Compacteur tandem rouleau 1.5t", "- Compacteur tandem rouleau 2.5t", "- Compacteur tandem rouleau 3.8t", "- Compacteur tandem rouleau 7.8t", "- Compacteur tandem rouleau 9.6t", "- Compacteur tandem rouleau 10.4t", "- Compacteur tandem rouleau 12.25t"],
  },
  "rouleau-monocylindre": {
    name: "Rouleau vibrant monocylindre",
    category: "compactage",
    spec: "4T à 15T",
    description: ["EAP location propose le plus large choix de compacteur monocylindre en France. Sur notre site vous retrouverez à la location des compacteurs monocylindres jusqu’à 23 tonnes", "Les disponibilités et caractéristiques de nos compacteurs monocylindres :", "- Compacteur monocylindre V1", "- Compacteur monocylindre V1 + PDM 5 tonnes", "- Compacteur monocylindre V2", "- Compacteur monocylindre V3", "- Compacteur monocylindre V4", "- Compacteur monocylindre V5 20 tonnes", "- Compacteur monocylindre V5 23 tonnes", "- Compacteur monocylindre V5 + PDM 16 tonnes", "- Compacteur monocylindre V5 + PDM 19 tonnes"],
  },
  "rouleau-mixte": {
    name: "Rouleau mixte",
    category: "compactage",
    spec: "Bille + pneus",
    description: ["Le rouleau mixte combine une bille vibrante à l'avant et des pneus à l'arrière : compactage efficace des enrobés et des couches de forme en une seule passe.", "Disponible en plusieurs largeurs de bille. Location avec livraison sur chantier."], // [G]
  },
  "plaque-vibrante": {
    name: "Plaque vibrante",
    category: "compactage",
    spec: "50kg à 500kg",
    description: ["La plaque vibrante compacte sols, graves et enrobés sur les petites et moyennes surfaces : tranchées, trottoirs, abords de regards.", "Modèles essence ou diesel, marche avant seule ou réversible selon les besoins du chantier."], // [G]
  },
  "pilonneuse": {
    name: "Pilonneuse",
    category: "compactage",
    spec: "Tranchées",
    description: ["La pilonneuse (pilon sauteur) compacte les sols cohésifs en espaces réduits : fonds de tranchée, abords de fondations, remblais localisés.", "Légère et maniable, elle passe partout où les rouleaux ne passent pas."], // [G]
  },
  "rouleau-pneus": {
    name: "Rouleau à pneus",
    category: "compactage",
    spec: "Finition",
    description: ["Le rouleau à pneus assure la finition des enrobés et le compactage des couches de surface grâce à ses pneus lisses à pression réglable.", "Indispensable en complément du tandem sur les chantiers d'enrobés."], // [G]
  },
  "chariot-industriel-diesel": {
    name: "Chariot industriel diesel",
    category: "manutention",
    spec: "1,5T à 16T",
    description: ["EAP location propose le plus large choix de chariot industriel diesel en France. Sur notre site vous retrouverez disponible à la location des chariots industriels diesel avec une capacité de levage pouvant aller jusqu’à 16 tonnes.", "Les disponibilités et caractéristiques de nos chariots :", "- Chariot Industriel diesel de 1,5 tonnes", "- Chariot Industriel diesel de 2,5 tonnes", "- Chariot Industriel diesel de 3,5 tonnes", "- Chariot Industriel diesel de 5 tonnes", "- Chariot Industriel diesel de 8 tonnes", "- Chariot Industriel diesel de 10 tonnes", "- Chariot Industriel diesel de 12 tonnes", "- Chariot Industriel diesel de 14 tonnes", "- Chariot Industriel diesel de 16 tonnes"],
  },
  "chariot-industriel-gaz": {
    name: "Chariot industriel gaz",
    category: "manutention",
    spec: "1,5T à 16T",
    description: ["EAP location propose le plus large choix de chariot industriel gaz en France. Sur notre site vous retrouverez disponible à la location des chariots industriels gaz avec une capacité de levage pouvant aller jusqu’à 16 tonnes.", "Les disponibilités et caractéristiques de nos chariots :", "- Chariot Industriel gaz de 1,5 tonnes", "- Chariot Industriel gaz de 2,5 tonnes", "- Chariot Industriel gaz de 3,5 tonnes", "- Chariot Industriel gaz de 5 tonnes", "- Chariot Industriel gaz de 8 tonnes", "- Chariot Industriel gaz de 10 tonnes", "- Chariot Industriel gaz de 12 tonnes", "- Chariot Industriel gaz de 14 tonnes", "- Chariot Industriel gaz de 16 tonnes"],
  },
  "chariot-industriel-electrique": {
    name: "Chariot industriel électrique",
    category: "manutention",
    spec: "1,5T à 8T",
    description: ["EAP location propose le plus large choix de chariot industriel électrique en France. Sur notre site vous retrouverez disponible à la location des chariots industriels électrique avec une capacité de levage pouvant aller jusqu’à 6 tonnes.", "Les disponibilités et caractéristiques de nos chariots :", "- Chariot Industriel électrique de 1,5 tonnes", "- Chariot Industriel électrique de 2,5 tonnes", "- Chariot Industriel électrique de 3,5 tonnes", "- Chariot Industriel électrique de 5 tonnes", "- Chariot Industriel électrique de 6 tonnes", "- Chariot Industriel électrique de 8 tonnes"],
  },
  "chariot-semi-industriel": {
    name: "Chariot semi-industriel",
    category: "manutention",
    spec: "2T à 5T",
    description: ["EAP location propose le plus large choix de chariot semi-industriel en France. Sur notre site vous retrouverez disponible à la location des chariots semi-industriels avec une capacité de levage pouvant aller jusqu’a 5 tonnes.", "Les disponibilités et caractéristiques de nos chariots :", "- Chariot Semi-Industriel de 2 tonnes", "- Chariot Semi-Industriel de 2,5 tonnes", "- Chariot Semi-Industriel de 3 tonnes", "- Chariot Semi-Industriel de 3,5 tonnes", "- Chariot Semi-Industriel de 4 tonnes", "- Chariot Semi-Industriel de 5 tonnes"],
  },
  "chariot-tout-terrain": {
    name: "Chariot tout terrain",
    category: "manutention",
    spec: "4x2 ou 4x4, 2T à 5T",
    description: ["EAP location propose le plus large choix de chariot tout terrain en France. Sur notre site vous retrouverez disponible à la location des chariots tout terrain avec 4 roues motrices ou 2 roues motrices avec une capacité de levage pouvant aller jusqu’à 5 tonnes.", "Les disponibilités et caractéristiques de nos chariots :", "- Chariot tout terrain 4X2 de 2 tonnes", "- Chariot tout terrain 4X4 de 2 tonnes", "- Chariot tout terrain 4X2 de 2,5 tonnes", "- Chariot tout terrain 4X4 de 3 tonnes", "- Chariot tout terrain 4X4 de 3,5 tonnes", "- Chariot tout terrain 4X4 de 4 tonnes", "- Chariot tout terrain 4X4 de 5 tonnes"],
  },
  "chariot-telescopique": {
    name: "Chariot télescopique fixe",
    category: "manutention",
    spec: "4m à 18m",
    description: ["EAP location propose le plus large choix de chariot télescopique en France. Sur notre site vous retrouverez disponible à la location des chariot télescopique pouvant aller jusqu’a 18 mètres de hauteur de travail avec ou sans opérateurs.", "Les disponibilités et caractéristiques de nos chariots :", "- Chariot Télescopique fixe avec fourche – 4 mètres de hauteur de travail", "- Chariot Télescopique fixe avec fourche – 6 mètres de hauteur de travail", "- Chariot Télescopique fixe avec fourche – 7 mètres de hauteur de travail", "- Chariot Télescopique fixe avec fourche – 9 mètres de hauteur de travail", "- Chariot Télescopique fixe avec fourche – 11 mètres de hauteur de travail", "- Chariot Télescopique fixe avec fourche – 13 mètres de hauteur de travail", "- Chariot Télescopique fixe avec fourche – 14 mètres de hauteur de travail", "- Chariot Télescopique fixe avec fourche – 17 mètres de hauteur de travail", "- Chariot Télescopique fixe avec fourche – 18 mètres de hauteur de travail", "Accessoires disponibles : Godet Terre et Potence"],
  },
  "chariot-rotatif": {
    name: "Chariot télescopique rotatif",
    category: "manutention",
    spec: "16m à 35m, 360°",
    description: ["EAP location propose le plus large choix de chariot télescopique rotatif en France. Sur notre site vous retrouverez disponible à la location des chariot télescopique pouvant aller jusqu’à 35 mètres de hauteur de travail avec ou sans opérateurs.", "Les disponibilités et caractéristiques de nos chariots :", "- Chariot Télescopique Rotatif avec fourche – 16 mètres de hauteur de travail", "- Chariot Télescopique Rotatif avec fourche – 18 mètres de hauteur de travail", "- Chariot Télescopique Rotatif avec fourche – 21 mètres de hauteur de travail", "- Chariot Télescopique Rotatif avec fourche – 25 mètres de hauteur de travail", "- Chariot Télescopique Rotatif avec fourche – 30 mètres de hauteur de travail", "- Chariot Télescopique Rotatif avec fourche – 32 mètres de hauteur de travail", "- Chariot Télescopique Rotatif avec fourche – 35 mètres de hauteur de travail", "Accessoires disponibles : Godet Terre, Potence, Treuil 5T, Radio Télécommande"],
  },
  "chariot-gros-tonnage": {
    name: "Chariot télescopique gros tonnage",
    category: "manutention",
    spec: "6T-9m à 33T-12m",
    description: ["EAP location propose le plus large choix de Chariot gros tonnage pour vos travaux de manutention en France. Sur notre site vous retrouverez disponible à la location :", "- Chariot gros tonnage 6T – 9M", "- Chariot gros tonnage 9T – 7M", "- Chariot gros tonnage 13T – 10M", "- Chariot gros tonnage 16T – 10M", "- Chariot gros tonnage 18T – 9.6M", "- Chariot gros tonnage 23T – 10M", "- Chariot gros tonnage 25T – 11M", "- Chariot gros tonnage 33T – 12M"],
  },
  "grue-mobile": {
    name: "Grue mobile",
    category: "manutention",
    spec: "35T à 160T",
    description: ["EAP location propose la location de grues mobiles dans toute la France en préconisant la proximité de votre chantier. Sur notre site vous retrouverez disponible à la location des grues mobiles avec une capacité de levage pouvant aller jusqu’à 160 tonnes.", "Les disponibilités et caractéristiques de nos grues mobiles :", "- Grue mobile de 35 tonnes.", "- Grue mobile de 40 à 50 tonnes.", "- Grue mobile de 60 à 80 tonnes.", "- Grue mobile de 90 à 110 tonnes.", "- Grue mobile de 120 à 160 tonnes."],
  },
  "mini-grue-chenilles": {
    name: "Mini grue télescopique sur chenilles",
    category: "manutention",
    spec: "5T-20m à 8T-26m",
    description: ["EAP location propose le plus large choix de mini grue araignée en France. Sur notre site vous retrouverez disponible à la location des mini grue télescopique pouvant aller jusqu’à 26 mètres de hauteur de travail avec ou sans opérateurs.", "- Mini grue télescopique de 5T – 20M", "- Mini grue télescopique de 6T – 22M", "- Mini grue télescopique de 8T – 26M"],
  },
  "mini-grue-araignee": {
    name: "Mini grue araignée",
    category: "manutention",
    spec: "3T à 4T",
    description: ["EAP location propose le plus large choix de Mini grue araignée pour vos travaux de manutention en France . Sur notre site vous retrouverez disponible à la location :", "- Mini grue araignée 3T – 5M", "- Mini grue araignée 3T – 8M", "- Mini grue araignée 3.5T – 10M", "- Mini grue araignée 3.5T – 14M", "- Mini grue araignée 4T – 18M", "- Mini grue araignée 4T – 20M"],
  },
  "gerbeur-transpalette": {
    name: "Gerbeur / Transpalette",
    category: "manutention",
    spec: "Manutention légère",
    description: ["Gerbeurs électriques et transpalettes pour la manutention légère en entrepôt, atelier ou surface de vente : levée de palettes, gerbage en rayonnage, déplacement de charges.", "Location courte ou longue durée, matériel récent et entretenu."], // [G]
  },
  "mini-pelle": {
    name: "Mini-pelle",
    category: "terrassement",
    spec: "De 0,8T à 8T",
    description: ["EAP location propose le plus large choix de mini pelle en France. Sur notre site vous retrouverez disponible à la location des mini-pelle pouvant aller jusqu’à 8 tonnes.", "Les accessoires disponibles : BRH, Godets et pince de tri", "Les disponibilités et caractéristiques de nos mini-pelle :", "- Mini pelle – 1,5 tonnes", "- Mini pelle – 2,5 tonnes", "- Mini pelle – 3,5 tonnes", "- Mini pelle – 5 tonnes", "- Mini pelle – 6 tonnes", "- Mini pelle – 8 tonnes"],
  },
  "pelle-chenilles": {
    name: "Pelle sur chenilles",
    category: "terrassement",
    spec: "De 10T à 50T",
    description: ["EAP location propose le plus large choix de pelle sur chenilles en France. Nous sommes à proximité de vos chantiers dans toute la France grâce à notre réseau de partenaires. Sur notre site vous retrouverez disponible à la location des pelles sur chenilles pouvant aller jusqu’à 25 tonnes.", "Les disponibilités et caractéristiques de nos pelles sur chenilles :", "- Pelle sur chenilles 10t", "- Pelle sur chenilles 14t", "- Pelle sur chenilles 16t", "- Pelle sur chenilles 18t", "- Pelle sur chenilles 20t", "- Pelle sur chenilles 22t", "- Pelle sur chenilles 25t"],
  },
  "pelle-pneus": {
    name: "Pelle sur pneus",
    category: "terrassement",
    spec: "De 10T à 25T",
    description: ["EAP location propose le plus large choix de pelle sur pneus en France. Nous sommes à proximité de vos chantiers dans toute la France grâce à notre réseau de partenaires. Sur notre site vous retrouverez disponible à la location des pelles sur pneus pouvant aller jusqu’à 18 tonnes.", "Les disponibilités et caractéristiques de nos pelles sur pneus :", "- Pelle sur pneus – 5 tonnes", "- Pelle sur pneus – 8 tonnes", "- Pelle sur pneus – 10 tonnes", "- Pelle sur pneus – 12 tonnes", "- Pelle sur pneus – 14 tonnes", "- Pelle sur pneus – 16 tonnes", "- Pelle sur pneus – 18 tonnes"],
  },
  "chargeuse-pneus": {
    name: "Chargeuse sur pneus",
    category: "terrassement",
    spec: "De 1m³ à 5m³",
    description: ["EAP location propose le plus large choix de chargeuse articulée en France. Sur notre site vous retrouverez disponible à la location des chargeuses articulées pouvant aller jusqu’à 2500L.", "Les disponibilités et caractéristiques de nos chargeuses articulées :", "- Chargeuse articulée 700L", "- Chargeuse articulée 800L", "- Chargeuse articulée 1000L", "- Chargeuse articulée 1500L", "- Chargeuse articulée 2000L", "- Chargeuse articulée 2500L"],
  },
  "chargeuse-chenilles": {
    name: "Chargeuse sur chenilles",
    category: "terrassement",
    spec: "Compacte et puissante",
    description: ["EAP location propose le plus large choix de chargeuse compacte sur chenilles en France. Sur notre site vous retrouverez disponible à la location des chargeuses compactes sur chenilles pouvant aller jusqu’a 6 tonnes et 600L.", "Les disponibilités et caractéristiques de nos chargeuses compactes sur chenilles :", "- Chargeuses compactes sur chenilles – 3 tonnes et 280 litres", "- Chargeuses compactes sur chenilles – 3,5 tonnes et 380 litres", "- Chargeuses compactes sur chenilles – 4,5 tonnes et 450 litres", "- Chargeuses compactes sur chenilles – 6 tonnes et 600 litres", "Accessoire disponibles : Fourche palette et godet."],
  },
  "chargeuse-compacte": {
    name: "Chargeuse compacte",
    category: "terrassement",
    spec: "Bobcat, Manitou",
    description: ["EAP location propose le plus large choix de chargeuse compacte sur pneus en France. Sur notre site vous retrouverez disponible à la location des chargeuses compactes sur pneus pouvant aller jusqu’à 6 tonnes et 600L.", "Les disponibilités et caractéristiques de nos chargeuses compactes sur pneus :", "- Chargeuse compacte sur pneus 150L – 0.90M – 1.3T", "- Chargeuse compacte sur pneus 200L – 1.20M – 1.8T", "- Chargeuse compacte sur pneus 300L – 1.40M – 2.5T", "- Chargeuse compacte sur pneus 400L – 1.70M – 2.9T", "- Chargeuse compacte sur pneus 450L – 1.80M – 3.8T", "- Chargeuse compacte sur pneus 600L – 1.90M – 4.5T"],
  },
  "tractopelle": {
    name: "Tractopelle",
    category: "terrassement",
    spec: "Polyvalent chantier",
    description: ["Le tractopelle combine un godet chargeur à l'avant et une pelle rétro à l'arrière : un seul engin pour charger, creuser et remblayer. Polyvalent par excellence sur les chantiers de VRD, de terrassement léger et de réseaux.", "Disponible en location courte ou longue durée, avec livraison sur chantier partout en France."], // [G]
  },
  "tombereau": {
    name: "Tombereau articulé",
    category: "terrassement",
    spec: "Transport matériaux",
    description: ["Le tombereau articulé transporte de gros volumes de matériaux (terre, gravats, enrochements) sur terrains accidentés grâce à son châssis articulé et sa transmission intégrale.", "Idéal pour les chantiers de terrassement de masse. Location avec livraison sur chantier partout en France."], // [G]
  },
  "nacelle-ciseaux-electrique": {
    name: "Nacelle ciseaux électrique",
    category: "travail-en-hauteur",
    spec: "6m à 14m",
    description: ["EAP location propose le plus large choix de Nacelle Ciseaux Électrique pour votre travail en hauteur en France. Sur notre site vous retrouverez disponible à la location :", "- Nacelle Ciseaux Electrique de 8 mètres de hauteur de travail.", "- Nacelle Ciseaux Electrique de 10 mètres (et 10 mètres Grand Plateau) de hauteur de travail.", "- Nacelle Ciseaux Electrique de 12 mètres (et 12 mètres Grand Plateau) de hauteur de travail.", "- Nacelle Ciseaux Electrique de 14 mètres (et 14 mètres Grand Plateau) de hauteur de travail.", "- Nacelle Ciseaux Electrique de 16 mètres (et 16 mètres Grand Plateau) de hauteur de travail.", "- Nacelle Ciseaux Electrique de 18 mètres de hauteur de travail.", "- Nacelle Ciseaux Electrique de 22 mètres de hauteur de travail.", "- Nacelle Ciseaux Electrique de 28 mètres de hauteur de travail.", "- Nacelle Ciseaux Electrique de 30 mètres de hauteur de travail.", "- Nacelle Ciseaux Electrique de 33 mètres de hauteur de travail."],
  },
  "nacelle-ciseaux-diesel": {
    name: "Nacelle ciseaux diesel",
    category: "travail-en-hauteur",
    spec: "10m à 18m",
    description: ["EAP location propose le plus large choix de Nacelle Ciseaux Diesel pour votre travail en hauteur en France. Sur notre site vous retrouverez disponible à la location :", "- Nacelle Ciseaux Diesel de 10 mètres de hauteur de travail.", "- Nacelle Ciseaux Diesel de 12 mètres de hauteur de travail.", "- Nacelle Ciseaux Diesel de 15 mètres de hauteur de travail.", "- Nacelle Ciseaux Diesel de 18 mètres de hauteur de travail.", "- Nacelle Ciseaux Diesel de 23 mètres de hauteur de travail.", "- Nacelle Ciseaux Diesel de 28 mètres de hauteur de travail.", "- Nacelle Ciseaux Diesel de 30 mètres de hauteur de travail.", "- Nacelle Ciseaux Diesel de 33 mètres de hauteur de travail."],
  },
  "nacelle-articulee-electrique": {
    name: "Nacelle articulée électrique",
    category: "travail-en-hauteur",
    spec: "12m à 20m",
    description: ["EAP location propose le plus large choix de Nacelle Articulée Électrique pour vos travaux en hauteur en France. Sur notre site vous retrouverez disponible à la location :", "- Nacelle Articulée électrique 12 mètres", "- Nacelle Articulée électrique 15 mètres", "- Nacelle Articulée électrique 17 mètres", "- Nacelle Articulée électrique 20 mètres"],
  },
  "nacelle-articulee-diesel": {
    name: "Nacelle articulée diesel",
    category: "travail-en-hauteur",
    spec: "16m à 45m",
    description: ["EAP location propose le plus large choix de Nacelle Articulée pour vos travaux en hauteur en France. Sur notre site vous retrouverez disponible à la location :", "Diesel :", "- Nacelle Articulée 12 mètres", "- Nacelle Articulée 16 mètres", "- Nacelle Articulée 18 mètres", "- Nacelle Articulée 20 mètres", "- Nacelle Articulée 26 mètres", "- Nacelle Articulée 26 mètres (grand déport)", "- Nacelle Articulée 32 mètres", "- Nacelle Articulée 40 mètres", "- Nacelle Articulée 43 mètres"],
  },
  "nacelle-telescopique": {
    name: "Nacelle télescopique",
    category: "travail-en-hauteur",
    spec: "20m à 56m",
    description: ["EAP location propose le plus large choix de Nacelle Télescopique (Diesel) pour vos travaux en hauteur en France. Sur notre site vous retrouverez disponible à la location :", "- Nacelle Télescopique de 14 mètres de hauteur de travail (Sur chenilles)", "- Nacelle Télescopique de 16 mètres de hauteur de travail", "- Nacelle Télescopique de 22 mètres de hauteur de travail (Sur roues et sur chenilles)", "- Nacelle Télescopique de 28 mètres de hauteur de travail", "- Nacelle Télescopique de 34 mètres de hauteur de travail", "- Nacelle Télescopique de 40 mètres de hauteur de travail", "- Nacelle Télescopique de 43 mètres de hauteur de travail", "- Nacelle Télescopique de 48 mètres de hauteur de travail", "- Nacelle Télescopique de 57 mètres de hauteur de travail"],
  },
  "nacelle-araignee": {
    name: "Nacelle araignée",
    category: "travail-en-hauteur",
    spec: "Accès difficile",
    description: ["EAP location propose le plus large choix de Nacelle Araignée (Bi-énergie) pour le travail en hauteur en France. Sur notre site vous retrouverez disponible à la location :", "- Nacelle Araignée Bi-énergie 12 mètres", "- Nacelle Araignée Bi-énergie 13 mètres", "- Nacelle Araignée Bi-énergie 17 mètres", "- Nacelle Araignée Bi-énergie 22 mètres", "- Nacelle Araignée Bi-énergie 23 mètres", "- Nacelle Araignée Bi-énergie 26 mètres", "- Nacelle Araignée Bi-énergie 30 mètres", "- Nacelle Araignée Bi-énergie 33 mètres", "- Nacelle Araignée Bi-énergie 40 mètres"],
  },
  "nacelle-camion": {
    name: "Nacelle sur camion",
    category: "travail-en-hauteur",
    spec: "Avec chauffeur",
    description: ["EAP location propose un large choix de Nacelle sur poids lourd pour vos travaux en hauteur sur vos chantiers en France. Nos nacelles sur poids lourds permettent d’opérer sur des édifices de grande hauteur et difficile telles que les antennes, les immeubles, les éoliennes ou les églises. Sur notre site vous retrouverez disponible à la location :", "- Nacelle sur poids lourd 25-30mètres", "- Nacelle sur poids lourd 36-40 mètres", "- Nacelle sur poids lourd 41-45 mètres", "- Nacelle sur poids lourd 46-50 mètres", "- Nacelle sur poids lourd 51-60 mètres", "- Nacelle sur poids lourd 61-70 mètres", "- Nacelle sur poids lourd 71-80 mètres", "- Nacelle sur poids lourd 81-90 mètres", "- Nacelle sur poids lourd 91-100 mètres"],
  },
  "echafaudage-roulant": {
    name: "Échafaudage roulant",
    category: "travail-en-hauteur",
    spec: "3m à 12m",
    description: ["EAP location propose le plus large choix d’Échafaudage roulant étroit ou large pour vos Travaux en Hauteur sur vos chantiers en France. Sur notre site vous retrouverez disponible à la location :", "- Échafaudage roulant 4,8 mètres", "- Échafaudage roulant 5,8 mètres", "- Échafaudage roulant 6,8 mètres", "- Échafaudage roulant 7,8 mètres", "- Échafaudage roulant 8,8 mètres", "- Échafaudage roulant 9,8 mètres", "- Échafaudage roulant 10,8 mètres", "- Échafaudage roulant 11,8 mètres", "- Échafaudage roulant 12,8 mètres"],
  },
  "pir-pirl": {
    name: "PIR / PIRL",
    category: "travail-en-hauteur",
    spec: "Plateforme individuelle",
    description: ["EAP location propose le plus large choix de Nacelle Mat Vertical Manuel pour vos Travaux en Hauteur sur vos chantiers en France. Sur notre site vous retrouverez disponible à la location :", "- Nacelle Mat Vertical Manuel 8 mètres AWP-20S", "- Nacelle Mat Vertical Manuel 9,5 mètres AWP-25S", "- Nacelle Mat Vertical Manuel 11 mètres AWP-30S", "- Nacelle Mat Vertical Manuel 13 mètres AWP-36S", "- Nacelle Mat Vertical Manuel 14 mètres AWP-40S"],
  },
  "nacelle-mat": {
    name: "Nacelle à mât",
    category: "travail-en-hauteur",
    spec: "Verticale compacte",
    description: ["EAP location propose le plus large choix de Nacelle Mat Vertical (Toucan) pour vos Travaux en Hauteur sur vos chantiers en France. Sur notre site vous retrouverez disponible à la location :", "- Nacelle Mat Vertical 6 mètres", "- Nacelle Mat Vertical 8 mètres", "- Nacelle Mat Vertical 10 mètres (sur roues ou sur chenilles)", "- Nacelle Mat Vertical 12 mètres"],
  },
  "plateforme-suspendue": {
    name: "Plateforme suspendue",
    category: "travail-en-hauteur",
    spec: "Travaux façade",
    description: ["La plateforme suspendue permet de travailler en façade à grande hauteur : ravalement, peinture, isolation thermique par l'extérieur, pose de bardage.", "Installation en toiture par câbles, longueur et hauteur adaptables à votre chantier. Location avec assistance à l'installation."], // [G]
  },
  "monte-materiaux": {
    name: "Monte-matériaux",
    category: "travail-en-hauteur",
    spec: "Levage vertical",
    description: ["EAP location propose le plus large choix d’élévateur mécanique de charge en France. Vous retrouverez disponible à la location :", "- Élévateur mécanique de charge 5 mètres et 300kg", "- Élévateur mécanique de charge 8 mètres et 300kg"],
  },
};