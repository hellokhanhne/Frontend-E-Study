import React, { ChangeEvent } from 'react';

interface IInputFileProps {
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile = ({ id, handleChange }: IInputFileProps) => {
  return (
    <div className='input-group '>
      <div className='custom-file'>
        <input type='file' className='custom-file-input d-none' onChange={handleChange} id={id} />
        <label className='custom-file-label' htmlFor={id}>
          Choose file
        </label>
      </div>
    </div>
  );
};

export default InputFile;
