import React from "react";
import { Button, Label } from "@atoms/index";

import IconArrow from '@icons/arrow.svg';
import Logo from '@icons/logo.svg';

import './styles.css';

export default function Header() {
  return (
    <section id='header'>
      <div>
        <img id='logo' alt='logo' src={Logo} />
        <Label label="Atomic To-Do" className='title' />
      </div>
      <Button color="transparent">
        <img id='toggle-closed-task' src={IconArrow} alt='toggle-closed-task' />
      </Button>
    </section>
  );
}