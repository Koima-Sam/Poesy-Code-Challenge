import React, { useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  //Set states for show/hide button
  const [show, setShow] =useState(true)
  
  //call function to handle click
  function handleHideClick(){
    console.log(show)
    setShow(!show)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleHideClick}>Show/hide new poem form</button>
        {show ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}

export default App;
