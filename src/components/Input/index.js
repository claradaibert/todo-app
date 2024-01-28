import { TextField } from "@mui/material";

import { Container } from "./style";

function Input({
  name,
  value,
  handleChange,
  label,
  type,
  multiline,
  onEnterKey,
  ref,
}) {
  return (
    <Container>
      <TextField
        inputRef={ref}
        name={name}
        type={type}
        value={value}
        label={label}
        multiline={multiline}
        rows={multiline ? 2 : 1}
        onChange={(e) => handleChange(e.target.value)}
        fullWidth
      />
    </Container>
  );
}

export default Input;
