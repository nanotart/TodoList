import React from 'react'

// each individual todo
export default function Todo({ todo, toggleHandler }) {

  function handleTodoClick() {
      toggleHandler(todo.id)
  }
  return (
    <div>
        <label>
            {/* smart way to implement a checkbox basically */}
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
        </label>
    </div>
  )
}
