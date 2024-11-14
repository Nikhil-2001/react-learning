import React from 'react'
import Todo from '../models/todo';
import { useState } from 'react';

export const TodosContext = React.createContext<{
    items: Todo[];
    addTodo: (id: string) => void;
    removeTodo: (id: string) => void
}>({
    items: [],
    addTodo: (id: string) => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodo] = useState<Todo[]>([])

    const addToDoHandler = (id: string) => {
      const newToDo = new Todo(id)
      setTodo((prevToDos) => {
        return prevToDos.concat(newToDo)
      })
    }
  
    const removeToDoHandler = (id: string) => {
      setTodo((prevToDos) => {
        return prevToDos.filter(todo => todo.id !== id)
      })
    }

    const contextValue = {
        items: todos,
        addTodo:addToDoHandler,
        removeTodo:removeToDoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider