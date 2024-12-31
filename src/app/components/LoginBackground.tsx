import React from 'react'

const LoginBackground: React.FC = () => {
    return (
      <div
        className="absolute inset-0 bg-black bg-cover bg-center"
        style={{ backgroundImage: "url('/images/loginbg.png')" }}
      ></div>
    );
  };
export default LoginBackground;