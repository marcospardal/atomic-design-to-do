import Task from '@/types/Task.types';
import React from 'react';
import { Label } from '../../atoms';
import './styles.css';
import Info from '../../atoms/Info';
import { useToDoContext } from '../../../../hooks';

interface TaskCardProps extends Task { }

export default function TaskCard({ id, title, description, isCompleted }: TaskCardProps) {
  const { finishToDo } = useToDoContext();

  return (
    <div key={id} className='task-card'>
      <div className='task-card-header'>
        <Label label={title} />
        {!isCompleted && (
          <>
            <input type='checkbox' disabled={isCompleted} onClick={() => finishToDo(id)} />
          </>
        )}
      </div>
      <Info text={description} />
    </div>
  );
}