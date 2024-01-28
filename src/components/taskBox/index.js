import TaskCard from "../TaskCard";

import { Container } from "./style";

export default function TaskBox({ taskList, setTaskList }) {

  return (
    <Container>
      <div className="taskListHeader">Suas tarefas</div>
      <div className="taskContainer">
        <div className="taskList">
          {taskList.map((task) => (
            <TaskCard
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
