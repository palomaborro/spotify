import { ChangeEvent } from "react";

export type FileInputProps = {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
};
