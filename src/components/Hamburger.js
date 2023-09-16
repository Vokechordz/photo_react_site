import React from 'react'
import { useContext } from 'react'
import PhotoContext from '../PhotoContext/PhotoContext'

const Hamburger = () => {
    const {isOpened, hamClick, setIsOpened}= useContext(PhotoContext);

  
    console.log(isOpened)

  return (
    <div onClick={hamClick}>
        <button onClick={hamClick} className={`button-three klicked ${isOpened? 'isactive':null}`} id={isOpened}>
            <svg stroke='black' className={`hamburger clickedd ${isOpened? 'isactive': null}`} fill='none' viewBox='-10 -10 120 120' width='40'>
                <path className='line' stroke-width='5' strokeLinecap='round' strokeLinejoin='round' d='m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70'>

                </path>
            </svg>
        </button>
    </div>
  )
}

export default Hamburger