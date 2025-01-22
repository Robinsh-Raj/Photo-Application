import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function LoginScreen() {
  const navigate = useNavigate();

  const onSuccess = (response) => {
    console.log('Login Success:', response);
    navigate('/home');
  };

  const onFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <div className="login-screen">
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default LoginScreen;
