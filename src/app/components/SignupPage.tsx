import React from 'react';
import SignupForm from './SignupForm';
import SignupBackgroundImage from './SignupBackgroundImage';

const SignupPage = () => (
  <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
    <SignupBackgroundImage />
    <SignupForm />
  </div>
);

export default SignupPage;
