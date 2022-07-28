
import React, { useState } from 'react';
import { Redirect,Link, createSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import auth from '../../utils/auth';

function Categories(props) {
  let navigate = useNavigate();
  const[cart,setCart]=useState([]);
  
  const handleClick = (name,price) => {
    if(auth.loggedIn()){
      var storagecart = localStorage.getItem("cart") || [];
      if(storagecart != ""){
        storagecart = JSON.parse(localStorage.getItem("cart"));
      }
       
       let cart = {name,price};
       storagecart.push(cart);
       localStorage.setItem("cart", JSON.stringify(storagecart));
       navigate({
        pathname:"/cart",
        search: createSearchParams({
          id:"sunny"}).toString()
        });
    
    }
    else  {
      navigate('/login')
    }
  
  };
    return(
        <>
    <section className=" m-2">
        <h2 className="mx-4">{props.category}</h2>
        <div className='d-flex overflow-auto p-3 '>
        {props.homedata.map(category =>(
            <div className='mx-4 bg-light '>
        <img  src={require(`../../assets/categories/images/${category.image}`)}
        style={{height:"220px",width:"220px"}}
      ></img>
      <p className='d-block text-end mx-2'>{category.name}</p>
      <p className='d-block text-end mx-2'>Price:{category.price}</p>
      <p className='d-block text-end mx-2'>Stock:  {category.quantity}</p>
      <button onClick={() => {
            handleClick(category.name,category.price);
          }}
           name={category.name} class="btn btn-outline-danger" style={{width:"100%"}}>Add to cart</button>
      </div>
        ))}
        </div>
    </section>
  </>
    )
}
export default Categories;