import styled from "styled-components";

export const Wrap = styled.div `
    margin: 0;
    padding: 0;
`

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(112.68deg, #F1DFF7 0%, rgba(218, 252, 252, 0.3) 100%);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10%;
`

export const Header = styled.p`
    font: normal normal 3rem 'Abril Fatface', cursive;
    color: ${props => props.theme.palette.mediumPurple};
    margin-left: 3%;
    margin-top: 1rem;
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 3%;
    gap: 3%;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2%;
`

export const DataContainers = styled.div`
    display: flex;
    width: 100%;
    gap: 10%;
`
