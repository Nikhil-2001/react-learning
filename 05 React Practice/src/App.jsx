import { Fragment } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:2000,
    expectedReturn:6,
    duration:6
})

function handleChange(inputIdentifier, newValue){
    setUserInput((prevUserInput) => {
       return {...prevUserInput,[inputIdentifier]:+newValue
    }})
}

  return (
    <Fragment>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange}></UserInput>
      <Results userInput={userInput}></Results>
    </Fragment>
  )
}

export default App