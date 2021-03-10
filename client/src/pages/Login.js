import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = (event) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    // add useMutation
    // ===============

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // connect to mutations
        // ====================
        console.log('submitted');
    };

    return (
        <>
            <h2>Sign in</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        placeholder='youremail@email.com'
                        name='email'
                        type='email'
                        id='email'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder='******'
                        name='password'
                        type='passwrod'
                        id='pwd'
                        onChange={handleChange}
                    />
                </div>
                {/* ERROR handling ================= */}
                <div>
                    <button type='submit'>Sign in</button>
                </div>
            </form>
            <br />
            <div>
                New to Potluck Planner?
                <Link to='/signup'>Join Now</Link>
            </div>
        </>
    )
}

export default Login;