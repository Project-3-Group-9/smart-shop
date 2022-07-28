import React, { useEffect } from 'react';
function Footer() {
    return(
<footer className="p-2 p-md-5 bg-dark">

      <address style={{fontSize:"20px"}} >
        <ul className=" d-md-flex justify-content-between list-unstyled">
        <li><a href="mailto:satwinder47@outlook.com" className="text-white text-decoration-none">
        Email@outlook.com
          </a></li>
        <li><a href="tel:2222222222" className="text-white text-decoration-none">
        (289) 222-222</a></li>
        <li><a href="" className="text-white text-decoration-none">
        Git-hub</a></li>
        <li><a href="" className="text-white text-decoration-none"> 
        Heroku</a></li>
        </ul>
      </address>
      <div className="text-center text-white">Thanks for visiting our site</div>
      <div className="text-center text-white">&copy; Smart Shop inc.</div>
  </footer>
    )
}

export default Footer;