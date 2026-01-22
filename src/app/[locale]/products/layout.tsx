import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Λιπάσματα",
  description: "Ανακαλύψτε την πλήρη γκάμα φυσικών και βιολογικών λιπασμάτων της Comerco. Οργανικά λιπάσματα, βιοδιεγέρτες, ιχνοστοιχεία και πολλά άλλα.",
  alternates: {
    canonical: "https://comerco.gr/el/products",
    languages: {
      "el-GR": "https://comerco.gr/el/products",
      "en-US": "https://comerco.gr/en/products",
    },
  },
  openGraph: {
    title: "Λιπάσματα Comerco Agrotechnology",
    description: "50+ βιολογικά προϊόντα για κάθε καλλιέργεια. Φυσικά λιπάσματα υψηλής ποιότητας από την Comerco.",
    url: "https://comerco.gr/el/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
