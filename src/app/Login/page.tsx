
import React from 'react';
import LoginForm from '../components/LoginForm';
import LoginBackground from '../components/LoginBackground';


const LoginPage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <LoginBackground />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
