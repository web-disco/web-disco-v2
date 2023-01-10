import { ButtonProps } from "../interfaces/ButtonProps";
import { getButtonColor } from "../utils/color-helper";

const Button = ({
  isSubmit,
  text,
  onClick,
  icon,
  color,
  disabled,
}: ButtonProps) => {
  if (icon) {
    return (
      <button
        type={isSubmit ? "submit" : "button"}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        disabled={disabled}
        className={`font-space btn ${getButtonColor(color)}`}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button
        type={isSubmit ? "submit" : "button"}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        disabled={disabled}
        className={`font-space btn ${getButtonColor(color)}`}
      >
        {text}
      </button>
    );
  }
};

export default Button;
