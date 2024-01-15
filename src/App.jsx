import { useState } from "react";
import './App.css'
import Todos from "./component/Todos";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function App(){
  const [todoName, setTodoName] = useState();
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTodo = { name: todoName }
    // setTodos([
    //   ...todos, 
    //   newTodo
    // ])

    dispatch(addTodo(newTodo));
  }

return(
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={e => setTodoName(e.target.value)} />
          <button>Submit</button>
        </form>
        <Todos />
      </div>
    </>
)};

export default App;