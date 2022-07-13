import React from 'react';
import { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link,  useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let signInError;

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    if(user || gUser){
       navigate('/checkout');
    }

    if(loading || gLoading){
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-700'><small>{error?.message || gError?.message}</small></p>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <div class="form-control w-full max-w-xs mt-6">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="text" placeholder="Your Email" class="input input-bordered w-full max-w-xs" requiredf/>
                            </div>
                        </div>

                        <div>
                            <div class="form-control w-full max-w-xs mb-6">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input ref={passwordRef} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required />
                            </div>
                        </div>

                       {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to CAFENA ? <Link className='text-secondary' to="/signUp">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                    onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;