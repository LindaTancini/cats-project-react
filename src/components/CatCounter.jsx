//IMPORTAZIONI
import { useState } from "react";

function CatCounter() {
  const [count, setCount] = useState(3);

  return (
    <div>
      <h4>Gatti nel rifugio: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Aggiungi un gatto</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CatCounter;
