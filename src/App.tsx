import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { VideoCourseOverlay } from './components/common';
// import { VideoCourseOverlay } from './components/common';
import LoadingOverlay from './components/common/LoadingOverlay';
import { AuthContext, IAuthContext } from './context';
import AdminLayout from './Layout/AdminLayout';
import BaseLayout from './Layout/BaseLayout';
import { lecturerRoutes, publicRoutes } from './routes';
import ProtectedRouter from './routes/ProtectedRoute';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { getAllCategory } from './store/reducers/categoryReducer';
import { courseOverlaySelector } from './store/reducers/courseOverlayReducer';
import { loadingSelector } from './store/reducers/loadingOverlayReducer';

function App() {
  const { isLoading } = useAppSelector(loadingSelector);
  const { authState } = useContext(AuthContext) as IAuthContext;
  // dispatch get all category
  const { isShow } = useAppSelector(courseOverlaySelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

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
        {isShow && <VideoCourseOverlay />}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
