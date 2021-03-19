import React, { useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addToStoreCart } from "../store/currentCartItems"
import { toggleRefresh } from "../store/navBarRefresh";

const SingleProduct = (props) => {
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState("loading")
  const currentCart = useSelector((state) => state.currentCart)
  const currentUser = useSelector((state) => state.currentUser)
  const [notLoggedCart, setnotLoggedCart] = useState();
  const [variable, setVariable] = useState(1);

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

  React.useEffect(() => {
    localStorage.getItem("notLoggedCart")
      ? setnotLoggedCart(JSON.parse(localStorage.getItem("notLoggedCart")))
      : setnotLoggedCart([]);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("notLoggedCart", JSON.stringify(notLoggedCart));
  }, [notLoggedCart, variable]);

  const addToCart = function () {
    let indice;
    if(!currentUser) {
      notLoggedCart.map((cartItem, index) => {
        if (cartItem.productId == product.id) {
          indice = index;
        }
      })
      if(indice == undefined){
      setnotLoggedCart((state) => [...state, {
        name: product.name,
        urlPicture: product.urlPicture,
        price: product.price,
        quantity: quantity,
        productId: product.id,
      }]);
    } else {
      notLoggedCart[indice].quantity += 1
      setVariable(variable + 1)
    }
      dispatch(toggleRefresh());
    }
    else {
      axios
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
