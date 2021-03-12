import React from "react"
import { Link } from "react-router-dom"

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-main-picture">
        <Link to="/products">
          <img src="home1.jpg"></img>
        </Link>
      </div>
    )
  }
}
