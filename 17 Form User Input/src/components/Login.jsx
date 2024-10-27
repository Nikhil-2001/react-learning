import { useState, useRef } from "react";

export default function Login() {
  const email = useRef()
  const password = useRef()

  const [emailIsInValid, setEmailIsInvalid] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const emailIsValid = enteredEmail.includes('@')
    if(!emailIsValid){
      setEmailIsInvalid(true)
      return
    }
    setEmailIsInvalid(false)
  }

  // function handleInputChange(identifier, event) {
  //   setEnteredValues((prev) => ({
  //     ...prev,[identifier]:event.target.value
  //   }))
  // }

  // onBlur event to perform validation whenver user moves out from input

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
          <div className="control-error">{emailIsInValid && <p>Please enter valid Email Address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}