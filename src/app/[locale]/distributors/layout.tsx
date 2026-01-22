import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Δίκτυο Πωλήσεων",
  description: "Ανακαλύψτε το δίκτυο πωλήσεων της Comerco Agrotechnology σε όλη την Ελλάδα. Βρείτε τον πλησιέστερο διανομέα φυσικών και βιολογικών λιπασμάτων.",
  alternates: {
    canonical: "https://comerco.gr/el/distributors",
    languages: {
      "el-GR": "https://comerco.gr/el/distributors",
      "en-US": "https://comerco.gr/en/distributors",
    },
  },
  openGraph: {
    title: "Δίκτυο Πωλήσεων Comerco Agrotechnology",
    description: "Βρείτε τους διανομείς μας σε όλη την Ελλάδα. Φυσικά και βιολογικά λιπάσματα κοντά σας.",
    url: "https://comerco.gr/el/distributors",
  },
};

export default function DistributorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
