import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import ToDoList from './componants/ToDoList';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const LocalStorageKey = "Tasks"
  const inputTask = useRef();
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    const storedToDos= JSON.parse(localStorage.getItem(LocalStorageKey));
    if(storedToDos)setTodos(storedToDos)
  }, []);

  useEffect(()=>{
    localStorage.setItem(LocalStorageKey, JSON.stringify(todos))
  }, [todos]);
  const toggeleCheck = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id===id);
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }
  const handelAddToDo = () => {
     const task = inputTask.current.value;
     if(task === '') return;
     setTodos(prev => {
       return [...prev, {id: uuidv4(), task: task, complete: false}]
     })
     inputTask.current.value = '';
  }
  const handelCompleted = () => {
    const newTodo = todos.filter((todo) => !todo.complete)
    setTodos(newTodo)
  }
  
  return (
    <div className="App">
      <ToDoList todos={todos} toggeleCheck={toggeleCheck}/>
      <div className="Add">
         <input ref={inputTask} type="text" />
         <button onClick={handelAddToDo}>Add Task</button>
         <button onClick={handelCompleted}>Clear completed</button>
       </div>
      
    </div>
  );
}

export default App;
