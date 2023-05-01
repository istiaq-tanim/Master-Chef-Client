import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mt-3">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body pb-2 m">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-success text-white">Login</button>
                            </div>

                        </form>

                        <button className="btn btn-outline w-80  mx-auto my-2"><FaGoogle className='inline-block mr-2'></FaGoogle>Sign in With Google</button>
                        <button className="btn btn-outline w-80  mx-auto my-2"><FaGithub className='inline-block mr-2'></FaGithub>Sign in With Google</button>
                        <p className='text-center'>New Member?<Link to="/register"><button className="btn btn-active px-1 py-0 btn-link">Please Register</button></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;