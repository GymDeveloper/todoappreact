const TaskItem = ({ index, task }) => {
  return (
    <li key={index} className="list-group-item">
      <div className="row">
        <div className="col-md-8">{task.text}</div>
        <div className="col-md-4">
          <button className="btn btn-sm btn-success">
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
      </div>
    </li>
  );
};

export default TaskItem;
