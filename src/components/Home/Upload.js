import React, { useEffect, useState } from 'react'
import { db } from '../../config'
import { getDocs, collection, addDoc, doc } from 'firebase/firestore' 
import Nav from '../Navabr/Nav'
import { ref, uploadBytesResumable, getDownloadURL} from "@firebase/storage"
import { storage } from '../../config'

function Upload(props) {

    const [file, setFile] = useState("")
    const [percent, setPercent] = useState(0);
    const [url, setUrl] = useState(null);
    function upload(){
        console.log(file);
        const storageRef = ref(storage, 'files/'+file.name)
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        const myuid = localStorage.getItem('uid');


        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
     
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    let myext;
                    if(file.name.includes(".jpg")|| file.name.includes(".jpeg") || file.name.includes(".png") 
                        
                    ){
                        myext= "image"
                    }
                    else if(file.name.includes(".mp3")|| file.name.includes(".wav") || file.name.includes(".m4a") 
                        
                    ){
                        myext= "audio"
                    }

                    else if(file.name.includes(".mp4")|| file.name.includes(".avi")  
                        
                    ){
                        myext= "video"
                    }

                    else if(file.name.includes(".pdf")|| file.name.includes(".docx") || file.name.includes(".ppt") || file.name.includes(".html") 
                        
                    ){
                        myext= "docs"
                    }
            
                    else{
                        myext = "other"
                    }
                    const addcollection = collection(db, "users/" +myuid +"/"+myext)
            
                    const createUser= async() =>{
                        await addDoc(addcollection, {filename:file.name, fileurl:url})
                        alert("File Uploaded Successfully")
                    }

                    createUser();
                    
                });
            }
        ); 

    }


    

  
    

  return (
    <div>
        <Nav login={false} signup={false}/>

        <div className='container my-5' style={{width:"25rem"}} >
        <div class="card text-center">
                <div class="card-header">
                    File Upload
                </div>
                <div class="card-body">
                    <h5 class="card-title">Upload Your Files</h5>
                    <p class="card-text">You can upload files anytime with enhanced authorisation security.</p>
                    <input type="file" className='btn btn-primary ' style={{width:"15rem"}}name="upload" onChange={(event)=>{
            setFile(event.target.files[0])
        }} />
        <br></br>
        <br></br>
        <button className='btn btn-primary' onClick={upload}>Submit</button>
                </div>
                <div class="card-footer text-body-secondary">
                    #DropMax
                </div>
                </div>
        </div>
        
    
    </div>

  )
}

export default Upload