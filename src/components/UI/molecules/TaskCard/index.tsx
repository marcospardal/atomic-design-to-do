import Task from '@/types/Task.types';
import React, { useRef } from 'react';
import { Label } from '../../atoms';
import './styles.css';
import Info from '../../atoms/Info';
import { useToDoContext } from '../../../../hooks';

interface TaskCardProps extends Task { }

export default function TaskCard({ id, title, description, isCompleted }: TaskCardProps) {
  const { finishToDo } = useToDoContext();
  const cardRef = useRef<HTMLDivElement | null>(null);

  function handleFinish() {
    cardRef.current?.setAttribute('class', 'task-card fade-out');
    setTimeout(() => {
      finishToDo(id);
    }, 400);
  }

  return (
    <div key={id} ref={cardRef} className='task-card'>
      <div className='task-card-header'>
        <Label label={title} />
        {!isCompleted && <input type='checkbox' disabled={isCompleted} onClick={handleFinish} />}
      </div>
      <Info text={description} />
    </div>
  );
}