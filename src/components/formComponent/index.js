import { useState } from "react";
import { Formik } from "formik";

import InputComponent from "./InputComponent";

import * as Style from "./style";

export default function FormComponent({ taskList, setTaskList }) {
  const [isInputSelected, setIsInputSelected] = useState({
    title: false,
    description: false,
  });

  const handleFocus = (name, value) => {
    setIsInputSelected({ ...isInputSelected, [name]: value });
  };

  const SubmitForm = (formData) => {
    const newListItem = formData;

    newListItem.completed = false;

    setTaskList((prevList) => prevList.push(newListItem));
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={(values) => {
        SubmitForm(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Style.FormContainer onSubmit={handleSubmit}>
          <InputComponent
            name={"title"}
            value={values.title}
            inputTitle={"Título"}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            isInputSelected={isInputSelected.title}
          />
          <InputComponent
            name={"description"}
            value={values.description}
            inputTitle={"Descrição"}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            isInputSelected={isInputSelected.description}
          />
          <Style.Button type="submit">Criar</Style.Button>
        </Style.FormContainer>
      )}
    </Formik>
  );
}
