import React, { useContext } from "react"
import ToDoItem from "./TodoItem"
import { TodosContext } from "../store/todos-context"

// In general we know that in react we use lot of props with children and custom attributes passing.
// But there are common attributes all these can be added a to a base comonent which is available in React.FC which is a type
// So we can extend this more by adding our additional types

const ToDos: React.FC = (props) => {
    const todosCtx = useContext(TodosContext)

    return (<div>
        <ul>
            {todosCtx.items.map((item) => <ToDoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)}/>)}
        </ul>
    </div>)
}

export default ToDos