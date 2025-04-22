//IMPORTAZIONI
import axios from "axios";
import { useState, useEffect } from "react";

function CatImage() {
  const [imageUrl, setImageUrl] = useState("");

  // CREO FUNZIONE PER CARICARE L'IMMAGINE
  const changeImage = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => setImageUrl(response.data[0].url))
      .catch((error) =>
        console.error("Errore nel recupero dell'immagine:", error)
      );
  };

  // CARICO UN'IMMAGINE CASUALE
  useEffect(() => {
    changeImage();
  }, []);

  return (
    <div>
      <h4>Genera immagine di un gatto casuale:</h4>
      {imageUrl && <img src={imageUrl} alt="Gatto Casuale" />}
      <button onClick={changeImage}>Cambia immagine</button>
    </div>
  );
}

export default CatImage;
