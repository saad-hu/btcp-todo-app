import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { success, unsuccess } from '../features/shouldLogin/shouldLoginSlice';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const verify_user = async (event) => {
        event.preventDefault();
        if (username === "" || Password === "") {
            alert("Enter data")
        }
        else {
            const res = await axios.get(`http://localhost:3001/postData/${username}/${Password}`).then(data => data.data)
            if (res) {
                dispatch(success(username))
                navigate('/welcome')
            }
            else {
                dispatch(unsuccess())
                alert('enter correct details')
            }
        }

    }

    return (
        <div className='container'>
            <nav className='d-flex justify-content-end'>
                <Link to="/signup" className='btn btn-dark my-3'> Sign Up</Link>
            </nav>
            <form>
                <div className='mb-3'>
                    <label className='form-label fw-bold' htmlFor="userName"> Username:</label>
                    <input type="text" className='form-control' id='userName' onChange={(e) => { setUsername(e.target.value) }} value={username} />
                </div>

                <div className='mb-3'>
                    <label className='form-label fw-bold' htmlFor="userPw">Password:</label>
                    <input type="password" className='form-control' id='userPw' onChange={(e) => { setPassword(e.target.value) }} value={Password} />
                </div>

                <button type='submit' className="btn btn-primary" onClick={verify_user}>login</button>
            </form>
        </div>
    )
}

export default Login
