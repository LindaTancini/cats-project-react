//IMPORTAZIONI
import { useEffect, useState } from "react";

function CatShelter() {
  const [numeroGatti, setNumeroGatti] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCats = Math.floor(Math.random() * 3) + 1;
      setNumeroGatti((prev) => prev + newCats);
    }, 5000);

    // PULIZIA DELL'INTERVALLO
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h4>Gatti attualmente nel rifugio:</h4>
      <p>{numeroGatti}</p>
    </div>
  );
}

export default CatShelter;
