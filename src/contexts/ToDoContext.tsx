import { useLocalStorage } from '@hooks/index';
import Task from '@/types/Task.types';
import { TodoContextType } from '@/types/ToDoContext.types';
import React, { createContext, ReactNode, useState, useCallback, useEffect } from 'react';

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const localStorage = useLocalStorage<Task[]>('todos');
  const [currentId, setCurrentId] = useState<number>(-1);
  const [todos, setTodos] = useState<Task[]>(localStorage.readData() || []);

  const onSubmit = useCallback((todo: Task) => {
    if (currentId !== -1) setTodos(prev => prev.map(e => e.id === currentId ? todo : e));
    else setTodos(prev => [...prev, { ...todo, id: new Date().getMilliseconds() }]);

    setCurrentId(-1);
  }, [currentId]);

  const finishToDo = useCallback((toDoId: number) => {
    setTodos(prev => prev.map(item => item.id === toDoId ? { ...item, isCompleted: true } : item));
  }, []);

  const changeCurrentId = useCallback((toDoId: number) => {
    setCurrentId(toDoId);
  }, []);

  const handleRemove = useCallback((todoId: number) => {
    setTodos(prev => prev.filter(e => e.id !== todoId));
  }, []);

  useEffect(() => localStorage.update(todos), [todos, localStorage]);

  return (
    <TodoContext.Provider value={{ todos, currentId, onSubmit, finishToDo, changeCurrentId, handleRemove }}>
      {children}
    </TodoContext.Provider>
  );
};