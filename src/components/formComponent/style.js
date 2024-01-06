import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 60px;
`;

export const InputBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: inherit;

  input {
    width: 100%;
    top: 0;
    left: 0;
    outline: none;
    position: absolute;
    border: none;
    border-radius: 7px;
    padding: 20px 15px 10px 10px;
    box-sizing: border-box;
  }

  textArea {
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;
    outline: none;
    z-index: 3;
    position: absolute;
    border: none;
    border-radius: 7px;
    padding: 20px 15px 10px 10px;
    box-sizing: border-box;
    z-index: 1;
    resize: none;
  }

  label {
    font-size: ${(props) => (props.isFocus ? "10px" : "13px")};
    color: ${(props) => props.theme.palette.darkPurple};
    left: 10px;
    position: absolute;
    z-index: 3;
    top: ${(props) => (props.isFocus ? "5px" : "15px")};
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    user-select: none;
    transition: 300ms;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 13px;
    margin-top: 70px;
    border: none;
    border-radius: 7px;
    background-color: ${(props) => props.theme.palette.darkPurple};
    height: 44px;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.palette.mediumPurple};
      transition: 1s;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  top: 0;
  left: 0;
  outline: none;
  z-index: 3;
  position: absolute;
  border: none;
  border-radius: 7px;
  padding: 20px 15px 10px 10px;
  box-sizing: border-box;
  z-index: 1;
  font-family: inherit;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  outline: none;
  z-index: 3;
  position: absolute;
  border: none;
  border-radius: 7px;
  padding: 20px 15px 10px 10px;
  box-sizing: border-box;
  z-index: 1;
  resize: none;
  font-family: inherit;
`;

export const Label = styled.label`
  font-size: ${(props) => (props.isFocus ? "10px" : "13px")};
  color: ${(props) => props.theme.palette.darkPurple};
  left: 10px;
  position: absolute;
  z-index: 3;
  top: ${(props) => (props.isFocus ? "5px" : "15px")};
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  user-select: none;
  font-family: inherit;
  transition: 300ms;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 13px;
  margin-top: 70px;
  border: none;
  font-family: "Lato", sans-serif;
  border-radius: 7px;
  background-color: ${(props) => props.theme.palette.darkPurple};
  height: 44px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.palette.mediumPurple};
    transition: 1s;
  }
`;
