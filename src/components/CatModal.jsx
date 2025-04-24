//IMPORTAZIONI
import axios from "axios";
import { useState, useEffect } from "react";

//CREO FUNZIONE PER CARICARE UNA MODALE SUI GATTI
function CatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [fact, setFact] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      console.log("Modale del gatto aperto!");
      document.title = "🐱 Modale aperto!";

      axios
        .get("https://catfact.ninja/fact")
        .then((response) => {
          setFact(response.data.fact);
        })
        .catch((error) => {
          console.error("Errore nel recupero del fatto:", error);
          setFact("Errore nel recupero del fatto.");
        });
    } else {
      document.title = "React con Gattini";
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={openModal}>Mostra un fatto sui gatti</button>
      {isOpen && (
        <div>
          <h3>Fatto curioso sui gatti 🐾</h3>
          <p>{fact}</p>
          <button onClick={closeModal}>Chiudi</button>
        </div>
      )}
    </div>
  );
}

//ESPORTO
export default CatModal;
