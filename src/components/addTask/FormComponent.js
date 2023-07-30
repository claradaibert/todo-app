import * as Style from "./style";
import { Formik } from "formik";

export default function FormComponent({ handleFocus, isSelected, SubmitForm }) {
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
          <Style.InputBox>
            <Style.Input
              type="text"
              name="title"
              value={values?.title}
              onChange={handleChange}
              onBlur={(e) => {
                handleBlur(e);
                handleFocus(e.target.name, false);
              }}
              onFocus={(e) => {
                handleFocus(e.target.name, true);
              }}
            />
            <Style.Label isFocus={isSelected?.title || values?.title}>
              Título
            </Style.Label>
          </Style.InputBox>
          <Style.InputBox>
            <Style.TextArea
              type="text"
              name="description"
              value={values?.description}
              onChange={handleChange}
              onBlur={(e) => {
                handleBlur(e);
                handleFocus(e.target.name, false);
              }}
              onFocus={(e) => {
                handleFocus(e.target.name, true);
              }}
            />
            <Style.Label isFocus={isSelected?.description || values?.description}>
              Descrição
            </Style.Label>
          </Style.InputBox>
          <Style.Button type="submit">Criar</Style.Button>
        </Style.FormContainer>
      )}
    </Formik>
  );
}
