import React, { useEffect, useState } from 'react'
import { db } from '../../../config'
import { getDocs, collection } from 'firebase/firestore'
import Nav from '../../Navabr/Nav'
import AudioCard from './AudioCard'

function Audio() {
  const [audio, setaudio] = useState([])
  const myuid = localStorage.getItem("uid")
  const fetchImages = async () => {
       
    await getDocs(collection(db, "users/"+myuid +"/audio"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setaudio(newData);     
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
    {audio.map((myaudio)=>{
        return (
        <AudioCard fileurl={myaudio.fileurl} filename={myaudio.filename}/>
        )
    })}
    

    </>
  )
}

export default Audio