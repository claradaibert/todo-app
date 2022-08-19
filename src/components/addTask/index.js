import * as Style from './style';
import { useState } from 'react';

export default function AddTask(){
    const [isSelected, setIsSelected] = useState(true);

    function handleFocus(value){
        setIsSelected(value);
    }

    return(
        <Style.Container>
            <Style.Header>
                <Style.Title>Adicione uma tarefa</Style.Title>
                <Style.Icon>p</Style.Icon>
            </Style.Header>
            <Style.InputBox>
                <Style.Label>Título</Style.Label>
                <Style.Input
                />
            </Style.InputBox>
            <Style.Button>Criar</Style.Button>
        </Style.Container>
    )
}