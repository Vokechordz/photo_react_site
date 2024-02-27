import React from 'react'
import { useState, useEffect, useContext } from 'react'
import PhotoContext from '../PhotoContext/PhotoContext'
import arrow from '../img/arrow.svg'
import { useGetPhotosQuery } from '../photosApiSlice'

const Stoimages = () => {
    //const { photos }= useContext(PhotoContext)
    const {
      data: photos,
      isLoading,
      isSuccess,
      isError,
      error
    }= useGetPhotosQuery()
    const totalPhotos= photos?.entities
    //console.log(totalPhotos)
    let finalArr= []

    if (totalPhotos) {
      finalArr = Object.values(totalPhotos)
    }
    console.log(finalArr)


    const mapped= finalArr && finalArr.map((photo) => (
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
    
    const content=  <div className='stoimages'>
    {mapped}
    </div>
    if (!totalPhotos && !finalArr && isLoading ) content= <p>Loading</p>
    

    

  return content
}

export default Stoimages