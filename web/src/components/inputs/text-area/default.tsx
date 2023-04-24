import React, { FC } from "react";

import { Container, Label } from "./text-area.styled";
import { TextAreaProps } from "./text-area.types";

const TextArea: FC<TextAreaProps> = ({
  label,
  onChange,
  placeholder,
  name,
  value,
  required,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <textarea
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default TextArea;
