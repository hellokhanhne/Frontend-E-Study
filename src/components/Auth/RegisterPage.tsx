import { Form, Formik } from 'formik';
import { ChangeEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext, IAuthContext } from '~/context/AuthContext';
import { Input } from '../Form';
import LoginSocial from './LoginSocial';

const RegisterPage = () => {
  const validate = Yup.object({
    username: Yup.string().required('Username is required !'),
    address: Yup.string().required('Address is required !'),
    birthOfDate: Yup.string().required('Birthday is required !'),
    firstName: Yup.string().required('Firstname is required !'),
    lastName: Yup.string().required('Lastname is required !'),
    phone: Yup.number().typeError('Enter a valid phone !').required('Phone is required !'),
    password: Yup.string().required('Password is required !'),
    email: Yup.string()
      .email()
      .typeError('Please enter an valid email !')
      .required('Email is required !'),
  });

  const [avatar, setAvatar] = useState<FileList | null>(null);

  const { register } = useContext(AuthContext) as IAuthContext;

  const handleSubmit = (values: any) => {
    const splits = values['birthOfDate'].split('-');
    values['birthOfDate'] = `${splits[2]}-${splits[1]}-${splits[0]}`;
    const { username, birthOfDate, firstName, lastName, phone, password, email, address } = values;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('birthOfDate', birthOfDate);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('address', address);
    if (avatar) {
      formData.append('avatar', avatar[0]);
    }
    register(formData);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAvatar(e.target.files);
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
                firstName: '',
                lastName: '',
                phone: '',
                password: '',
                email: '',
                address: '',
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
                        <input
                          type='file'
                          id='avatar'
                          className='d-none'
                          onChange={handleFileChange}
                        />
                        <label
                          className='rcs_ico pointer'
                          style={{
                            position: 'relative',
                          }}
                          htmlFor='avatar'
                        >
                          {avatar ? (
                            <img src={URL.createObjectURL(avatar[0])} alt='' />
                          ) : (
                            <i className='fas fa-user' />
                          )}

                          <i
                            className='fa fa-camera position-absolute'
                            style={{
                              top: 0,
                              right: 0,
                              fontSize: 28,
                            }}
                            aria-hidden='true'
                          ></i>
                        </label>
                      </div>
                      <div className='rcs_log_124'>
                        <div className='Lpo09'>
                          <h4>Register Your Account</h4>
                        </div>
                        <div className='form-group row mb-0'>
                          <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12'>
                            <div className='form-group'>
                              <label>First Name</label>
                              <Input type='text' name='firstName' placeholder='First Name' />
                            </div>
                          </div>
                          <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12'>
                            <div className='form-group'>
                              <label>Last Name</label>
                              <Input type='text' name='lastName' placeholder='Last Name' />
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
                          <label>Address</label>
                          <Input type='text' name='address' placeholder='Address' />
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
