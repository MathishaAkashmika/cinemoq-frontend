import React from 'react'
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import LoginBackground from '../components/LoginBackground';

const ForgotPasswordpage : React.FC = () => {
    return (
      <div className="relative flex items-center justify-center min-h-screen">
        <LoginBackground />
        <ForgotPasswordForm />
      </div>
    );
  };

export default ForgotPasswordpage;