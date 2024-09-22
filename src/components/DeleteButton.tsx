import React from 'react'
import { Todo } from './TodoList'

interface DeleteButtonProps {
  id: number,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

// add common 
export default function DeleteButton({ id, setTodos }: DeleteButtonProps) {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 阻止事件冒泡
    console.log("handle Delte id=" + id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <button onClick={handleDelete}>❌</button>
  );
}

