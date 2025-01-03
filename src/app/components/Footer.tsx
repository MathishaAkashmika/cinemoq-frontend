import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="bg-gradient-to-t from-purple-800 via-black to-black flex justify-center items-center">
            <div className="w-full max-w-screen-2xl text-white relative py-8">

                <div className="absolute inset-0 bg-black"></div>


                <div className="relative flex flex-col lg:flex-row items-start lg:items-start px-8 lg:justify-between space-y-8 lg:space-y-0 xl:space-x-32">

                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-4">C I N E M O Q</h1>
                        <p className="text-s max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>


                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-4">OUR SERVICES</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/" className="hover:text-purple-600 cursor-pointer">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/Movies" className="hover:text-purple-600 cursor-pointer">
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-purple-600 cursor-pointer">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-purple-600 cursor-pointer">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-4">QUICK LINKS</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/ticketbooking" className="hover:text-purple-600 cursor-pointer">
                                    My Tickets
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-purple-600 cursor-pointer">
                                    Community Chat
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-purple-600 cursor-pointer">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-purple-600 cursor-pointer">
                                    Announcement
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


            
                <div className="relative flex items-center justify-center space-x-8 py-8 z-10">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 transition"
                    >
                        <i className="fa-brands fa-facebook-f text-black"></i>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 transition"
                    >
                        <i className="fa-brands fa-twitter text-black"></i>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 transition"
                    >
                        <i className="fa-brands fa-instagram text-black"></i>
                    </a>
                </div>




                <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-400 py-4">
                    © 1996-2021 COPYRIGHT RESERVED
                </div>


            </div>
        </div>
    );
};

export default Footer;
