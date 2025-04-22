import CatColorFavorite from "./CatColorFavorite";
import CatCounter from "./CatCounter";
import CatFact from "./CatFact";
import CatImage from "./CatImage";

function Main() {
  return (
    <>
      <h2>Gatti, gatti ovunque ♥ </h2>
      <CatCounter />
      <CatImage />
      <CatFact />
      <CatColorFavorite />
    </>
  );
}

export default Main;
