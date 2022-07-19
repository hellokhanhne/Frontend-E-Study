import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoadingOverlay from './components/common/LoadingOverlay';
import BaseLayout from './Layout/BaseLayout';
import { publicRoutes } from './routes';
import { useAppSelector } from './store/hooks';
import { loadingSelector } from './store/reducers/loadingOverlayReducer';

function App() {
  const { isLoading } = useAppSelector(loadingSelector);

  // inject scripts

  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((r) => (
            <Route path={r.path} key={r.path} element={<BaseLayout>{r.element}</BaseLayout>} />
          ))}
        </Routes>
        {isLoading && <LoadingOverlay />}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
