import React, { useState } from "react"
import axios from "axios"
import { Link, useHistory, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToStoreCart } from "../store/currentCartItems"

const SearchResults = (props) => {
  const [products, setProducts] = useState("loading")
  const currentCart = useSelector((state) => state.currentCart)
  const currentUser = useSelector((state) => state.currentUser)
  const dispatch = useDispatch()
  const history = useHistory()

  // const products = [{name: "Pepe", price: 25, brand: "Pepe"}]

  const search = useLocation().search;
  const s = new URLSearchParams(search).get('s');

  React.useEffect(() => {
    axios
      .get(`/api/products/search?s=${s}`)
      // .get(`/api/search/${props.match.params.query}`)
      .then(({ data }) => {
        setProducts(data)
      })
      .catch((err) => console.log(err))
    return () => setProducts("loading")
  }, [s])

  const addToCart = function (product) {
    if (!currentUser) history.push("/login")
    else
      axios
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
              quantity: transactionItem.data.quantity,
              productId: product.id,
              id: transactionItem.data.id,
            })
          )
        )
  }

  return (
    <>
      {products === "loading" ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="results-title">Search Results</div>
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
                  <div className="single-result-price">
                    {"$" + product.price}
                  </div>
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
        </>
      )}
    </>
  )
}

export default SearchResults
