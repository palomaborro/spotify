import React, { FC } from "react";

import { CircularProgress } from "@mui/material";

import { ButtonWrapper } from "./button.styled";
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = ({ label, isFetching }) => {
  return (
    <ButtonWrapper>
      {isFetching ? (
        <CircularProgress size={25} style={{ color: "black" }} />
      ) : (
        `${label}`
      )}
    </ButtonWrapper>
  );
};

export default Button;
