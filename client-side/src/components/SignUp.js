import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from 'react-query';

function SignUp() {
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [uName, setUname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const mutation = useMutation({ mutationFn: async (user) => { return await axios.post('http://localhost:3001/postData/signup', user).catch((err) => { console.log(err) }) } })

    const postData = (e) => {
        e.preventDefault()
        if (fName === "" || lName === "" || password === "" || uName === "") {
            alert("Enter data")
        }
        else {
            mutation.mutate({ fName, lName, uName, password }, {
                onSuccess: (data, error, variables, context) => {
                    if (data.data) {
                        alert('user already exist')
                    }
                    else {
                        navigate('/')
                    }
                }
            })
        }
    }
    return (
        <div className='container'>

            <nav className='d-flex justify-content-end'>
                <Link to="/" className='btn btn-dark my-3'> Login</Link>
            </nav>


            {(mutation.isIdle || mutation.isSuccess) ? (
                <form>
                    <div className='mb-3'>
                        <label className='form-label fw-bold' htmlFor="fname">First Name</label>
                        <input className='form-control' type="text" required name="fname" id="fname" value={fName} onChange={(e) => { setFname(e.target.value) }} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label fw-bold' htmlFor="lname">Last Name</label>
                        <input className='form-control' type="text" required name="lname" id="lname" onChange={(e) => { setLname(e.target.value) }} value={lName} />

                    </div>

                    <div className='mb-3'>
                        <label className='form-label fw-bold' htmlFor="uname">Username</label>
                        <input className='form-control' type="text" required id='uname' onChange={(e) => { setUname(e.target.value) }} value={uName} />

                    </div>

                    <div className='mb-3'>
                        <label className='form-label fw-bold' htmlFor="password">Password</label>
                        <input className='form-control' id="password" type="password" required onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    </div>

                    <button className="btn btn-primary" onClick={postData} type="submit">Signup</button>
                </form>) : null}
            {mutation.isLoading ? <div>loading</div> : null}
        </div>
    )
}

export default SignUp