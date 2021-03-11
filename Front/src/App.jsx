import React from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer.jsx"
import Home from "./components/Home"
import SingleProduct from "./components/SingleProduct.jsx"
import SearchResults from "./components/SearchResults"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import Cart from "./components/Cart.jsx"

import { Route, Switch } from "react-router"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main-container">
          <Switch>
            <Route path="/products/:id" render={({match}) => <SingleProduct match={match}/>} />
            <Route path="/search" render={() => <SearchResults />} />
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
}
