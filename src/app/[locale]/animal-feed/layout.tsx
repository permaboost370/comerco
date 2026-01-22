import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ζωοτροφές",
  description: "Υψηλής ποιότητας ζωοτροφές από την Comerco Agrotechnology. Πλήρεις τροφές για πουλερικά, χοίρους, βοοειδή και άλλα ζώα.",
  alternates: {
    canonical: "https://comerco.gr/el/animal-feed",
    languages: {
      "el-GR": "https://comerco.gr/el/animal-feed",
      "en-US": "https://comerco.gr/en/animal-feed",
    },
  },
  openGraph: {
    title: "Ζωοτροφές Comerco Agrotechnology",
    description: "Ποιοτικές ζωοτροφές για υγιή ζώα και υψηλή παραγωγικότητα. Από την Comerco Agrotechnology.",
    url: "https://comerco.gr/el/animal-feed",
  },
};

export default function AnimalFeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
