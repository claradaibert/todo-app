import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 2px 4px 10px rgba(175, 156, 203, 0.4);

  .dataTitle {
    font-size: 20px;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    position: relative;
    bottom: 15%;

    @media screen and (max-width: 900px) {
      bottom: 20%;
    }
  }

  .dataBody {
    font-size: 13px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    position: relative;
    bottom: 10%;

    @media screen and (max-width: 900px) {
      bottom: 15%;
    }
  }
`;

export const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  border-radius: 7px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #7f6e9a 0%, #af9ccb 0.01%, #e1cdfe 100%);
  color: white;
  font-size: 30px;
  bottom: 20px;
`;
