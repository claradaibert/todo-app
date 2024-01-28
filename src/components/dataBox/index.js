import { Container, IconContainer } from "./style";

export default function DataBox(props) {
  return (
    <Container>
      <IconContainer>{props?.icon}</IconContainer>
      <div className="dataTitle">{props?.title}</div>
      <div className="dataBody">{props?.text}</div>
    </Container>
  );
}
