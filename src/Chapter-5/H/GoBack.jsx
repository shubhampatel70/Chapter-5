import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {

    const back = useNavigate();

  return (
    <div className='p-3'>
        <h1 className='mb-3'>This is go back page</h1>
        <button className=' text-blue-400' onClick={() => back(-1)}>Go Back</button>
    </div>
  )
}

export default GoBack