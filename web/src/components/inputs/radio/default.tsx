// @ts-nocheck
import React, { FC } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Container, Label } from "./radio.styled";
import { RadioProps } from "./radio.types";
import "./radio.styles.scss";

const RadioInput: FC<RadioProps> = ({
  name,
  handleInputState,
  label,
  options,
  required,
  ...rest
}) => {
  const handleChange = ({ currentTarget: input }: any) => {
    handleInputState(input.name, input.value);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <RadioGroup {...rest} row name={name} onChange={handleChange}>
        {options.map((option: string, index: number) => (
          <FormControlLabel
            key={index}
            value={option}
            control={
              <Radio
                disableRipple
                style={{ color: "#15883e", transform: "scale(1.2)" }}
                required={required}
              />
            }
            label={option}
            className="radio_input"
          />
        ))}
      </RadioGroup>
    </Container>
  );
};

export default RadioInput;
