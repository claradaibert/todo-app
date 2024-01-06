import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.visible ? "350px" : "70px")};
  background-color: ${(props) => props.theme.palette.lightPurple};
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4%;
  font-family: "Lato", sans-serif;
  gap: 1.2rem;
  overflow: hidden;
  transition: 300ms;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 17px;
    font-weight: 400;
  }

  .icon {
    font-size: 30px;
    color: ${(props) => props.theme.palette.darkPurple};
    cursor: pointer;
  }
`;