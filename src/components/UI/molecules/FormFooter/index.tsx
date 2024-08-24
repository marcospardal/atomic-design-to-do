import React from 'react';
import './styles.css';
import Button, { ButtonProps } from '../../atoms/Button';

interface FormFooterProps {
  options: ButtonProps[]
}

export default function FormFooter({ options }: FormFooterProps) {
  return (
    <div className='footer'>
      {options.map(optionProps => <Button {...optionProps}/>)}
    </div>
  )
}