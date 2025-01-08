import Link from 'next/link';
import React from 'react'

const SignupBackgroundImage = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/Signupbg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-5 left-5 text-white text-2xl font-bold">
      <Link href="/" className="hover:underline">
          T I C K E T E R
      </Link>
      </div>

      
    </div>
  );
};

export default SignupBackgroundImage;