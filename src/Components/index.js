// TaskList.js

import React from 'react';
import ToDo from './todo';
import ToDoForm from './todo-form';

const TaskList = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Task List</h1>
      <ToDo />
      <ToDoForm />
    </div>
  );
}

export default TaskList;
