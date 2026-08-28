import React, { useEffect, useState } from "react";

function MyComponent() {
  const [question, setQuestion] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  }, []);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function handleSubmit() {
    if (file) {
      console.log("File added");
      console.log(file);
    }
  }

  function handleQuestionChange(e) {
    setQuestion(e.target.value);
  }

  return (
    <div>
      <h1>AI Document Observer</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit Document</button>

      <br></br>
      <br></br>
      <input
        type="text"
        onChange={handleQuestionChange}
        placeholder="Enter new task..."
        value={question}
      ></input>
      <button>Ask Question</button>
    </div>
  );
}

export default MyComponent;
