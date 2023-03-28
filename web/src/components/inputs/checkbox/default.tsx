import React, { FC } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { CheckboxProps } from "./checkbox.types";
import "./checkbox.styles.scss";

const CheckboxInput: FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <FormControlLabel
      className="checkbox_container"
      control={
        <Checkbox {...rest} style={{ color: "#15883e" }} className="checkbox" />
      }
      label={label}
    />
  );
};

export default CheckboxInput;
