import React from 'react';
import Label, { LabelProps } from '@atoms/Label';
import Input, { InputProps } from '@atoms/Input';
import './styles.css';

export interface CardFieldProps extends LabelProps, InputProps { }

export default function CardField({ label, ...inputProps }: CardFieldProps) {
  return (
    <div className='card-field'>
      <Label label={label}/>
      <Input {...inputProps}/>
    </div>
  )
}