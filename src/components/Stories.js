import React from 'react'
import moon from '../img/moon-of-appalacia.jpg'
import Stoimages from './Stoimages'
import arrow from '../img/arrow.svg'

const Stories = () => {
  return (
    <div className='storiesdiv'>
        <div className='moondiv'>
        <img src={moon} alt="" />
        <div className='moondiv2'>
            <h6>LAST MONTH'S FEATURED STORY</h6>
            <h1>HAZY FULL MOON <br /> OF APPALACHIA</h1>
            <p className='march'>March 2nd 2020  <a className='john' href="">by John Appleseed</a></p>
            <p className='diss'>The dissected plateau area, while not actually made up <br /> of geological mountains, is popularly called "Mountains",<br /> especially in eastern Kentucky and West Virginia, and <br /> while the ridges are not high, the terrain is extremely <br /> rugged.</p>
            <div className='readstory'>
            <h5 className='animm'>READ THE STORY</h5>
            <img src={arrow} alt="" />
            </div>
        </div>
        </div>
        <Stoimages />
    </div>
  )
}

export default Stories