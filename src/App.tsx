import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BaseLayout from './Layout/BaseLayout';
import { publicRoutes } from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((r) => (
            <Route path={r.path} key={r.path} element={<BaseLayout>{r.element}</BaseLayout>} />
          ))}
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
