import React from 'react'

function VideoCard(props) {
  return (
    <>
    <div className="card my-2 mx-3" style={{width:"18rem"}} >
    <video src={props.fileurl} controls>
     </video>
  <div className="card-body">
    <h5 className="card-title">{props.filename}</h5>
    
    <a href={props.fileurl} className="btn btn-primary">Download</a>
  </div>
</div>
    </>
  )
}

export default VideoCard