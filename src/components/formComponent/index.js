import { useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";

import Input from "../Input";

import { FormContainer } from "./style";

function FormComponent({taskList, setTaskList }) {

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const SubmitForm = async () => {
    try {
      const schema = yup.object().shape({
        title: yup
          .string()
          .strict()
          .typeError("O título deve ser composto por caracteres alfanuméricos")
          .required("Por favor informe o título da tarefa"),
        description: yup.string().strict(),
      });
  
      await schema.validate(formValues, { abortEarly: false }).catch((err) => {
        err.inner.forEach((error) => {
          toast.error(error.message);
        });
        // eslint-disable-next-line
        throw "failed validation";
      });

      setTaskList([...taskList, formValues]);
      setFormValues({
        title: "",
        description: "",
      })
    }catch {
    }

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
      />
      <Input
        name="description"
        value={formValues.description}
        type="text"
        label="Descrição"
        multiline={true}
        handleChange={(e) => setFormValues({ ...formValues, description: e })}
      />
      <button type="button" className="sendButton" onClick={() => SubmitForm()}>
        ENVIAR
      </button>
    </FormContainer>
  );
}

export default FormComponent;
