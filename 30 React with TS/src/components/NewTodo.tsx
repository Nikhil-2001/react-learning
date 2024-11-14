import { useContext, useRef } from "react"
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    const toDoTextInput = useRef<HTMLInputElement>(null);

    const submittHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = toDoTextInput.current!.value    // ? safe side if value doesn't exist don't drill down and return null
        if (enteredText.trim().length === 0) {
            return
        }
        todosCtx.addTodo(enteredText)
    }

    return (
        <form onSubmit={submittHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id='text' ref={toDoTextInput}/>
            <button>Add Button</button>
        </form>
    )
}

export default NewTodo