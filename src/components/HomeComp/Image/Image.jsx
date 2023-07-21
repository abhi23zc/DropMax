import React, { useEffect, useState } from 'react'
import { db } from '../../../config'
import { getDocs, collection } from 'firebase/firestore'
import ImageCard from './ImageCard'
import Nav from '../../Navabr/Nav'

function Image() {
  const [images, setImages] = useState([])
  const myuid = localStorage.getItem("uid")
  const fetchImages = async () => {
       
    await getDocs(collection(db, "users/"+myuid +"/image"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setImages(newData);     
                // console.log(newData)

        })
    }

    useEffect(() => {
    
    
     
        fetchImages()

      
    }, [])
    
 
  
  
  return (
    <>
    <Nav/>
  
    <br />
    <br />
    {images.map((image)=>{
        return (
        <ImageCard fileurl={image.fileurl} filename={image.filename}/>
        )
    })}
    

    </>
  )
}

export default Image