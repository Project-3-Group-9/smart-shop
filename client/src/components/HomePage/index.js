import React, { useEffect } from 'react';
// import { NavLink,Link } from 'react-router-dom';
import Categories from '../Categories';
import "../stylesheet.css"
function Homepage() {
    return(
        <>
    <section>
        <ul className="home-ul">
          <li >Products up to 90% off</li>
          <li >Free shipping on orders $50+</li>
          <li >1 month Gurantee</li>
        </ul>
    </section>
      <section className='home-main'>
    <h1>Buy 50$ , Get 10$ FREE Products</h1>
  </section>
  <Categories/>
  <Categories/>
  <Categories/>
  <Categories/>
  <Categories/>
  </>
    )
}
export default Homepage;