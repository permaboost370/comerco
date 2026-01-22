"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Users, Award, Leaf, TrendingUp, Globe, FlaskConical, Microscope } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Υπευθυνότητα",
    description:
      "Δεσμευόμαστε για άριστη ποιότητα σε κάθε προϊόν και υπηρεσία που προσφέρουμε.",
  },
  {
    icon: Heart,
    title: "Ακεραιότητα",
    description:
      "Ειλικρινείς συμβουλές, διαφανείς τιμές και αξιόπιστη εξυπηρέτηση. Χτίζουμε σχέσεις βασισμένες στην εμπιστοσύνη.",
  },
  {
    icon: Leaf,
    title: "Βιωσιμότητα",
    description:
      "Πιστεύουμε στην υπεύθυνη γεωργία. Τα προϊόντα μας υποστηρίζουν βιώσιμες καλλιεργητικές πρακτικές.",
  },
  {
    icon: Lightbulb,
    title: "Εφευρετικότητα",
    description:
      "Συνεχής καινοτομία και ανάπτυξη νέων λύσεων για τις ανάγκες της σύγχρονης γεωργίας.",
  },
];

const milestones = [
  { year: "2012", title: "Ίδρυση", description: "Ιδρύθηκε το τμήμα διεθνούς marketing και εξαγωγών SacomHellas - microsporeHellas" },
  { year: "2015", title: "Επέκταση", description: "Επέκταση του δικτύου διανομής σε όλη την Ελλάδα" },
  { year: "2018", title: "Καινοτομία", description: "Εισαγωγή νέας σειράς βιολογικών λιπασμάτων με μικροοργανισμούς" },
  { year: "2020", title: "Ανάπτυξη", description: "Διεύρυνση γκάμας βιοδιεγερτών και οργανικών λιπασμάτων" },
  { year: "2024", title: "Σήμερα", description: "Ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών λιπασμάτων στην Ευρώπη" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Σχετικά με την Comerco</h1>
            <p className="text-lg text-muted-foreground">
              Η Comerco Agrotechnology είναι ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών
              λιπασμάτων στην Ευρώπη με προϊόντα που είναι διαθέσιμα σε όλο τον κόσμο.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">Η Ιστορία μας</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Η ερημοποίηση και η διάβρωση του εδάφους που δημιουργούνται από χημικά φαινόμενα,
                  έχουν καταστροφικά αποτελέσματα στην γεωργία. Χάρη στις έρευνές μας, δημιουργήσαμε
                  και διαλέξαμε «έξυπνα μικρόβια», που βρίσκονται στην βάση των διαλυμάτων biotech.
                </p>
                <p>
                  Η Comerco Agrotechnology παράγει και διανέμει διάφορες σειρές βιολογικών και φυσικών
                  λιπασμάτων, λιπάσματα οργανικής βάσης, υδρολυόμενα λιπάσματα και αργής αποδέσμευσης.
                </p>
                <p>
                  Η εταιρία μας παράγει και διανέμει μια μεγάλη ποικιλία οργανικών λιπασμάτων σε υγρή
                  και κοκκώδη μορφή. Η ομάδα μας, ανάπτυξης και έρευνας, δημιουργεί καινούργια μίγματα
                  λιπασμάτων για τις πολλαπλές ανάγκες των πελατών μας.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl border border-border bg-primary/5 p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">Microspore στην Ελλάδα</h3>
                <p className="text-muted-foreground">
                  Από το 2012 ιδρύθηκε το τμήμα διεθνούς marketing και εξαγωγών SacomHellas - microsporeHellas
                  με σκοπό να φέρει σε άμεση επαφή την τεχνολογία και τα προϊόντα μας με τον αγροτικό κόσμο της χώρας.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Η έδρα της Microspore βρίσκεται στην Αθήνα και έχει διεθνή παρουσία μέσω των διανομέων
                  και των πελατών της.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Η Αποστολή μας</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Έχουμε αναπτύξει και προσφέρουμε καινοτόμες και οικολογικά βιώσιμες λύσεις βιοτεχνολογίας,
                  οι οποίες είναι αποτελεσματικές τόσο στον τομέα της θρέψης των φυτών όσο και στην ανάκαμψη
                  του περιβάλλοντος.
                </p>
                <p>
                  Τα αποτελέσματα της εργασίας μας είναι: ανάπτυξη του ριζικού συστήματος, βελτίωση της
                  ανάπτυξης των φυτών και φυσική αντοχή στις καταπονήσεις, προκειμένου να διασφαλιστεί
                  ένα βιώσιμο μέλλον για τις σημερινές και τις μελλοντικές γενιές.
                </p>
                <p>
                  Προσφέρουμε εναλλακτικές λύσεις έναντι παραδοσιακών λιπασμάτων και δημιουργούμε
                  προστιθέμενη αξία για να κάνουμε τη διαφορά.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <FlaskConical className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Έρευνα & Ανάπτυξη</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ο τομέας έρευνας και ανάπτυξης διαδραματίζει κεντρικό ρόλο στην εταιρική στρατηγική.
                  Η Microspore έχει ένα προηγμένο εργαστήριο και μια ομάδα ερευνητών που εργάζονται με
                  πλήρη απασχόληση σε έργα για την ανάπτυξη νέων πρωτοτύπων λιπασμάτων, με ιδιαίτερη
                  έμφαση στα βιολογικά.
                </p>
                <p>
                  Η καινοτομία και τα διπλώματα ευρεσιτεχνίας μας σχετίζονται με τις μεθόδους αποθήκευσης
                  και εφαρμογής των λιπασμάτων, με διεργασίες παρασκευής των εμβολίων μικροοργανισμών
                  και την παραγωγή των μυκόριζων.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">Η Δέσμευσή μας</h2>
            <p className="text-lg text-muted-foreground">
              Το έργο μας κινείται με γνώμονα, τα προϊόντα και οι υπηρεσίες μας να είναι άριστης ποιότητας.
              Έχουν σχεδιαστεί για να ανταποκριθούν στις απαιτήσεις των πελατών μας και βασίζονται σε ένα
              σαφές σύνολο αρχών που περιλαμβάνουν: υπευθυνότητα, ακεραιότητα, εμφάνιση, αντοχή,
              εφευρετικότητα.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Λαμβάνοντας υπόψη όλες αυτές τις πτυχές, έχουμε την δυνατότητα και την επιθυμία να
              προσφέρουμε βιώσιμες λύσεις για την αντιμετώπιση των μεγάλων παγκόσμιων προκλήσεων της
              εποχής μας, ιδίως την έλλειψη πόρων, την διατροφική ασφάλεια και την υπερθέρμανση του πλανήτη.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">Οι Αξίες μας</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Οι αρχές που καθοδηγούν κάθε μας δράση
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">Η Πορεία μας</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Σημαντικοί σταθμοί στην ιστορία μας
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:pr-8 md:text-right">
                    {index % 2 === 0 && (
                      <div className="rounded-xl border border-border bg-card p-6 md:ml-auto md:max-w-md">
                        <div className="mb-2 text-2xl font-bold text-primary">{milestone.year}</div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-4 top-6 hidden h-4 w-4 rounded-full border-4 border-primary bg-background md:left-1/2 md:block md:-translate-x-1/2" />

                  <div className="flex-1 md:pl-8">
                    {index % 2 !== 0 && (
                      <div className="rounded-xl border border-border bg-card p-6 md:max-w-md">
                        <div className="mb-2 text-2xl font-bold text-primary">{milestone.year}</div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, value: "12+", label: "Χρόνια στην Ελλάδα" },
              { icon: Users, value: "500+", label: "Συνεργαζόμενοι Αγρότες" },
              { icon: Globe, value: "13", label: "Περιφέρειες Κάλυψης" },
              { icon: Microscope, value: "100+", label: "Προϊόντα Βιοτεχνολογίας" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="mb-1 text-4xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
