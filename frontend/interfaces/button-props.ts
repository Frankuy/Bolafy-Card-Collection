import { MouseEventHandler } from "react";

export interface ButtonProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: JSX.Element;
}
