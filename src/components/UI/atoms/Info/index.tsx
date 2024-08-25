import React from 'react';
import './styles.css';

interface InfoProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export default function Info({ text, ...props }: InfoProps) {
  return <p className='info'{...props}>{text}</p>;
}