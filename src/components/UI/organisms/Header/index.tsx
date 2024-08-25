import React from "react";
import { Label } from "@atoms/index";
import { ButtonProps } from "@atoms/Button";
import ButtonOptions from "@molecules/ButtonOptions";

import Logo from '@icons/logo.svg';

import './styles.css';

interface HeaderProps {
  title: string;
  headerOptions?: ButtonProps[];
}

export default function Header({ title, headerOptions }: HeaderProps) {
  return (
    <section id='header'>
      <div>
        <img id='logo' alt='logo' src={Logo} />
        <Label label={title} className='title' />
      </div>
      {headerOptions && <ButtonOptions options={headerOptions}/>}
    </section>
  );
}