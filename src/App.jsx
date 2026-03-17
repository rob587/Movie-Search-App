import { useState } from "react";
import movies from "./movies.json";

function App() {
  //creazione stati

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <h1>Movie Search App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button>Cerca</button>
    </>
  );
}

export default App;
