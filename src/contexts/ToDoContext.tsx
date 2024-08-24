import Task from '@/types/Task.types';
import { TodoContextType } from '@/types/ToDoContext.types';
import React, { createContext, ReactNode, useContext, useState, useCallback, useEffect } from 'react';

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

const emptyTask: Task = {
  description: '',
  id: 0,
  isCompleted: false,
  title: ''
};

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [formValues, setFormValues] = useState<Task>(emptyTask);
  const [todos, setTodos] = useState<Task[]>([]);

  const onSubmit = useCallback((todo: Task) => {
    setTodos(prev => [...prev, {...todo, id: todos.length}]);
    setFormValues(emptyTask);
  }, [todos]);

  const finishToDo = useCallback((toDoId: number) => {
    setTodos(prev => prev.map(item => item.id === toDoId ? { ...item, isCompleted: true } : item));
  }, []);

  const setInitialValues = useCallback((toDoId: number) => {
    const index = todos.findIndex(e => e.id === toDoId);

    index !== -1 && setFormValues(todos[index]);
  }, [todos]);

  const resetInitialValues = useCallback(() => {
    setFormValues(emptyTask);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    try {
      const localStorageData = localStorage.getItem('todos');
      localStorageData && setTodos(JSON.parse(localStorageData));
    } catch {
      console.warn('No tasks saved on memory')
    }
  }, [])

  return (
    <TodoContext.Provider value={{ todos, formValues, onSubmit, finishToDo, setInitialValues, resetInitialValues }}>
      {children}
    </TodoContext.Provider>
  );
};