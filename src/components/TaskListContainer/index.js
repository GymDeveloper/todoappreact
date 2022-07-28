import TaskItem from "../TaskItem";

const TaskListContainer = ({ tasks }) => {
  return (
    <div className="card mt-4">
      {tasks.length > 0 ? (
        <ul className="list-group list-group-flush">
          {tasks.map((task, index) => (
            <TaskItem index={index} task={task} />
          ))}
        </ul>
      ) : (
        <h3 className="m-2">Sin tareas</h3>
      )}
    </div>
  );
};

export default TaskListContainer;
