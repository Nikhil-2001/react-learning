import { useState, useRef } from "react";

export default function Player() {
const playerName = useRef()
const [enteredName, setEnteredName] = useState('')

function onSubmitClick(){
  setEnteredName(playerName.current.value)
  playerName.current.value = ''
}

  return (
    <section id="player">
      <h2>Welcome {enteredName ? enteredName : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={onSubmitClick}>Set Name</button>
      </p>
    </section>
  );
}
