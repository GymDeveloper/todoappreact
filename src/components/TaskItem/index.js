import Swal from "sweetalert2";
import TodoApi from "../../services/todoapi";

const TaskItem = ({ index, task, refrescar }) => {
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

  return (
    <li key={index} className="list-group-item">
      <div className="row">
        <div className="col-md-8">{task.text}</div>
        {task.status !== "done" && (
          <div className="col-md-4">
            <button onClick={checkTask} className="btn btn-sm btn-success">
              <i className="fa fa-check"></i>
            </button>
            &nbsp;
            <button className="btn btn-sm btn-warning">
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
