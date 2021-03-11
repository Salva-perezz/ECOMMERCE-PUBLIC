import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-title">Your Shopping Cart</div>
      <hr />
      <div className="cart-column-labels">
        <div className="column-1">Item</div>
        <div className="column-2">Price</div>
        <div className="column-3">Quantity</div>
        <div className="column-4">Sub-total</div>
      </div>
      <hr />
      <div className="cart-item">
        <div className="column-1">
          <img
            className="cart-product-picture"
            src="https://media.bbr.com/s/bbr/20198117656-ms?img404=Default_Wine&$deskPDP$"
          />
          Berry Bros. & Rudd Gavi di Gavi
        </div>
        <div className="column-2">$25</div>
        <div className="column-3">
          <input type="text" value="2" />
          <img className="cart-delete-icon" src="icons/delete.png"></img>
        </div>
        <div className="column-4">$50</div>
      </div>
      <hr />
      <div className="cart-item">
        <div className="column-1">
          <img
            className="cart-product-picture"
            src="https://media.bbr.com/s/bbr/20198117656-ms?img404=Default_Wine&$deskPDP$"
          />
          Berry Bros. & Rudd Gavi di Gavi
        </div>
        <div className="column-2">$25</div>
        <div className="column-3">
          <input type="text" value="2" />
          <img className="cart-delete-icon" src="icons/delete.png"></img>
        </div>
        <div className="column-4">$50</div>
      </div>
      <hr />
      <div className="cart-item">
        <div className="column-1">
          <img
            className="cart-product-picture"
            src="https://media.bbr.com/s/bbr/20198117656-ms?img404=Default_Wine&$deskPDP$"
          />
          Berry Bros. & Rudd Gavi di Gavi
        </div>
        <div className="column-2">$25</div>
        <div className="column-3">
          <input type="text" value="2" />
          <img className="cart-delete-icon" src="icons/delete.png"></img>
        </div>
        <div className="column-4">$50</div>
      </div>
      <hr />
      <div className="cart-total">
        <div className="cart-total-amount">Order Total: $50</div>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
