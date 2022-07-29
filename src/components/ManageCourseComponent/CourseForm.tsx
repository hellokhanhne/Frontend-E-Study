import { Form, Formik } from 'formik';
import { ChangeEvent, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Input, InputFile } from '~/components/Form';
import Select from '~/components/Form/Select';
import { useAppSelector } from '~/store/hooks';
import { categorySelector } from '~/store/reducers/categoryReducer';
import { clearInputFile } from '~/utils/domUtils';
import { FileState, handleFileStateError } from '~/utils/handleError';
import { toastEmit } from '~/utils/toasify';
import { validateImage } from '~/utils/validateFile';
import TextEditor from '../Form/TextEditor';
import NavigateForm from './NavigateForm';

interface ICourseFormProps {
  onSubmit: (values: any) => Promise<void>;
  initValue?: any;
  typeForm?: string;
}

const _initValue = {
  name: '',
  description: '',
  price: '',
  sale_percent: '',
  short_desc: '',
  categoryId: '',
};

const CourseForm = ({ onSubmit, initValue = _initValue, typeForm }: ICourseFormProps) => {
  // get categories from store
  const { categories } = useAppSelector(categorySelector);
  // formik ref
  const formikRef: any = useRef();
  // validate form
  const validate = Yup.object({
    name: Yup.string().required('Title is required !'),
    description: Yup.string().required('Description is required !'),
    categoryId: Yup.string().required('Category is required !'),
    short_desc: Yup.string().required('Short desc  is required !'),
    price: Yup.number().typeError('Enter a valid price !').required('Price is required !'),
    sale_percent: Yup.number()
      .typeError('Enter a valid number !')
      .required('Sale percent is required !'),
  });
  // state of file image
  const [file, setFile] = useState<FileState>({
    fileList: null,
    error: '',
  });
  // handle input file change
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
  // change check file when click submit
  const handleCheckFile = () => {
    if (typeForm === 'create') {
      if (!handleFileStateError(file, setFile)) {
        return false;
      }
    }
    return true;
  };
  // handle submit form
  const handleSubmit = (values: any, { resetForm }: any) => {
    if (!handleCheckFile) {
      return;
    }
    onSubmit({
      ...values,
      image: file.fileList ? file.fileList[0] : null,
    });
    clearInputFile('image');
    formikRef.current.setFieldValue('description', '');
    resetForm();
    setFile({
      error: '',
      fileList: null,
    });
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initValue}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={validate}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className='row justify-content-between'>
            <div className='col-xl-3 col-lg-4 col-md-5 col-sm-12'>
              <NavigateForm />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-7 col-sm-12'>
              <div className='tab-content' id='v-pills-tabContent'>
                {/* Basic */}
                <div
                  className='tab-pane fade show active'
                  id='v-pills-basic'
                  role='tabpanel'
                  aria-labelledby='v-pills-basic-tab'
                >
                  <div className='form-group smalls'>
                    <label>Course Title</label>
                    <Input type='text' name='name' placeholder='Enter Course Title' />
                  </div>
                  <div className='form-group smalls'>
                    <label>Short Description</label>
                    <Input name='short_desc' type='text' />
                  </div>
                  <div className='form-group smalls'>
                    <label>Description</label>
                    {/* desc course  */}
                    <TextEditor
                      name='description'
                      onChange={(val) => setFieldValue('description', val)}
                      value={values['description']}
                    />
                  </div>
                  <div className='form-group smalls'>
                    <label>Category</label>
                    <div className='simple-input'>
                      <Select
                        name='categoryId'
                        onChange={(e) => setFieldValue('categoryId', e.target.value)}
                        value={values['categoryId']}
                        options={
                          <>
                            <option value=''>Choose category</option>
                            {categories.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.name}
                              </option>
                            ))}
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* pricing */}
                <div
                  className='tab-pane fade'
                  id='v-pills-pricing'
                  role='tabpanel'
                  aria-labelledby='v-pills-pricing-tab'
                >
                  <div className='form-group smalls'>
                    <label>Course Price($)</label>
                    <Input type='text' name='price' placeholder='Enter Course Price' />
                  </div>
                  <div className='form-group smalls'>
                    <label>Discount Percent(%)</label>
                    <Input type='text' name='sale_percent' placeholder='Enter Discount Price' />
                  </div>
                </div>
                {/* media */}
                <div
                  className='tab-pane fade'
                  id='v-pills-media'
                  role='tabpanel'
                  aria-labelledby='v-pills-media-tab'
                >
                  <div className='form-group smalls'>
                    <label>Thumbnail</label>

                    <InputFile id='image' handleChange={handleChangeFile} />

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

                    {file.fileList && file.fileList.length > 0 && (
                      <div className='w-100'>
                        <img
                          src={URL.createObjectURL(file.fileList[0])}
                          className='w-100 mb-3 py-2   '
                          alt=''
                        />
                      </div>
                    )}

                    {!file.fileList && initValue?.imageUrl && (
                      <img src={initValue?.imageUrl} className='w-100 mb-3 py-2   ' alt='' />
                    )}
                  </div>
                </div>

                {/* finish */}
                <div
                  className='tab-pane fade'
                  id='v-pills-finish'
                  role='tabpanel'
                  aria-labelledby='v-pills-finish-tab'
                >
                  <div className='text-center'>
                    {' '}
                    <button
                      className='btn theme-bg text-white btn-md'
                      type='submit'
                      onClick={handleCheckFile}
                    >
                      Save course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CourseForm;
