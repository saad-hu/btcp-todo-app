import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unsuccess } from '../features/shouldLogin/shouldLoginSlice'

function Welcome() {
    const shouldLogin = useSelector((state) => { return state.shouldLogin })
    const dispatch = useDispatch()
    const [task, setTask] = useState('')
    const [list, setList] = useState([])

    const addTask = async (e) => {
        e.preventDefault()
        if (task !== "") {
            console.log('adding tasks')
            await axios.post('http://localhost:3001/addtask', { task, user: shouldLogin.user })
            setTask("")
            setList(await axios.get(`http://localhost:3001/addtask/${shouldLogin.user}`).then(data => data.data))
        }
    }
    const getdata = async () => {
        const data = await axios.get(`http://localhost:3001/addtask/${shouldLogin.user}`).then(data => data.data)
        setList(data)
    }
    const deleteitem = async (index) => {
        const data = await axios.delete(`http://localhost:3001/addtask/deletetask/${shouldLogin.user}/${index}`).then(data => data.data)
        setList(data)
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div className='container'>

            <div className='d-flex justify-content-end my-3'>
                <button className='btn btn-danger' onClick={() => { dispatch(unsuccess()) }}>logout</button>
            </div>

            <p className='display-5 lead'>{shouldLogin.user}</p>

            <form className='d-flex justify-content-around'>
                <input className='form-control w-75' type="text" placeholder='Enter task' onChange={(e) => { setTask(e.target.value) }} value={task} />
                <button className='btn btn-success' type='submit' onClick={addTask}>Add Task</button>
            </form>
            {list.map((t, index) => (<div className='my-3 bg-light rounded p-2 d-flex justify-content-between align-items-start' key={index}>
                <p className='lead' key={index}>{t}</p>
                <button className='btn btn-danger' onClick={() => deleteitem(index)}>delete</button>
            </div>
            ))}
        </div>
    )
}

export default Welcome