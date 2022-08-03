import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Input } from '~/components/Form';

const _initState = {
  name: '',
  description: '',
};

const ChapterForm = ({
  titleButton,
  initState = _initState,
  onSubmit,
  onCancel,
  resetAfterSubmit,
}: any) => {
  const validate = Yup.object({
    name: Yup.string().required('Name is required !'),
    description: Yup.string().required('Description is required !'),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    if (resetAfterSubmit) {
      resetForm();
    }
    onSubmit(values);
  };
  return (
    <Formik
      validationSchema={validate}
      enableReinitialize
      initialValues={initState}
      onSubmit={handleSubmit}
    >
      {(_) => (
        <Form>
          <div className=''>
            <div className='form-group'>
              <Input type='text' placeholder='name' name='name' />
            </div>
            <div className='form-group'>
              <Input type='text' placeholder='description' name='description' />
            </div>
            <div className='text-center'>
              <button type='submit' className='btn  btn-sm theme-bg text-white'>
                {titleButton}
              </button>
              {onCancel && (
                <button
                  type='button'
                  onClick={onCancel}
                  className='btn  ml-1 btn-sm  btn-danger text-white'
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ChapterForm;
