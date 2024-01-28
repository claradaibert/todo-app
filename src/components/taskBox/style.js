import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 300px;
    background-color: white;
    box-shadow: 2px 4px 20px rgba(175, 156, 203, 0.4);
    border-radius: 10px;
    border: none;
    padding: 4.2%;
    max-height: 600px;
    overflow-y: scroll;

    .taskList {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const Header = styled.p`
    color: ${props => props.theme.darkPurple};
    font-size: 20px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 2rem;
`

export const TaskList = styled.div`
    width: 100%;
`