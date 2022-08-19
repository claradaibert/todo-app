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
` 

export const IconContainer = styled.div`
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: 7px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #7F6E9A 0%, #AF9CCB 0.01%, #E1CDFE 100%);
    color: white;
    font-size: 30px;
    bottom: 20px;
`

export const Title = styled.p`
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    position: relative;
    bottom: 15%;
`

export const Body = styled.p`
    font-size: 13px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    position: relative;
    bottom: 10%;
`