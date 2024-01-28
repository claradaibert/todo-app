import * as Style from "./style";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// Component import
import FormComponent from "../FormComponent";

export default function AddTask({ setTaskList }) {
  const [componentVisible, setComponentVisible] = useState(false);

  function handleComponentVisibility() {
    setComponentVisible(!componentVisible);
  }

  const renderArrowButton = () => {
    if (componentVisible) return <MdKeyboardArrowUp />;
    return <MdKeyboardArrowDown />;
  };

  return (
    <Style.Container visible={componentVisible}>
      <div className="addTaskHeader" onClick={handleComponentVisibility}>
        <div className="title">Adicione uma tarefa</div>
        <div className="icon">{renderArrowButton()}</div>
      </div>
      <FormComponent setTaskList={setTaskList} />
    </Style.Container>
  );
}
