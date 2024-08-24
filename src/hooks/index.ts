import { TodoContext } from "../contexts/ToDoContext";
import { TodoContextType } from "@/types/ToDoContext.types";
import { useContext } from "react";

export const useToDoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useToDoContext can only be used inside a TodoProvider')
  }

  return context;
}