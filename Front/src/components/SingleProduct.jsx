import React, { useState } from "react"

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = function () {
    setQuantity((quantity) => quantity + 1)
  }

  const decreaseQuantity = function () {
    if (quantity >= 1) setQuantity((quantity) => quantity - 1)
  }

  props.match.params.id

  const product = {
    name: "Berry Bros. & Rudd Gavi di Gavi",
    brand: "Roberto Sarotto",
    region: "Piedmont",
    country: "Italy",
    type: "Cortese",
    description:
      "Our own-label Gavi is made by Roberto Sarotto. Produced from Cortese grapes, Gavi is the quintessential Northern Italian white, famed for its delicacy and finesse. This textbook example offers elegant aromas of white flowers and green pear. The palate is focused and energetic, with generous layers of fresh apple and lemon peel, while the white tufo soils of the vineyards impart a beautiful, refreshing minerality to the finish. Perfect with shellfish, white fish or delicate green vegetable dishes.",
    year: "2019",
    price: "$25",
    size: "750ml",
    stock: "10",
    discount: "20%",
    urlPicture: "https://media.bbr.com/s/bbr/20198117656-ms",
  }
  return (
    <>
      <div>
        <div className="single-product-container">
          <div className="single-product-picture">
            <img src={product.urlPicture} />
          </div>
          <div className="single-product-specs">
            <div className="name">{product.name}</div>
            <div className="single-product-price">{product.price}</div>
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
                {product.region}
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
                <img className="single-product-icon" src={__dirname + "icons/wine.png"}></img>
                {product.size}
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
            <button className="add-to-cart">Add to Cart</button>
            {/* <div>Discount:</div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
