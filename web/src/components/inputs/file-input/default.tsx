import React, { useRef, FC } from "react";

import Button from "../../button/default";
import { Container, Input } from "./file-input.styled";
import { FileInputProps } from "./file-input.types";

const FileInput: FC<FileInputProps> = ({ label, type, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Container>
      <Input
        type="file"
        ref={inputRef}
        onChange={onChange}
        accept={
          type === "image"
            ? "image/*"
            : type === "audio"
            ? "audio/*"
            : undefined
        }
      />
      <Button onClick={handleClick} label={label} type="button" />
    </Container>
  );
};

export default FileInput;
