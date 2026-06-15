import { useState, useEffect } from 'react';

function Todo() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function aggiungi() {
    if (input === "") return;
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Lista nemici 😈</h1>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Aggiungi un nemico..."
      />
      <button onClick={aggiungi}>Aggiungi</button>
      {tasks.map(function(task, index) {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
}

export default Todo;