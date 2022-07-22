import React, { useEffect } from 'react';
function Cart() {
    return(
<section className='m-5'>
<h1>We've Got You!</h1>
      <h2>Here Are Your Books</h2>
      <table class="table table-hover p-5">
        <thead>
          <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
          </thead>
        <tbody id="cartTableBody">
        </tbody>
      </table>
      <button type="button" class="btn btn-danger mx-3" id="continueBrowsing">
        Continue browsing
      </button>
      <button type="button" class="btn btn-danger mx-3" id="purchasesHistory">
        Purchases history
      </button>
      <button type="button" class="btn btn-danger mx-3" id="confirmPurchase">
        Confirm purchase!
      </button>

      <div id="purchasesDiv">
        <h1 class="mt-5">Purchases history</h1>
        <table class="table table-hover p-5">
          <thead>
            <tr>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody id="purchasesTableBody">
          </tbody>
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
              <p>Enjoy your reading!!</p>
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
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTst0bPCetb2YqQwuNRqVpwRTkoLozhhlyKCA&usqp=CAU" class="d-block w-40" alt="..."></img>
</section>
    )
}

export default Cart;