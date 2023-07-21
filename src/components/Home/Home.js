import { useState, useEffect } from 'react';
import React from 'react';
import Nav from '../Navabr/Nav';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../../config';
import { redirect, useNavigate } from 'react-router-dom';

function Home() {
  
  const [users, setUsers] = useState([]);
  const userCollection = collection(db, "users/userid/other")
  const navigate = useNavigate();
  // navigate("/login")
  
  

  useEffect(() => {
    const getUsers = async() =>{
      const data = await getDocs(userCollection);
      // setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      
    }

    const myuid = localStorage.getItem('uid');
    if(!myuid){
      console.log("login failed")
      
      navigate("/login")
      
      
    }
    else{
      navigate("/download")
      
    }

  }, [])
  
  return(
    <>
    <Nav login={false} signup={false}></Nav>
    <div className='App'>
      I am Home
      {users.map((user)=>{
        return(
          <div >
            <h1>Name:{user.filename}</h1>
            <h1>Name:{user.fileurl}</h1>
            <h1>Name:{user.id}</h1>
          </div>
        )
      })
    }
      
    </div>
    </>
  )
}

export default Home