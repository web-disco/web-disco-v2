export interface ButtonProps {
  isSubmit?: boolean;
  text: string;
  onClick?: Function;
  icon?: JSX.Element | null;
  color: string;
  disabled?: boolean;
}
