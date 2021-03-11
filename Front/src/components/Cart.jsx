import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

const Cart = () => {
  const currentCartItems = useSelector((state) => state.currentCartItems)
  const [total, setTotal] = useState(0)

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
      {currentCartItems.map((cartItem, index) => (
        <>
          <div key={index} className="cart-item">
            <div className="column-1">
              <img className="cart-product-picture" src={cartItem.urlPicture} />
              {cartItem.name}
            </div>
            <div className="column-2">{"$" + cartItem.price}</div>
            <div className="column-3">
              <input type="text" value={cartItem.quantity} />
              <img className="cart-delete-icon" src="icons/delete.png"></img>
            </div>
            <div className="column-4">
              {"$" + cartItem.price * cartItem.quantity}
            </div>
          </div>
          <hr />
        </>
      ))}
      <div className="cart-total">
        <div className="cart-total-amount">
          Order Total: $
          {currentCartItems && currentCartItems.reduce(
              (accumulator, currentValue) =>
                accumulator + Number(currentValue.price) * Number(currentValue.quantity), 0
            )}
        </div>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
