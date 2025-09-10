import { useContext, createContext } from "react";

import Profile from '../assets/Profile.png'

export default Profile;

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