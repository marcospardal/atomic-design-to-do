import React, { useState, useCallback, useEffect } from 'react';
import './styles.css';
import { FormField, FormFooter } from '../../molecules';
import Task from '@/types/Task.types';
import { useToDoContext } from '../../../../hooks';

const emptyTask: Task = {
  description: '',
  id: 0,
  isCompleted: false,
  title: ''
}

export default function Form() {
  const { todos, currentId, onSubmit, changeCurrentId } = useToDoContext();
  const [task, setTask] = useState<Task>(emptyTask);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));

  }, []);

  useEffect(() => {
    if (currentId === -1) {
      setTask(emptyTask);
      return;
    }

    const editTodo = todos.find(todo => todo.id === currentId);
    editTodo && setTask(editTodo);
  }, [currentId]);

  return (
    <section id='task-form' className='form'>
      <FormField
        label='Task Title'
        onChange={handleChange}
        value={task.title}
        name='title'
        placeholder='Insert the task title...'
      />
      <FormField
        label='Task Description'
        type='textarea'
        onChange={handleChange}
        value={task.description}
        name='description'
        placeholder='Insert the task description...'
      />
      <FormFooter options={[
        {
          text: 'Cancel',
          onClick: () => changeCurrentId(-1),
          type: 'secondary'
        },
        {
          text: 'Save',
          onClick: () => {
            onSubmit(task);
            setTask(emptyTask);
          },
          type: 'primary'
        }
      ]} />
    </section>
  );
}