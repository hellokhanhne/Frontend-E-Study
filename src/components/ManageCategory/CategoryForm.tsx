import { Form, Formik } from 'formik';
import { ChangeEvent, useState } from 'react';
import * as Yup from 'yup';
import { toastEmit } from '~/utils/toasify';
import { validateImage } from '~/utils/validateFile';
import { Input, InputFile } from '../Form';

interface ICategoryFormProps {
  onSubmit: (values: any) => Promise<void>;
  initValue?: any;
  typeForm?: string;
}

const _initValue = {
  name: '',
  description: '',
};

interface FileState {
  error: string;
  fileList: FileList | null;
}

const CategoryForm = ({ onSubmit, initValue = _initValue, typeForm }: ICategoryFormProps) => {
  const validate = Yup.object({
    name: Yup.string().required('Name category is required !'),
    description: Yup.string().required('Description category is required !'),
  });

  const [file, setFile] = useState<FileState>({
    fileList: null,
    error: '',
  });

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

  const handleSubmit = (values: any, { resetForm }: any) => {
    if (!file.fileList && typeForm === 'create') {
      return setFile({ ...file, error: 'Avatar file is required !' });
    }

    onSubmit({
      ...values,
      avatar: file.fileList ? file.fileList[0] : null,
    });
    resetForm();
    setFile({
      error: '',
      fileList: null,
    });
  };
  return (
    <Formik
      validationSchema={validate}
      initialValues={initValue}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {(_) => (
        <Form>
          <div className='forms_block'>
            <div className='form-group smalls'>
              <label>Category Name</label>
              <Input type='text' name='name' placeholder='Web Design' />
            </div>
            <div className='form-group smalls'>
              <label>Category desc</label>
              <Input type='text' name='description' />
            </div>

            <div className='form-group smalls'>
              <label>Category Image</label>
              <InputFile id='avatar' handleChange={handleChangeFile} />
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

            {file.fileList && file.fileList.length > 0 && (
              <div className='w-100'>
                <img
                  src={URL.createObjectURL(file.fileList[0])}
                  className='w-100 mb-3 py-2   '
                  alt=''
                />
              </div>
            )}

            {!file.fileList && initValue?.avatar && (
              <img src={initValue?.avatar} className='w-100 mb-3 py-2   ' alt='' />
            )}

            <div className='form-group smalls'>
              <button type='submit' className='btn full-width theme-bg text-white'>
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CategoryForm;
