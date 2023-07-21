import React, { useEffect, useState } from 'react'
import { db } from '../../../config'
import { getDocs, collection } from 'firebase/firestore'
import Nav from '../../Navabr/Nav'
import Docscard from './DocsCard'

function  Docs() {
  const [docs, setdocs] = useState([])
  const myuid = localStorage.getItem("uid")
  const fetchImages = async () => {
       
    await getDocs(collection(db, "users/"+myuid +"/docs"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setdocs(newData);     
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
    {docs.map((doc)=>{
        return (
        <Docscard fileurl={doc.fileurl} filename={doc.filename}/>
        )
    })}
    

    </>
  )
}

export default Docs