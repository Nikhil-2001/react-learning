import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import ToDos from './components/Todo';
import Todo from './models/todo';

function App() {
  const [todos, setTodo] = useState<Todo[]>([])

  const addToDoHandler = (text: string) => {
    const newToDo = new Todo(text)
    setTodo((prevToDos) => {
      return prevToDos.concat(newToDo)
    })
  }

  return (
    <div>
      <NewTodo onAddToDo={addToDoHandler}/>
      <ToDos items={todos}/>
    </div>
  );
}

export default App;
