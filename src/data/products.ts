export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "microorganism-products",
    name: "Προϊόντα Μικροοργανισμών - Βιοδιεγέρτες - Κομποστοποίηση",
    nameEn: "Microorganism Products - Biostimulants - Composting",
    description: "Προϊόντα με ωφέλιμους μικροοργανισμούς για την ενίσχυση της ανάπτυξης των φυτών και την κομποστοποίηση",
    descriptionEn: "Products with beneficial microorganisms for plant growth enhancement and composting",
    icon: "FlaskConical",
    products: [],
  },
  {
    id: "solid-fertilizers",
    name: "Στερεά Λιπάσματα Κύριων Μέσων και Μικρών Στοιχείων",
    nameEn: "Solid Fertilizers - Main & Micro Elements",
    description: "Υψηλής ποιότητας στερεά λιπάσματα με κύρια και ιχνοστοιχεία για ολοκληρωμένη θρέψη",
    descriptionEn: "High-quality solid fertilizers with main nutrients and trace elements for complete nutrition",
    icon: "Boxes",
    products: [],
  },
  {
    id: "liquid-fertilizers",
    name: "Υγρά Λιπάσματα Κύριων Μέσων και Μικρών Στοιχείων",
    nameEn: "Liquid Fertilizers - Main & Micro Elements",
    description: "Υγρά λιπάσματα για άμεση απορρόφηση από τα φυτά με πλήρη γκάμα θρεπτικών στοιχείων",
    descriptionEn: "Liquid fertilizers for immediate plant absorption with a full range of nutrients",
    icon: "Droplets",
    products: [],
  },
  {
    id: "biostimulants-organic",
    name: "Βιοδιεγέρτες - Οργανικά Λιπάσματα Νέου Τύπου",
    nameEn: "Biostimulants - New Type Organic Fertilizers",
    description: "Καινοτόμα βιοδιεγερτικά προϊόντα και οργανικά λιπάσματα νέας γενιάς",
    descriptionEn: "Innovative biostimulant products and new generation organic fertilizers",
    icon: "Sprout",
    products: [],
  },
  {
    id: "adjuvants",
    name: "Βοηθητικά",
    nameEn: "Adjuvants & Auxiliaries",
    description: "Βοηθητικά προϊόντα για βελτίωση της αποτελεσματικότητας των λιπασμάτων",
    descriptionEn: "Auxiliary products to improve fertilizer effectiveness",
    icon: "Pipette",
    products: [],
  },
  {
    id: "solid-organic-microorganisms",
    name: "Στερεά Οργανικά Λιπάσματα με Μικροοργανισμούς",
    nameEn: "Solid Organic Fertilizers with Microorganisms",
    description: "Οργανικά λιπάσματα εμπλουτισμένα με ωφέλιμους μικροοργανισμούς για βιώσιμη γεωργία",
    descriptionEn: "Organic fertilizers enriched with beneficial microorganisms for sustainable agriculture",
    icon: "TreeDeciduous",
    products: [],
  },
];

export const getAllProducts = (): Product[] => {
  return productCategories.flatMap((category) => category.products);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = productCategories.find((c) => c.id === categoryId);
  return category?.products || [];
};

export const getProductById = (productId: string): Product | undefined => {
  return getAllProducts().find((p) => p.id === productId);
};

export const getCategoryById = (categoryId: string): ProductCategory | undefined => {
  return productCategories.find((c) => c.id === categoryId);
};
