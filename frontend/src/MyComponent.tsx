import React, { useState } from "react";

function MyComponent() {
  const [question, setQuestion] = useState("");

  function handleQuestionChange(event) {
    setQuestion(event.target.value);
  }

  return (
    <div>
      <h1>AI Document Observer</h1>
      <button>Upload Document</button>

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
