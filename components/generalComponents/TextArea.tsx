import React, { FC, ChangeEvent } from 'react';
import './TextArea.scss';

interface TextareaProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  errorMsg: string | null
}

const Textarea: FC<TextareaProps> = ({ name, value, placeholder, onChange, label, errorMsg }) => (
  <div className='TextAreaInput'>
    {label && <label>{label}:</label>}
    <textarea 
      name={name} 
      value={value} 
      placeholder={placeholder} 
      onChange={onChange} 
    />
    {errorMsg && <div className="error">{errorMsg}</div>}
  </div>
);

export default Textarea;
