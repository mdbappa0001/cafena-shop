
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from './Loading';
import Footer from './Footer';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || gUser) {
        navigate(from, { replace: true })
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError}</small></p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <>
            <div className='flex h-[90vh] justify-center items-center'>
            <div className='card md:w-[400px]  border-2 shadow-lg shadow-red-500 px-6 py-9'>
                    <div className="card-body">
                        <h1 className='font-bold text-3xl text-[#ff0000] text-center'>
                            Login
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

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
                            <input className='bg-[#ff0000] transition-all text-white font-semibold hover:bg-[#0000FF] hover:text-white  w-full py-2 cursor-pointer' type="submit" value="Login" />
                        </form>

                        <p><small>New to CAFENA ? <Link className='text-primary font-bold' to="/signUp">Create New Account</Link></small></p>


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

export default Login;