import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "buy groces",
      isCompleted: false,
    },
    {
      id: 2,
      text: "walk to the dog",
      isCompleted: true,
    },
    {
      id: 3,
      text: "do laundry",
      isCompleted: false,
    },
    {
      id: 4,
      text: "study for a book",
      isCompleted: false,
    },
  ]
  );

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">
      <BackgroundHeading />
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] 
        grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]">
        <Header todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <SideBar todos={todos} setTodos={setTodos} />
      </main>

      <Footer />
    </div>
  )
}

export default App;
