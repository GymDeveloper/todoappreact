import Swal from "sweetalert2";
import TodoApi from "../../services/todoapi";

const TaskItem = ({ task, refrescar }) => {
  const checkTask = async () => {
    const response = await Swal.fire({
      title: `Estas seguro de marcar como terminado la tarea ${task.text}?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    });
    console.log(response);
    /**
     * Si marcamos que si el response.value = true
     * Si marcamos que no el response.value = false
     */

    // si response.value es true
    if (response.value) {
      // entonces llamamos al servicio doneTask y le pasamos el id
      await TodoApi.doneTask(task.id);
      await refrescar();
    }
  };

  const editTask = async () => {
    const response = await Swal.fire({
      title: "Editar",
      input: "text",
      inputValue: task.text,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Escribe algo!";
        }
      },
    });

    console.log(response);
    await TodoApi.updateTask(task.id, response.value);
    await refrescar();
  };

  const bgStatus = {
    todo: "bg-primary",
    done: "bg-success",
    delete: "bg-danger",
  };

  return (
    <li className={`list-group-item ${bgStatus[task.status]} bg-opacity-25`}>
      <div className="row">
        <div className="col-md-8">{task.text}</div>
        {task.status !== "done" && (
          <div className="col-md-4">
            <button onClick={checkTask} className="btn btn-sm btn-success">
              <i className="fa fa-check"></i>
            </button>
            &nbsp;
            <button onClick={editTask} className="btn btn-sm btn-warning">
              <i className="fa fa-edit"></i>
            </button>
            &nbsp;
            <button className="btn btn-sm btn-danger">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
