import React from 'react';
import { useToDoContext } from '@hooks/index';
import Listing from '../../templates/Listing';
import { Header, TaskForm } from '@organisms/index';

import './styles.css';

export default function Home() {
  const { todos } = useToDoContext();

  const openTasks = todos.filter(e => !e.isCompleted);
  const closedTasks = todos.filter(e => e.isCompleted);

  return (
    <div className="App">
      <div className='main'>
        <Header />
        <TaskForm />
        <Listing title='Tasks' id='tasks' data={openTasks} />
      </div>
      <div className={`fade-in ${closedTasks.length ? 'show' : ''}`}>
        <Listing title='Finished Tasks' id='closed-tasks' display='list' data={closedTasks} />
      </div>
    </div>
  );

}