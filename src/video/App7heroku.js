// import "./App.css";
// import Axios from "axios";
// import { useState } from "react";

// function App() {
//   const [generatedExcuse, setGeneratedExcuse] = useState("");
//   const fetchExcuse = (excuse) => {
//     //Not Found URl
//     Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
//       (res) => {
//         setGeneratedExcuse(res.data[0].excuse);
//       }
//     );
//   };
//   return (
//     <div className="App">
//       <h1>Generate An Excuse</h1>
//       <button onClick={() => fetchExcuse("party")}>Party</button>
//       <button onClick={() => fetchExcuse("family")}>Family</button>
//       <button onClick={() => fetchExcuse("office")}>Office</button>
//       <p>{generatedExcuse}</p>
//     </div>
//   );
// }

// export default App;
