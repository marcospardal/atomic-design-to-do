import React, { ReactNode } from 'react';
import './styles.css';

type ButtonType = "primary" | "secondary" | "transparent";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function Button({ children, color = 'primary', onClick }: ButtonProps) {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
}