import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import { getCurrentUser } from "../store/currentUser"
import { loadStoreCart } from "../store/currentCart"
import { clearStoreCart } from "../store/currentCartItems"
import CategoryDropdown  from "./CategoryDropdown"

const NavBar = () => {
  const currentCartItems = useSelector((state) => state.currentCartItems)
  const [searchQuery, setSearchQuery] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()
  const [localItems, setLocalItems] = useState(JSON.parse(localStorage.getItem('notLoggedCart')));
  const refresh = useSelector(state => state.refresh);

  useEffect(() => {
  }, [refresh])

  const token = localStorage.getItem("token")

  const handleChange = function (evt) {
    setSearchQuery(evt.target.value)
  }

  const handleSubmit = function (event) {
    event.preventDefault()
    setSearchQuery("")
    history.push("/search?q=" + searchQuery)
  }

  const handleLogout = function (event) {
    localStorage.removeItem('token')
    dispatch(getCurrentUser(""))
    dispatch(loadStoreCart("loading"))
    dispatch(clearStoreCart())
    history.push("/")
  }

  React.useEffect(() => {}, [token])

  return (
    <div className="navbar-container">
      <div className="navbar-first-row-container">
        <div className="navbar-first-row">
          <div className="logo-container">
            <div className="logo">Clement</div>
            <div className="logo-tagline">online wine shop</div>
          </div>
          <div className="search-and-log-in">
            <div className="search">
              {/* <img className="search-icon" src="icons/search.png"></img> */}
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="search"
                  value={searchQuery}
                />
              </form>
            </div>
                {token ? (

              <div className="logged-in">
                <Link to="/cart">
                  <button>View Cart</button>
                </Link>
                {currentCartItems.length ? (
                  <div className="cart-quantity">
                    {currentCartItems.reduce(
                      (accumulator, currentValue) =>
                      accumulator + Number(currentValue.quantity),
                      0
                      )}
                  </div>
                ) : null}
                <button onClick={handleLogout}>Log Out</button>
              </div>
            ) : (
              <div className="not-logged-in">
                <Link to="/cart">
                  <button>View Cart</button>
                </Link>
                {localItems ? (
                  <div className="cart-quantity">
                    {localItems.reduce(
                      (accumulator, currentValue) =>
                      accumulator + Number(currentValue.quantity),
                      0
                      )}
                  </div>
                ) : null}
                <Link to="/login">
                  <button>Log In</button>
                </Link>
                <Link to="/register">
                  <button>Sign Up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <CategoryDropdown/>
      <hr />
    </div>
  )
}

export default NavBar
