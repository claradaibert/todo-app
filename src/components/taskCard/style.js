import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  font-family: "Lato", sans-serif;
  background-color: ${({ theme }) => theme.lightPurple};
  border: none;
  border-radius: 10px;
  max-height: 100%;
  overflow-y: scroll;

  .taskTitle {
    font-size: 1rem;
    color: ${({ theme }) => theme.font_primary};
    font-weight: 500;
  }

  .taskDescription {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.stroke_primary};
    font-weight: 400;
    max-width: 100%;
  }

  .buttonArea {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2%;
    text-decoration: none;
  }

  .completeButton {
    width: 100%;
    height: fit-content;
    padding: 0.2rem;
    background-color: ${({ theme }) => theme.darkPurple};
    color: white;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;

    :disabled {
      background-color: ${({ theme }) => theme.mediumPurple};
      pointer-events: none;
    }
  }

  .deleteButton {
    font-size: 0.875rem;
    width: 100%;
    color: ${({ theme }) => theme.darkPurple};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.darkPurple};
    border-radius: 10px;
    height: 2rem;
    background-color: transparent;
  }

  .done {
    text-decoration: line-through;
  }
`;
