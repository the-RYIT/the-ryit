import React, { FC, ChangeEvent } from 'react';
import "./Input.scss"

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: FC<InputProps> = ({ type, name, value, placeholder, onChange, label }) => (
  <div className='InputBox'>
    {label && <label>{label}:</label>}
    <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
  </div>
);

export default Input;
