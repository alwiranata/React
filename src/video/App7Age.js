import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Ex.Aldo"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Name : {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Predicted Count :{predictedAge?.count}</h1>
    </div>
  );
}

export default App;
