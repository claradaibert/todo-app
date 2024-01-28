import { useState, useRef } from "react";

import Input from "../Input";

import { FormContainer } from "./style";

function FormComponent({ taskList, setTaskList }) {
  // Local refs
  const descriptionRef = useRef(null);

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const SubmitForm = () => {
    console.log(formValues, "formValues");
  };

  return (
    <FormContainer>
      <Input
        name="title"
        value={formValues.title}
        type="text"
        label="Título"
        multiline={false}
        handleChange={(e) => setFormValues({ ...formValues, title: e })}
        onEnterKey={() => descriptionRef.current.focus()}
      />
      <Input
        ref={descriptionRef}
        name="description"
        value={formValues.description}
        type="text"
        label="Descrição"
        multiline={true}
        handleChange={(e) => setFormValues({ ...formValues, description: e })}
      />
      <button className="actionButton" onClick={() => SubmitForm()}>
        ENVIAR
      </button>
    </FormContainer>
  );
}

export default FormComponent;
