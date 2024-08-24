import React from 'react';
import './styles.css';

type InputType = "default" | "textarea";

export interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: InputType;
}

export default function Input({ type = "default", ...props }: InputProps) {
  return (
    <textarea className={`input ${type}`} {...props}/>
  )
}