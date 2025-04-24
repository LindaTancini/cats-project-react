//IMPORTAZIONI
import { useEffect, useState } from "react";

//CREO FUNZIONE PER CARICARE L'UMORE DEI GATTI
function CatHumor() {
  const moods = ["happy", "grumpy", "funny", "sleepy"];
  const [humor, setHumor] = useState("");
  const [humorUrl, setHumorUrl] = useState("");

  function changeMood() {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setHumor(randomMood);
    const url = `https://cataas.com/cat/${randomMood}`;

    return setHumorUrl(url);
  }
  useEffect(() => {
    changeMood();
  }, []);
  return (
    <div>
      {humorUrl && <img src={humorUrl} alt="Gattini" />}
      <h4>Hai scelto il gatto con umore: {humor} </h4>
      <button onClick={() => changeMood()}>
        {" "}
        Clicca per cambiare l'umore del gatto!
      </button>
    </div>
  );
}

//ESPORTO
export default CatHumor;
