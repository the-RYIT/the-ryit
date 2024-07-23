import React, { FC, ChangeEvent } from 'react';
import "./Input.scss"
import { log } from 'console';

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  errorMsg: string |null
}

const Input: FC<InputProps> = ({ type, name, value, placeholder, onChange, label,errorMsg }) => {
  
  return(
  <div className='InputBox'>
    {label && <label>{label}:</label>}
    <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
    {errorMsg && <div className="error">{errorMsg}</div>}
  </div>
)};

export default Input;
