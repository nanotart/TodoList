import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './Todolist';
import { v4 as uuidv4 } from 'uuid' // creates a random id for id handling

//
// This application builds a to-do list.
//

// storage
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // when our app loads, we have an empty [] of todos
  // todos: every single one of our todos inside of our todo state
  // setTodos: assigning a new value?
  // never modify this variable
  const [todos, setTodos] = useState([])

  // making this a variable to access whatever you type in
  const todoName = useRef() 

  // uses it once since array is empty
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos) 
  }, [])

  // anytime anything in the array changes, the useEffect function gets called
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function clearHandler() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function toggleHandler(id) {
    // get a copy of the old list
    const new_list = [...todos]
    const todo = new_list.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(new_list)
  }

  // add a handler in app
  function addHandler(e) {
    // whatever element we are currently referencing in our input!

    const name = todoName.current.value
    if (name === '') return

    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })

    // clears out input when handler is finished
    todoName.current.value = null
  }

  return (
    // code fragment so that we can have multiple HTML elements inside the App.js return
    <> 
      <ToDoList todos={todos} toggleHandler={toggleHandler}/>
      <input ref={todoName} type="text" />
      <button onClick={addHandler}>Add ToDo</button>
      <button onClick={clearHandler}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
