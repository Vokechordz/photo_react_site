import React, { useEffect } from 'react'
import { ScaleLoader } from 'react-spinners'

const PreLoader = () => {
useEffect(()=> {
  document.body.classList.add('red-background')
}, [])


  return (
    <div className='preloader'>
        <ScaleLoader />
    </div>
  )
}

export default PreLoader