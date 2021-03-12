import React, { useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addToStoreCart } from "../store/currentCartItems"

const SingleProduct = (props) => {
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState("loading")
  const currentCart = useSelector((state) => state.currentCart)
  const currentUser = useSelector((state) => state.currentUser)

  const dispatch = useDispatch()
  const history = useHistory()

  const increaseQuantity = function () {
    setQuantity((quantity) => quantity + 1)
  }

  const decreaseQuantity = function () {
    if (quantity >= 1) setQuantity((quantity) => quantity - 1)
  }

  React.useEffect(() => {
    axios
      .get(`/api/products/${props.match.params.id}`)
      .then(({ data }) => {
        setProduct(data)
      })
      .catch((err) => console.log(err))
    return () => setProduct("loading")
  }, [])

  const addToCart = function () {
    if(!currentUser) history.push("/login")
    else axios
      .post("/api/transactionitems", {
        transactionId: currentCart.id,
        productId: product.id,
        quantity: quantity,
      })
      .then((transactionItem) =>
        dispatch(
          addToStoreCart({
            name: product.name,
            urlPicture: product.urlPicture,
            price: product.price,
            quantity: transactionItem.data.quantity,
            productId: product.id,
            id: transactionItem.data.id
          })
        )
      )
  }

  return (
    <>
      {product === "loading" ? (
        <div className="loader"></div>
      ) : (
        <div>
          <div className="single-product-container">
            <div className="single-product-picture">
              <img src={product.urlPicture} />
            </div>
            <div className="single-product-specs">
              <div className="name">{product.name}</div>
              <div className="single-product-price">{"$" + product.price}</div>
              <hr />
              <div className="single-product-description">
                {product.description}
              </div>
              <div className="specs">
                <div className="single-spec">
                  <img
                    className="single-product-icon"
                    src={__dirname + "icons/guarantee.png"}
                  ></img>
                  {product.brand}
                </div>
                <div className="single-spec">
                  <img
                    className="single-product-icon"
                    src={__dirname + "icons/location.png"}
                  ></img>
                  {product.region}
                </div>
                <div className="single-spec">
                  <img
                    className="single-product-icon"
                    src={__dirname + "icons/worldwide.png"}
                  ></img>
                  {product.country}
                </div>
                <div className="single-spec">
                  <img
                    className="single-product-icon"
                    src={__dirname + "icons/grapes.png"}
                  ></img>
                  {product.type}
                </div>
                <div className="single-spec">
                  <img
                    className="single-product-icon"
                    src={__dirname + "icons/calendar1.png"}
                  ></img>
                  {product.year}
                </div>
                <div className="single-spec">
                  <img
                    className="single-product-icon"
                    src={__dirname + "icons/wine.png"}
                  ></img>
                  {product.size * 10 + "ml"}
                </div>
              </div>
              <button
                onClick={() => decreaseQuantity()}
                className="change-quantity"
              >
                -
              </button>
              <input
                className="quantity"
                type="text"
                onChange={(event) => setQuantity(event.target.value)}
                value={quantity}
              />
              <button
                onClick={() => increaseQuantity()}
                className="change-quantity"
              >
                +
              </button>
              <button onClick={addToCart} className="add-to-cart">
                Add to Cart
              </button>
              {/* <div>Discount:</div> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleProduct
