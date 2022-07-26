import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoadingOverlay from '~/components/common/LoadingOverlay';

interface IProtectedRouterProps {
  authState: any;
  redirectPath?: string;
  children?: React.ReactElement;
}

const ProtectedRouter = ({
  authState,
  redirectPath = '/login',
  children,
}: IProtectedRouterProps) => {
  if (authState.isLoading) {
    return <LoadingOverlay />;
  }
  if (!authState.isAuthenticate && !authState.isLoading && !localStorage.getItem('access_token')) {
    return <Navigate to='/login' replace />;
  }
  if (!authState.isAuthenticate) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRouter;
