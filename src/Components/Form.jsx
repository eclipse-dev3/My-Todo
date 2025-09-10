import { useState } from "react";
import { UseTodo } from "../Context/TodoContext";

function Form() {
    const [todo, setTodo] = useState('')
    const { addTodo } = UseTodo()

    const haandleSubmit = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({ text: todo, completed: false })
        setTodo('')
    }

    return (
        <form onSubmit={haandleSubmit} className="flex">
            <input className="w-full border text-black h-[3.5rem] font-bold border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-[#a2d3d3] py-1.5"
                type="text"
                placeholder="Enter Your Todo...."
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button className="cursor-pointer rounded-r-lg px-3 py-1 bg-red-500 text-white shrink-0 text-lg font-bold"
                type="submit"
            >add</button>
        </form>
    )
}

export default Form
