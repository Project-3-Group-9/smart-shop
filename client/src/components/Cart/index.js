import React, { useEffect, useState } from 'react';
import { NavLink,Link, useSearchParams } from 'react-router-dom';
import { useMutation,useQuery } from '@apollo/client';
import {QUERY_ORDERS} from '../../utils/queries';
import Auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function Cart() {
  var profileEmail = Auth.getProfile();
    var tempEmail =profileEmail.data.email
  const [toggle, setToggle] = useState(false)
  const { loading, data } = useQuery(QUERY_ORDERS,{
    variables:{email:tempEmail}
  });
  const orderData = data?.user || [];
  console.log("orders");
  console.log(orderData.orders);
  const[searchparams] =useSearchParams();
  console.log(searchparams.get("id"));
  let navigate = useNavigate();
  const[hide,setHide]=useState(false);

  let cart = localStorage.getItem("cart")
  let sum = 0;
  var sumTotal = 0; 
  if (cart != "" && cart != null){
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((item,index)=>{
    sum = sum + item.price;
    sumTotal = Math.round(sum);
  });
  }
  
 
 
  const handleClick = async event => {
    navigate("/checkout");
    };
    const handleDelete = (name) => {
      if (cart != "" && cart != null){
        cart = JSON.parse(localStorage.getItem("cart"));
        const result = cart.filter(item=>item.name !== name);
        console.log(result)
        localStorage.setItem("cart", JSON.stringify(result));
        
      }
      navigate("/cart");
      };
   
    return(
<section className='m-5'>
{sumTotal > 0 ? (
  <>
<h1>We've Got You!</h1>
      <h2>Here Are Your Items</h2>
      <table className="table table-hover p-5">
        <thead>
          <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
          </thead>
          <tbody id="cartTableBody">
          {cart.map((items,key) =>(
              <tr>
          <th scope="col">{key+1}</th>
          <th scope="col">{items.name}</th>
          <th scope="col">{items.price}</th>
          <th scope="col">
            <button className="btn btn-outline-danger" 
            style={{fontSize:"20px",fontWeight:"700",height:"30px",paddingTop:"0px"}}
             onClick={() => {
              handleDelete(items.name);
            }}
            >x</button></th>
          </tr>
          ))}
          <tr>
          <th scope="col"></th>
          <th scope="col">Total</th>
          <th scope="col"> $ {sumTotal}</th>
          </tr>
          </tbody>
      </table>
      </>    
):( <h2>Currently no items in your cart!</h2>)}
      <Link to="/" className='text-decoration-none text-black'>
      <button type="button" className="btn btn-danger mx-3" id="continueBrowsing">
        Continue browsing
      </button>
      </Link>
      <button onClick={() => {
           setToggle(true);
          }} type="button" className="btn btn-danger mx-3" id="purchasesHistory">
        Purchases history
      </button>

      {sumTotal > 0 && (
        <>
      <button onClick={() => {
            handleClick();
          }}
          type="button" className="btn btn-danger mx-3" id="confirmPurchase">
        Checkout
      </button>
      </>
      )}
      {toggle && (
  <>
  {Auth.loggedIn()  && (
    <>
      <div id="purchasesDiv">
        <h1 className="mt-5">Purchases history</h1>
        <table className="table table-hover p-5">
          <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {orderData.orders.map((items,key) =>(
             <tbody id="cartTableBody">
              <tr>
          <th scope="col">{key+1}</th>
          <th scope="col">{items.name}</th>
          <th scope="col">{items.price}</th>
          </tr>
             </tbody>
          ))}
        </table>
      </div>
      </>
      )}
      {/* <div
        className="modal fade"
        id="purchaeConfirmationModal"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        role="dialog"
        aria-labelledby="purchaeConfirmationModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="purchaeConfirmationModal">
                Purchase confirmation
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Payment received.</p>
              <p>Enjoy your purchase!!</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
      </>    
)}
    
</section>
    )
}

export default Cart;