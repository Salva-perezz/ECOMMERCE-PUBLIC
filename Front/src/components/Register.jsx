import React, { useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { getCurrentUser } from "../store/currentUser"
import { loadStoreCart } from "../store/currentCart"
import { useHistory } from "react-router-dom"

const NewUser = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const currentUser = useSelector((state) => state.currentUser)

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = function (event) {
    event.preventDefault()
    axios
      .post("/api/users/register", {
        email,
        name,
        lastName,
        password,
      })
      .then((newUser) => {
        console.log(newUser)
        localStorage.setItem("token", newUser.data.token)
        dispatch(getCurrentUser({ id: newUser.data.user.id }))
        history.push("/products")
      })
  }

  // React.useEffect(() => {
  //   if(currentUser) axios
  //     .post("/api/transactions", {
  //       userId: currentUser.id,
  //     })
  //     .then((cart) => {
  //       dispatch(loadStoreCart({ id: cart.data.id }))
  //       history.push("/products")
  //     })
  // }, [currentUser])

  return (
    <div className="sign-up-or-log-in">
      <h2>
        Create a New Account
        <hr />
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          onChange={(event) => setName(event.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default NewUser
