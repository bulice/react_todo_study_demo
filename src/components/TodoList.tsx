import DeleteButton from "./DeleteButton";


export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}


export default function TodoList({ todos, setTodos }: { todos: Todo[], setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) {



  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id} className="flex justify-between items-center px-8 h-[50px] text-[14px]
          cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            console.log("handle todolist click!!!!!!!")
            setTodos(
              todos.map((t: Todo) => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t.isCompleted };
                }
                return t;
              }
              ))
          }}
        >
          <span className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}>{todo.text}</span>

          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>

      )

      )

      }
    </ul>

  )
}

