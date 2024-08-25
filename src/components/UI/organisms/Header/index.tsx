import React, { ReactNode } from "react";
import { Label } from "@atoms/index";

import Logo from '@icons/logo.svg';

import './styles.css';

interface HeaderProps {
  title: string;
  headerOptions: ReactNode;
}

export default function Header({ title, headerOptions }: HeaderProps) {
  return (
    <section id='header'>
      <div>
        <img id='logo' alt='logo' src={Logo} />
        <Label label={title} className='title' />
      </div>
      {headerOptions}
    </section>
  );
}