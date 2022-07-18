import React from 'react';
import { useLocation } from 'react-router-dom';
import { ForgotPasswordPage, LoginPage, RegisterPage } from '~/components/Auth';

const Auth = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/login' && <LoginPage />}
      {pathname === '/register' && <RegisterPage />}
      {pathname === '/forgot-password' && <ForgotPasswordPage />}
    </>
  );
};

export default Auth;
