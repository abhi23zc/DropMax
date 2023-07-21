import React, { useEffect, useState } from 'react'
import { db } from '../../../config'
import { getDocs, collection } from 'firebase/firestore'
import Nav from '../../Navabr/Nav'
import VideoCard from './VideoCard'

function  Video() {
  const [video, setvideo] = useState([])
  const myuid = localStorage.getItem("uid")
  const fetchImages = async () => {
       
    await getDocs(collection(db, "users/"+myuid +"/video"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setvideo(newData);     
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
    {video.map((myvideo)=>{
        return (
        <VideoCard fileurl={myvideo.fileurl} filename={myvideo.filename}/>
        )
    })}
    

    </>
  )
}

export default Video