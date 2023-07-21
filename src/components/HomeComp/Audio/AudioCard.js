import React from 'react'

function AudioCard(props) {
  return (
    <>
    <div className="card mx-3" style={{width:"18rem"}} >
    <audio src={props.fileurl} className='my-2 ml-2 '  style ={{width:"17rem"}} controls />
  <div className="card-body">
    <h5 className="card-title">{props.filename}</h5>
    
    <a href={props.fileurl} className="btn btn-primary">Download</a>
  </div>
</div>
    </>
  )
}

export default AudioCard