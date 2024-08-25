import React, { useEffect, useState } from 'react';
import { useToDoContext } from '@hooks/index';
import ListingToDo from '@organisms/ListingToDo';
import { Button } from "@atoms/index";
import IconArrow from '@icons/arrow.svg';
import { TaskForm } from '@organisms/index';

import './styles.css';
import DefaultPage from '@templates/DefaultPage';

export default function Home() {
  const { todos } = useToDoContext();
  const [showClosed, setShowClosed] = useState<boolean>(false);

  const openClosed = todos.filter(e => e.isCompleted).length > 0;

  useEffect(() => setShowClosed(openClosed), [openClosed]);

  return (
    <div className="home-container">
      <DefaultPage 
        title='Atomic To-Do' 
        className={`main ${showClosed ? 'transition' : ''}`}
        headerOptions={
          <Button style={{ width: 60 }} color="transparent" onClick={() => setShowClosed(!showClosed)}>
            <img className={`toggle-closed-task ${showClosed ? 'rotate' : ''}`} id='toggle-closed-task' src={IconArrow} alt='toggle-closed-task' />
          </Button>
        }
      >
        <TaskForm />
        <ListingToDo title='Tasks' id='tasks' />
      </DefaultPage>
      <div className={`fade-in ${showClosed ? 'show' : ''}`}>
        <ListingToDo listType='closed' title='Finished Tasks' id='closed-tasks' display='list' />
      </div>
    </div>
  );

}