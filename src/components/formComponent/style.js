import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  gap: 2rem;

  .sendButton {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 13px;
    border: none;
    font-family: "Lato", sans-serif;
    border-radius: 7px;
    background-color: ${(props) => props.theme.darkPurple};
    height: 44px;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.mediumPurple};
      transition: 1s;
    }
  }
`;
