import Task from '@/types/Task.types';
import { TodoContextType } from '@/types/ToDoContext.types';
import React, { createContext, ReactNode, useContext, useState, useCallback, useEffect } from 'react';

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [currentId, setCurrentId] = useState<number>(-1);
  const [todos, setTodos] = useState<Task[]>([]);

  const onSubmit = useCallback((todo: Task) => {
    setTodos(prev => [...prev, {...todo, id: todos.length}]);
  }, [todos]);

  const finishToDo = useCallback((toDoId: number) => {
    setTodos(prev => prev.map(item => item.id === toDoId ? { ...item, isCompleted: true } : item));
  }, []);

  const changeCurrentId = useCallback((toDoId: number) => {
    setCurrentId(toDoId);
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
    <TodoContext.Provider value={{ todos, currentId, onSubmit, finishToDo, changeCurrentId }}>
      {children}
    </TodoContext.Provider>
  );
};