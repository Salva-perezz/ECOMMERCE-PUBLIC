import axios from "axios"
import React, { useState } from "react"
import { useSelector } from "react-redux"

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([])
  const currentUser = useSelector((state) => state.currentUser)

  React.useEffect(() => {
    if (currentUser)
      axios
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
              <div className="order-history-title">
                Order Date: {order.checkoutDate.slice(0, 10)}
              </div>
              <hr />
              <div className="order-history-labels">
                <div className="order-history-column-1">Item</div>
                <div className="order-history-column-2">Price</div>
                <div className="order-history-column-3">Quantity</div>
                <div className="order-history-column-4">Sub-total</div>
              </div>
              <hr />
              {order.transaction_items.map((item, index) => (
                <div key={index}>
                  <div className="order-history-single-item">
                    <div className="order-history-column-1">
                      <img
                        className="order-history-picture"
                        src={item.product.urlPicture}
                      ></img>
                      {item.product.name}
                    </div>
                    <div className="order-history-column-2">
                      ${item.product.price}
                    </div>
                    <div className="order-history-column-3">
                      {item.quantity}
                    </div>
                    <div className="order-history-column-4">
                      ${item.quantity * item.product.price}
                    </div>
                  </div>
                  <hr />
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
              Shipping Address:
              <div> {order.address.address}</div>
              <div> {order.address.city}</div>
              <div> {order.address.state}</div>
              <div> {order.address.country}</div>
              <div>{order.address.zipCode}</div>
            </div>
            <div className="order-payment">
              Payment Method:
              <div> {order.payment.cardType}</div>
              <div> {order.payment.ccNumber}</div>
              <div>Expiration Date: {order.payment.expirationMonth}/{order.payment.expirationYear}</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default OrderHistory
