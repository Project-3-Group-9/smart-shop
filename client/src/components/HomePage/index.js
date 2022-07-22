import React, { useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom';
import Categories from '../Categories';
function Homepage() {
    return(
        <>
    <section>
        <ul className="d-flex list-unstyled justify-content-center p-4 bg-light">
        <li className="mx-4">Products up to 90% off</li>
        <li className="mx-4">Free shipping on orders $50+</li>
        <li className="mx-4">1 month Gurantee</li>
        </ul>
    </section>
      <section className='text-center bg-warning p-2'>
    <h1>Buy 50$ , Get 10$ FREE Products</h1>
  </section>
  <Categories/>
  <Categories/>
  <Categories/>
  <Categories/>
  <Categories/>
  <Categories/>
  </>
    )
}
export default Homepage;