import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import { getCurrentUser } from "../store/currentUser"

const NavBar = () => {
  // const currentUser = useSelector((state) => state.currentUser)
  const currentCartItems = useSelector((state) => state.currentCartItems)
  const [searchQuery, setSearchQuery] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()

  const token = localStorage.getItem("token")

  const handleChange = function (evt) {
    setSearchQuery(evt.target.value)
  }

  const handleSubmit = function (event) {
    event.preventDefault()
    setSearchQuery("")
    history.push("/search/" + searchQuery)
  }

  const handleLogout = function (event) {
    localStorage.clear()
    dispatch(getCurrentUser(""))
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
      <div className="categories">
        <button>Type</button>
        <button>Country</button>
        <button>Wine Producer</button>
        <button>Vintage</button>
      </div>
      <hr />
    </div>
  )
}

export default NavBar
