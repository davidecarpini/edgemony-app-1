// variabili
// primitive => 3 'pippo' true
// reference => array o oggetto o funzioni
import "./App.css";
import { FormInput } from "./components/FormInput";
import { useCallback, useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleChangeName = useCallback(
    (e) => {
      setName(e.target.value);
      //... fetch
    },
    [setName]
  );
  const handleChangeDescription = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [setDescription]
  );

  return (
    <div>
      <FormInput value={name} onChange={handleChangeName} tag={"name"} />
      <FormInput
        value={description}
        onChange={handleChangeDescription}
        tag={"description"}
      />
    </div>
  );
}

export default App;
