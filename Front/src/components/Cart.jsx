import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {
  removeFromStoreCart,
  changeQuantityInStoreCart,
  currentCartItemsReducer,
} from "../store/currentCartItems"
import { toggleRefresh } from "../store/navBarRefresh"


const Cart = () => {
  let currentCartItems = useSelector((state) => state.currentCartItems)
  const [total, setTotal] = useState(0)
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch()
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('notLoggedCart')));
  const [elEstornudoDeFede, setelEstornudoDeFede] = useState(1)

  !currentUser ? currentCartItems = items : null;

  React.useEffect(() => {
    localStorage.setItem('notLoggedCart', JSON.stringify(items))
  }, [elEstornudoDeFede])

  React.useEffect(() => {
    setTotal(
      currentCartItems &&
        currentCartItems.reduce(
          (accumulator, currentValue) =>
            accumulator +
            Number(currentValue.price) * Number(currentValue.quantity),
          0
        )
    )
  }, [currentCartItems])

  const removeFromCart = function (cartItem) {
    if(!currentUser){
      let varItems = items;
      let indice;
      varItems.map((item, index) => {
        if(item.productId == cartItem.productId){
          indice = index
        }
      });
      varItems.splice(indice, 1)
      setItems(varItems)
      setelEstornudoDeFede(elEstornudoDeFede + 1)
      dispatch(toggleRefresh());
    } else{
    axios
      .delete("/api/transactionitems/" + cartItem.id)
      .then(() =>
        dispatch(
          removeFromStoreCart({
            id: cartItem.id,
          })
        )
      )}
  }

  const changeQuantity = function (cartItem, quantity) {
    let { id, productId } = cartItem
    if (quantity && quantity > 0) {
      axios
        .put("/api/transactionitems/quantity", {
          id: id,
          quantity: quantity,
        })
        .then(() =>
          dispatch(
            changeQuantityInStoreCart({
              productId,
              quantity,
            })
          )
        )
    }
  }

  return (
    <>
      {currentCartItems && currentCartItems.length ? (
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
            <div key={index}>
              <div className="cart-item">
                <div className="column-1">
                  <img
                    className="cart-product-picture"
                    src={cartItem.urlPicture}
                  />
                  {cartItem.name}
                </div>
                <div className="column-2">{"$" + cartItem.price}</div>
                <div className="column-3">
                  <input
                    type="number"
                    onBlur={(e) => changeQuantity(cartItem, e.target.value)}
                    placeholder={cartItem.quantity}
                  />
                  <img
                    onClick={() => removeFromCart(cartItem)}
                    className="cart-delete-icon"
                    src="icons/delete.png"
                  ></img>
                </div>
                <div className="column-4">
                  {"$" + cartItem.price * cartItem.quantity}
                </div>
              </div>
              <hr />
            </div>
          ))}
          <div className="cart-total">
            <div className="cart-total-amount">Order Total: ${total}</div>
            <Link to={currentUser ? '/checkout' : '/login'}>
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty-page-container">
          <div className="empty-page-title">
            Your Cart Is Empty
            <Link to="/">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart