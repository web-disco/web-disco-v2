import dynamic from "next/dynamic";

import { TextBlockProps } from "../interfaces/TextBlockProps";

const Button = dynamic(() => import("./button"));

const TextBlock = ({
  title,
  text,
  buttonText,
  buttonColor,
  buttonLink,
  onClick,
}: TextBlockProps) => {
  return (
    <div className="text-center">
      <h2 className="font-basement text-[48px] uppercase mb-2">{title}</h2>
      <div className="max-w-[550px] mx-auto">
        <p className="text-grey text-[18px] leading-[160%]">{text}</p>
      </div>
      {buttonText && buttonColor && (
        <div className="max-w-[300px] mx-auto mt-6">
          <Button text={buttonText} color="orange" onClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default TextBlock;
