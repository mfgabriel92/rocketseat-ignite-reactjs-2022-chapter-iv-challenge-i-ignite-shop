import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return <Container {...rest}>{children}</Container>;
}

export { Button };
