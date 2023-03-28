// @ts-nocheck
import React, { FC } from "react";

import Joi from "joi";

import ClearIcon from "@mui/icons-material/Clear";

import { Container, Label, ErrorMessage } from "./text-field.styled";
import { TextFieldProps } from "./text-field.types";

const TextField: FC<TextFieldProps> = ({
  label,
  error,
  handleInputState,
  handleErrorState,
  schema,
  ...rest
}) => {
  const validateProperty = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    const obj = { [name]: value };
    const inputSchema = Joi.object({ [name]: schema });
    const { error } = inputSchema.validate(obj);
    return error ? error.details[0].message : "";
  };

  const handleChange = ({ currentTarget: input }: any) => {
    if (schema) {
      const errorMessage = validateProperty(input);
      if (handleErrorState) handleErrorState(input.name, errorMessage);
    }
    handleInputState(input.name, input.value);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <input
        {...rest}
        onChange={handleChange}
        className={error ? `${"input"} ${"error"}` : `${"input"} `}
      />
      {error && (
        <ErrorMessage>
          <ClearIcon /> {error}
        </ErrorMessage>
      )}
    </Container>
  );
};

export default TextField;
