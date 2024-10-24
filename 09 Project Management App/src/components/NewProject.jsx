import Modal from "./ErrorModal";
import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ handleAddProject, handleCancel }) {
    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        console.log('jere')
        // Validation
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            console.log('here inside validation')
            modal.current.open()
            return
        }

        handleAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })

    }

    return (
        <>
            <Modal ref={modal} buttonLabel='Close'>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-700 my-4">Please enter values for all Inputs</p>
            </Modal>
            <div className="w-[35rem] mt -16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={handleCancel}>Cancel</button></li>
                    <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea={true} />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}