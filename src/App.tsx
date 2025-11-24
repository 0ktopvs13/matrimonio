import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";



interface SectionItem {
  id: string;
  label: string;
}

const sections: SectionItem[] = [
  { id: "home", label: "Matrimonio" },
  { id: "chiesa", label: "Chiesa" },
  { id: "ristorante", label: "Ristorante" },
  { id: "messaggio", label: "Lasciaci un messaggio" },
  { id: "foto", label: "Carica foto" },
];

// Importa immagine di sfondo
import enterImage from "./imgs/enter.jpg";
import wipImage from "./imgs/wip.jpg";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-vh-100 bg-light text-dark">
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="intro"
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Sfondo */}
            <motion.img
              src={wipImage} // o "/imgs/enter.jpg" se in public
              alt="Sfondo matrimonio"
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              style={{ zIndex: 1 }}
              initial={{ filter: "brightness(0)" }}
              animate={{ filter: "brightness(1)" }}
              transition={{ duration: 3, ease: "easeOut" }}
            />

            {/* Overlay opzionale per scurire inizialmente */}
            <motion.div
              className="position-absolute top-0 start-0 w-100 h-100 bg-black"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
              style={{ zIndex: 2 }}
            />

            {/* Pulsante Entra */}
            <motion.button
              style={{ fontFamily: "'Imperial Script', cursive", zIndex: 10 }}
              className="entrabutton"
              whileHover={{ scale: 1.1, color: "#ffffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEntered(false)}
            >
              Work in progess
            </motion.button>
          </motion.div>
        )}

        {entered && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Navbar Bootstrap */}
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top">
              <div className="container">
                <a className="navbar-brand fw-semibold" href="#">
                  💍 Sara & Gennaro
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                    {sections.map((s) => (
                      <li className="nav-item" key={s.id}>
                        <a className="nav-link" href={`#${s.id}`}>
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>

            {/* Contenuto */}
            <main className="pt-5 mt-4">
              <Section id="home" title="Il nostro Matrimonio 💖">
                <p className="lead text-center">
                  Benvenuti al nostro giorno speciale! Qui troverete tutte le
                  informazioni per vivere al meglio il matrimonio.
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                    alt="Coppia"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </Section>

              <Section id="chiesa" title="⛪ La Chiesa">
                <p className="lead text-center">
                  La cerimonia si terrà presso Colle Sant'Alfonso - Via di Sotto ai Camaldoli, 80059 Torre del Greco NA alle 
                  11:00. Arriva qualche minuto prima ❤️
                </p>
                <p className="lead text-center">
                  <a
                    href="https://maps.app.goo.gl/KZzsRhJz6BDrS2SS8"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success mt-2"
                  >
                    Navigatore 
                  <i className="bi bi-geo-alt-fill text-danger ms-1"></i>

                  </a>
                  
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1587502536263-7cf3423e2fd2"
                    alt="Chiesa"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </Section>

              <Section id="ristorante" title="🍷 Il Ristorante">
                <p className="lead text-center">
                  Dopo la cerimonia, ci sposteremo a Torre Bassano per il
                  ricevimento.
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"
                    alt="Ristorante"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </Section>

              <Section id="messaggio" title="💌 Lasciaci un messaggio">
                <p className="text-center">
                  Scrivi un pensiero o un augurio per noi ❤️
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <textarea
                    placeholder="Scrivi qui il tuo messaggio..."
                    className="form-control w-75"
                    rows={4}
                  />
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <button className="btn btn-primary">Invia</button>
                </div>
              </Section>

              <Section id="foto" title="📸 Carica le tue foto!">
                <p className="text-center">
                  Condividi con noi le tue foto!
                  <br />
                  <a
                    href="https://drive.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success mt-2"
                  >
                    Apri Google Drive
                  </a>
                </p>
              </Section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center px-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="display-4 mb-4 text-center">{title}</h2>
      <div className="text-center">{children}</div>
    </motion.section>
  );
}
