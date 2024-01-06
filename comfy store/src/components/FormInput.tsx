import React from 'react'
interface FormProps{
    label:string;
    name: string;
    type: string;
    defaultValue: string
    size: string
}
const FormInput: React.FC<FormProps> = ({label,name, type, defaultValue,size}) => {
  return (
    <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">{label}</span>
    </label>
    <input
    name={name}
     type={type}
    defaultValue={defaultValue}
     className={`input input-bordered ${size}`} />

  </div>
  )
}

export default FormInput