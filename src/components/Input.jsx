import React from 'react'
import { useId } from 'react'

// function input() {
//   return (
//     <div>
      
//     </div>
//   )
// }

//different way  to write the function by using arrow function

//here we have use react hook forwardRef 
//which helps in using the same component by
//passing the reference in the different form or component
//where it can be used.
const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
        {label && <label
        className='inline-block mb-1 pl-1'
        htmlFor={id}>
            {label}
        </label>
        }
        <input type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full
         ${className}`}
         ref={ref}
         {...props}
         id={id}></input>
        </div>
    )
})

export default Input
