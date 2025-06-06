import React, { useState } from 'react'
import { useToDo } from '../contexts';

function TodoForm() {

    // State to manage the todo input which is given in string format
    const [todo , setTodo] = useState("");

    const {todos, addToDo} = useToDo();
    // Function to handle form submission

    const add =(e) => {
        e.preventDefault();
        console.log("adding todo", todo)
        if (!todo.trim()) return; // Prevent adding empty todos
        addToDo({ id: Date.now() , msg: todo, completed: false });
         console.log("Todos after adding:", todos);
        setTodo(""); // Clear the input after adding
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange={(e) => setTodo(e.target.value)}
                autoFocus
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

