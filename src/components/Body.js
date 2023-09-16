import React from 'react'
import Stoimages from './Stoimages'
import Footer from './Footer'
import createandshare from '../img/create-and-share.jpg'
import beautifulstories from '../img/beautiful-stories.jpg'
import designedforeveryone from '../img/designed-for-everyone.jpg'
import arrow from '../img/arrow.svg'
import responsive from '../img/responsive.svg'
import no_limit from '../img/no-limit.svg'
import embed from '../img/embed.svg'
import { useContext } from 'react'
import PhotoContext from '../PhotoContext/PhotoContext'

const Body = () => {
    const { photos }= useContext(PhotoContext)

    
    const mapped=    photos.map((photo) => (
        <div key={photo.id} className='imagesdiv'>
            <img className='uploads' src={require(`../images/${photo.sku}.jpg`)} alt={photo.title} />
                <div className="deets">
                <h6 className='phototitle'>{photo.title}</h6>
                <p className='photoauthor'>by {photo.author}</p>
                <div className="deets1">
                    <h6 className='animm'>READ STORY</h6>
                    <img src={arrow} alt="" />
                </div>
                </div>
        </div>
    ))
    


  return (
    <div className='gridcontainer'>
        <div className="grid1">
            <div className='grid12'>
                <h1>CREATE AND <br /> SHARE YOUR <br /> PHOTO STORIES.</h1>
                <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others</p>
                <div className='arrowdiv'>
                <a className='animm' href=""><p className='getan'>GET AN INVITE</p></a>
                <img className='arrowimg' src={arrow} alt="" />
                </div>
            </div>
            <img className='img' src={createandshare} alt="" />
        </div>
        <div className="grid2">
            <img className='img' src={beautifulstories} alt="" />
            <div className="grid21">
                <h1>BEAUTIFUL STORIES EVERYTIME</h1>
                <p>We provide design templates to ensure your stories look terrific. Easily add photos, texts, embed maps and media from other networks. Then share your story with everyone.</p>
                <div className='arrowdiv'>
                    <a className='anim' href=""><p className='getam'>VIEW THE STORIES</p></a>
                    <img className='arrowimg' src={arrow} alt="" />
                </div>
            </div>
        </div>
        <div className="grid3">
        <div className="grid21">
                <h1>DESIGNED FOR EVERYONE</h1>
                <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses, you name it.</p>
                <div className='arrowdiv'>
                    <a className='anim' href=""><p className='getam'>VIEW THE STORIES</p></a>
                    <img className='arrowimg' src={arrow} alt="" />
                </div>
            </div>
            <img className='img' src={designedforeveryone} alt="" />
        </div>
        <div className='stoimages'>
            {mapped.slice(0,4)}
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
        </div>
    </div>
  )
}

export default Body