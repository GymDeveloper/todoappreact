import Swal from "sweetalert2";
import TodoApi from "../../services/todoapi";

const TaskItem = ({ task, refrescar }) => {
  const checkTask = async () => {
    const response = await showConfirmAlert(
      `Estas seguro de marcar como terminado la tarea ${task.text}?`
    );

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

    await TodoApi.updateTask(task.id, response.value);
    await refrescar();
  };

  const deleteTask = async () => {
    const response = await showConfirmAlert(
      `Estas seguro de eliminar la tarea ${task.text}?`
    );

    if (response.value) {
      await TodoApi.deleteTask(task.id);
      await refrescar();
    }
  };

  const showConfirmAlert = async (title) => {
    const response = await Swal.fire({
      title,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    });

    return response;
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
        {task.status === "todo" && (
          <div className="col-md-4">
            <button onClick={checkTask} className="btn btn-sm btn-success">
              <i className="fa fa-check"></i>
            </button>
            &nbsp;
            <button onClick={editTask} className="btn btn-sm btn-warning">
              <i className="fa fa-edit"></i>
            </button>
            &nbsp;
            <button onClick={deleteTask} className="btn btn-sm btn-danger">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
