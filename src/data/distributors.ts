export interface DistributorContact {
  name: string;
  phone: string;
  role?: string;
}

export interface Distributor {
  id: string;
  region: string;
  regionEn: string;
  areas: string;
  areasEn: string;
  regionIds: string[]; // Greek region IDs for map highlighting
  contacts: DistributorContact[];
  company?: string;
  coordinates: { lat: number; lng: number }; // Map pin location
}

export const distributors: Distributor[] = [
  {
    id: "attica-sterea-evia",
    region: "Αττική, Στερεά Ελλάδα & Εύβοια, Αχαΐα και Νησιά",
    regionEn: "Attica, Central Greece & Evia, Achaia and Islands",
    areas: "Αττική, λοιπή Στερεά & Εύβοια, Αχαΐα και νησιά",
    areasEn: "Attica, rest of Central Greece & Evia, Achaia and islands",
    regionIds: ["attica", "central-greece", "west-greece", "ionian-islands"],
    company: "Comerco Agrotechnology",
    contacts: [
      { name: "Comerco Agrotechnology", phone: "210 361 2754", role: "Κεντρικά" },
      { name: "Ιωάννου Μιχάλης", phone: "698 699 1559", role: "Γεωπόνος" },
    ],
    coordinates: { lat: 37.9838, lng: 23.7275 }, // Athens
  },
    {
    id: "west-central-macedonia",
    region: "Δυτική - Κεντρική Μακεδονία",
    regionEn: "Western - Central Macedonia",
    areas: "Δυτική και Κεντρική Μακεδονία, Κιλκίς, Θεσσαλονίκη, Χαλκιδική",
    areasEn: "Western and Central Macedonia, Kilkis, Thessaloniki, Chalkidiki",
    regionIds: ["west-macedonia", "central-macedonia"],
    contacts: [
      { name: "Αποστολίδης Χαράλαμπος", phone: "698 718 4024", role: "Γεωπόνος" },
      { name: "Πετρίδης Γιώργος", phone: "697 476 9719", role: "Γεωπόνος - Κιλκίς, Θεσσαλονίκη, Χαλκιδική" },
    ],
    coordinates: { lat: 40.6401, lng: 22.9444 }, // Thessaloniki
  },
  {
    id: "east-macedonia-thrace",
    region: "Ανατολική Μακεδονία & Θράκη",
    regionEn: "East Macedonia & Thrace",
    areas: "Ανατολική Μακεδονία και Θράκη",
    areasEn: "East Macedonia and Thrace",
    regionIds: ["east-macedonia-thrace"],
    contacts: [
      { name: "Ζήσης Ποιμενίδης", phone: "", role: "" },
      { name: "Καραπέτσας Κώστας", phone: "690 789 0639", role: "Γεωπόνος - Αν. Μακεδονία" },
      { name: "Agrobiotech EE", phone: "693 499 0891", role: "Θράκη" },
    ],
    coordinates: { lat: 41.1171, lng: 24.8879 }, // Kavala/Drama area
  },
  {
    id: "west-peloponnese-laconia",
    region: "Δυτική Πελοπόννησος & Λακωνία",
    regionEn: "Western Peloponnese & Laconia",
    areas: "Δυτική Πελοπόννησος και Λακωνία",
    areasEn: "Western Peloponnese and Laconia",
    regionIds: ["peloponnese"],
    company: "Comerco Agrotechnology",
    contacts: [
      { name: "Βλασσοπούλου Χρύσα", phone: "698 593 3682", role: "Γεωπόνος" },
    ],
    coordinates: { lat: 37.0366, lng: 22.1123 }, // Kalamata
  },
  {
    id: "east-peloponnese",
    region: "Κορινθία, Αργολίδα, Αρκαδία",
    regionEn: "Corinthia, Argolida, Arcadia",
    areas: "Κορινθία, Αργολίδα, Αρκαδία",
    areasEn: "Corinthia, Argolida, Arcadia",
    regionIds: ["peloponnese"],
    company: "Comerco Agrotechnology",
    contacts: [
      { name: "Ιωάννου Μιχάλης", phone: "698 699 1559", role: "Γεωπόνος" },
      { name: "Παππούς Βαγγέλης", phone: "698 953 6212", role: "Γεωπόνος" },
      { name: "", phone: "698 678 1286", role: "" },
    ],
    coordinates: { lat: 37.6389, lng: 22.7245 }, // Argos/Nafplio
  },
  {
    id: "thessaly-epirus",
    region: "Θεσσαλία & Ήπειρος",
    regionEn: "Thessaly & Epirus",
    areas: "Θεσσαλία και Ήπειρος",
    areasEn: "Thessaly and Epirus",
    regionIds: ["thessaly", "epirus"],
    company: "Replant Βόλος",
    contacts: [
      { name: "Πάνης Μπάμπης", phone: "693 420 8428", role: "Γεωπόνος" },
    ],
    coordinates: { lat: 39.3621, lng: 22.9420 }, // Volos
  },
  {
    id: "crete",
    region: "Κρήτη",
    regionEn: "Crete",
    areas: "Κρήτη",
    areasEn: "Crete",
    regionIds: ["crete"],
    contacts: [
      { name: "Πετράκης Χαράλαμπος", phone: "697 419 4477", role: "" },
    ],
    coordinates: { lat: 35.2401, lng: 24.8093 }, // Heraklion
  },
  {
    id: "aegean-islands",
    region: "Νησιά Αιγαίου",
    regionEn: "Aegean Islands",
    areas: "Νησιά του Αιγαίου",
    areasEn: "Aegean Islands",
    regionIds: ["north-aegean", "south-aegean"],
    contacts: [
      { name: "Ιωάννου Μιχάλης", phone: "698 699 1559", role: "Γεωπόνος" },
    ],
    coordinates: { lat: 37.4467, lng: 25.3289 }, // Mykonos/Cyclades area
  },
];

export interface GreeceRegion {
  id: string;
  name: string;
  nameGr: string;
}

export const greeceRegions: GreeceRegion[] = [
  { id: "east-macedonia-thrace", name: "East Macedonia & Thrace", nameGr: "Ανατολική Μακεδονία & Θράκη" },
  { id: "central-macedonia", name: "Central Macedonia", nameGr: "Κεντρική Μακεδονία" },
  { id: "west-macedonia", name: "West Macedonia", nameGr: "Δυτική Μακεδονία" },
  { id: "epirus", name: "Epirus", nameGr: "Ήπειρος" },
  { id: "thessaly", name: "Thessaly", nameGr: "Θεσσαλία" },
  { id: "ionian-islands", name: "Ionian Islands", nameGr: "Ιόνια Νησιά" },
  { id: "west-greece", name: "West Greece", nameGr: "Δυτική Ελλάδα" },
  { id: "central-greece", name: "Central Greece", nameGr: "Στερεά Ελλάδα" },
  { id: "attica", name: "Attica", nameGr: "Αττική" },
  { id: "peloponnese", name: "Peloponnese", nameGr: "Πελοπόννησος" },
  { id: "north-aegean", name: "North Aegean", nameGr: "Βόρειο Αιγαίο" },
  { id: "south-aegean", name: "South Aegean", nameGr: "Νότιο Αιγαίο" },
  { id: "crete", name: "Crete", nameGr: "Κρήτη" },
];

export const getDistributorByRegion = (regionId: string): Distributor | undefined => {
  return distributors.find((d) => d.regionIds.includes(regionId));
};

export const getDistributorById = (id: string): Distributor | undefined => {
  return distributors.find((d) => d.id === id);
};
