import { useState } from "react"

const Greeting = () => {
    const [changedText, setChangedText] = useState(false)

    function changedTextHandler() {
        setChangedText(true)
    }

    return (
        <div>
            <h2>Hello world!</h2>
            {!changedText && <p>It's good to see you</p>}
            {changedText && <p>Text is changed you piece of shit</p>}
            <button onClick={changedTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting