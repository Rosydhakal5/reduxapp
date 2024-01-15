import React from 'react'
import { useSelector } from 'react-redux';

const Todos = () => {
  const myTodos = useSelector(state => state.todo);

  return (
    <>
    {todos.map(todo =>(
        <li key = {todo.name}>{todo.name}</li>
    ))}
    </>
  )
}

export default Todos;