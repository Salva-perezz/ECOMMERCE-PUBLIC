import React, { useState } from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToStoreCart } from "../store/currentCartItems"

const AllProducts = () => {
  const [products, setProducts] = useState("loading")
  const currentCart = useSelector((state) => state.currentCart)
  const currentUser = useSelector((state) => state.currentUser)
  const dispatch = useDispatch()
  const history = useHistory()

  React.useEffect(() => {
    axios
      .get("/api/products/")
      .then(({ data }) => {
        setProducts(data)
      })
      .catch((err) => console.log(err))
    return () => setProducts("loading")
  }, [])

  const addToCart = function (product) {
    if(!currentUser) history.push("/login")
    else axios
      .post("/api/transactionitems", {
        transactionId: currentCart.id,
        productId: product.id,
        quantity: 1,
      })
      .then((transactionItem) =>       
          dispatch(
          addToStoreCart({
            name: product.name,
            urlPicture: product.urlPicture,
            price: product.price,
            quantity: 1,
            productId: product.id,
            id: transactionItem.data.id
          })
        )
      )
  }

  return (
    <>
      {products === "loading" ? (
        <div className="loader"></div>
      ) : (
        <div className="results-container">
          {products.map((product, index) => (
            <div key={index} className="single-result">
              <div className="picture-container">
                <Link to={`/products/${product.id}`}>
                  <img src={product.urlPicture} />
                </Link>
              </div>
              <hr />
              <div className="single-result-specs">
                <div className="single-result-name-and-brand">
                  <div className="single-result-name">{product.name}</div>
                  <div className="single-result-brand">{product.brand}</div>
                </div>
                <hr />
                <div className="single-result-price">{"$" + product.price}</div>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart-results"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default AllProducts
