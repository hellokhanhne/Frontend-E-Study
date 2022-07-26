import React, { useContext } from 'react';
import Breadcrumb from '~/components/common/Breadcrumb';
import { AuthContext, IAuthContext } from '~/context';
import { Form, Formik } from 'formik';
import { ChangeEvent, useState } from 'react';
import * as Yup from 'yup';
import { toastEmit } from '~/utils/toasify';
import { validateImage } from '~/utils/validateFile';
import { Input } from '~/components/Form';

interface FileState {
  error: string;
  fileList: FileList | null;
}

const Profile = () => {
  const { updateProfile } = useContext(AuthContext) as IAuthContext;

  const validate = Yup.object({
    address: Yup.string().required('Address is required !'),
    birthOfDate: Yup.string().required('Birthday is required !'),
    firstName: Yup.string().required('Firstname is required !'),
    lastName: Yup.string().required('Lastname is required !'),
    phone: Yup.number().typeError('Enter a valid phone !').required('Phone is required !'),
    email: Yup.string()
      .email()
      .typeError('Please enter an valid email !')
      .required('Email is required !'),
  });

  const [file, setFile] = useState<FileState>({
    fileList: null,
    error: '',
  });

  const {
    authState: { user },
  } = useContext(AuthContext) as IAuthContext;

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const err = validateImage(e.target.files);
    if (err) {
      return toastEmit({ message: err, type: 'error' });
    }
    setFile({
      ...file,
      fileList: e.target.files,
      error: '',
    });
  };

  const handleSubmit = async (values: any) => {
    const splits = values['birthOfDate'].split('-');
    values['birthOfDate'] = `${splits[2]}-${splits[1]}-${splits[0]}`;
    const { birthOfDate, firstName, lastName, phone, email, address } = values;
    const formData = new FormData();

    formData.append('birthOfDate', birthOfDate);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('address', address);
    if (file.fileList) {
      formData.append('avatar', file.fileList[0]);
    }
    await updateProfile(formData);

    setFile({
      error: '',
      fileList: null,
    });
  };

  return (
    <>
      {/* Row */}
      <div className='row justify-content-between'>
        <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
          <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
            <div className='arion'>
              <Breadcrumb title2='My Profile' />
            </div>
          </div>
        </div>
      </div>
      {/* /Row */}
      <div className='row'>
        <div className='col-xl-7 col-lg-6 col-md-12'>
          <div className='dashboard_wrap'>
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                <h6 className='m-0'>Profile details</h6>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-xl-12 col-lg-12 col-md-12'>
                <Formik
                  validationSchema={validate}
                  enableReinitialize
                  initialValues={{
                    firstName: user?.firstName || '',
                    lastName: user?.lastName || '',
                    birthOfDate: user?.birthOfDate || '',
                    phone: user?.phone || '',
                    email: user?.email || '',
                    address: user?.address || '',
                  }}
                  onSubmit={handleSubmit}
                >
                  {(_) => (
                    <Form>
                      <div className='rcs_log_123 mt-2'>
                        <input
                          type='file'
                          id='avatar'
                          className='d-none'
                          onChange={handleChangeFile}
                        />
                        <label
                          className='rcs_ico pointer'
                          style={{
                            position: 'relative',
                          }}
                          htmlFor='avatar'
                        >
                          {file.fileList ? (
                            <img src={URL.createObjectURL(file.fileList[0])} alt='' />
                          ) : (
                            <img src={user?.avatar} />
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
                      <div className='form-group smalls'>
                        <label>First Name</label>
                        <Input type='text' name='firstName' placeholder='Suraj' />
                      </div>
                      <div className='form-group smalls'>
                        <label>Last Name</label>
                        <Input type='text' name='lastName' placeholder='Singh' />
                      </div>
                      <div className='form-group smalls'>
                        <label>Email</label>
                        <Input type='email' name='email' placeholder='support@themezhub.com' />
                      </div>
                      <div className='form-group smalls'>
                        <label>Phone</label>
                        <Input type='text' name='phone' />
                      </div>
                      <div className='form-group smalls'>
                        <label>Date of birth</label>
                        <Input type='date' name='birthOfDate' />
                      </div>
                      <div className='form-group smalls'>
                        <label>Address</label>
                        <Input type='text' name='address' placeholder='Address' />
                      </div>
                      {/* more info  */}
                      {/* <>
                      <div className='form-group smalls'>
                        <label>About Yourself in Short</label>
                        <textarea  placeholder={''} />
                      </div>
                      <div className='form-group smalls'>
                        <label>Biography</label>
                        <textarea className='form-control summernote' placeholder={''} />
                      </div>
                      <div className='form-group smalls'>
                        <label>Facebook Link</label>
                        <input type='text'  />
                      </div>
                      <div className='form-group smalls'>
                        <label>Twitter Link</label>
                        <input type='text'  />
                      </div>
                      <div className='form-group smalls'>
                        <label>LinkedIn Link</label>
                        <input type='text'  />
                      </div>
                      <div className='form-group smalls'>
                        <label>Gplus Link</label>
                        <input type='text'  />
                      </div>
                      </> */}
                      <div className='form-group smalls'>
                        <button className='btn theme-bg text-white' type='submit'>
                          Save Change
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-5 col-lg-6 col-md-12'>
          <div className='dashboard_wrap'>
            <div className='row justify-content-center'>
              <div className='col-xl-12 col-lg-12 col-md-12'>
                <form>
                  <div className='form-group smalls'>
                    <label>Current Password</label>
                    <input className='form-control' type='password' />
                  </div>
                  <div className='form-group smalls'>
                    <label>New Password</label>
                    <input className='form-control' type='password' />
                  </div>
                  <div className='form-group smalls'>
                    <label>Confirm Password</label>
                    <input className='form-control' type='password' />
                  </div>
                  <div className='form-group smalls'>
                    <button className='btn theme-bg text-white' type='button'>
                      Save Change
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
