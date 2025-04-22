//IMPORTAZIONI
import { useEffect, useState } from "react";

function CatColorFavorite() {
  const [favoriteColor, setFavoriteColor] = useState("");
  const colors = [
    "Nero",
    "Bianco",
    "Arancione",
    "Grigio",
    "Macchiato",
    "Tigrato",
    "Nero e Bianco",
  ];

  useEffect(() => {
    if (favoriteColor) {
      console.log("colore selezionato:", favoriteColor);
    }
  }, [favoriteColor]);

  return (
    <div>
      <h4>Scegli un colore di un gatto che ti piace:</h4>
      {colors.map((colore) => (
        <button key={colore} onClick={() => setFavoriteColor(colore)}>
          {colore}
        </button>
      ))}
      {favoriteColor && (
        <p>
          Hai selezionato il colore: <strong>{favoriteColor}</strong>
        </p>
      )}
    </div>
  );
}

export default CatColorFavorite;
