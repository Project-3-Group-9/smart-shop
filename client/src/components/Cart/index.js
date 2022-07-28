import React, { useEffect, useState } from 'react';
import { NavLink,Link, useSearchParams } from 'react-router-dom';
import { useMutation,useQuery } from '@apollo/client';
import { QUERY_ORDERS} from '../../utils/queries';
import { ADD_ORDER} from '../../utils/mutations';
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";
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
  const[total,setTotal]=useState(0);
  const [addOrder, { error }] = useMutation(ADD_ORDER);
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  let sum = 0;
  var sumTotal;
  cart.forEach((item,index)=>{
   sum = sum + item.price;
   sumTotal = Math.round(sum);
  //  setTotal(sum);
  });
  var discount =0;
  if (sumTotal> 50){
   discount = 10
  }else{
    discount = 0;
  }
  const handleClick = async event => {
    function myFunction(item,index){
      let itemName = JSON.stringify(item.name);
      const { data } = addOrder({variables: {name:itemName,price:item.price}});
    }
    cart.forEach(myFunction);
    localStorage.setItem("cart","[]")
    };
    const handleDelete = (name) => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      const result = cart.filter(item=>item.name !== name);
      console.log(result)
      localStorage.setItem("cart", JSON.stringify(result));
      navigate("/cart");
      };
    
   
    return(
<section className='m-5'>
<h1>We've Got You!</h1>
      <h2>Here Are Your Items</h2>
      <table class="table table-hover p-5">
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
            <button class="btn btn-outline-danger" 
            style={{fontSize:"20px",fontWeight:"700",height:"30px",paddingTop:"0px"}}
             onClick={() => {
              handleDelete(items.name);
            }}
            >x</button></th>
          </tr>
             
          ))}
          <tr>
          <th scope="col"></th>
          <th scope="col">Discount</th>
          <th scope="col"> $ {discount}</th>
          </tr>
          <tr>
          <th scope="col"></th>
          <th scope="col">Total</th>
          <th scope="col"> $ {sumTotal - discount}</th>
          </tr>
       </tbody>
      </table>
      <Link to="/" className='text-decoration-none text-black'>
      <button type="button" class="btn btn-danger mx-3" id="continueBrowsing">
        Continue browsing
      </button>
      </Link>
      <button 
      onClick={() => setToggle(!toggle)}
          type="button" class="btn btn-danger mx-3" id="purchasesHistory">
        Purchases history
      </button>
      <button onClick={() => {
            handleClick();
          }}
          type="button" class="btn btn-danger mx-3" id="confirmPurchase">
        Confirm purchase!
      </button>
{toggle && (
  <>
      <div id="purchasesDiv">
        <h1 class="mt-5">Purchases history</h1>
        <table class="table table-hover p-5">
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
      <div
        class="modal fade"
        id="purchaeConfirmationModal"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        role="dialog"
        aria-labelledby="purchaeConfirmationModal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="purchaeConfirmationModal">
                Purchase confirmation
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Payment received.</p>
              <p>Enjoy your purchase!!</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </>    
)}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTst0bPCetb2YqQwuNRqVpwRTkoLozhhlyKCA&usqp=CAU" class="d-block w-40 p-3" alt="..."></img>
</section>
    )
}

export default Cart;