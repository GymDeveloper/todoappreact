import { useState, useRef } from "react";
import TodoApi from "./services/todoapi";

function App() {
  const inputTask = useRef(null);

  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);

  function manejarInput(e) {
    setText(e.target.value);
  }

  async function agregar() {
    const res = await TodoApi.addtask(text);
    if (res) {
      inputTask.current.value = "";
      inputTask.current.focus();
      refrescar();
    }
  }

  async function refrescar() {
    const data = await TodoApi.listtasks();
    setTasks(data.tasks);
  }

  return (
    <div className="container mt-5 mx-auto" style={{ width: 600 }}>
      <div className="card mt-4">
        {tasks.length > 0 ? (
          <ul className="list-group list-group-flush">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item">
                {task.text}
              </li>
            ))}
          </ul>
        ) : (
          <h3 className="m-2">Sin tareas</h3>
        )}
      </div>
    </div>
  );
}

export default App;
