import React, { useState } from "react"
// import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
// import { getCurrentUser } from "../store/currentUser"

const NavBar = () => {
  // const currentUser = useSelector((state) => state.currentUser)
  const [searchQuery, setSearchQuery] = useState("")
  // const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = function (evt) {
    setSearchQuery(evt.target.value)
  }

  const handleSubmit = function (event) {
    event.preventDefault()
    setSearchQuery("")
    history.push("/search/" + searchQuery)
  }

  const handleLogout = function (event) {
    axios.post("/api/logout").then(() => {
      dispatch(getCurrentUser(""))
      history.push("/")
    })
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">OMDb</div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="search"
              value={searchQuery}
            />
          </form>
        </div>

        {typeof currentUser === "object" ? (
          <div className="logged-in">
            <Link to="/favorites">
              <button>Favorites</button>
            </Link>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <div className="not-logged-in">
            <Link to="/login">
              <button>Log In</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar