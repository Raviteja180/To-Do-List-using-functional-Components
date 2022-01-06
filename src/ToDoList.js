import React, { useState } from 'react'
import { useEffect } from 'react'
// import { string } from 'yup'
import './Styles2.css'

const ToDoList = () => {
    const [task, setTask] = useState("")
    const [arr, setArr] = useState([])
    const [update_of_task, setUpdate] = useState(false)
    const [prev_task, setPrevTask] = useState("")
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const addTask = () => {
        if (update_of_task === true) {
            let a = arr
            console.log(a.length)
            a[a.indexOf(prev_task)] = task
            setArr(a)
            setUpdate(false)
        }
        else if (task !== "")setArr([...arr, task])
        setTask("")
    }
    const updateTask = (e) => {
        setUpdate(true)
        setPrevTask(e.target.name)
        let temp_array = arr;
        setTask(e.target.name)
    }
    const deleteTask = (e) => {
        let temp_array = arr
        let another_array = temp_array.filter(task => task !== e.target.name)
        setArr(another_array)
        console.log(another_array)
    }
    useEffect(() => { })
    return (
        <div >
            <h1>Task Management</h1>
            <div className="block-1">
                <input type="text" name="task" id="task" value={task} onChange={handleChange} placeholder="Enter the task name" />
                <button onClick={addTask} className="addButton">ADD</button>
            </div>

            {
                arr.length > 0 &&
                <div className="block-3">
                    {
                        arr.map(task => task !== "" ?
                            (
                                <div className="block-2 alignment">

                                    <div>
                                        <span>{task}</span>
                                    </div>
                                    <div>
                                        <button onClick={updateTask} name={task}>Update</button>
                                        <button onClick={deleteTask} name={task}>Delete</button>

                                    </div>
                                </div>

                            ) : null
                        )
                    }
                </div>
            }
        </div>
    )
}

export default ToDoList
