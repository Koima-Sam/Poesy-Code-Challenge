import React, { useEffect, useState } from "react";
import Poem from "./Poem";

function PoemsContainer() {
  const [poems, setPoems] = useState([]);
  //Fetch poems
  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((response) => response.json())
      .then((data) => setPoems(data));
  },[poems]);

  const poemItem = poems.map((poem)=>{
    return <Poem
    key={poem.id}
    id={poem.id}
    title = {poem.title}
    content = {poem.content}
    author = {poem.author}
    />
  })
  

  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poemItem}
      
    </div>
  );
}

export default PoemsContainer;
