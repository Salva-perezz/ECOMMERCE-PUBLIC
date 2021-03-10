import React, { useState } from "react"
import axios from "axios"
// import { useDispatch } from "react-redux"
// import { getCurrentUser } from "../store/currentUser"
import { useHistory } from "react-router-dom"

const NewUser = () => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")

//   const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = function (event) {
    event.preventDefault()
    axios
      .post("/api/signup", {
        email,
        firstName,
        lastName,
        username,
        password,
      })
      .then((newUser) => {
        dispatch(getCurrentUser({id:newUser.data.id}))
        history.push("/")
      })
  }
  return (
    <div className="sign-up-or-log-in">
      <h2>Create a New Account
        <hr />
      </h2>
      <form onSubmit={handleSubmit}>
          <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          onChange={(event) => setFirstName(event.target.value)}
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