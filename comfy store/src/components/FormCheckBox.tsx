

interface FormCheckBoxProp{
    name: string,
    label: string,
    size: string
}
const FormCheckBox = ({name, label, size}: FormCheckBoxProp) => {
  return (
    <div className="form-control items-center">
            <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
      </label>
        <input 
        type="checkbox"
         name={name} 
         id="" 
          className={`checkbox checkbox-primary ${size}`}
         />
    </div>
  )
}

export default FormCheckBox