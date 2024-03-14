import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoContext from './todo-context';

const Header = () => {
    const { tasks } = useContext(TodoContext);
    const [pendingTask, setPendingTask] = useState(0);

    useEffect(() => {
        setPendingTask(tasks.filter(task => !task.complete).length);
    },[tasks])

    return (
        <div className="box-border px-3 py-5 h-auto rounded-b-lg bg-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-3 md:mb-0">
                    <div className="flex-shrink-0">
                        <img className="w-14 h-12 mb-2 md:ml-3 mt-2 rounded-full shadow-lg text-cyan-500" src="./person.jpg" alt="Profile" />
                    </div>
                    <div className="flex-1 ms-3">
                        <p className="text-2xl font-medium text-gray-900 truncate">Hi Shobhit 👋🏽</p>
                        <span className="text-red-500 text-md font-medium inline-flex text-center ml-1">{pendingTask} Tasks pending</span>
                    </div>
                </div>
                <h5 className="text-gray-600 font-bold text-6xl md:text-6xl mt-4 md:mt-0 mb-4 md:mb-0">TaskDo</h5>
                <nav>
                    <Link className="block md:inline-block font-bold text-lg text-violet-500 hover:text-violet-700 hover:underline mt-4 md:mt-0 md:mr-10" to="/">Logout</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;



