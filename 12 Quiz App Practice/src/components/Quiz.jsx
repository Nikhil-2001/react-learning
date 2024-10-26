import { useState, useCallback } from "react"
import QUESTIONS from "../questions.js"
import Question from "./Question.jsx"
import QuizSummary from "./QuizSummary.jsx"

// Imp NOTES - Having a component to re render can be achieved by using key attribute which can be dynamic

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const handleSelect = useCallback(function handleSelect(selectedAnswer) {
        setUserAnswers(
            (prevAnswers) => [...prevAnswers, selectedAnswer]
        )
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelect(null), [handleSelect])

    const activeIndex = userAnswers.length
    const quizIsCompleted = activeIndex === QUESTIONS.length

    if (quizIsCompleted) {
        return (
            <QuizSummary userAnswers={userAnswers} />
        )
    }

    return (
        <div id='quiz'>
            <Question
                key={activeIndex}
                index={activeIndex}
                onSkipAnswer={handleSkipAnswer}
                onSelect={handleSelect}
            >
            </Question>
        </div>
    )
}