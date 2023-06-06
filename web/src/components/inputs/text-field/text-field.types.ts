import { ChangeEvent } from "react";

export type TextFieldProps = {
  label: string;
  error?: Record<string, string> | undefined;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  type?: string;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
};
