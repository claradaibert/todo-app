import * as Style from './style';
import { useState } from 'react';
import { Formik } from 'formik';

export default function AddTask(){
    const [title, setTitle] = useState("");
    const [isSelected, setIsSelected] = useState({
        title: false,
    });

    function handleFocus(name,value){
        setIsSelected({...isSelected, [name]: value})
    }

    return(
        <Style.Container>
            <Style.Header>
                <Style.Title>Adicione uma tarefa</Style.Title>
                <Style.Icon>p</Style.Icon>
            </Style.Header>
            <Formik
                initialValues={{
                    title: ""
                }}
                onSubmit={values => console.log(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values
                })=>(
                    <Style.FormContainer>
                        <Style.InputBox>
                            <Style.Input
                                type='text'
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={(e)=>{
                                    handleBlur;
                                    handleFocus(e.target.name, false);
                                }}
                                onFocus={(e)=>{
                                    handleFocus(e.target.name, true)
                                }}
                            />
                            <Style.Label isFocus={isSelected.name}>Título</Style.Label>
                        </Style.InputBox>
                        <Style.Button>Criar</Style.Button>
                    </Style.FormContainer>
                )}
            </Formik>
        </Style.Container>
    )
}