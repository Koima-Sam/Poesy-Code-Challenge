import React, { useState } from "react";

function NewPoemForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  //declare function to hadle form submit
  function handleFormSubmit(event) {
    event.preventDefault();
    //Fetch the json api and POST
    if (formData.title === "" || formData.content === "" || formData === "") {
      alert("Fill all inputs");
    } else {
      fetch("http://localhost:8004/poems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json)
        .then((data) => {
          // updatePoemRecords()
          setFormData({ ...formData, title: "", author: "", content: "" });
        });
    }
  }
  //Capture changes within our form and update states
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  //  console.log(formData.title)
  //  console.log(formData.author)

  return (
    <form className="new-poem-form" onSubmit={handleFormSubmit}>
      <input
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        placeholder="Author"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />
      <textarea
        placeholder="Write your masterpiece here..."
        name="content"
        rows={10}
        value={formData.content}
        onChange={handleChange}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
