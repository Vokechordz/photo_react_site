import React from 'react'
import { Link } from 'react-router-dom'
import logo_white from '../img/logo-white.svg'
import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import pinterest from '../img/pinterest.svg'
import twitter from '../img/twitter.svg'
import tube from '../img/youtube.svg'
import arrow from '../img/arrow.svg'

const Footer = () => {
  return (
    <div className='footerdiv'>
            <div className="imgandlist">
            <div className='logowhite'>
            <img className='logowhiteimg' src={logo_white} alt="" />
            <div className="homef">
        <li>HOME</li>
        <li>STORIES</li>
        <li>FEATURES</li>
        <li>PRICING</li>
        </div>
       <div className="social">
       <a target='blank' href="https://facebook.com"><img src={facebook} alt="" /></a>
        <a target='blank' href=""><img src={tube} alt="" /></a>
        <a href=""><img src={twitter} alt="" /></a>
        <a href=""><img src={pinterest} alt="" /></a>
        <a href=""><img src={instagram} alt="" /></a>
       </div>
            </div>
       
            </div>


            <div className='lastco'>
                <div className='lastco1'>
                <h6 className='animm'>GET AN INVITE</h6>
                <img src={arrow} alt="" />
                </div>
                <p>Copyrights 2019. All rights reserved</p>
            </div>
    </div>
  )
}

export default Footer