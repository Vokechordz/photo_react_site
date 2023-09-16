import React from 'react'
import hero from '../img/hero.jpg'
import responsive from '../img/responsive.svg'
import no_limit from '../img/no-limit.svg'
import embed from '../img/embed.svg'
import custom from '../img/custom-domain.svg'
import boost from '../img/boost-exposure.svg'
import drag from '../img/drag-drop.svg'
import beta from '../img/bg-beta.jpg'
import arrow from '../img/arrow.svg'

const Features = () => {


  return (
    <div className='featuresdiv'>
          <div className="grid1">
            <div className='grid12'>
                <h1>FEATURES</h1>
                <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories. </p>
            </div>
            <img className='img' src={hero} alt="" />
        </div>
        <div className='embeddivs'>
          <div className="responsive">
            <img src={responsive} alt="" />
            <h4>100% Responsive</h4>
            <p>No matter which device you're on, our site is <br /> fully responsive and stories look beautiful on any <br /> screen.</p>
          </div>
          <div className="responsive">
            <img  id='nolimit' className='nolimit' src={no_limit} alt="" />
            <h4>No Photo Upload Limit</h4>
            <p>Our tool has no limit on uploads or bandwidth. <br /> Freely upload in bulk and share all of your stories <br /> in one go.</p>
          </div>
          <div className="responsive">
            <img src={embed} alt="" />
            <h4>Available to Embed</h4>
            <p>Embed Tweets, Facebook posts, Instagram media, <br /> Vimeo or Youtube videos, Google maps and <br /> more.</p>
          </div>
          <div className="responsive">
            <img src={custom} alt="" />
            <h4>100% Responsive</h4>
            <p>With Photosnap subscriptions you can host your <br /> stories on your own domain. You can also remove <br /> our branding!</p>
          </div>
          <div className="responsive">
            <img  className='nolimit' src={boost} alt="" />
            <h4>No Photo Upload Limit</h4>
            <p>Users that viewed your story or gallery <br /> can easily get notifed of new and featured <br /> stories with our built in mailing list.</p>
          </div>
          <div className="responsive">
            <img src={drag} alt="" />
            <h4>Available to Embed</h4>
            <p>Embed Tweets, Facebook posts, Instagram media, <br /> Vimeo or Youtube videos, Google maps and <br /> more.</p>
          </div>
        </div>


        <div className="beta">
            <img src={beta} alt="" />
            <div className="beta1">
                <h1>WE'RE IN BETA. <br />GET YOUR INVITE <br /> TODAY!</h1>
                <div className='betalast'>
                <h6 className='animm'>GET AN INVITE</h6>
                <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features