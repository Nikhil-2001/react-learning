import './App.css';
import NewTodo from './components/NewTodo';
import ToDos from './components/Todo';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <ToDos />
    </TodosContextProvider>
  );
}

export default App;
