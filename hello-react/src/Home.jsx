import { useState } from "react";
import Select from "./Select";

function Home() {
  const [name, setName] = useState('Titi');


  return (
    <div className="Home">
      <h2>Home</h2>


      <Select items={['Toto', 'Titi', 'Tata']} value={name} onValueChange={setName} />

      <p>Nom : {name}</p>
    </div>
  );
}

export default Home;
