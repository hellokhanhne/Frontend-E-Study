import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css'; // ES6;
import './index.css';
import AuthProvider from './context/AuthContext';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
