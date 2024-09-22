import { Todo } from "./TodoList";

export default function Counter({ todos }: { todos: Todo[] }) {

  return (
    <p >
      <b>{
        todos.filter((todo: Todo) => todo.isCompleted).length
      }</b> / {todos.length} todos completed.
    </p>
  )
}

