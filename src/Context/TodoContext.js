import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            text: 'first todo',
            completed: false,
        },
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleCompleted: (id) => { },
})

export const UseTodo = () => {
    return useContext(TodoContext)
}