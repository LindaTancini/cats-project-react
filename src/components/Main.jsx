//IMPORTAZIONI
import CatAdoption from "./CatAdoption";
import CatColorFavorite from "./CatColorFavorite";
import CatCounter from "./CatCounter";
import CatFact from "./CatFact";
import CatHumor from "./CatHumor";
import CatImage from "./CatImage";
import CatShelter from "./CatShelter";

function Main() {
  return (
    <>
      <h2>Gatti, gatti ovunque ♥ </h2>
      <CatCounter />
      <CatShelter />
      <CatImage />
      <CatAdoption />
      <CatFact />
      <CatHumor />
      <CatColorFavorite />
    </>
  );
}

export default Main;
