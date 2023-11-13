export type ButtonProps = {
  label: string;
  isFetching?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  width?: string;
  disabled?: boolean;
};
