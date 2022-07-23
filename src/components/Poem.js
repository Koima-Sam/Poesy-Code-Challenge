import React from "react";

function Poem({title,id,content,author}) {
  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By Author {author}</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;
