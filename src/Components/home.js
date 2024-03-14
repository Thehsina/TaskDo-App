import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
    return (
        <div className="text-center">
            <h5 className="text-8xl mt-80 font-bold text-gray-600">TaskDo</h5>
            <p className="text-gray-600 text-2xl font-bold">Manage Your Task Checklist Easily</p>
            <nav><Link to="/tasks" className="inline-flex items-center mt-6 px-4 py-2 text-md font-bold text-center text-white bg-violet-400 hover:bg-violet-800 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-lg">Lets Start</Link></nav>
        </div>
    )
}

export default Home;