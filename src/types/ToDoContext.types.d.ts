import Task from "./Task.types";

export interface TodoContextType {
  currentId: number;
  todos: Task[];
  onSubmit: (todo: Task) => void;
  finishToDo: (todoId: number) => void;
  changeCurrentId: (todoId: number) => void;
}