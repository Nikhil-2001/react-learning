import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import { useState } from "react"
import QUESTIONS from "../questions.js"


export default function Question({ onSelect, onSkipAnswer, index }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelect(answer)
            }, 2000)
        }, 1000)

    }

    let answerState = ''

    if (answer.selectedAnswer && answer.isCorrect != null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answerState.selectedAnswer) {
        answerState = 'answered'
    }

    return (
        <div id="question">
            <QuestionTimer key={timer} timeout={timer} onTimeOut={answer.selectedAnswer === '' ? () => onSkipAnswer(null) : null} mode={answerState}></QuestionTimer>
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            ></Answers>
        </div>
    )
}