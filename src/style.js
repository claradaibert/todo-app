import styled from "styled-components";

export const Wrap = styled.div `
    margin: 0;
    padding: 0;
`

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(112.68deg, #F1DFF7 0%, rgba(218, 252, 252, 0) 100%);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const Header = styled.p`
    font: normal normal 3rem 'Abril Fatface', cursive;
    color: ${props => props.theme.palette.darkPurple};
    margin-left: 3%;
    margin-top: 1rem;
`