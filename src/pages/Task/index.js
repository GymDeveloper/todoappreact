import { useState, useEffect, useRef } from "react";
import FormAddTask from "../../components/FormAddTask";
import TaskListContainer from "../../components/TaskListContainer";
import TodoApi from "../../services/todoapi";

const Task = () => {
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

  useEffect(() => {
    // haremos el llamado a la funcion refrescar
    refrescar();
  }, []);

  return (
    <div className="container mt-5 mx-auto" style={{ width: 600 }}>
      <FormAddTask
        inputTask={inputTask}
        agregar={agregar}
        manejarInput={manejarInput}
        refrescar={refrescar}
      />
      <TaskListContainer tasks={tasks} />
    </div>
  );
};

export default Task;
