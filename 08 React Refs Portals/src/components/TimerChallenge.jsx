import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){
    // const [timeExpired, setTimeExpired] = useState(false)
    // const [timerStarted, setTimerStarted] = useState(false)
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    
    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000)
    }

    function handleStart(){
        timer.current = setInterval(() => {
            setTimeRemaining(previous => previous - 10)
        }, 10);
        // setTimerStarted(true)
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open()
        // setTimerStarted(false)
    }

    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" timeRemaining={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} seconds
            </p>
            <p>
                <button onClick={isTimerActive ? handleStop : handleStart}>
                    {isTimerActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={isTimerActive ? 'active' : undefined}>
                {isTimerActive ? 'Time is Running...' : 'Timer inactive'}
            </p>
        </section>
        </>
    )
}