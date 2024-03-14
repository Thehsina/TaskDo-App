import React, { useContext, useState } from "react";
import { DeleteOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import {useTasks} from './todo-context';

const ToDo = () => {
    const { tasks, deleteTask, completeTask } = useContext(useTasks());
    const tasksPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalTasks = tasks.length;
    const totalPages = Math.ceil(totalTasks / tasksPerPage);

    if (totalTasks === 0) {
        return <div className="px-3 mt-3 text-center text-gray-500 font-medium">No tasks available</div>;
    }

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
      <div>
          <div className="px-3 mr-3">
            <div className="box-border overflow-scroll w-full md:h-96 rounded-b-lg bg-white">
                {currentTasks.map((task) => (
                    <div key={task.id} className={`flex flex-col text-2xl mt-2 ${task.complete ? "line-through" : ""} mr-2`}>
                        <div className="flex items-center">
                            <DeleteOutlined onClick={() => deleteTask(task.id)} className="mr-3"/>
                            <input 
                                className="mr-5 shadow-sm w-4 h-4 bg-gray-50 cursor-pointer border border-blue-500 rounded-lg bg-gray-300" 
                                onClick={() => completeTask(task)} 
                                type="checkbox" id={task.id}
                                value={task.id} 
                                defaultChecked={task.complete} 
                                required
                            />
                            <span>{task.taskName}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <p className="md:px-56 text-gray-500 px-5 mt-5 ">{tasks.length === 1 ? tasks.length + " " + "task" : tasks.length + " " + "tasks"}</p>
        <div className="pagination md:px-52 items-center">
            <LeftOutlined
                className={`cursor-pointer mx-2 ${currentPage === 1 ? 'text-gray-400' : 'text-violet-500'}`}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }).map((_, index) => (
                <span key={index} onClick={() => paginate(index + 1)} className={`cursor-pointer mx-2 ${currentPage === index + 1 ? 'text-violet-500 font-bold' : ''}`}>
                    {index + 1}
                </span>
            ))}
            <RightOutlined
                className={`cursor-pointer mx-2 ${currentPage === totalPages ? 'text-gray-400' : 'text-violet-500'}`}
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        </div>
      </div>
    );
}

export default ToDo;
