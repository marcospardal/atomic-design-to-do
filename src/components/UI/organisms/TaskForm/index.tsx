import React, { useState, useCallback, useEffect } from 'react';
import './styles.css';
import { FormField, FormFooter } from '../../molecules';
import Task from '@/types/Task.types';
import { useToDoContext } from '../../../../hooks';

export default function Form() {
  const { formValues, onSubmit, resetInitialValues } = useToDoContext();
  const [task, setTask] = useState<Task>(formValues);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));

  }, []);

  useEffect(() => setTask(formValues), [formValues]);

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
          onClick: () => resetInitialValues,
          type: 'secondary'
        },
        {
          text: 'Save',
          onClick: () => onSubmit(task),
          type: 'primary'
        }
      ]} />
    </section>
  );
}