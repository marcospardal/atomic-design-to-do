import React from 'react';
import './styles.css';
import Button, { ButtonProps } from '@atoms/Button';

export interface ButtonOptionsProps {
  options: ButtonProps[]
}

export default function ButtonOptions({ options }: ButtonOptionsProps) {
  return (
    <div className='footer'>
      {options.map((optionProps, i) => <Button key={i} {...optionProps}/>)}
    </div>
  )
}