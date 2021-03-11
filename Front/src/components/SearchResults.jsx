import React from "react"

const SearchResults = () => {
  const products = [
    {
      name: "Berry Bros. & Rudd Gavi di Gavi",
      brand: "Roberto Sarotto",
      price: "$25",
    },
    {
      name: "Berry Bros. & Rudd Gavi di Gavi",
      brand: "Roberto Sarotto",
      price: "$25",
    },
    {
      name: "Berry Bros. & Rudd Gavi di Gavi",
      brand: "Roberto Sarotto",
      price: "$25",
    },
    {
      name: "Berry Bros. & Rudd Gavi di Gavi",
      brand: "Roberto Sarotto",
      price: "$25",
    },
    {
      name: "Berry Bros. & Rudd Gavi di Gavi",
      brand: "Roberto Sarotto",
      price: "$25",
    },
    {
      name: "Berry Bros. & Rudd Gavi di Gavi",
      brand: "Roberto Sarotto",
      price: "$25",
    },
    {
      name: "Berry Bros. & Rudd Gavi di Gavi",
      brand: "Roberto Sarotto",
      price: "$25",
    },
  ]
  return (
    <>
      <div className="results-title">Search Results</div>
      <div className="results-container">
        {products.map((product) => (
          <div className="single-result">
            <div className="picture-container">
              <img src="https://media.bbr.com/s/bbr/20198117656-ms?img404=Default_Wine&$deskPDP$" />
            </div>
            <hr />
            <div className="single-result-specs">
              <div className="single-result-name">{product.name}</div>
              <div className="single-result-brand">{product.brand}</div>
              <hr />
              <div className="single-result-price">{product.price}</div>
            </div>
            <button className="add-to-cart-results">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchResults
