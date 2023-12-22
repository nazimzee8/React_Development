import logo from './logo.svg';
import './App.css';
import { useRef } from "react";
import { useState } from "react";

/*function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert('${title}, ${color}');
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input ref ={txtTitle} type="text" placeholder="color title..." />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  )
  }*/

  function App() {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");
    const submit = (e) => {
      e.preventDefault();
      alert('${title}, ${color}');
      setTitle("");
      setColor("#000000");
    };
    return (
      <form onSubmit={submit}>
        <input value={title} onChange = {(event) => setTitle(event.target.value)} type="text" placeholder="color title..." />
        <input value = {color} onChange = {(event) => setColor(event.target.value)} type="color" />
        <button>ADD</button>
      </form>
      )
    };

export default App;