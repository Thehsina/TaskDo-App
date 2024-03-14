// 1
import React, {createContext, useState, useContext} from 'react'
import { v4 } from "uuid"

// 2
const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

export default function TaskProvider({ children }) {
  // 3
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task :"Doctor Appointment" ,
      complete: false
  }
  ])

  // 4
  const deleteTask = task =>
      setTasks([
          ...tasks,
          {
              id: v4(),
              task,
              complete: false
          }
      ])

  // 5
  const completeTask = (id, status) => {
      setTasks(tasks.map(t => t.id === id ? {...t, complete: status} : t))
  }

  // 6
  return (
      <TaskContext.Provider value={{ tasks, deleteTask, completeTask }}>
          { children }
      </TaskContext.Provider>
  )
}