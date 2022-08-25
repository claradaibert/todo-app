import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: ${props => props.visible ? "350px" : "70px"};
    background-color: ${props => props.theme.palette.lightPurple};
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 4%;
    font-family: 'Lato' , sans-serif;
    gap: 1.2rem;
    overflow: hidden;
    transition: 300ms;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled.p `
    font-size: 17px;
    font-weight: 400;
`

export const Icon = styled.p`
    font-size: 30px;
    color: ${props => props.theme.palette.darkPurple};
    cursor: pointer;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 60px;
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
    position: absolute;
    border: none;
    border-radius: 7px;
    padding: 20px 15px 10px 10px;
    box-sizing: border-box;
    z-index: 1;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;
    outline: none;
    z-index: 3;
    position: absolute;
    border: none;
    border-radius: 7px;
    padding: 20px 15px 10px 10px;
    box-sizing: border-box;
    z-index: 1;
    resize: none;
`

export const Label = styled.label`
    font-size: ${props => props.isFocus ? "10px" : '13px'};
    color: ${props => props.theme.palette.darkPurple};
    left: 10px;
    position: absolute;
    z-index: 3;
    top: ${props => props.isFocus ? "5px" : '15px'};
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
    margin-top: 70px;
    border: none;
    font-family: 'Lato' , sans-serif;
    border-radius: 7px;
    background-color: ${props => props.theme.palette.darkPurple};
    height: 44px;
    font-weight: 400;
    cursor: pointer;
`