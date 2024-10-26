import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut, mode }) {
    const [reamainingTime, setRemainingTime] = useState(timeout)

    useEffect(
        () => {
            const timer = setTimeout(onTimeOut, timeout);

            return () => {
                clearTimeout(timer)
            }
        }, [timeout, onTimeOut]
    )

    useEffect(
        () => {
            const interval = setInterval(() => {
                setRemainingTime(prev => prev - 100)
            }, 100)

            return () => {
                clearInterval(interval)
            }
        }, []
    )

    return <progress id="question-time" value={reamainingTime} max={timeout} className={mode} />
}