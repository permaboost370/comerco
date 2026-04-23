import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: "Επικοινωνήστε με την Comerco Agrotechnology. Βρείτε τα στοιχεία επικοινωνίας μας, την τοποθεσία μας και στείλτε μας το μήνυμά σας.",
  alternates: {
    canonical: "https://comerco.gr/el/contact",
    languages: {
      "el-GR": "https://comerco.gr/el/contact",
      "en-US": "https://comerco.gr/en/contact",
    },
  },
  openGraph: {
    title: "Επικοινωνία με την Comerco Agrotechnology",
    description: "Επικοινωνήστε μαζί μας για φυσικά και βιολογικά λιπάσματα. Είμαστε εδώ για να σας εξυπηρετήσουμε.",
    url: "https://comerco.gr/el/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
