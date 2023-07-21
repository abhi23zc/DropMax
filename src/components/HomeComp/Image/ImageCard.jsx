import React from 'react'

function ImageCard(props) {
  return (
    <>
    <div className="card mx-3 my-3" style={{width:"18rem"}} >
  <img srcSet={props.fileurl}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.filename}</h5>
    
    <a href={props.fileurl} className="btn btn-primary">Download</a>
  </div>
</div>
    </>
  )
}

export default ImageCard