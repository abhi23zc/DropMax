import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Nav(props) {
  const navigate  = useNavigate()
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DropMax</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Menu</a>
        </li>
        {props.login ? <>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        </>: 
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/upload">Upload</Link>
      </li>
        }
        
        {props.signup ? <>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/signup">Sign Up</a>
      </li>
        </>:
        <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/download">Download</Link>
        </li>
        }
  
  
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={()=>{
          // let user = localStorage.getItem("uid");
          localStorage.removeItem('uid')
          navigate("/login");
        }} type="submit">SignOut</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav