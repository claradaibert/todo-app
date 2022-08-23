import * as Style from './style';
import { useState , useRef } from 'react';
import { Formik } from 'formik';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

export default function AddTask(){
    const [title, setTitle] = useState("");
    const [isSelected, setIsSelected] = useState({
        title: false,
        descr: false
    });
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    function handleContainer(e){
        if (!ref?.current?.contains(e.target)){
            setVisible(!visible);
        }
    }

    function handleFocus(name,value){
        setIsSelected({...isSelected, [name]: value})
    }

    return(
        <Style.Container onClick={handleContainer} visible={visible}>
            <Style.Header>
                <Style.Title>Adicione uma tarefa</Style.Title>
                <Style.Icon><MdKeyboardArrowDown/></Style.Icon>
            </Style.Header>
            <Formik
                initialValues={{
                    title: "",
                    descr: ""
                }}
                onSubmit={values => console.log(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values
                })=>(
                    <Style.FormContainer ref={ref}>
                        <Style.InputBox>
                            <Style.Input
                                type='text'
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={(e)=>{
                                    handleBlur(e);
                                    handleFocus(e.target.name, false);
                                }}
                                onFocus={(e)=>{
                                    handleFocus(e.target.name, true)
                                }}
                            />
                            <Style.Label isFocus={isSelected.title}>Título</Style.Label>
                        </Style.InputBox>
                        <Style.InputBox>
                            <Style.TextArea
                                type='text'
                                name="descr"
                                value={values.descr}
                                onChange={handleChange}
                                onBlur={(e)=>{
                                    handleBlur(e);
                                    handleFocus(e.target.name, false);
                                }}
                                onFocus={(e)=>{
                                    handleFocus(e.target.name, true)
                                }}
                            />
                            <Style.Label isFocus={isSelected.descr}>Descrição</Style.Label>
                        </Style.InputBox>
                        <Style.Button>Criar</Style.Button>
                    </Style.FormContainer>
                )}
            </Formik>
        </Style.Container>
    )
}