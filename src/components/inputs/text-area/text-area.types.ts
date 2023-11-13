import { ChangeEvent } from "react";

export type TextAreaProps = {
  label: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  name: string;
  value: string | number;
  required?: boolean;
};
