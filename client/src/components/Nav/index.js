import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown,faUserTie} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom';
import logo from '../../assets/images/logo/smart.jpeg' ;
function Nav() {
    return(
        <header className="container-fluid">
          <div className="row">
          <div className="col-12 my-4 col-md-6 col-lg-3 m-0 p-0">
          <div>
              <img src={logo} style={{height:"66px",width:"180px",}}></img>
          </div>
          </div>
          <div className="col-12 my-4 col-md-6 col-lg-5 ">
         <div class="input-group">
         <input type="search" 
         className="form-control rounded" 
         style={{height:"50px"}}
         placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
         <button type="button" className="btn btn-outline-danger">search</button>
         </div>
         </div>
         <nav className="col-12 my-4 col-md-6 col-lg-4 my-2">
         <ul className="d-flex list-unstyled justify-content-end">
            <li className="p-1 mx-2 text-decoration-none" style={{fontSize:"25px"}}>
            <Link to="/login" className='text-decoration-none text-black'><FontAwesomeIcon icon={faUserTie} 
            className="text-danger mx-1 "
            style={{fontSize:"30px"}}/>Login
            </Link>
            </li>
            <li>
            <Link to="/cart">
            <FontAwesomeIcon icon={faCartArrowDown} 
            className="text-danger"
            style={{fontSize:"48px"}}/>
            </Link>
            </li>
         </ul>
         </nav>
          </div>
        </header>
    )
}
export default Nav;