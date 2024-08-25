import React from 'react';
import './styles.css';
import Button, { ButtonProps } from '@atoms/Button';

interface FooterOptionsProps {
  options: ButtonProps[]
}

export default function FooterOptions({ options }: FooterOptionsProps) {
  return (
    <div className='footer'>
      {options.map((optionProps, i) => <Button key={i} {...optionProps}/>)}
    </div>
  )
}