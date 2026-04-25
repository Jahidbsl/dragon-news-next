import Image from 'next/image';
import React from 'react';
import userAvater from '@/assets/user.png';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto py-8'>
            <div></div>
           <ul className='flex justify-center items-center gap-3 text-lg text-gray-700 font-medium ml-25'>
             <li><NavLink href="/">Home</NavLink></li>
             <li><NavLink href="/about">About</NavLink></li>
             <li><NavLink href="/career">Career</NavLink></li>
           </ul>
           <div className='flex items-center gap-2'>
            <Image src={userAvater} alt="user avatar" width={40} height={40}></Image>
            
            <Link href="/login" className='btn bg-purple-700 text-white hover:bg-purple-800'>
              <button>Login</button>
            </Link>
           </div>
        </div>
    );
};

export default Navbar;