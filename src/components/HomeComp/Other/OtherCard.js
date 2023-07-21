import React from 'react'

function OtherCard(props) {
  return (
    <>
    <div className="card m-5" style={{width:"18rem"}} >
    <img style={{width:"10rem", marginLeft:"2rem"}}  srcSet="data:image/jpeg;base64,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" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.filename}</h5>
    
    <a href={props.fileurl} className="btn btn-primary">Download</a>
  </div>
</div>
    </>
  )
}

export default OtherCard