import logo from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Quiz Logo"></img>
            <h1>React Quiz</h1>
        </header>
    )
}