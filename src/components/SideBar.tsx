import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { Todo } from "./TodoList";

export default function SideBar({ todos, setTodos }: { todos: Todo[], setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) {
  return (
    <section className=" flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] 
      px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm todos={todos} setTodos={setTodos} />

      <div className="mt-auto space-y-2">
        <Button ButtonType="secondary">Log in</Button>
        <Button ButtonType="secondary">Register</Button>

      </div>
    </section>
  )
}
