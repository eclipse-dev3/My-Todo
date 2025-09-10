import { useState } from "react"
import { UseTodo } from "../Context/TodoContext"

function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoText, setTodoText] = useState(todo.text)

    const { updateTodo, deleteTodo, toggleCompleted } = UseTodo()

    const todoUpdate = () => {
        updateTodo(todo.id, { ...todo, text: todoText })
        setIsTodoEditable(false)
    }

    const toggleComplete = () => {
        toggleCompleted(todo.id)
    }

    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#a8ea6e]" : "bg-[#ccbed7]"} `}>
            <input className="cursor-pointer w-[20px]"
                type="checkbox"
                onChange={toggleComplete}
                checked={todo.completed}
            />
            <input className={`border outline-none w-full bg-transparent rounded-lg text-xl h-[3rem]  ${isTodoEditable ? 'border-black' : 'border-transparent'}  ${todo.completed ? "line-through" : ""}`}
                type="text"
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button className="cursor-pointer"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable)
                        todoUpdate()
                    else setIsTodoEditable(prev => !prev)
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? '📁' : "✏️"}
            </button>
            <button className="cursor-pointer"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem
