import { useState, useEffect } from 'react'
import './App.css'
import { TodoContext } from './Context/TodoContext'
import Form from './Components/Form'
import TodoItem from './Components/TodoItem'

function App() {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos(prevtodo => [{ id: Date.now(), ...todo }, ...prevtodo])
    }
    const deleteTodo = (id) => {
        setTodos(prevtodo => prevtodo.filter(todo => (todo.id !== id)))
    }
    const updateTodo = (id, newTodo) => {
        setTodos(prevTodos => prevTodos.map(oldTodo => oldTodo.id === id ? newTodo : oldTodo))
    }
    const toggleCompleted = (id) => {
        setTodos(prevtodo => prevtodo.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('allTodos'))
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('allTodos', JSON.stringify(todos))
    }, [todos])


    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
            <div className="bg-[#008275] min-h-screen py-8">
                <div className="w-full max-w-3xl mx-auto shadow-lg rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <Form />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id}
                                className='w-full'>
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoContext.Provider>
    )
}

export default App
