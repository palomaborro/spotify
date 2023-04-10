import React, { FC } from "react";

import { CircularProgress } from "@mui/material";

import { ButtonWrapper } from "./button.styled";
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = ({
  label,
  isFetching,
  onClick,
  type,
  width,
}) => {
  return (
    <ButtonWrapper onClick={onClick} width={width} type={type}>
      {isFetching ? (
        <CircularProgress size={25} style={{ color: "black" }} />
      ) : (
        `${label}`
      )}
    </ButtonWrapper>
  );
};

export default Button;
