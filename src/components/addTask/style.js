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

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputBox= styled.div`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
`

export const Input = styled.input`
    width: 100%;
    top: 0;
    left: 0;
    outline: none;
    z-index: 3;
    border: none;
    border-radius: 7px;
    padding: 2%;
    box-sizing: border-box;
    &:focus {
        border: 1px solid ${props => props.theme.palette.darkPurple};
    }
`

export const Label = styled.label`
    font-size: ${props => props.isFocus ? "15px" : '10px'};
    color: ${props => props.theme.palette.darkPurple};
    top: ${props => props.isFocus ? "50px" : '20px'};
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    user-select: none;
    font-family: inherit;
    transition: 300ms;
`

export const Button = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 13px;
    border: none;
    font-family: 'Lato' , sans-serif;
    border-radius: 7px;
    background-color: ${props => props.theme.palette.darkPurple};
    height: 44px;
`