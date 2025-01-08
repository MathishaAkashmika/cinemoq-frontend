import React from 'react'
import LoginBackground from '../components/LoginBackground';
import ResetPasswordForm from '../components/ResetPasswordForm';

const ResetPasswordpage: React.FC = () => {
    return (
      <div className="relative flex items-center justify-center min-h-screen">
        <LoginBackground />
        <ResetPasswordForm />
      </div>
    );
  };

export default ResetPasswordpage