import React, { useEffect, useState } from 'react';
import { useToDoContext } from '@hooks/index';
import Listing from '../../templates/Listing';
import { Button } from "@atoms/index";
import IconArrow from '@icons/arrow.svg';
import { Header, TaskForm } from '@organisms/index';

import './styles.css';

export default function Home() {
  const { todos } = useToDoContext();
  const [showClosed, setShowClosed] = useState<boolean>(false);

  const openTasks = todos.filter(e => !e.isCompleted);
  const closedTasks = todos.filter(e => e.isCompleted);
  const openClosed = closedTasks.length > 0;

  useEffect(() => setShowClosed(openClosed), [openClosed]);

  return (
    <div className="App">
      <div className={`main ${showClosed ? 'transition' : ''}`}>
        <Header
          title='Atomic To-Do'
          headerOptions={
            <Button color="transparent" onClick={() => setShowClosed(!showClosed)}>
              <img className={`toggle-closed-task ${showClosed ? 'rotate' : ''}`} id='toggle-closed-task' src={IconArrow} alt='toggle-closed-task' />
            </Button>
          }
        />
        <TaskForm />
        <Listing title='Tasks' id='tasks' data={openTasks} />
      </div>
      <div className={`fade-in ${showClosed ? 'show' : ''}`}>
        <Listing title='Finished Tasks' id='closed-tasks' display='list' data={closedTasks} />
      </div>
    </div>
  );

}