import { MouseEventHandler } from "react";

interface ButtonProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: JSX.Element;
}

const Button = ({ children, onClick, icon }: ButtonProps) => {
  return (
    <button
      className="bg-purple-600 rounded-md px-4 py-2 flex flex- text-white shadow-lg hover:bg-purple-700"
      onClick={onClick}
    >
      {icon && <div className="mr-2">{icon}</div>}
      {children}
    </button>
  );
};

export default Button;
