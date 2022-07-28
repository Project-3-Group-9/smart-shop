import React, { useEffect } from 'react';
function Footer() {
    return(
<footer className="p-2 p-md-5 bg-dark">

      <address style={{fontSize:"20px"}} >
        <ul className=" d-md-flex justify-content-between list-unstyled">
        <li><a href="mailto:satwinder47@outlook.com" className="contact-form">
        Email@outlook.com
          </a></li>
        <li><a href="tel:2222222222" className="contact-form">
        (289) 222-222</a></li>
        <li><a href="https://github.com/Project-3-Group-9/smart-shop/" className="contact-form" target='blank'>
        Git-hub</a></li>
        <li><a href="" className="contact-form"> 
        Heroku</a></li>
        </ul>
      </address>
      <div className="contact-end">Thanks for visiting our site</div>
      <div className="contact-end">&copy; Smart Shop inc.</div>
      </footer>
      )
}

export default Footer;