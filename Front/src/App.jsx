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
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from "./store/currentUser";

import { Route, Switch } from "react-router"
import axios from "axios"

const App = () => {
  
  const currentUser = useSelector(state => state.currentUser);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {

    if(!currentUser && token){
      axios.post('/api/users/private', { token })
      .then(user => dispatch(getCurrentUser({ id: user.data.id })))
    }
    console.log(currentUser)

  }, [])
  



    return (
      <div>
        <NavBar />
        <div className="main-container">
          <Switch>
            <Route path="/products/:id" render={({match}) => <SingleProduct match={match}/>} />
            <Route path="/products/" render={() => <AllProducts />} />
            <Route path="/search" render={({match}) => <SearchResults match={match}/>} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/cart" render={() => <Cart />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
}

export default App;