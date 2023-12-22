import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { useReducer } from "react";

//const [firstTreatment, second, third] = ["Minoxidil", "Finasteride", "Nizoral"];
/*function App({library}) {
  const [what = useState("");]
  return (
    <div className="App">
      <h1>Developing first {library}</h1>
    </div>
  );
}*/
/*function App() {
  const [hairloss, setHairloss] = useState("Androgenic Alopecia")
  useEffect(() => {
    console.log('The current ${hairloss} right now');
  }  );
  return (
    <div className = "App">
        <h1> Current hairloss is {hairloss} </h1>
        <button onClick={() => setHairloss("Alopecia Areata")}>
          Alopecia Areata
        </button>
        <button onClick={() => setHairloss("Androgenic Alopecia")}>
          Androgenic Alopecia
        </button>
    </div>
  )
}*/
function App() {
  const [checked, setChecked] = useReducer(
    (checked) => !checked, false
    );
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked}/>
      <label>Checked</label>
    </div>
  )
}

export default App;
