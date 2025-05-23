import React from 'react'
import { useId } from 'react'
import { forwardRef } from 'react'
function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {

    const id = useId()
  return (
    <div className='w-full'>
    {label && <label htmlFor={id} className=''></label>}
    <select
    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
    id={id}
    ref={ref}
    {...props}>
    {options?.map((option) => (
        <option key={option} value={option}>
        {option}
        </option>
    ))}
    </select>
    </div>
  )
}

//this is the other way of using forwardRef than
//we have used in Input.jsx
export default React.forwardRef(Select)
