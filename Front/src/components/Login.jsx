import React, { useState } from "react"
import axios from "axios"
import { getCurrentUser } from "../store/currentUser"
import { useSelector, useDispatch } from "react-redux"
import { loadStoreCart } from "../store/currentCart"
import { useHistory } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()

  const currentUser = useSelector((state) => state.currentUser)

  const handleSubmit = function (event) {
    event.preventDefault()
    axios
      .post("/api/users/login", {
        email,
        password,
      })
      .then((newUser) => {
        localStorage.setItem("token", newUser.data.token)
        dispatch(getCurrentUser({ id: newUser.data.user.id }))
      })
  }

  React.useEffect(() => {
    if(currentUser) axios
      .post("/api/transactions", {
        userId: currentUser.id,
      })
      .then((cart) => {
        dispatch(loadStoreCart({ id: cart.data.id }))
        history.push("/products")
      })
  }, [currentUser])


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
