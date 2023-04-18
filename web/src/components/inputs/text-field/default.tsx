import React, { FC } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import { Container, Label, ErrorMessage } from "./text-field.styled";
import { TextFieldProps } from "./text-field.types";

const TextField: FC<TextFieldProps> = ({
  placeholder,
  name,
  label,
  error,
  onChange,
  value,
  required,
  type,
  onBlur,
}) => {
  const errorMessage = name && error && error[name];

  return (
    <Container>
      <Label>{label}</Label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? `${"input"} ${"error"}` : `${"input"} `}
        onBlur={onBlur}
      />
      {errorMessage && (
        <ErrorMessage>
          <ClearIcon /> {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  );
};

export default TextField;
