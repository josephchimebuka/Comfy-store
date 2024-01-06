import {  useState } from "react"
import { formatPrice } from "../utils"

interface FormRange{
    name: string,
    label: string,
    size: string
}
const FormRange = ({name, label, size}: FormRange) => {
     const maxPrice = 100000
    const step = 1000
    const [selectedPrice, setSelectedPrice] = useState(maxPrice)
   const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = parseInt(e.target.value)
        setSelectedPrice(newValue)
   }
  return (
    <div className='form-control'>
    <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input 
      type="range" 
      name={name} 
      min={0}
      max={maxPrice}
      value={selectedPrice.toString()}
      className={`range range-primary ${size}`}
      onChange={handleChange}
      step={step}
      id="" />
       <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  )
}

export default FormRange