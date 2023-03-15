export type RadioProps = {
  label: string;
  name: string;
  handleInputState: (value: string) => void;
  options: any;
  required: boolean;
};
