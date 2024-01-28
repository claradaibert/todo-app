import { Container } from "./style";

function TaskCard({ task, setTaskList, taskList }) {
  const handleDelete = () => {
    const filteredTaskList = taskList.filter(
      (item) => task.title !== item.title
    );

    setTaskList(filteredTaskList);
  };

  const handleDoneTask = () => {
    const indexOfTask = taskList.indexOf(task);
    const newTaskList = taskList;
    newTaskList[indexOfTask].done = true;
    setTaskList(newTaskList);
  };

  return (
    <Container>
      <div className="taskTitle">{task.title}</div>
      <div className="taskDescription">{task?.description}</div>
      <div className="buttonArea">
        <button
          type="button"
          className="completeButton"
          disabled={task.done}
          onClick={() => handleDoneTask()}
        >
          FEITO
        </button>
        <button
          type="button"
          className="deleteButton"
          onClick={() => handleDelete()}
        >
          EXCLUIR
        </button>
      </div>
    </Container>
  );
}

export default TaskCard;
