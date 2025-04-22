//IMPORTAZIONI
import CatAdoption from "./CatAdoption";
import CatColorFavorite from "./CatColorFavorite";
import CatCounter from "./CatCounter";
import CatFact from "./CatFact";
import CatImage from "./CatImage";
import CatShelter from "./CatShelter";

function Main() {
  return (
    <>
      <h2>Gatti, gatti ovunque ♥ </h2>
      <CatCounter />
      <CatShelter />
      <CatImage />
      <CatFact />
      <CatColorFavorite />
      <CatAdoption />
    </>
  );
}

export default Main;
