import { Label, Button } from '@atoms/index';
import Card from "@molecules/Card";
import Task from "@/types/Task.types";
import './styles.css';
import { useCallback, useMemo, useState } from "react";

import EditIcon from '@icons/edit.svg';
import RemoveIcon from '@icons/remove.svg';
import { useToDoContext } from '@hooks/index';

type DisplayType = 'grid' | 'list';
type ToDoType = 'open' | 'closed';

export interface ListingProps {
  title: string;
  id: string;
  display?: DisplayType;
  listType?: ToDoType;
}

export default function ListingToDo({ title, id, display = 'grid', listType = 'open' }: ListingProps) {
  const { finishToDo, handleRemove, changeCurrentId, currentId, todos } = useToDoContext();
  const [fadeOutId, setFadeOutId] = useState<number>();

  const data = useMemo(() => {
    return todos.filter(e => listType === 'open' ? !e.isCompleted : e.isCompleted)
  }, [todos])

  function handleClickOption(id: number, option: 'remove' | 'finish') {
    setFadeOutId(id);

    setTimeout(() => {
      if (option === 'finish') finishToDo(id);
      else handleRemove(id);

      setFadeOutId(undefined);
    }, 400);
  }

  function setEdit(id: number) {
    changeCurrentId(id);
  }

  const options = useCallback((todo: Task) => {
    const itemsOptionsType = {
      'open':
        <div>
          <Button disabled={currentId === todo.id} color='transparent' onClick={() => setEdit(todo.id)}>
            <img src={EditIcon} alt='edit-todo' style={{ height: 15, width: 15 }} />
          </Button>
          <input type='checkbox' disabled={currentId === todo.id} onClick={() => handleClickOption(todo.id, 'finish')} />
        </div>,
      'closed':
        <Button color='transparent' onClick={() => handleClickOption(todo.id, 'remove')}>
          <img src={RemoveIcon} alt='remove-todo' />
        </Button>
    };

    return itemsOptionsType[listType];
  }, [listType, currentId]);

  return (
    <>
      <Label label={title} />
      <section id={id} className={`container ${display}`}>
        {data.map(todo => 
          <Card
            key={todo.id}
            fadeOut={todo.id === fadeOutId} 
            highlight={currentId === todo.id} 
            options={options(todo)} 
            {...todo}
          />
        )}
      </section>
    </>
  );
}