import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import PhotoContext from '../PhotoContext/PhotoContext'

const Hammenu = () => {

  const {isOpened, hamClick, setIsOpened, hamLinkClick}= useContext(PhotoContext);

  const menuRef= useRef(null);

  
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <div  className={`hammenu ${isOpened? 'trans': 'transs'}`}>
         <div className= "storiesham">
            <Link onClick={hamLinkClick} to='/stories'>STORIES</Link>
            <Link onClick={hamLinkClick} to='/features'>FEATURES</Link>
            <Link onClick={hamLinkClick} to='/pricing'>PRICING</Link>
        </div>
        <button onClick={hamLinkClick}>GET AN INVITE</button>
    </div>
  )
}

export default Hammenu