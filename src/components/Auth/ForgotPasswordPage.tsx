import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Input } from '../Form';

const ForgotPasswordPage = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email()
      .typeError('Please enter an valid email !')
      .required('Email is required !'),
  });
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-7 col-lg-8 col-md-12 col-sm-12'>
            <Formik
              validationSchema={validate}
              initialValues={{
                email: '',
              }}
              onSubmit={handleSubmit}
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
                          <i className='fas fa-lock' />
                        </div>
                      </div>
                      <div className='rcs_log_124'>
                        <div className='Lpo09'>
                          <h4>Forgot password</h4>
                        </div>
                        <div className='form-group'>
                          <label>Enter Email</label>
                          <Input type='text' name='email' placeholder='support@themezhub.com' />
                        </div>
                        <div className='form-group'>
                          <button
                            type='submit'
                            className='btn full-width btn-md theme-bg text-white'
                          >
                            Forgot password
                          </button>
                        </div>
                      </div>
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

export default ForgotPasswordPage;
