import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginSocial from './LoginSocial';
import * as Yup from 'yup';
import { Input } from '../Form';
import { AuthContext, IAuthContext } from '~/context/AuthContext';

const LoginForm = () => {
  const validate = Yup.object({
    username: Yup.string().required('Username is required !'),
    password: Yup.string().required('Password is required !'),
  });
  const { login } = useContext(AuthContext) as IAuthContext;
  const handleSubmit = (values: any) => {
    login('default', values);
  };

  return (
    <Formik
      validationSchema={validate}
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      {(_) => (
        <Form>
          <div className='crs_log_wrap'>
            <div className='crs_log__thumb'>
              <img src='https://via.placeholder.com/1920x1200' className='img-fluid' alt='' />
            </div>
            <div className='crs_log__caption'>
              <div className='rcs_log_123'>
                <div className='rcs_ico'>
                  <i className='fas fa-lock' />
                </div>
              </div>
              <div className='rcs_log_124'>
                <div className='Lpo09'>
                  <h4>Login Your Account</h4>
                </div>
                <div className='form-group'>
                  <label>User Name</label>
                  <Input type='text' placeholder='username' name='username' />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <Input type='password' placeholder='*******' name='password' />
                </div>

                <div className='form-group'>
                  <button type='submit' className='btn full-width btn-md theme-bg text-white'>
                    Login
                  </button>
                </div>
              </div>
              <LoginSocial />
            </div>
            <div className='crs_log__footer d-flex justify-content-between'>
              <div className='fhg_45'>
                <p className='musrt'>
                  Don't have account?{' '}
                  <Link to='/register' className='theme-cl'>
                    SignUp
                  </Link>
                </p>
              </div>
              <div className='fhg_45'>
                <p className='musrt'>
                  <Link to='/forgot-password' className='text-danger'>
                    Forgot Password?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
