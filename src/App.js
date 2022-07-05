import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './componants/ToDoList';

function App() {
  const LocalStorageKey = 'Tasks';
  const inputTask = useRef();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LocalStorageKey));
    if (storedToDos)setTodos(storedToDos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(todos));
  }, [todos]);
  const toggeleCheck = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };
  const handelAddToDo = () => {
    const task = inputTask.current.value;
    if (task === '') return;
    setTodos((prev) => [...prev, { id: uuidv4(), task, complete: false }]);
    inputTask.current.value = '';
  };
  const handelCompleted = () => {
    const newTodo = todos.filter((todo) => !todo.complete);
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <ToDoList todos={todos} toggeleCheck={toggeleCheck} />
      <div className="Add">
        <input ref={inputTask} type="text" />
        <button type="button" onClick={handelAddToDo}>Add Task</button>
        <button type="button" onClick={handelCompleted}>Clear completed</button>
      </div>

    </div>
  );
}

export default App;
