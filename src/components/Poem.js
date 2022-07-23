import React, { useState } from "react";

function Poem({title,id,content,author}) {
  const[isRead, setRead] = useState(false)
  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By Author {author}</strong>
      </p>
      <button onClick={()=>setRead(!isRead)}>{isRead? "Mark as read":"Mark as unread"}</button>
    </div>
  );
}

export default Poem;
