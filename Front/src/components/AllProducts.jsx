import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToStoreCart } from "../store/currentCartItems";
import { toggleRefresh } from "../store/navBarRefresh";

const AllProducts = () => {
  const [products, setProducts] = useState("loading");
  const currentCart = useSelector((state) => state.currentCart);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [notLoggedCart, setnotLoggedCart] = useState();
  const [variable, setVariable] = useState(1);

  useEffect(() => {
    axios
      .get("/api/products/")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
    return () => setProducts("loading");
  }, []);

  useEffect(() => {
    localStorage.getItem("notLoggedCart")
      ? setnotLoggedCart(JSON.parse(localStorage.getItem("notLoggedCart")))
      : setnotLoggedCart([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("notLoggedCart", JSON.stringify(notLoggedCart));
  }, [notLoggedCart, variable]);


  const addToCart = function (product) {
    console.log(variable)
    let indice;
    if (!currentUser) {
      console.log('NOTLOGGEDCART', notLoggedCart)
      console.log('PRODUCT', product)
      notLoggedCart.map((cartItem, index) => {
        console.log('CARTITEM', cartItem)
        if (cartItem.productId == product.id) {
          console.log('LO HIZO')
          indice = index;
        }
      })
      console.log(indice)
      if(indice == undefined){
      setnotLoggedCart((state) => [...state, {
        name: product.name,
        urlPicture: product.urlPicture,
        price: product.price,
        quantity: 1,
        productId: product.id,

      }]);
    } else {
      console.log(notLoggedCart[indice])
      notLoggedCart[indice].quantity += 1
      setVariable(variable + 1)
    }
      dispatch(toggleRefresh());
    } else
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
        );
  };

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
  );
};

export default AllProducts;
