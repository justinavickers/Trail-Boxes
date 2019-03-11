import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./nav.css"
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/boxes">Boxes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/map">Map</Link>
          </li>
          <li
          className="nav-link"> {this.props.activeUser.user_name}
          <button
            type="button"
            className="button"
            onClick={this.logout}>
            Logout
        </button>
        </li>
        </ul>
      </nav>
        )
      }
    }

    export default Nav
