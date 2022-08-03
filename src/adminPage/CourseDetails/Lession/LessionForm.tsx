import { Form, Formik } from 'formik';
import React, { ChangeEvent, useState } from 'react';
import * as Yup from 'yup';
import { Input, InputFile } from '~/components/Form';
import { clearInputFile } from '~/utils/domUtils';
import { FileState } from '~/utils/handleError';

const _initState = {
  content: '',
};

const LessionForm = ({
  titleButton,
  initState = _initState,
  onSubmit,
  onCancel,
  resetAfterSubmit,
  typeForm,
}: any) => {
  const validate = Yup.object({
    content: Yup.string().required('Content is required !'),
  });

  //state file
  const [file, setFile] = useState<FileState>({
    fileList: null,
    error: '',
  });

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile({
      ...file,
      fileList: e.target.files,
      error: '',
    });
  };

  const handleSubmit = (values: any, { resetForm }: any) => {
    if (typeForm === 'create' && !file.fileList) {
      return setFile({
        error: 'Please choose an attachment for lession !',
        fileList: null,
      });
    }

    if (file.fileList) {
      onSubmit({ ...values, attachment: file.fileList[0], name: values.content });
    } else {
      onSubmit({ ...values, name: values.content });
    }
    if (resetAfterSubmit) {
      resetForm();
      setFile({
        error: '',
        fileList: null,
      });
    }
    clearInputFile('avatar');
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
              <Input type='text' placeholder='Enter title' name='content' />
            </div>
            <div className='form-group'>
              <InputFile
                label={
                  file.fileList && file.fileList?.length > 0 ? file.fileList[0].name : 'Choose file'
                }
                id='avatar'
                handleChange={handleChangeFile}
              />
              {file.error.length > 0 && (
                <div
                  className='invalid-feedback '
                  style={{
                    display: 'block',
                  }}
                >
                  {file.error}
                </div>
              )}
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

export default LessionForm;
