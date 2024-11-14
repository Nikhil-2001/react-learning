import React from "react"
import Todo from "../models/todo"
import ToDoItem from "./TodoItem"

// In general we know that in react we use lot of props with children and custom attributes passing.
// But there are common attributes all these can be added a to a base comonent which is available in React.FC which is a type
// So we can extend this more by adding our additional types

const ToDos: React.FC<{items: Todo[]}> = (props) => {
    return (<div>
        <ul>
            {props.items.map((item) => <ToDoItem key={item.id} text={item.text} />)}
        </ul>
    </div>)
}

export default ToDos