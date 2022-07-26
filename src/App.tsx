import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoadingOverlay from './components/common/LoadingOverlay';
import { AuthContext, IAuthContext } from './context';
import AdminLayout from './Layout/AdminLayout';
import BaseLayout from './Layout/BaseLayout';
import { lecturerRoutes, publicRoutes } from './routes';
import ProtectedRouter from './routes/ProtectedRoute';

import { useAppSelector } from './store/hooks';
import { loadingSelector } from './store/reducers/loadingOverlayReducer';

function App() {
  const { isLoading } = useAppSelector(loadingSelector);
  const { authState } = useContext(AuthContext) as IAuthContext;
  // inject scripts

  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((r) => (
            <Route path={r.path} key={r.path} element={<BaseLayout>{r.element}</BaseLayout>} />
          ))}
          {lecturerRoutes.map((r) => (
            <Route
              path={r.path}
              key={r.path}
              element={
                <ProtectedRouter authState={authState} redirectPath={r.path}>
                  <AdminLayout>{r.element}</AdminLayout>
                </ProtectedRouter>
              }
            />
          ))}
        </Routes>
        {isLoading && <LoadingOverlay />}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
