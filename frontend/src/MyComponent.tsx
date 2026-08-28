import React, { useEffect, useState } from "react";

function MyComponent() {
  const [question, setQuestion] = useState("");
  const [file, setFile] = useState(null);
  const [answer, setAnswer] = useState("");

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
      const formData = new FormData();
      formData.append("file", file);
      fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
  }

  function handleQuestionChange(e) {
    setQuestion(e.target.value);
  }

  function handleAskQuestion() {
    console.log("In handle Question");
    fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: question }),
    })
      .then((res) => res.json())
      .then((data) => setAnswer(data.answer))
      .catch((err) => setAnswer("error: could not reach backend"));
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
      <button onClick={handleAskQuestion}>Ask Question</button>
      <p>{answer}</p>
    </div>
  );
}

export default MyComponent;
