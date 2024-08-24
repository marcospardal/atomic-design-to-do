import React from 'react';
import Form from '../../components/UI/organisms/TaskForm';
import { useToDoContext } from '../../hooks';
import Listing from '../../templates/Listing';
import './styles.css';

export default function Home() {
  const { todos } = useToDoContext();

  const openTasks = todos.filter(e => !e.isCompleted);
  const closedTasks = todos.filter(e => e.isCompleted);

  return (
    <div className="App">
      <div className='main'>
        <Form />
        <Listing title='Tasks' id='tasks' data={openTasks} />
      </div>
      <div className={`fade-in ${closedTasks.length ? 'show' : ''}`} style={{ flex: closedTasks.length ? 1 : 0 }}>
        <Listing title='Finished Tasks' id='closed-tasks' display='list' data={closedTasks} />
      </div>
    </div>
  );

}