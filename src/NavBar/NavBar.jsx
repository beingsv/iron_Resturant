import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
// import resturantLogo from '../Assets/resturantLogo'


const NavBar = () => {

    const [loginButton, setLoginButton] = useState("Login")

    return (
        <>
            <div className='px-8 py-2 shadow-lg border-t'>
                <nav className='flex justify-between items-center'>
                    <section className='flex items-center gap-4'>
                        <img className='w-9' src='/resturantLogo.svg' alt='logo' />
                        <h1 className='text-xl'>Iron Resturant</h1>
                    </section>

                    <section>
                        <ul className='flex gap-6'>
                            <li className='text-[#7e57c2] hover:bg-[#7e57c2] hover:text-white px-2 py-1 rounded-2xl'>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className='text-[#7e57c2] hover:bg-[#7e57c2] hover:text-white px-2 py-1 rounded-2xl'>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li className='text-[#7e57c2] hover:bg-[#7e57c2] hover:text-white px-2 py-1 rounded-2xl'>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li className='text-[#7e57c2] hover:bg-[#7e57c2] hover:text-white px-2 py-1 rounded-2xl'>
                                <NavLink to="/menu">Cart</NavLink>
                            </li>
                            <li>
                                <button 
                                    className='bg-[#7e57c2] text-white px-4 py-1 rounded-2xl hover:bg-[#5e35b1]'
                                    onClick={() => loginButton==="Login" ? setLoginButton("Logout") : setLoginButton("Login")}
                                >{loginButton}</button>
                            </li>

                        </ul>
                    </section>

                </nav>
            </div>
        </>
    )
}

export default NavBar