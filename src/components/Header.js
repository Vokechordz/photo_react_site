import React from 'react';
import { Link } from 'react-router-dom';
import logo_black from '../img/logo.svg'
import Hamburger from './Hamburger';
import Hammenu from './Hammenu';
import { useContext } from 'react'
import PhotoContext from '../PhotoContext/PhotoContext'

const Header = () => {

    const {hamLinkClick, isOpened, setIsOpened}= useContext(PhotoContext);




  return (
    <div className='headerdiv'>
       <div className="headbig">
       <div className='photosnap'>
            <Link to='/'><img onClick={hamLinkClick} src={logo_black} alt="" /></Link>
        </div>

        <div className='stories'>
            <Link to='/stories'>STORIES</Link>
            <Link to='/features'>FEATURES</Link>
            <Link to='/pricing'>PRICING</Link>
        </div>

            <button className='headerbutton'>GET AN INVITE</button>
       </div>


        <div className="headmobile">
        <div className='photosnap'>
            <Link to='/'><img src={logo_black} alt="" /></Link>
        </div>

            <Hamburger />
        </div>
        <Hammenu />

    </div>
  )
}

export default Header