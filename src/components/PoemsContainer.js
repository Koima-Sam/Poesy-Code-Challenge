import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  
  const poemItem = poems.map((poem, index) => {
    return (
      <Poem
        key={index}
        id={poem.id}
        title={poem.title}
        content={poem.content}
        author={poem.author}
      />
    );
  });

  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poemItem}
    </div>
  );
}

export default PoemsContainer;
