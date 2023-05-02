import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const {createUser}=useContext(UserContext);
    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const userName = form.username.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const email = form.email.value;

        createUser(email,password)
        .then(result =>{
            const user=result.user;
            userUpdate(user,userName,photo)
            console.log(user);
            setSuccess("You are Registered");
            form.reset();
        })
        .catch(error => setError(error.message))
        const userUpdate = (user,userName,photo) =>
        {
            updateProfile(user,{
                displayName:userName,
                photoURL:photo
            })
            .then(()=>{})
            .catch(error => setError(error.message))
        }
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl mt-2 font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body my-2 py-5 px-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User</span>
                                </label>
                                <input type="text" name="username" required placeholder="Username" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" required placeholder="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email" className="input input-bordered" />
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
                                <button className="btn btn-success">Register</button>
                            </div>
                            <p>Already Have an Account?<Link to="/login"><button className="btn btn-active btn-link px-1 py-0 ">Please Login</button></Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;