import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description: "Πολιτική Απορρήτου και Προστασίας Προσωπικών Δεδομένων της Comerco Agrotechnology",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-foreground">Πολιτική Απορρήτου</h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="lead text-lg text-muted-foreground">
              Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">1. Εισαγωγή</h2>
              <p className="text-muted-foreground">
                Η Comerco Agrotechnology (στο εξής "Εταιρεία", "εμείς") σέβεται το απόρρητο των επισκεπτών
                του ιστότοπου comerco.gr και δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα.
                Η παρούσα Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε
                τις πληροφορίες σας σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR).
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">2. Στοιχεία Υπεύθυνου Επεξεργασίας</h2>
              <div className="rounded-lg border border-white/40 bg-white/60 backdrop-blur-sm p-4 shadow-sm">
                <p className="mb-2 text-foreground"><strong>Επωνυμία:</strong> Microspore Hellas – Sacom Hellas</p>
                <p className="mb-2 text-foreground"><strong>Διεύθυνση:</strong> Πανεπιστημίου 44, 10679 Αθήνα</p>
                <p className="mb-2 text-foreground"><strong>Τηλέφωνο:</strong> 210 361 2754, 210 654 8176</p>
                <p className="text-foreground"><strong>Email:</strong> info@comerco.gr</p>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">3. Δεδομένα που Συλλέγουμε</h2>
              <p className="text-muted-foreground">Συλλέγουμε τα ακόλουθα είδη πληροφοριών:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><strong>Δεδομένα επικοινωνίας:</strong> όνομα, email, τηλέφωνο, διεύθυνση όταν επικοινωνείτε μαζί μας</li>
                <li><strong>Δεδομένα επιχείρησης:</strong> επωνυμία εταιρείας/αγροκτήματος για επαγγελματικούς σκοπούς</li>
                <li><strong>Τεχνικά δεδομένα:</strong> διεύθυνση IP, τύπος προγράμματος περιήγησης, πληροφορίες συσκευής</li>
                <li><strong>Δεδομένα χρήσης:</strong> πληροφορίες για τον τρόπο που χρησιμοποιείτε τον ιστότοπό μας</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">4. Σκοποί Επεξεργασίας</h2>
              <p className="text-muted-foreground">Χρησιμοποιούμε τα δεδομένα σας για:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Την επικοινωνία και εξυπηρέτηση πελατών</li>
                <li>Την αποστολή πληροφοριών για προϊόντα και υπηρεσίες</li>
                <li>Τη βελτίωση του ιστότοπου και των υπηρεσιών μας</li>
                <li>Τη συμμόρφωση με νομικές υποχρεώσεις</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">5. Νομική Βάση Επεξεργασίας</h2>
              <p className="text-muted-foreground">
                Επεξεργαζόμαστε τα δεδομένα σας βάσει:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><strong>Συγκατάθεσης:</strong> όταν παρέχετε ρητή συγκατάθεση</li>
                <li><strong>Εκτέλεσης σύμβασης:</strong> για την παροχή των υπηρεσιών μας</li>
                <li><strong>Έννομου συμφέροντος:</strong> για τη βελτίωση των υπηρεσιών μας</li>
                <li><strong>Νομικής υποχρέωσης:</strong> όταν απαιτείται από το νόμο</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">6. Cookies</h2>
              <p className="text-muted-foreground">
                Ο ιστότοπός μας χρησιμοποιεί cookies για να βελτιώσει την εμπειρία περιήγησης.
                Διακρίνονται σε:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><strong>Απαραίτητα cookies:</strong> Απαραίτητα για τη λειτουργία του ιστότοπου</li>
                <li><strong>Cookies ανάλυσης:</strong> Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείται ο ιστότοπος</li>
                <li><strong>Cookies μάρκετινγκ:</strong> Χρησιμοποιούνται για εμφάνιση σχετικού περιεχομένου</li>
              </ul>
              <p className="text-muted-foreground">
                Μπορείτε να διαχειριστείτε τις προτιμήσεις cookies σας ανά πάσα στιγμή μέσω του
                εικονιδίου cookies στο κάτω μέρος της οθόνης.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">7. Διατήρηση Δεδομένων</h2>
              <p className="text-muted-foreground">
                Διατηρούμε τα προσωπικά σας δεδομένα μόνο για όσο χρόνο είναι απαραίτητο για τους
                σκοπούς για τους οποίους συλλέχθηκαν, συμπεριλαμβανομένων τυχόν νομικών, λογιστικών
                ή απαιτήσεων αναφοράς.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">8. Τα Δικαιώματά σας</h2>
              <p className="text-muted-foreground">Σύμφωνα με τον GDPR, έχετε τα ακόλουθα δικαιώματα:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><strong>Δικαίωμα πρόσβασης:</strong> Να ζητήσετε αντίγραφα των δεδομένων σας</li>
                <li><strong>Δικαίωμα διόρθωσης:</strong> Να ζητήσετε διόρθωση ανακριβών δεδομένων</li>
                <li><strong>Δικαίωμα διαγραφής:</strong> Να ζητήσετε διαγραφή των δεδομένων σας</li>
                <li><strong>Δικαίωμα περιορισμού:</strong> Να περιορίσετε την επεξεργασία</li>
                <li><strong>Δικαίωμα φορητότητας:</strong> Να λάβετε τα δεδομένα σας σε κοινή μορφή</li>
                <li><strong>Δικαίωμα εναντίωσης:</strong> Να αντιταχθείτε στην επεξεργασία</li>
              </ul>
              <p className="text-muted-foreground">
                Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε μαζί μας στο info@comerco.gr
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">9. Ασφάλεια Δεδομένων</h2>
              <p className="text-muted-foreground">
                Λαμβάνουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των προσωπικών
                σας δεδομένων από μη εξουσιοδοτημένη πρόσβαση, τροποποίηση, αποκάλυψη ή καταστροφή.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">10. Διαβίβαση Δεδομένων</h2>
              <p className="text-muted-foreground">
                Δεν διαβιβάζουμε τα προσωπικά σας δεδομένα σε τρίτες χώρες εκτός ΕΕ/ΕΟΧ χωρίς
                την κατάλληλη νομική βάση και τις απαραίτητες εγγυήσεις.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">11. Αλλαγές στην Πολιτική</h2>
              <p className="text-muted-foreground">
                Διατηρούμε το δικαίωμα να τροποποιήσουμε αυτή την Πολιτική Απορρήτου ανά πάσα στιγμή.
                Οι αλλαγές θα δημοσιεύονται σε αυτή τη σελίδα με ενημερωμένη ημερομηνία.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">12. Επικοινωνία</h2>
              <p className="text-muted-foreground">
                Για ερωτήσεις σχετικά με αυτή την Πολιτική Απορρήτου ή τα προσωπικά σας δεδομένα,
                επικοινωνήστε μαζί μας:
              </p>
              <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                <p className="mb-2 text-foreground"><strong>Comerco Agrotechnology</strong></p>
                <p className="mb-2 text-foreground">Πανεπιστημίου 44, 10679 Αθήνα</p>
                <p className="mb-2 text-foreground">Τηλ: 210 361 2754</p>
                <p className="text-foreground">Email: info@comerco.gr</p>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground">13. Εποπτική Αρχή</h2>
              <p className="text-muted-foreground">
                Έχετε το δικαίωμα να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων
                Προσωπικού Χαρακτήρα (ΑΠΔΠΧ) εάν θεωρείτε ότι η επεξεργασία των δεδομένων σας
                παραβιάζει τον GDPR.
              </p>
              <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                <p className="mb-2 text-foreground"><strong>Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα</strong></p>
                <p className="mb-2 text-foreground">Κηφισίας 1-3, 11523 Αθήνα</p>
                <p className="mb-2 text-foreground">Τηλ: 210 647 5600</p>
                <p className="text-foreground">Website: www.dpa.gr</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
