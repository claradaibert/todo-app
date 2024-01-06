import * as Style from "./style";

function InputComponent({
  name,
  value,
  inputTitle,
  handleChange,
  handleBlur,
  handleFocus,
  isInputSelected,
}) {
  const renderInput = () => {
    if (name === "description") {
      return (
        <textarea
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={(e) => {
            handleBlur(e);
            handleFocus(e.target.name, false);
          }}
          onFocus={(e) => {
            handleFocus(e.target.name, true);
          }}
        />
      );
    }
    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={(e) => {
          handleBlur(e);
          handleFocus(e.target.name, false);
        }}
        onFocus={(e) => {
          handleFocus(e.target.name, true);
        }}
      />
    );
  };

  return (
    <Style.InputBox>
      {renderInput()}
      <label isFocus={isInputSelected || value}>{inputTitle}</label>
    </Style.InputBox>
  );
}

export default InputComponent;
