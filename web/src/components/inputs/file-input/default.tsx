// @ts-nocheck
import React, { useRef, FC } from "react";

import Button from "../../button/default";
import { Container, Input } from "./file-input.styled";
import { FileInputProps } from "./file-input.types";

const FileInput: FC<FileInputProps> = ({
  name,
  label,
  value,
  icon,
  type,
  handleInputState,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Container>
      <Input
        type="file"
        ref={inputRef}
        onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
        value={value}
        {...rest}
      />
      <Button onClick={() => inputRef.current?.click()} label={label} />
      {type === "image" && value && (
        <img
          src={typeof value === "string" ? value : URL.createObjectURL(value)}
          alt="file"
        />
      )}
      {type === "audio" && value && (
        <audio
          src={typeof value === "string" ? value : URL.createObjectURL(value)}
          controls
        />
      )}
      <Button label="Upload" />
    </Container>
  );
};

export default FileInput;
