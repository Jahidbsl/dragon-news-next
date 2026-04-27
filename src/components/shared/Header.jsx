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
        <div className='text-center py-6 md:py-8 space-y-3 md:space-y-4 px-4'>
            {/* Responsive Image: Smaller on mobile, original size on desktop */}
            <Image 
                src={logo} 
                alt="logo" 
                width={300} 
                height={300} 
                className='mx-auto w-48 md:w-72 lg:w-[300px] h-auto'
                priority
            />
            
            {/* Responsive Text: Subtle scaling for mobile screens */}
            <p className='text-sm md:text-base text-gray-500'>
                Journalism Without Fear or Favour
            </p>
            
            <p className='text-sm md:text-xl text-gray-600'>
                <span className='font-semibold text-gray-800'>{dayName}</span>, {formattedDate}
            </p>
        </div>
    );
};

export default Header;