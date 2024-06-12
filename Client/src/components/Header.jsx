import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
    <div className='bg-gray-100'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-2xl'>Project-Store</h1>
        </Link>
        <ul className='flex gap-4'>
            <Link to='/signin'>
            <li>SignIn</li>
            </Link>
            <Link to='/signup'>
            <li>SignUp</li>
            </Link>
            <Link to='/profile'>
            <li>Profile</li>
            </Link>
            <Link to='/about'>
            <li>About</li>
            </Link>
        </ul>
    </div>
    </div>
     
    )
}

export default Header