import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  //Set states for show/hide button
  const [show, setShow] =useState(true)
  const [poems, setPoems] = useState([]);

  //Fetch poems
  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((response) => response.json())
      .then((data) => setPoems(data));
  }, []);
  
  
  //call function to handle click
  function handleHideClick(){
    console.log(show)
    setShow(!show)
  }
  
  function updatePoems(poem){
    setPoems([...poems,poem])
  }
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleHideClick}>Show/hide new poem form</button>
        {show ? <NewPoemForm updatePoems ={updatePoems} /> : null}
      </div>
      <PoemsContainer poems ={poems}/>
    </div>
  );
}

export default App;
