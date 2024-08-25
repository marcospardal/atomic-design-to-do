import Task from '@/types/Task.types';
import React, { useEffect, useRef } from 'react';
import { Button, Label, Info } from '@atoms/index';
import { useToDoContext } from '@hooks/index';

import EditIcon from '@icons/edit.svg';
import RemoveIcon from '@icons/remove.svg';
import './styles.css';

interface TaskCardProps extends Task { }

export default function TaskCard({ id, title, description, isCompleted }: TaskCardProps) {
  const { finishToDo, handleRemove, changeCurrentId, currentId } = useToDoContext();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const hasFocus = currentId === id;

  const fadeOut = () => cardRef.current?.setAttribute('class', 'task-card fade-out');

  function handleFinish() {
    fadeOut();
    setTimeout(() => finishToDo(id), 400);
  }

  function handleRemoveTodo() {
    fadeOut();
    setTimeout(() => handleRemove(id), 400);
  }

  function setEdit() {
    changeCurrentId(id);
    cardRef.current?.setAttribute('class', 'task-card focus');
  }

  useEffect(() => {
    !hasFocus && cardRef.current?.setAttribute('class', 'task-card');
  }, [hasFocus])

  return (
    <div key={id} ref={cardRef} className='task-card'>
      <div className='task-card-header'>
        <Label label={title} />
        {!isCompleted &&
          <div>
            <Button disabled={currentId === id} color='transparent' onClick={setEdit}>
              <img src={EditIcon} alt='edit-todo' style={{ height: 15, width: 15 }}/>
            </Button>
            <input type='checkbox' disabled={isCompleted || currentId === id} onClick={handleFinish} />
          </div>}
        {isCompleted && 
          <Button color='transparent' onClick={handleRemoveTodo}>
            <img src={RemoveIcon} alt='remove-todo'/>
          </Button>
        }
      </div>
      <Info text={description} />
    </div>
  );
}