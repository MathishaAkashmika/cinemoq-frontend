import Link from 'next/link';
import React from 'react'

const LoginBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/images/loginbg.png')" }}
    >
      <div className="absolute top-5 left-5 text-white text-2xl font-bold">
        <Link href="/" className="hover:underline">
          T I C K E T E R
        </Link>
      </div>
    </div>

  );
};
export default LoginBackground;