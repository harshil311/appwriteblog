import React from 'react'

//accepts properties as a children we define
//styling properties in with and it shows as it is
//can be used in any components by importing it
function container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
    {children}
    </div>
  )
}

export default container
