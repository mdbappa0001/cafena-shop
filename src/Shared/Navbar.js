import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from "../../src/images/logo/logo.png";
import auth from '../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };


    const menuItems = <>
        <li className='text-amber-300 font-bold text-xl'><Link to="/">Home</Link></li>
        {/* <li className='text-amber-300 font-bold'><Link to="/furniture">Furniture</Link></li> */}
        <li className='text-amber-300 font-bold text-xl'><Link to="/blogs">Blog</Link></li>
        <li className='text-amber-300 font-bold text-xl'><Link to="/portfolio">My Portfolio</Link></li>
        <li className='text-amber-300 font-bold text-xl'>{user ? <Link to="/signUp" onClick={logout}>SignOut</Link> : <Link to="/login">Login</Link>}</li>
    </>

    return (
        <div className="navbar bg-black sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-16 ml-72 lg:ml-16' src={logo} alt="" />
                <a href=' ' className="btn btn-ghost normal-case text-2xl font-bold ml-24 text-amber-300 mr-96"> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ml-80">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                <label tabindex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;