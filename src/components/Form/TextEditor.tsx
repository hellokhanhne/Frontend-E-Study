import { ErrorMessage, Field } from 'formik';
// import ImageUploader from 'quill-image-uploader';
import ReactQuill from 'react-quill';
import { formats, modules } from '~/utils/editorConfig';

interface ITextEditorProps {
  value: string;
  name: string;
  onChange: (value: string) => void;
}

// Quill.register('modules/imageUploader', ImageUploader);

const TextEditor = ({ name, onChange, value }: ITextEditorProps) => {
  return (
    <>
      <Field name={name}>
        {({ field, meta }: any) => {
          return (
            <>
              <textarea className='d-none' {...field} onChange={() => {}} value={value} />
              <ReactQuill
                // className={` ${meta.error && 'border border-danger'}`}
                onChange={onChange}
                value={value}
                theme='snow'
                modules={modules}
                formats={formats}
              ></ReactQuill>
              {meta.error && (
                <ErrorMessage
                  component='div'
                  name={field.name}
                  className='invalid-feedback d-block'
                />
              )}
            </>
          );
        }}
      </Field>
    </>
  );
};

export default TextEditor;
