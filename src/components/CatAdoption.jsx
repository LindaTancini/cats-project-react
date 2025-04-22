import { useEffect, useState } from "react";

function CatAdoption() {
  const [name, setName] = useState("");
  const [razza, setRazza] = useState("");

  useEffect(() => {
    console.log("Dati aggiornati:", { name, razza });
  }, [name, razza]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hai adottato ${name} (${razza})!`);
    // RESET DELL'INPUT
    setName("");
    setRazza("");
  };

  return (
    <div>
      <h4>Modulo di adozione gatto 🐾</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome del gatto: </label>
          <input
            type="text"
            value={name}
            onChange={(element) => setName(element.target.value)}
          />
        </div>
        <div>
          <label>Razza del gatto: </label>
          <input
            type="text"
            value={razza}
            onChange={(element) => setRazza(element.target.value)}
          />
        </div>
        <button type="submit">Adotta!</button>
      </form>

      <div>
        <h5>Anteprima:</h5>
        <p>Nome: {name}</p>
        <p>Razza: {razza}</p>
      </div>
    </div>
  );
}

export default CatAdoption;
