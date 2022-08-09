import * as Style from './style';

export default function DataBox({props}){
    return(
        <Style.Container>
            <Style.IconContainer>{props.icon}</Style.IconContainer>
            <Style.Title>{props.title}</Style.Title>
            <Style.Body>{props.text}</Style.Body>
        </Style.Container>
    )
}