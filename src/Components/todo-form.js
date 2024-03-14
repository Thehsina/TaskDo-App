import React, { useContext, useState } from "react";
import {CheckCircleFilled} from "@ant-design/icons"
import useTasks from './todo-context';

const ToDoForm = (props) => {
    const [newTask, setNewTask] = useState('');
    const { addTask } = useContext(useTasks());
    const [validate, setValidate] = useState(true);

    const handleSubmit = (e) => {
      if (newTask) {
        e.preventDefault();
        addTask(newTask);
        setNewTask('');
        props.onCloseTask();
      } else {
        setValidate(false);
      }
    };

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
         handleSubmit(event);
        }
    };
  
    return (
       <div>
            <form className="flex flex-cols">
                <input 
                    className="text-sm text-gray-600 px-2 bg-white rounded-lg border text-xl border-violet-500 caret-violet-500 hover:ring-violet-500 hover:border-violet-700" 
                    value={newTask}  
                    onChange={(e) => setNewTask(e.target.value)} 
                    placeholder="Add New Task" 
                    type="text"
                    onKeyDown={handleKeyDown}
                />
                <CheckCircleFilled className="ml-2 mb-2 text-violet-500 hover:text-violet-800 text-2xl" onClick={handleSubmit}/>
            </form>
            <div className="flex flex-wrap">
                {
                    !validate ?
                        <p className="ml-1 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Oh, Please add the task!</span></p>    
                    : ""
                }
            </div>
       </div>
    )
}

export default ToDoForm;
