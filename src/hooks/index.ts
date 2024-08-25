import { LocalStorageProps } from "@/types/LocalStorage.types";
import { TodoContext } from "../contexts/ToDoContext";
import { TodoContextType } from "@/types/ToDoContext.types";
import { useCallback, useContext } from "react";

export const useToDoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useToDoContext can only be used inside a TodoProvider');
  }

  return context;
};

export function useLocalStorage<T>(key: string): LocalStorageProps<T> {
  const update = useCallback((value: T) => {
    const body = JSON.stringify(value);
    localStorage.setItem(key, body);
  }, [key]);

  const readData = useCallback(() => {
    const keyValue = localStorage.getItem(key);
    return keyValue ? JSON.parse(keyValue) : undefined;
  }, [key]);

  return {
    readData,
    update
  };
}