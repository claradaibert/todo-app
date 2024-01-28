import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    112.68deg,
    #f1dff7 0%,
    rgba(218, 252, 252, 0.3) 100%
  );
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 20px;

  .header {
    font: normal normal 3rem "Abril Fatface", cursive;
    color: ${(props) => props.theme.mediumPurple};
    margin-left: 3%;
    margin-top: 1rem;
  }

  .pageBody {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 3%;
    gap: 3%;
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .leftContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 30px;

      .dataContainer {
        display: flex;
        width: 100%;
        gap: 10%;
      }
    }
  }
`;
