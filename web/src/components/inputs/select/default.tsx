// @ts-nocheck
import React, { FC } from "react";

import { Container, Label, SelectWrapper } from "./select.styled";
import { InputProps } from "./select.types";

const Select: FC<InputProps> = ({
  label,
  options,
  handleInputState,
  placeholder,
  ...rest
}) => {
  const handleChange = ({ currentTarget: input }: any) => {
    handleInputState(input.name, input.value);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <SelectWrapper onChange={handleChange} {...rest}>
        <option style={{ display: "none" }} value="">
          {placeholder}
        </option>
        {options.map((option: any, index: number) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </SelectWrapper>
    </Container>
  );
};

export default Select;
