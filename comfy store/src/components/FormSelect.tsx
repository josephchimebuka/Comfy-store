


interface FormSelectProp{
 label: string,
 lists: string[],
 name: string,
 size: string,
}
const FormSelect = ({label,name,lists,size}:FormSelectProp) => {
  return (
    <div className='form-control'>
         <label htmlFor={name} className='label'>
        <span className='label-text capitalize font-medium'>{label}</span>
      </label>
      <select    name={name}
        id={name} className={`select select-bordered ${size}`}>
        {lists.map((list)=>{
            return(
                <option key={list} value={list}>{list}</option>
            )
        })}
      </select>
    </div>
  )
}

export default FormSelect