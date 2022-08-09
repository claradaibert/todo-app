import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 300px;
    background-color: white;
    box-shadow: 2px 4px 20px rgba(175, 156, 203, 0.4);
    border-radius: 10px;
    border: none;
    padding: 3% 4%;
`

export const Header = styled.p`
    color: ${props => props.theme.palette.darkPurple};
    font-size: 20px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
`

export const TaskList = styled.div`
    width: 100%;
`