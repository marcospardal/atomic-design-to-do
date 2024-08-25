import React, { useState, useCallback, useEffect } from 'react';
import './styles.css';
import Task from '@/types/Task.types';
import { useToDoContext } from '@hooks/index';
import { FormField, FormFooter } from '@molecules/index';

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
  }, [currentId, todos]);

  return (
    <section id='task-form' className='form'>
      <FormField
        label='Title'
        onChange={handleChange}
        value={task.title}
        name='title'
        placeholder='Insert the task title...'
      />
      <FormField
        label='Description'
        type='textarea'
        onChange={handleChange}
        value={task.description}
        name='description'
        placeholder='Insert the task description...'
      />
      <FormFooter options={[
        {
          children: 'Cancel',
          onClick: () => changeCurrentId(-1),
          color: 'secondary',
          disabled: currentId === -1
        },
        {
          children: currentId !== -1 ? 'Edit' : 'Save',
          onClick: () => {
            onSubmit(task);
            setTask(emptyTask);
          },
          disabled: !task.title || !task.description,
          color: 'primary'
        }
      ]} />
    </section>
  );
}