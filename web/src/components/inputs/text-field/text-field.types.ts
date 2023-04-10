import { ChangeEvent } from "react";

export type TextFieldProps = {
  label: string;
  error?: Record<string, string> | undefined;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  type?: string;
};
