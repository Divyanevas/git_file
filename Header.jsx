import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    const closeNav = () => {
        setIsOpen(false);
    }

    return (
        <nav className='bg-transparent'>
            <div className="max-w-full mx-4 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to='/' onClick={closeNav}>
                                <img className='h-12' src="./Little Lemon Logo.svg" alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to='/' onClick={closeNav} className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to='/menu' className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
                       </div>
                    </div>
                    <div className="mr-2 flex md:hidden">
                        <button onClick={toggleNav} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-expanded="false">
                            <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-300 z-50">
                        <Link to='/' onClick={closeNav} className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to='/menu' onClick={closeNav} className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">Menu</Link>
                       </div>
                </div>
            )}
        </nav>
    );
}

export default Header;
