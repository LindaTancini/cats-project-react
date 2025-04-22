import axios from "axios";
import { useEffect, useState } from "react";

function CatImage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        setImageUrl(response.data[0].url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h4>Genera immagine di un gatto casuale:</h4>
      {imageUrl && <img src={imageUrl} alt="Gatto Casuale" />}
    </div>
  );
}

export default CatImage;
