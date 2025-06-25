import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
        <div className='max-w-7xl mx-auto p-5 '>
            <div className='flex justify-between items-center'>
                <Image
                    src="/assets/Logo_Balck.png"
                    alt="Main Logo"
                    className='md:w-56 w-36'
                    width={224}
                    height={64}
                />
                <Link href='https://www.voicene.com/contactus.html'>
                    <button className='bg-black rounded-4xl text-gray-100 md:py-2 md:px-4 p-1 px-2 cursor-pointer'>Contact Us</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;