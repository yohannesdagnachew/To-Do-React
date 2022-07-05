/* eslint-disable react/prop-types */
import React from 'react';
import './ToDo.css';

export default function ToDo({ todo, toggeleCheck }) {
  const chackHandeler = () => {
    toggeleCheck(todo.id);
  };
  return (
    <div>
      <div>
        <input type="checkbox" checked={todo.complete} onChange={chackHandeler} />
        {todo.task}
      </div>
    </div>
  );
}
