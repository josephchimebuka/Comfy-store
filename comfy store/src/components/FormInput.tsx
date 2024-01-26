import React from 'react'
interface FormProps{
    label:string;
    name: string;
    type: string;
    size: string;
    defaultValue: string
}
const FormInput: React.FC<FormProps> = ({label,name, type, size, defaultValue}) => {
  return (
    <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">{label}</span>
    </label>
    <input
    name={name}
     type={type}
     className={`input input-bordered ${size}`} 
     defaultValue={defaultValue}/>
    
  </div>
  )
}

export default FormInput