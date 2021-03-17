import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentProduct } from '../store/currentProduct'

const AdminProducts = () => {
  const [products, setProducts] = useState("loading");
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    axios
      .get("/api/products/")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
    return () => setProducts("loading");
  }, []);

  React.useEffect(() => {}, [products]);

  const handleEdit = (e, product) => {
    e.preventDefault();
    localStorage.setItem('currentProduct', JSON.stringify(product));
    history.push(`/admin/product/edit`);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`/api/products/admin/delete/${id}/${currentUser.isAdmin}`)
      .then(() => setProducts(products.filter((product) => product.id != id)));
  };
  console.log(currentUser);
  return (
    <>
      {products === "loading" ? (
        <div className="loader"></div>
      ) : (
        <>
        <Link to={`/admin/products/${null}`}>Add product</Link>
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
                  className="add-to-cart-results"
                  onClick={(e) => handleEdit(e, product)}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handleDelete(e, product.id)}
                  className="add-to-cart-results"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AdminProducts;