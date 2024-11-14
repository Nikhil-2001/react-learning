import { useRef } from "react"

const NewTodo: React.FC<{onAddToDo: (text: string) => void}> = (props) => {
    const toDoTextInput = useRef<HTMLInputElement>(null);

    const submittHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = toDoTextInput.current!.value    // ? safe side if value doesn't exist don't drill down and return null
        if (enteredText.trim().length === 0) {
            return
        }
        props.onAddToDo(enteredText)
    }

    return (
        <form onSubmit={submittHandler}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id='text' ref={toDoTextInput}/>
            <button>Add Button</button>
        </form>
    )
}

export default NewTodo