import React from 'react'
import { useState, useEffect, useContext } from 'react'
import PhotoContext from '../PhotoContext/PhotoContext'
import arrow from '../img/arrow.svg'
import api from '../api/photos'

const Stoimages = () => {
    const { photos }= useContext(PhotoContext)
    

    const mapped=    photos.map((photo) => (
        <div key={photo.id} className='imagesdiv'>
            <img className='uploads' src={require(`../images/${photo.sku}.jpg`)} alt={photo.title} />
                <div className="deets">
                <p className='photodate'>{photo.date}</p>
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
    <div className='stoimages'>
     {mapped}
    </div>
  )
}

export default Stoimages