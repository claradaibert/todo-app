import * as Style from "./style";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import FormComponent from "./FormComponent";

export default function AddTask({ taskList, setTaskList }) {
  const [isSelected, setIsSelected] = useState({
    title: false,
    description: false,
  });
  const [ComponentVisible, setComponentVisible] = useState(false);

  function handleComponentVisibility() {
    setComponentVisible(!ComponentVisible);
  }

  function handleFocus(name, value) {
    setIsSelected({ ...isSelected, [name]: value });
  }

  function SubmitForm(values) {
    try {
      const data = {
        title: values.title,
        description: values.description,
      };
      setTaskList([...taskList, data]);
    } catch (error) {
      console.log("deu erro");
    }
  }

  return (
    <Style.Container visible={ComponentVisible}>
      <Style.Header onClick={handleComponentVisibility}>
        <Style.Title>Adicione uma tarefa</Style.Title>
        <Style.Icon>
          <MdKeyboardArrowDown />
        </Style.Icon>
      </Style.Header>
      <FormComponent
        SubmitForm={SubmitForm}
        handleFocus={handleFocus}
        isSelected={isSelected}
      />
    </Style.Container>
  );
}
