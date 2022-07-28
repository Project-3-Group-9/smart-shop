import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown,faUserTie} from '@fortawesome/free-solid-svg-icons'
import Auth from "../../utils/auth";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/smart.jpeg' ;
function Nav() {
    function handleClick(){
        alert("serched")
    }
    return(
        <header className="container-fluid">
          <div className="row">
          <div className="col-6 my-4 col-md-3 col-lg-3 m-0 p-0 order-md-1">
          <div>
          <Link to="/" className='text-decoration-none text-black'>
              <img src={logo} style={{height:"60px",width:"160px",}}></img>
              </Link>
          </div>
          </div>
          <nav className="col-6 my-4 col-md-3 col-lg-3 my-2 order-md-3">
         <ul className="d-flex list-unstyled justify-content-end">
            <li className="p-1 mx-2 text-decoration-none" style={{fontSize:"25px"}}>
            {Auth.loggedIn() ? (
            <Link to="/" onClick={() => Auth.logout()} className='text-decoration-none text-black'><FontAwesomeIcon icon={faUserTie} 
            className="text-danger mx-1 "
            style={{fontSize:"36px"}}/>Log Out
            </Link>):
            (
                <Link to="/login" className='text-decoration-none text-black'><FontAwesomeIcon icon={faUserTie} 
                className="text-danger mx-1 "
                style={{fontSize:"36px"}}/>Log In
                </Link>  
            )}
            </li>
            <li>
           {Auth.loggedIn() ? (<Link to={{
           pathname: '/cart',
        state: [{id: 1, name: 'Ford', color: 'red'}]
           }}>
            <FontAwesomeIcon icon={faCartArrowDown} 
            className="text-danger "
            style={{fontSize:"42px"}}/>
            </Link>
       ):(<Link to={{
       pathname: '/login',
      state: [{id: 1, name: 'Ford', color: 'red'}]
       }}>
     <FontAwesomeIcon icon={faCartArrowDown} 
     className="text-danger mt-1"
     style={{fontSize:"40px"}}/>
     </Link>
     )}
            </li>
         </ul>
         </nav>
          <div className="col-12 my-4 col-md-6 col-lg-6 order-md-2">
         <div class="input-group">
         <input type="search" 
         className="form-control rounded" 
         style={{height:"50px"}}
         placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
         <button type="button" 
         onClick={()=>handleClick()}
         className="btn btn-outline-danger">search</button>
         </div>
         </div>
         
          </div>
        </header>
    )
}
export default Nav;