import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ForgotPasswordPage, LoginPage, RegisterPage } from '~/components/Auth';
import { AuthContext, IAuthContext } from '~/context/AuthContext';

const Auth = () => {
  const { pathname } = useLocation();

  const {
    authState: { isAuthenticate },
  } = useContext(AuthContext) as IAuthContext;

  if (isAuthenticate) {
    return <Navigate to='/' replace />;
  }

  return (
    <>
      {pathname === '/login' && <LoginPage />}
      {pathname === '/register' && <RegisterPage />}
      {pathname === '/forgot-password' && <ForgotPasswordPage />}
    </>
  );
};

export default Auth;
