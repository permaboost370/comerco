import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description: "Η πολιτική απορρήτου της Comerco Agrotechnology. Μάθετε πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα.",
  alternates: {
    canonical: "https://comerco.gr/el/privacy-policy",
    languages: {
      "el-GR": "https://comerco.gr/el/privacy-policy",
      "en-US": "https://comerco.gr/en/privacy-policy",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
