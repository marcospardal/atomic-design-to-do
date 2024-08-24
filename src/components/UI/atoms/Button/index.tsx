import React from 'react';
import './styles.css';

type ButtonType = "primary" | "secondary";

export interface ButtonProps {
  text: string;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function Button({ text, type = 'primary', onClick }: ButtonProps) {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
}