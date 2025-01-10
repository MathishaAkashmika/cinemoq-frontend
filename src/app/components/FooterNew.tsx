import Link from "next/link";
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer: React.FC = () => {
    return (
        <div className="bg-gradient-to-t from-purple-800 via-black to-black flex flex-col items-center">
            <div className="w-full max-w-screen-2xl text-white py-2">

               
                <div className="flex flex-col lg:flex-row px-8 lg:justify-between space-y-8 lg:space-y-0 xl:space-x-32">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-4">C I N E M O Q</h1>
                        <p className="text-sm max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-4">OUR SERVICES</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/" className="hover:text-purple-600">Home</Link>
                            </li>
                            <li>
                                <Link href="/Movies" className="hover:text-purple-600">Movies</Link>
                            </li>
                            <li>
                                <Link href="/about_us" className="hover:text-purple-600">About Us</Link>
                            </li>
                            <li>
                                <Link href="contact_us" className="hover:text-purple-600">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-4">QUICK LINKS</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/ticketbooking" className="hover:text-purple-600">My Tickets</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-purple-600">Community Chat</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-purple-600">Careers</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-purple-600">Announcement</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <ul className="py-10 mb-4 space-y-3 text-gray-300">
                            <li>
                                <Link href="/disclaimer" className="hover:text-purple-600">Disclaimer</Link>
                            </li>
                            <li>
                                <Link href="/terms_and_conditions" className="hover:text-purple-600">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="/news_and_events" className="hover:text-purple-600">News & Events</Link>
                            </li>
                            <li>
                                <Link href="/return_policy" className="hover:text-purple-600">Return Policy</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>

                <div className="flex items-center justify-center space-x-8 py-2">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
                    >
                        <i className="fa-brands fa-facebook-f text-black text-lg"></i>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
                    >
                        <i className="fa-brands fa-twitter text-black text-lg"></i>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
                    >
                        <i className="fa-brands fa-instagram text-black text-lg"></i>
                    </a>
                </div>

                
                <div className="text-center text-sm text-gray-400 py-4">
                    © 1996-2021 COPYRIGHT RESERVED
                </div>
            </div>
        </div>
    );
};

export default Footer;


