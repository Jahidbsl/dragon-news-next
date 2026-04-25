import React from 'react';

import logo from '@/assets/logo.png';
import Image from 'next/image';

const today = new Date();
const dayName = today.toLocaleDateString('en-GB', { weekday: 'long' });
const formattedDate = today.toLocaleDateString('en-GB', {
    
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            <Image src={logo} alt="logo" width={300} height={300} className='mx-auto'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p><span className='text-xl font-semibold ' >{dayName}</span> , {formattedDate}</p>
        </div>
    );
};

export default Header;