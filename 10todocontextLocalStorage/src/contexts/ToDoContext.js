import { createContext , useContext } from "react";

export const ToDoContext = createContext({
    todos : [
        {
            id :1,
            msg : "TO do msg",
            completed : false,
        }
    ],
    addToDo : (todo) => {}, //we will take a todo to update
    updateToDo : (todo, id) => {},  // we will take the to update todo and put it in the id
    deleteToDo : (id) => {}, // only need id here
    toggleComplete : (id) => {}, // only id is needed
})

export const  ToDoProvider =  ToDoContext.Provider

export const useToDo = ( ) => {
    return useContext(ToDoContext)
}