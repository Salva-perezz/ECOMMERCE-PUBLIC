import React, { useEffect } from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer.jsx"
import Home from "./components/Home"
import SingleProduct from "./components/SingleProduct.jsx"
import AllProducts from "./components/AllProducts.jsx"
import SearchResults from "./components/SearchResults"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import Cart from "./components/Cart.jsx"
import Checkout from "./components/Checkout.jsx"
import AdminProduct from "./components/AdminProduct.jsx"
import AdminUsers from "./components/AdminUsers.jsx"
import AdminCategories from "./components/AdminCategories.jsx"
import { useSelector, useDispatch } from "react-redux"
import { getCurrentUser } from "./store/currentUser"
import { loadStoreCart } from "./store/currentCart"
import { setTypes } from "./store/types"
import { setYears} from "./store/years"
import { setCountries } from "./store/countries"
import { loadStoreCartItems } from "./store/currentCartItems"
import { Route, Switch } from "react-router"
import axios from "axios"
import AdminProducts from "./components/AdminProducts"

const App = () => {
  const currentUser = useSelector((state) => state.currentUser)
  const currentCart = useSelector((state) => state.currentCart)
  const types = useSelector((state) => state.types)
  const years = useSelector((state) => state.years)
  const countries = useSelector((state) => state.countries)
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()

  useEffect(() => {
    if (!currentUser && token) {
      axios
        .get(`/api/users/private/${token}`)
        .then((user) => {
          console.log(user)
          dispatch(getCurrentUser({ id: user.data.id, isAdmin: user.data.isAdmin }))
        })
    }
    let axios1 = axios.get(`/api/categories/types`);
    let axios2 = axios.get(`/api/categories/countries`);
    let axios3 = axios.get(`/api/categories/years`);

    Promise.all([axios1, axios2, axios3])
    .then(values => {
      dispatch(setTypes(values[0].data));
      dispatch(setCountries(values[1].data));
      dispatch(setYears(values[2].data));
    })
  }, [])

  useEffect(() => {
    if (currentUser && currentCart === "loading")
      axios
        .post("/api/transactions", {
          userId: currentUser.id,
        })
        .then((cart) => {
          dispatch(loadStoreCart({ id: cart.data.id }))
        });
  }, [currentUser]);

  useEffect(() => {
    if (currentCart !== "loading") {
      axios
        .put("/api/transactionitems/load", {
          transactionId: currentCart.id,
        })
        .then((cartItems) => {
          dispatch(loadStoreCartItems(cartItems.data))
        })
    }
  }, [currentCart])

  return (
    <div>
      <NavBar />
      <div className="main-container">
        <Switch>
          <Route path="/admin/product/edit" render={() => <AdminProduct />} /> {/* Salva y Mar */}
          <Route path="/admin/products" render={() => <AdminProducts />} />
          <Route path="/admin/users" render={() => <AdminUsers />} /> {/* Salva y Mar */}
          <Route path="/admin/categories" render={() => <AdminCategories />} /> {/* Salva y Mar */}
          <Route
            path="/products/:id"
            render={({ match }) => <SingleProduct match={match} />}
          />
          <Route path="/products/" render={() => <AllProducts />} />
          <Route
            path="/search"
            render={({ match }) => <SearchResults match={match} />}
          />
          <Route path="/register" render={() => <Register />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/checkout" render={() => <Checkout />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
