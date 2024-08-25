import Task from '@/types/Task.types';
import React, { memo, ReactNode, useEffect, useRef } from 'react';
import { Label, Info } from '@atoms/index';
import './styles.css';

interface CardProps extends Task {
  options?: ReactNode;
  highlight?: boolean;
  fadeOut?: boolean;
}

export default memo(function Card({ title, description, highlight, options, fadeOut = false }: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  function setCardClassName(className?: string) {
    cardRef.current?.setAttribute('class', `task-card ${className}`);
  }

  useEffect(() => {
    setCardClassName('fade-in');
    if (highlight) setCardClassName('focus');
    if (fadeOut) setCardClassName('fade-out');

  }, [highlight, fadeOut]);


  return (
    <div ref={cardRef} className='task-card'>
      <div className='task-card-header'>
        <Label label={title} />
        {options}
      </div>
      <Info text={description} />
    </div>
  );
});