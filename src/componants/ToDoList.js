/* eslint-disable react/prop-types */
import React from 'react';
import ToDo from './ToDo';
import './ToDoList.css';

export default function ToDoList({ todos, toggeleCheck }) {
  return (
    <div className="tolist">
      {todos.map((todo) => <ToDo key={todo.id} todo={todo} toggeleCheck={toggeleCheck} />)}
    </div>
  );
}
