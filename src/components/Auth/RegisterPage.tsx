import React from 'react';
import { Link } from 'react-router-dom';
import LoginSocial from './LoginSocial';
import * as Yup from 'yup';
import { Input } from '../Form';
import { Form, Formik } from 'formik';

const RegisterPage = () => {
  const validate = Yup.object({
    username: Yup.string().required('Username is required !'),
    birthOfDate: Yup.string().required('Birthday is required !'),
    first_name: Yup.string().required('Firstname is required !'),
    last_name: Yup.string().required('Lastname is required !'),
    phone: Yup.number().typeError('Enter a valid phone !').required('Phone is required !'),
    password: Yup.string().required('Password is required !'),
    email: Yup.string()
      .email()
      .typeError('Please enter an valid email !')
      .required('Email is required !'),
  });
  const handleSubmit = (values: any) => {
    const splits = values['birthOfDate'].split('-');
    values['birthOfDate'] = `${splits[2]}-${splits[1]}-${splits[0]}`;
    console.log(values);
  };
  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-7 col-lg-8 col-md-12 col-sm-12'>
            <Formik
              validationSchema={validate}
              onSubmit={handleSubmit}
              initialValues={{
                username: '',
                birthOfDate: '',
                first_name: '',
                last_name: '',
                phone: '',
                password: '',
                email: '',
              }}
            >
              {(_) => (
                <Form>
                  <div className='crs_log_wrap'>
                    <div className='crs_log__thumb'>
                      <img
                        src='https://via.placeholder.com/1920x1200'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='crs_log__caption'>
                      <div className='rcs_log_123'>
                        <div className='rcs_ico'>
                          <i className='fas fa-user' />
                        </div>
                      </div>
                      <div className='rcs_log_124'>
                        <div className='Lpo09'>
                          <h4>Register Your Account</h4>
                        </div>
                        <div className='form-group row mb-0'>
                          <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12'>
                            <div className='form-group'>
                              <label>First Name</label>
                              <Input type='text' name='first_name' placeholder='First Name' />
                            </div>
                          </div>
                          <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12'>
                            <div className='form-group'>
                              <label>Last Name</label>
                              <Input type='text' name='last_name' placeholder='Last Name' />
                            </div>
                          </div>
                        </div>
                        <div className='form-group'>
                          <label>Username</label>
                          <Input type='text' name='username' placeholder='Username' />
                        </div>
                        <div className='form-group'>
                          <label>Phone</label>
                          <Input type='text' name='phone' placeholder='Phone number' />
                        </div>
                        <div className='form-group'>
                          <label>Email</label>
                          <Input type='text' name='email' placeholder='support@themezhub.com' />
                        </div>
                        <div className='form-group'>
                          <label>Date of birth</label>
                          <Input type='date' name='birthOfDate' />
                        </div>
                        <div className='form-group'>
                          <label>Password</label>
                          <Input type='password' name='password' placeholder='*******' />
                        </div>
                        <div className='form-group'>
                          <button
                            type='submit'
                            className='btn full-width btn-md theme-bg text-white'
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                      <LoginSocial />
                    </div>
                    <div className='crs_log__footer d-flex justify-content-between'>
                      <div className='fhg_45'>
                        <p className='musrt'>
                          Already have account?{' '}
                          <Link to='/login' className='theme-cl'>
                            Login
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
