import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from './Loading';
import { Link , useNavigate} from 'react-router-dom';
import Footer from './Footer';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let signInError;
    const navigate = useNavigate();

    if (user || gUser || updating) {
        console.log(user || gUser);
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name });
        console.log('update done');
        navigate('/checkout')
    }

    return (
        <>
            <div className='flex h-[90vh] justify-center items-center'>
            <div className='card w-[400px]  border-2 shadow-lg shadow-red-500 px-6 py-7'>
                    <div className="card-body">
                        <h1 className='font-bold text-3xl text-[#ff0000] text-center'>
                            Sign Up
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]'
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]'
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs mb-4">
                                <label className="label">
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]'
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red text-red-600">{errors.password.message}</span>}
                                </label>
                            </div>

                            {signInError}
                            <input 
                            className='bg-[#ff0000] transition-all text-white font-semibold hover:bg-[#0000FF] hover:text-white  w-full py-2 cursor-pointer' 
                            type="submit" value="Sign Up" />
                        </form>

                        <p><small>Already Have an Account ? <Link className='text-primary font-bold' to="/login">Please Login</Link></small></p>


                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-primary
                    ">Continue With Google</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SignUp;