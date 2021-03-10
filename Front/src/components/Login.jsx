import React, { useState } from "react"
import axios from "axios"
// import { getCurrentUser } from "../store/currentUser"
// import { useDispatch } from "react-redux"
// import { loadStoreFavorites } from "../store/currentFavorites"
import { useHistory } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //   const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = function (event) {
    event.preventDefault()
    axios
      .post("/api/users/login", {
        email,
        password,
      })
      .then((newUser) => {
        localStorage.setItem("token", newUser.data.token)
        // newUser.data.user
      // dispatch(getCurrentUser({id:newUser.data.id}))
      // history.push("/")
    })
    //   .then((user) => {
    //     dispatch(getCurrentUser(user.data))
    //     return axios
    //       .post("/api/loadfavorites", {
    //         userId: user.data.id,
    //       })
    //       .then((favorites) => {
    //         dispatch(loadStoreFavorites(favorites.data))
    //         history.push("/favorites")
    //       })
    //   })
  }
  return (
    <div className="sign-up-or-log-in">
      <h2>
        Welcome back
        <hr />
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login
