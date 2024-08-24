import Task from "./Task.types";

export interface TodoContextType {
  formValues: Task;
  todos: Task[];
  onSubmit: (todo: Task) => void;
  finishToDo: (todoId: number) => void;
  setInitialValues: (todoId: number) => void;
  resetInitialValues: () => void;
}