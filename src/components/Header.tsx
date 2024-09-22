import Counter from "./Counter"
import Logo from "./Logo"
import { Todo } from "./TodoList"

export default function Header({ todos }: { todos: Todo[] }) {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] 
      border-b border-black/[0.08] overflow-hidden">
      <Logo />
      <Counter todos={todos} />
    </header>
  )
}

