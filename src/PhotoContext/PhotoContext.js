import { createContext, useState, useEffect } from "react";

const PhotoContext= createContext({});

export const PhotoProvider= ({children}) => {
   
    
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