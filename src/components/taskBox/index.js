import TaskCard from "../TaskCard";

import * as Style from "./style";

export default function TaskBox({ taskList, setTaskList }) {
  console.log(taskList, 'taskList');
  return (
    <Style.Container>
      <Style.Header>Suas tarefas</Style.Header>
      <div className="taskList">
        {taskList.map((task) => (
          <TaskCard task={task} taskList={taskList} setTaskList={setTaskList} />
        ))}
      </div>
    </Style.Container>
  );
}
