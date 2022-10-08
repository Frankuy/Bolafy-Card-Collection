import { ButtonProps } from "../interfaces/button-props";

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-purple-600 rounded-md px-4 py-2 text-white shadow-lg hover:bg-purple-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
