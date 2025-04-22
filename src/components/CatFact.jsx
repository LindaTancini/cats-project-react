//IMPORTAZIONI
import { useEffect, useState } from "react";
import axios from "axios";

function CatFact() {
  const [fact, setFact] = useState("");

  // CREO FUNZIONE PER CARICARE UN NUOVO FATTO
  const changeFact = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((response) => setFact(response.data.fact))
      .catch((error) =>
        console.error("Errore nel recupero della fact:", error)
      );
  };

  // CARICO UN FATTO CASUALE
  useEffect(() => {
    changeFact();
  }, []);

  return (
    <div>
      <h4>Fatti sui gatti random:</h4>
      <p>{fact}</p>
      <button onClick={changeFact}>Carica un nuovo fatto</button>
    </div>
  );
}

export default CatFact;
