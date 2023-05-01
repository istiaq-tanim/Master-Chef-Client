import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <span className='ml-2 text-2xl font-bold tracking-wide text-gray-800'>
                        Master<span className='text-[#58d076]'>Chef</span>
                    </span>
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li className='text-[#757575] font-semibold'>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'text-[#14b93d]' : '')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='text-[#757575] font-semibold'>
                        <NavLink
                            to='/blogs'
                            className={({ isActive }) => (isActive ? 'text-[#14b93d]' : '')}
                        >
                            Blogs
                        </NavLink>
                    </li>

                    <li className='text-[#757575] font-semibold'>
                        <NavLink
                            to='/login'
                            className={({ isActive }) => (isActive ? 'text-[#14b93d]' : '')}
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>

                                            <span className='ml-2 text-2xl font-bold tracking-wide text-gray-800'>
                                                Job<span className='text-[#1f2d91]'>Camp</span>
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-3'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/statistic' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>
                                                Statistic
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/jobs' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>
                                                Applied Job
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to='/blogs'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/about'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

};

export default Header;