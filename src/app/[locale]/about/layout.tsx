import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Σχετικά με εμάς",
  description: "Η Comerco Agrotechnology είναι ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών λιπασμάτων στην Ευρώπη. Μάθετε για την ιστορία, τις αξίες και την αποστολή μας.",
  alternates: {
    canonical: "https://comerco.gr/el/about",
    languages: {
      "el-GR": "https://comerco.gr/el/about",
      "en-US": "https://comerco.gr/en/about",
    },
  },
  openGraph: {
    title: "Σχετικά με την Comerco Agrotechnology",
    description: "Ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών λιπασμάτων στην Ευρώπη με 14+ χρόνια εμπειρίας.",
    url: "https://comerco.gr/el/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
