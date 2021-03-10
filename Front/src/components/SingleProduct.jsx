import React, { useState } from "react"

const SingleProduct = () => {
  return (
    <>
      <div>
        <div className="single-product-container">
          <div className="single-product-picture">
            <img src="https://media.bbr.com/s/bbr/20198117656-ms?img404=Default_Wine&$deskPDP$" />
          </div>
          <div className="single-product-specs">
            {/* Name */}
            <div className="name">
              Berry Bros. & Rudd Gavi di Gavi
            </div>
            <div className="single-product-price">
              {/* Price:  */}
              $25
            </div>
            <hr />
            {/* Description: */}
            <div className="single-product-description">
              Our own-label Gavi is made by Roberto Sarotto. Produced from
              Cortese grapes, Gavi is the quintessential Northern Italian white,
              famed for its delicacy and finesse. This textbook example offers
              elegant aromas of white flowers and green pear. The palate is
              focused and energetic, with generous layers of fresh apple and
              lemon peel, while the white tufo soils of the vineyards impart a
              beautiful, refreshing minerality to the finish. Perfect with
              shellfish, white fish or delicate green vegetable dishes.
            </div>
            <div className="specs">
              <div className="single-spec">
                <img
                  className="single-product-icon"
                  src="icons/guarantee.png"
                ></img>
                {/* Brand:  */}
                Roberto Sarotto
              </div>
              <div className="single-spec">
                <img
                  className="single-product-icon"
                  src="icons/location.png"
                ></img>
                {/* Region:  */}
                Piedmont
              </div>
              <div className="single-spec">
                <img
                  className="single-product-icon"
                  src="icons/worldwide.png"
                ></img>
                {/* Country: */}
                Italy
              </div>
              <div className="single-spec">
                <img
                  className="single-product-icon"
                  src="icons/grapes.png"
                ></img>
                {/* Type:  */}
                Cortese
              </div>
              <div className="single-spec">
                <img
                  className="single-product-icon"
                  src="icons/calendar1.png"
                ></img>
                2019
              </div>
              <div className="single-spec">
                <img className="single-product-icon" src="icons/wine.png"></img>
                {/* Size:  */}
                750ml
              </div>
            </div>
            <button className="change-quantity">-</button>
            <input className="quantity" type="text" value="1" />
            <button className="change-quantity">+</button>
            <button className="add-to-cart">Add to Cart</button>
            {/* <div>Discount:</div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
