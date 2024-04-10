import { Container } from "./style";

function TaskCard({ task, setTaskList, taskList, index }) {
  const showDoneClass = task.done ? "done" : "";
  const handleDelete = () => {
    const filteredTaskList = taskList.filter(
      (item) => task.title !== item.title
    );

    setTaskList(filteredTaskList);
  };

  const handleDoneTask = () => {
    const currentTask = task;
    currentTask.done = true;
    const newTaskList = taskList.filter((item) => task.title !== item.title);
    newTaskList.push(currentTask);
    setTaskList(newTaskList);
  };

  return (
    <Container key={index}>
      <div className={`taskTitle ${showDoneClass}`}>{task.title}</div>
      <div className={`taskDescription ${showDoneClass}`}>
        {task?.description}
      </div>
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
