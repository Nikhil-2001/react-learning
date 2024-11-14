import React from "react"

// In general we know that in react we use lot of props with children and custom attributes passing.
// But there are common attributes all these can be added a to a base comonent which is available in React.FC which is a type
// So we can extend this more by adding our additional types

const ToDoItem: React.FC<{text: string, onRemoveTodo: () => void}> = (props) => {
    return (<li onClick={props.onRemoveTodo}>{props.text}</li>)
}

export default ToDoItem