import * as Style from "./style";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

// Component import
import FormComponent from "../FormComponent";

export default function AddTask({ taskList, setTaskList }) {
  const [componentVisible, setComponentVisible] = useState(false);

  const arrowClassComplement = componentVisible ? 'open' : '';

  function handleComponentVisibility() {
    setComponentVisible(!componentVisible);
  }

  return (
    <Style.Container visible={componentVisible}>
      <div className="addTaskHeader" onClick={handleComponentVisibility}>
        <div className="title">Adicione uma tarefa</div>
        <div className={`icon ${arrowClassComplement}`}>
          <MdKeyboardArrowDown />
        </div>
      </div>
      <FormComponent taskList={taskList} setTaskList={setTaskList} />
    </Style.Container>
  );
}
