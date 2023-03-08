export type TextFieldProps = {
  label: string;
  error: string;
  handleInputState: (value: string) => void;
  handleErrorState: (value: string) => void;
  schema: any;
};
