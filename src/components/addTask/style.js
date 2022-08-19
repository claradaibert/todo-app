import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: ${props => props.theme.palette.lightPurple};
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 4%;
    font-family: 'Lato' , sans-serif;
    gap: 2rem;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.p `
    font-size: 17px;
    font-weight: 400;
`

export const Icon = styled.p`
    font-size: 17px;
`

export const InputBox= styled.div`
    width: 100%;
    box-sizing: border-box;
    /* position: relative; */
    /* display: flex;
    flex-direction: column;
    &:focus{
        border-color: ${props => props.theme.colors.mediumPurple};
    } */
`

export const Input = styled.input`
    /* width: 100%;
    border: none;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 3%; */
    top: 0;
    left: 0;
    outline: none;
    z-index: 3;
`

export const Label = styled.p`
    /* font-size: 12px;
    position: absolute;
    color: ${props => props.theme.palette.darkPurple};
    top: ${props => props.isSelected ? "10px" : "18px"};
    left: 3%;
    transition: 300ms;
    z-index: 1; */
`

export const Button = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 7px;
    background-color: ${props => props.theme.palette.darkPurple};
    height: 44px;
`