export type UserType = "farmer" | "agronomist";
export type AgronomistPath = "crop" | "category";

export interface WizardCrop {
  id: string;
  name: string;
  nameEn: string;
  emoji: string;
}

export interface WizardPhase {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  emoji: string;
  productIds: string[];
}

export interface WizardCropCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  emoji: string;
  color: string;
  image: string;
  crops: WizardCrop[];
  phases: WizardPhase[];
}

// ─── Phase product mappings ───────────────────────────────────────────────────

const VEGETABLE_PHASES: WizardPhase[] = [
  {
    id: "planting",
    name: "Φύτρωμα / Μεταφύτευση",
    nameEn: "Germination / Transplanting",
    description: "Εδαφοβελτιωτικά, μυκόριζες και εκκίνηση ριζικού συστήματος",
    descriptionEn: "Soil improvement, mycorrhizae and root system initiation",
    emoji: "🌱",
    productIds: [
      "sublic", "clonotri", "strepse",
      "micoseeds-mb", "micoseeds-plus", "micoseeds-coat",
      "actiseed", "agilus", "balance", "multiaction",
      "microstart", "rizotech-mb-ze",
      "activator-plus", "ca-verde", "fungy-star",
      "fosfoman-75", "vegetal-betaphos", "fyllon-sea", "pg1-fluid",
    ],
  },
  {
    id: "vegetative",
    name: "Βλαστική Ανάπτυξη",
    nameEn: "Vegetative Growth",
    description: "Ανάπτυξη φυτομάζας, θρέψη και βιοδιεγέρτες",
    descriptionEn: "Biomass development, nutrition and biostimulants",
    emoji: "🍃",
    productIds: [
      "nutryaction", "on-pro", "on-max", "active-on-nem",
      "betabio-active", "betabio-full", "betabio-organ",
      "organ-star", "algaman", "hydrolmerco", "bioexpress", "fyllon-sea",
      "vegetal-b60", "pg1-fluid", "sd-3000",
      "dcd-slow-n28", "turbo-18",
      "twin-leaf", "microsync-b", "veramin-b-vorio",
      "micro-fert-combi", "silit-30m", "litoman-ultra",
      "active-dry", "fyllon-sprint", "comerco-plus",
      "ferroman", "matur-nk-458",
    ],
  },
  {
    id: "flowering",
    name: "Άνθιση",
    nameEn: "Flowering",
    description: "Υποστήριξη ανθοφορίας και γονιμοποίησης",
    descriptionEn: "Flowering and pollination support",
    emoji: "🌸",
    productIds: [
      "vegetal-betaphos", "veramin-b-vorio", "microsync-b",
      "betabio-active", "organ-star", "fosfoman-75",
      "nutryaction", "sd-3000", "vegetal-b60",
      "algaman", "bioexpress",
      "silit-30m", "litoman-ultra", "quick-a3", "soy-film", "twin-leaf",
    ],
  },
  {
    id: "fruit-set",
    name: "Καρπόδεση",
    nameEn: "Fruit Set",
    description: "Σταθεροποίηση καρπών, ασβέστιο και ποιότητα",
    descriptionEn: "Fruit stabilization, calcium and quality",
    emoji: "🫐",
    productIds: [
      "veramin-ca-asvestio", "fyllon-complex", "biocal-156", "azo-cal-2m", "supreme-ca",
      "vegetal-betaphos", "veramin-quality", "organ-star",
      "kalis-k30", "sugarplex-reflexo",
      "ferroman", "sd-3000", "vegetal-b60",
      "betabio-active", "silit-30m", "litoman-ultra",
      "microsync-b", "veramin-b-vorio",
    ],
  },
  {
    id: "fruit-development",
    name: "Ανάπτυξη Καρπού",
    nameEn: "Fruit Development",
    description: "Ανάπτυξη και ποιότητα καρπού",
    descriptionEn: "Fruit growth and quality development",
    emoji: "🍅",
    productIds: [
      "veramin-ca-asvestio", "fyllon-complex", "biocal-156", "azo-cal-2m",
      "veramin-quality", "kalis-k30", "k-si-kalis",
      "sugarplex-reflexo", "sugarplex-cu",
      "ferroman", "matur-nk-458", "betabio-full", "supreme-ca",
      "vegetal-b60", "sd-3000",
      "metab", "lecan", "iron-twin", "pochar", "nematech",
      "silit-30m", "litoman-ultra", "organ-star", "algaman",
    ],
  },
  {
    id: "harvest",
    name: "Συγκομιδή",
    nameEn: "Harvest",
    description: "Ωρίμανση και ποιότητα τελικού προϊόντος",
    descriptionEn: "Ripening and final product quality",
    emoji: "🌾",
    productIds: [
      "matur-plus", "kalis-k30", "k-si-kalis",
      "veramin-quality", "vegetal-b60", "sd-3000", "soy-film",
    ],
  },
];

const FRUIT_TREE_PHASES: WizardPhase[] = [
  {
    id: "dormancy-budbreak",
    name: "Αδρανοποίηση / Ξύπνημα",
    nameEn: "Dormancy / Budbreak",
    description: "Προετοιμασία για τη νέα βλαστική περίοδο",
    descriptionEn: "Preparation for the new growing season",
    emoji: "🌿",
    productIds: [
      "sublic", "clonotri", "strepse",
      "activator-plus", "ca-verde", "fungy-star",
      "organ-star", "fyllon-sprint", "active-dry", "pg1-fluid",
    ],
  },
  {
    id: "vegetative",
    name: "Βλαστική Ανάπτυξη",
    nameEn: "Vegetative Growth",
    description: "Ανάπτυξη βλαστών και φύλλων, θρέψη δένδρων",
    descriptionEn: "Shoot and leaf development, tree nutrition",
    emoji: "🍃",
    productIds: [
      "nutryaction", "on-pro", "on-max", "active-on-nem",
      "betabio-active", "betabio-full", "betabio-organ",
      "organ-star", "algaman", "hydrolmerco", "bioexpress", "fyllon-sea",
      "vegetal-b60", "pg1-fluid", "sd-3000",
      "dcd-slow-n28", "turbo-18",
      "twin-leaf", "microsync-b", "veramin-b-vorio",
      "micro-fert-combi", "silit-30m", "litoman-ultra",
      "active-dry", "fyllon-sprint", "ferroman", "matur-nk-458",
    ],
  },
  {
    id: "flowering",
    name: "Άνθιση",
    nameEn: "Flowering",
    description: "Ανθοφορία και επικονίαση",
    descriptionEn: "Bloom and pollination",
    emoji: "🌸",
    productIds: [
      "vegetal-betaphos", "veramin-b-vorio", "microsync-b",
      "betabio-active", "organ-star", "fosfoman-75",
      "nutryaction", "sd-3000", "vegetal-b60",
      "algaman", "bioexpress", "silit-30m", "litoman-ultra",
      "quick-a3", "soy-film",
    ],
  },
  {
    id: "fruit-set",
    name: "Καρπόδεση",
    nameEn: "Fruit Set",
    description: "Σταθεροποίηση καρπών και πρώιμη ανάπτυξη",
    descriptionEn: "Fruit retention and early development",
    emoji: "🫒",
    productIds: [
      "veramin-ca-asvestio", "fyllon-complex", "biocal-156", "azo-cal-2m", "supreme-ca",
      "vegetal-betaphos", "veramin-quality", "kalis-k30",
      "sugarplex-reflexo", "ferroman",
      "sd-3000", "vegetal-b60", "betabio-active",
      "silit-30m", "litoman-ultra", "microsync-b",
    ],
  },
  {
    id: "fruit-development",
    name: "Ανάπτυξη Καρπού",
    nameEn: "Fruit Development",
    description: "Διόγκωση και ποιοτική ανάπτυξη καρπού",
    descriptionEn: "Fruit enlargement and quality development",
    emoji: "🍊",
    productIds: [
      "veramin-ca-asvestio", "fyllon-complex", "biocal-156", "azo-cal-2m",
      "veramin-quality", "kalis-k30", "k-si-kalis",
      "sugarplex-reflexo", "sugarplex-cu",
      "ferroman", "matur-nk-458", "betabio-full", "supreme-ca",
      "vegetal-b60", "sd-3000",
      "metab", "protendo", "lecan", "iron-twin", "pochar", "nematech",
      "silit-30m", "litoman-ultra", "organ-star",
    ],
  },
  {
    id: "maturation",
    name: "Ωρίμανση",
    nameEn: "Maturation",
    description: "Χρωματισμός, σάκχαρα και ποιότητα καρπού",
    descriptionEn: "Coloring, sugars and fruit quality",
    emoji: "🍇",
    productIds: [
      "matur-plus", "kalis-k30", "k-si-kalis",
      "veramin-quality", "vegetal-b60", "sd-3000",
      "sugarplex-reflexo", "matur-nk-458",
    ],
  },
  {
    id: "post-harvest",
    name: "Μετά τη Συγκομιδή",
    nameEn: "Post-Harvest",
    description: "Αποκατάσταση δένδρων και προετοιμασία για επόμενη χρονιά",
    descriptionEn: "Tree recovery and preparation for next season",
    emoji: "🍂",
    productIds: [
      "activator-plus", "ca-verde", "fungy-star",
      "organ-star", "fyllon-sprint", "active-dry",
      "sublic", "clonotri", "strepse", "fosfoman-75", "comerco-plus",
    ],
  },
];

const EXTENSIVE_PHASES: WizardPhase[] = [
  {
    id: "soil-prep",
    name: "Προετοιμασία Εδάφους",
    nameEn: "Soil Preparation",
    description: "Βελτίωση εδαφικής δομής και μικροβιώματος",
    descriptionEn: "Soil structure and microbiome improvement",
    emoji: "🌍",
    productIds: [
      "sublic", "clonotri", "strepse", "pochar", "nematech",
      "activator-plus", "ca-verde", "fungy-star",
      "organ-star", "fyllon-sprint", "active-dry",
      "silit-30m", "litoman-ultra", "fosfoman-75", "comerco-plus",
    ],
  },
  {
    id: "sowing",
    name: "Σπορά / Φύτρωμα",
    nameEn: "Sowing / Germination",
    description: "Εμβόλιο σπόρου, μυκόριζες και εκκίνηση",
    descriptionEn: "Seed inoculation, mycorrhizae and crop establishment",
    emoji: "🌱",
    productIds: [
      "actiseed", "micoseeds-mb", "micoseeds-plus", "micoseeds-coat",
      "microstart", "rizotech-mb-ze",
      "agilus", "balance", "multiaction",
      "vegetal-betaphos", "fosfoman-75", "pg1-fluid",
    ],
  },
  {
    id: "vegetative",
    name: "Βλαστική Ανάπτυξη",
    nameEn: "Vegetative Growth",
    description: "Ανάπτυξη φυτομάζας και θρέψη καλλιέργειας",
    descriptionEn: "Crop biomass and nutritional development",
    emoji: "🍃",
    productIds: [
      "nutryaction", "on-pro", "on-max", "active-on-nem",
      "betabio-active", "betabio-full", "betabio-organ",
      "organ-star", "algaman", "hydrolmerco", "bioexpress", "fyllon-sea",
      "vegetal-b60", "pg1-fluid", "sd-3000",
      "dcd-slow-n28", "turbo-18",
      "twin-leaf", "microsync-b", "veramin-b-vorio",
      "micro-fert-combi", "silit-30m", "litoman-ultra",
      "active-dry", "fyllon-sprint", "comerco-plus",
      "ferroman", "matur-nk-458",
    ],
  },
  {
    id: "flowering",
    name: "Άνθιση",
    nameEn: "Flowering",
    description: "Ανθοφορία και γονιμοποίηση",
    descriptionEn: "Flowering and fertilization",
    emoji: "🌸",
    productIds: [
      "vegetal-betaphos", "veramin-b-vorio", "microsync-b",
      "betabio-active", "organ-star", "fosfoman-75",
      "nutryaction", "sd-3000", "vegetal-b60",
      "silit-30m", "litoman-ultra", "quick-a3", "soy-film",
    ],
  },
  {
    id: "grain-fill",
    name: "Πλήρωση Σπόρου / Καρποφορία",
    nameEn: "Grain Fill / Fruiting",
    description: "Πλήρωση σπόρου και ποιότητα παραγωγής",
    descriptionEn: "Grain filling and production quality",
    emoji: "🌾",
    productIds: [
      "veramin-quality", "kalis-k30", "k-si-kalis",
      "matur-nk-458", "betabio-full",
      "vegetal-b60", "sd-3000",
      "sugarplex-reflexo", "ferroman",
      "silit-30m", "litoman-ultra",
      "metab", "protendo",
    ],
  },
  {
    id: "harvest",
    name: "Συγκομιδή",
    nameEn: "Harvest",
    description: "Ωρίμανση και ποιότητα παραγωγής",
    descriptionEn: "Maturation and production quality",
    emoji: "🌾",
    productIds: [
      "matur-plus", "kalis-k30", "veramin-quality", "vegetal-b60", "sd-3000",
    ],
  },
];

const ORNAMENTAL_PHASES: WizardPhase[] = [
  {
    id: "establishment",
    name: "Εγκατάσταση",
    nameEn: "Establishment",
    description: "Ριζοβολία και εγκατάσταση φυτών",
    descriptionEn: "Rooting and plant establishment",
    emoji: "🌱",
    productIds: [
      "sublic", "clonotri", "strepse",
      "micoseeds-mb", "micoseeds-plus", "micoseeds-coat",
      "agilus", "balance", "multiaction",
      "microstart", "rizotech-mb-ze",
      "activator-plus", "ca-verde", "fungy-star",
      "fosfoman-75", "vegetal-betaphos", "pg1-fluid",
    ],
  },
  {
    id: "vegetative",
    name: "Βλαστική Ανάπτυξη",
    nameEn: "Vegetative Growth",
    description: "Ζωηρή βλαστική ανάπτυξη και θρέψη",
    descriptionEn: "Vigorous growth and nutrition",
    emoji: "🍃",
    productIds: [
      "nutryaction", "on-pro", "on-max",
      "betabio-active", "betabio-full", "betabio-organ",
      "organ-star", "algaman", "hydrolmerco", "bioexpress", "fyllon-sea",
      "vegetal-b60", "pg1-fluid", "sd-3000",
      "dcd-slow-n28",
      "twin-leaf", "microsync-b", "veramin-b-vorio",
      "micro-fert-combi", "silit-30m", "litoman-ultra",
      "active-dry", "fyllon-sprint", "ferroman", "matur-nk-458",
    ],
  },
  {
    id: "flowering",
    name: "Άνθιση",
    nameEn: "Flowering",
    description: "Πλούσια και παρατεταμένη ανθοφορία",
    descriptionEn: "Rich and prolonged flowering",
    emoji: "🌸",
    productIds: [
      "vegetal-betaphos", "veramin-b-vorio", "microsync-b",
      "betabio-active", "organ-star", "fosfoman-75",
      "nutryaction", "sd-3000", "vegetal-b60",
      "silit-30m", "quick-a3",
    ],
  },
  {
    id: "maintenance",
    name: "Συντήρηση",
    nameEn: "Maintenance",
    description: "Συνεχής θρέψη και διατήρηση υγείας φυτών",
    descriptionEn: "Ongoing nutrition and plant health maintenance",
    emoji: "🌿",
    productIds: [
      "sublic", "organ-star", "fyllon-sprint", "active-dry",
      "betabio-organ", "vegetal-b60", "pg1-fluid", "sd-3000",
      "silit-30m", "litoman-ultra", "ca-verde", "comerco-plus",
      "ferroman", "micro-fert-combi",
    ],
  },
];

const URBAN_GREEN_PHASES: WizardPhase[] = [
  {
    id: "establishment",
    name: "Εγκατάσταση / Σπορά",
    nameEn: "Establishment / Seeding",
    description: "Δημιουργία νέου χλοοτάπητα ή εγκατάσταση φυτών",
    descriptionEn: "New turf creation or plant establishment",
    emoji: "🌱",
    productIds: [
      "sublic", "clonotri", "strepse",
      "micoseeds-mb", "micoseeds-coat", "actiseed",
      "agilus", "balance", "multiaction",
      "microstart", "activator-plus", "ca-verde",
      "fosfoman-75", "vegetal-betaphos", "pg1-fluid",
    ],
  },
  {
    id: "vegetative",
    name: "Βλαστική Ανάπτυξη",
    nameEn: "Vegetative Growth",
    description: "Πυκνός και υγιής χλοοτάπητας ή ανάπτυξη δένδρων",
    descriptionEn: "Dense and healthy turf or tree development",
    emoji: "🍃",
    productIds: [
      "nutryaction", "on-pro", "on-max",
      "betabio-active", "betabio-full", "betabio-organ",
      "organ-star", "algaman", "hydrolmerco", "bioexpress", "fyllon-sea",
      "vegetal-b60", "pg1-fluid", "sd-3000",
      "dcd-slow-n28", "turbo-18",
      "twin-leaf", "microsync-b",
      "micro-fert-combi", "silit-30m", "litoman-ultra",
      "active-dry", "fyllon-sprint", "ferroman", "matur-nk-458", "comerco-plus",
    ],
  },
  {
    id: "maintenance",
    name: "Συντήρηση",
    nameEn: "Maintenance",
    description: "Τακτική θρέψη και διατήρηση της ποιότητας",
    descriptionEn: "Regular nutrition and quality maintenance",
    emoji: "🌿",
    productIds: [
      "sublic", "organ-star", "fyllon-sprint", "active-dry",
      "betabio-organ", "vegetal-b60", "pg1-fluid", "sd-3000",
      "silit-30m", "litoman-ultra", "ca-verde", "comerco-plus",
      "ferroman", "micro-fert-combi", "veramin-b-vorio",
      "kalis-k30", "dcd-slow-n28",
    ],
  },
  {
    id: "recovery",
    name: "Αποκατάσταση",
    nameEn: "Recovery",
    description: "Αναζωογόνηση και αποκατάσταση κατεστραμμένων χώρων",
    descriptionEn: "Revitalization and restoration of damaged areas",
    emoji: "♻️",
    productIds: [
      "sublic", "clonotri", "strepse",
      "agilus", "balance", "multiaction",
      "organ-star", "activator-plus", "ca-verde", "fungy-star",
      "fyllon-sprint", "active-dry",
      "betabio-active", "betabio-full", "hydrolmerco",
      "fosfoman-75", "ferroman",
    ],
  },
];

// ─── Crop categories ──────────────────────────────────────────────────────────

export const wizardCropCategories: WizardCropCategory[] = [
  {
    id: "vegetables",
    name: "Κηπευτικά",
    nameEn: "Vegetables",
    description: "Ντομάτα, αγγούρι, πιπεριά και όλα τα λαχανικά",
    descriptionEn: "Tomato, cucumber, pepper and all vegetables",
    emoji: "🥦",
    color: "from-green-500 to-emerald-600",
    image: "vegetables.jpg",
    phases: VEGETABLE_PHASES,
    crops: [
      { id: "tomato", name: "Ντομάτα", nameEn: "Tomato", emoji: "🍅" },
      { id: "pepper", name: "Πιπεριά", nameEn: "Pepper", emoji: "🌶️" },
      { id: "eggplant", name: "Μελιτζάνα", nameEn: "Eggplant", emoji: "🍆" },
      { id: "cucumber", name: "Αγγούρι", nameEn: "Cucumber", emoji: "🥒" },
      { id: "zucchini", name: "Κολοκυθιά", nameEn: "Zucchini", emoji: "🥬" },
      { id: "watermelon-melon", name: "Καρπούζι & Πεπόνι", nameEn: "Watermelon & Melon", emoji: "🍉" },
      { id: "lettuce", name: "Μαρούλι", nameEn: "Lettuce", emoji: "🥬" },
      { id: "spinach", name: "Σπανάκι", nameEn: "Spinach", emoji: "🥬" },
      { id: "baby-leaf", name: "Baby Leaf", nameEn: "Baby Leaf", emoji: "🌱" },
      { id: "bean", name: "Φασόλι", nameEn: "Bean", emoji: "🫘" },
      { id: "carrot", name: "Καρότο", nameEn: "Carrot", emoji: "🥕" },
      { id: "onion-garlic", name: "Κρεμμύδι & Σκόρδο", nameEn: "Onion & Garlic", emoji: "🧅" },
      { id: "artichoke", name: "Αγκινάρα", nameEn: "Artichoke", emoji: "🌿" },
      { id: "brassica", name: "Σταυρανθή Λαχανικά", nameEn: "Brassica Vegetables", emoji: "🥦" },
      { id: "asparagus", name: "Σπαράγγι", nameEn: "Asparagus", emoji: "🌿" },
    ],
  },
  {
    id: "fruit-trees-vineyard",
    name: "Οπωροφόρα & Αμπέλι",
    nameEn: "Fruit Trees & Vineyard",
    description: "Ελιές, εσπεριδοειδή, αμπέλι και οπωροφόρα δένδρα",
    descriptionEn: "Olives, citrus, vineyard and fruit trees",
    emoji: "🍇",
    color: "from-purple-500 to-violet-600",
    image: "vineyard.jpg",
    phases: FRUIT_TREE_PHASES,
    crops: [
      { id: "olive", name: "Ελιές", nameEn: "Olives", emoji: "🫒" },
      { id: "citrus", name: "Εσπεριδοειδή", nameEn: "Citrus", emoji: "🍊" },
      { id: "table-grape", name: "Αμπέλι (Επιτραπέζιο)", nameEn: "Table Grape", emoji: "🍇" },
      { id: "wine-grape", name: "Αμπέλι (Οινοποιήσιμο)", nameEn: "Wine Grape", emoji: "🍷" },
      { id: "pome-fruits", name: "Μηλοειδή", nameEn: "Pome Fruits", emoji: "🍎" },
      { id: "stone-fruits", name: "Πυρηνόκαρπα", nameEn: "Stone Fruits", emoji: "🍑" },
      { id: "cherry", name: "Κεράσι", nameEn: "Cherry", emoji: "🍒" },
      { id: "kiwi", name: "Ακτινίδιο", nameEn: "Kiwi", emoji: "🥝" },
      { id: "avocado", name: "Αβοκάντο", nameEn: "Avocado", emoji: "🥑" },
      { id: "walnut", name: "Κάρυα", nameEn: "Walnuts", emoji: "🌰" },
      { id: "pomegranate", name: "Ρόδι", nameEn: "Pomegranate", emoji: "❤️" },
      { id: "pistachio", name: "Φιστίκια", nameEn: "Pistachios", emoji: "🫘" },
      { id: "berries", name: "Μούρα", nameEn: "Berries", emoji: "🫐" },
    ],
  },
  {
    id: "extensive",
    name: "Εκτατικές Καλλιέργειες",
    nameEn: "Extensive Crops",
    description: "Σιτάρι, καλαμπόκι, βαμβάκι και άλλες εκτατικές",
    descriptionEn: "Wheat, corn, cotton and other extensive crops",
    emoji: "🌾",
    color: "from-yellow-500 to-amber-600",
    image: "wheat-field.jpg",
    phases: EXTENSIVE_PHASES,
    crops: [
      { id: "wheat", name: "Σιτάρι", nameEn: "Wheat", emoji: "🌾" },
      { id: "barley", name: "Κριθάρι", nameEn: "Barley", emoji: "🌾" },
      { id: "corn", name: "Καλαμπόκι", nameEn: "Corn", emoji: "🌽" },
      { id: "cotton", name: "Βαμβάκι", nameEn: "Cotton", emoji: "🌸" },
      { id: "sunflower", name: "Ηλίανθος", nameEn: "Sunflower", emoji: "🌻" },
      { id: "potato", name: "Πατάτα", nameEn: "Potato", emoji: "🥔" },
      { id: "rice", name: "Ρύζι", nameEn: "Rice", emoji: "🌾" },
      { id: "rapeseed", name: "Ελαιοκράμβη", nameEn: "Rapeseed", emoji: "🌼" },
    ],
  },
  {
    id: "ornamentals",
    name: "Καλλωπιστικά",
    nameEn: "Ornamentals",
    description: "Ανθοκομικά, φυτά εσωτερικού και εξωτερικού χώρου",
    descriptionEn: "Flowers, indoor and outdoor ornamental plants",
    emoji: "🌸",
    color: "from-pink-500 to-rose-600",
    image: "ornamentals.jpg",
    phases: ORNAMENTAL_PHASES,
    crops: [
      { id: "indoor-plants", name: "Φυτά Εσωτερικού Χώρου", nameEn: "Indoor Plants", emoji: "🪴" },
      { id: "outdoor-plants", name: "Φυτά Εξωτερικού Χώρου", nameEn: "Outdoor Plants", emoji: "🌿" },
      { id: "potted", name: "Γλαστρικά", nameEn: "Potted Plants", emoji: "🪴" },
      { id: "flowers", name: "Ανθοκομικές Καλλιέργειες", nameEn: "Flower Cultivation", emoji: "🌷" },
      { id: "shrubs-trees", name: "Δενδρύλλια & Θάμνοι", nameEn: "Shrubs & Small Trees", emoji: "🌳" },
    ],
  },
  {
    id: "urban-green",
    name: "Αστικό Πράσινο & Χλοοτάπητας",
    nameEn: "Urban Green & Turf",
    description: "Χλοοτάπητας, αστικά δένδρα και χώροι πρασίνου",
    descriptionEn: "Turf, urban trees and green spaces",
    emoji: "🌳",
    color: "from-teal-500 to-cyan-600",
    image: "urban-green.jpg",
    phases: URBAN_GREEN_PHASES,
    crops: [
      { id: "turf", name: "Χλοοτάπητας", nameEn: "Turf / Lawn", emoji: "🌱" },
      { id: "urban-trees", name: "Αστικά Δένδρα", nameEn: "Urban Trees", emoji: "🌳" },
      { id: "parks", name: "Χώροι Πρασίνου & Πάρκα", nameEn: "Green Spaces & Parks", emoji: "🏞️" },
      { id: "sports", name: "Αθλητικοί Χώροι", nameEn: "Sports Areas", emoji: "⚽" },
    ],
  },
];
