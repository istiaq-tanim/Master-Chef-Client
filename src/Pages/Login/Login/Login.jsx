import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../providers/AuthProvider';

const Login = () => {

    const {login,goggleLogin,gitHubLogin} =useContext(UserContext)
    

    const navigate=useNavigate();
    const location=useLocation();
    console.log(location)

    let from=location.state?.from?.pathname || "/"
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        

        login(email,password)
        .then(result =>{
            const user=result.user;
            console.log(user);
            setSuccess("Logged in Successfully");
            navigate(from, { replace: true });
            form.reset();
        })
        .catch(error => setError(error.message))
    }

    const handleGoggle = () =>
    {
         goggleLogin()
         .then(result => {
            const user=result.user;
            navigate(from, { replace: true });
            console.log(user);
         })
         .catch(error => setError(error.message))
    }
    
    const handleGithub = () =>
    {
        gitHubLogin()
        .then(result => {
            const user=result.user;
            navigate(from, { replace: true });
            console.log(user);
        })
        .catch(error => setError(error.message))
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

                            <p className='text-green-500'>{success}</p>
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control mt-2">
                                <button className="btn btn-success text-white">Login</button>
                            </div>

                        </form>

                        <button onClick={handleGoggle} className="btn btn-outline w-80  mx-auto my-2"><FaGoogle className='inline-block mr-2'></FaGoogle>Sign in With Google</button>
                        <button onClick={handleGithub} className="btn btn-outline w-80  mx-auto my-2"><FaGithub className='inline-block mr-2'></FaGithub>Sign in With Github</button>
                        <p className='text-center'>New Member?<Link to="/auth/register"><button className="btn btn-active px-1 py-0 btn-link">Please Register</button></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;