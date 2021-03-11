import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const AllProducts = () => {
  const [products, setProducts] = useState("loading")

  React.useEffect(() => {
    axios
      .get("/api/products/")
      .then(({ data }) => {
        setProducts(data)
      })
      .catch((err) => console.log(err))
    return () => setProducts("loading")
  }, [])

  return (
    <>
      {products === "loading" ? (
        <div className="loader"></div>
      ) : (
        <div className="results-container">
          {products.map((product, index) => (
            <Link key={index} to={`/products/${product.id}`}>
              <div className="single-result">
                <div className="picture-container">
                  <img src={product.urlPicture} />
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
                <button className="add-to-cart-results">Add to Cart</button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default AllProducts
