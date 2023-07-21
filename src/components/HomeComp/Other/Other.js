import React, { useEffect, useState } from 'react'
import { db } from '../../../config'
import { getDocs, collection } from 'firebase/firestore'
import Nav from '../../Navabr/Nav'
import OtherCard from './OtherCard'

function  Other() {
  const [other, setother] = useState([])
  const myuid = localStorage.getItem("uid")
  const fetchImages = async () => {
       
    await getDocs(collection(db, "users/"+myuid +"/other"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setother(newData);     
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
    {other.map((myother)=>{
        return (
        <OtherCard fileurl={myother.fileurl} filename={myother.filename}/>
        )
    })}
    

    </>
  )
}

export default Other