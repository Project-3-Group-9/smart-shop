import React, { useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom';
import Categories from '../Categories';
// { name: 'Bedroom' },
// { name: 'Family Room' },
// { name: 'Dining Room' },
// { name: 'Kitchen' },
// { name: 'Bathroom' },
// { name: 'Backyard' }
// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS} from '../../utils/queries';
function Homepage() {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const product = data?.products || [];
  const BedroomData = product.filter(prod => prod.category.name === "Bedroom")
  const FaimilyData = product.filter(prod => prod.category.name === "Family Room")
  const DinigData = product.filter(prod => prod.category.name === "Dining Room")
  const KitchenData = product.filter(prod => prod.category.name === "Kitchen")
  const BathroomData = product.filter(prod => prod.category.name === "Bathroom")
  const BackyardData = product.filter(prod => prod.category.name === "Backyard")
 console.log("result");
  // const loggedIn = Auth.loggedIn();
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
  <Categories homedata={BedroomData} category="Kitchen"/>
  <Categories homedata={FaimilyData} category="Family Room"/>
  <Categories homedata={DinigData} category="Dining Room"/>
  <Categories homedata={KitchenData} category="Kitchen"/>
  <Categories homedata={BedroomData} category="Bathroom"/>
  <Categories homedata={BackyardData} category="Backyard"/>
  </>
    )
}
export default Homepage;