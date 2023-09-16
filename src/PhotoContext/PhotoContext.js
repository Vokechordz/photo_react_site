import api from '../api/photos'
import { createContext, useState, useEffect } from "react";
import jsonData from '../data/photos.json'

const PhotoContext= createContext({});

export const PhotoProvider= ({children}) => {
    useEffect(()=> {
        const fetchPhotos= async () => {
          try {
            const response= await api.get('/photos')
            if (response && response.data) setPhotos(response.data)
          } catch (err) {
          (err.response.data)
          (err.response.status)
          (err.response.headers)
          }
        }
        
        fetchPhotos();
      }, [])
    
    const[photos, setPhotos]= useState([])
    
    
    const [isOpened, setIsOpened]= useState(false)

    const hamClick= (e) => {
        setIsOpened(!isOpened)
    }

    const hamLinkClick= () => {
      setIsOpened(false)
    }

    return (
        <PhotoContext.Provider value={{
            photos, isOpened, setIsOpened, hamClick, hamLinkClick
        }}>
            {children}
            </PhotoContext.Provider>
    )
}

export default PhotoContext;