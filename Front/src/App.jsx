import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SingleProduct from "./components/SingleProduct.jsx"
import SearchResults from "./components/SearchResults"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"

import { Route, Switch } from "react-router"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main-container">
          <Switch>
            <Route path="/products" render={() => <SingleProduct />} />
            <Route path="/search" render={() => <SearchResults />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
          </div>
      </div>
    )
  }
}
