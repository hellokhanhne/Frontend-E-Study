import { ErrorMessage, Field } from 'formik';
import React from 'react';

interface ISelectProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: React.ReactNode;
}

const Select = ({ name, onChange, options, value }: ISelectProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => {
        return (
          <>
            <select
              value={value}
              {...field}
              onChange={onChange}
              className={`form-control   ${meta.touched && meta.error && 'is-invalid'}`}
            >
              {options}
            </select>
            {meta.error && (
              <ErrorMessage component='div' name={field.name} className='invalid-feedback' />
            )}
          </>
        );
      }}
    </Field>
  );
};

export default Select;
