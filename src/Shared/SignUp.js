import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let signInError;

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        updateProfile(name);
        createUserWithEmailAndPassword(email, password,)
    }


    if(loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if(user || gUser) {
        navigate('/checkout');
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-700'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit}>

                    <div>
                            <div class="form-control w-full max-w-xs mt-6">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input ref={nameRef} type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" requiredf/>
                            </div>
                        </div>

                        <div>
                            <div class="form-control w-full max-w-xs">
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
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already Have an Account <Link className='text-secondary' to="/login">Please Login</Link></small></p>
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

export default SignUp;