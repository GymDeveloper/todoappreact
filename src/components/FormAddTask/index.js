const FormAddTask = (props) => {
  const { manejarInput, inputTask, agregar, refrescar } = props;

  return (
    <div>
      <h1>Todo App</h1>
      <div className="card">
        <div className="card-body">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="New task..."
              onChange={manejarInput}
              autoComplete="off"
              ref={inputTask}
            />
            <button className="btn btn-primary" onClick={agregar}>
              <span className="fa fa-plus"></span>
              &nbsp; Add
            </button>
            <button className="btn btn-outline-primary" onClick={refrescar}>
              Refresh &nbsp;
              <span className="fa fa-refresh"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddTask;
