import React from "react";
import { InputContainer } from "./InputStyled";

const Input = React.forwardRef((props, ref) => {
  return (
    <InputContainer>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </InputContainer>
  );
});

export default Input;
