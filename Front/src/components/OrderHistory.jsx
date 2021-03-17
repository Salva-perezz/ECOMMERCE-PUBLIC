import axios from "axios"
import React, { useState } from "react"
import { useSelector } from "react-redux"

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([])
  const currentUser = useSelector((state) => state.currentUser)

  React.useEffect(() => {
    if (currentUser) axios
        .get("/api/transactions/" + currentUser.id)
        .then(({ data }) => {
          console.log(data)
          setOrderHistory(data)
        })
        .catch((err) => console.log(err))
    return () => setOrderHistory([])
  }, [currentUser])

  return (
    <div className="order-history-container">
      {console.log(orderHistory.length)}
      {orderHistory.length > 0 &&
        orderHistory.map((order, index) => (
          <div key={index}>
            <div>
              {order.transaction_items.map((item, index) => (
                <div key={index} className="order-history-single-order">
                  <img src={item.product.urlPicture}></img>
                  <div>{item.product.name}</div>
                  <div>{item.product.price}</div>
                  <div>{item.quantity}</div>
                  <div>{item.quantity * item.product.price}</div>
                </div>
              ))}
            </div>
            <div>
              Order Total: $
              {order.transaction_items.reduce(
                (accumulator, item) =>
                  accumulator +
                  Number(item.product.price) * Number(item.quantity),
                0
              )}
            </div>
            <div className="order-address">
              Order Address:
              <div> {order.address.address}</div>
              <div> {order.address.city}</div>
              <div> {order.address.country}</div>
              <div>{order.address.zipCode}</div>
            </div>
            <div className="order-payment">
              Payment:
              <div> {order.payment.cardType}</div>
              <div> {order.payment.expirationMonth}</div>
              <div> {order.payment.expirationYear}</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default OrderHistory
