import { forwardRef, useImperativeHandle, useRef } from "react"
import {createPortal} from "react-dom"

const ResultModal = forwardRef(function ResultModal({targetTime, timeRemaining, onReset}, ref) {
    const dialog = useRef()

    const userLost = timeRemaining <=0;
    const formattedRemainingTime = (timeRemaining/1000).toFixed(2);
    const score = (1 - timeRemaining/ (targetTime*1000)) * 100
    
    useImperativeHandle((ref), () => {
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })

    return createPortal((
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime}</strong>Seconds left.</p>
            <form method='dialog' onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    ), document.getElementById('modal'))
})

export default ResultModal