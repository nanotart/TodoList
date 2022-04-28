import React from 'react'
import Todo from './Todo'

// list of todos
export default function ToDoList({ todos, toggleHandler }) {
  return (
    // map is a way to loop through a prop
    // key must be unique for the array that you're actually using
    // what the key does is that react only renders the components of the array that changes
    todos.map(todo => {
        return <Todo key={todo.id} toggleHandler={toggleHandler} todo={todo} />
    })
  )
}
