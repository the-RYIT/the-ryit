import React, { FC, ChangeEvent } from 'react';
import './TextArea.scss'

interface TextareaProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
}

const Textarea: FC<TextareaProps> = ({ name, value, placeholder, onChange, label }) => (
  <div className='TextAreaInput'>
    {label && <label>{label}:</label>}
    <textarea name={name} value={value} placeholder={placeholder} onChange={onChange} />
  </div>
);

export default Textarea;
