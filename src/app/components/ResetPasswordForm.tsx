import Link from 'next/link';
import React from 'react'

const ResetPasswordForm: React.FC = () => {
    return (
        <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-md z-20">

            <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Reset your Password?</h2>

            <form>
                <div className="mb-4">
                <p className="text-gray-600 text-left mb-4 font-bold ">Enter new password</p>
                    <input
                        type="Enter new password"
                        placeholder="Enter your new password"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                    />
                </div>

                <div className="mb-4">
                <p className="text-gray-600 text-left mb-4 font-bold ">Re-enter password</p>
                    <input
                        type="Re-enter password"
                        placeholder="Re-enter your new password"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 mb-4"
                >
                    Send
                </button>
                <p className="text-center text-gray-600 mt-4">
                    Don’t Have An Account?{' '}
                    <a href="/Signup" className="text-purple-600 hover:underline">
                        Register Here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default ResetPasswordForm;
