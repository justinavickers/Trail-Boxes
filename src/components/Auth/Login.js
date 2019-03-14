import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: "",
    first_name: "",
    last_name: "",
    email: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form!")
    }
  }

  render() {
    return (
      <form className="loginForm">
        <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
        <label htmlFor="inputUsername"></label>
        <input className="loginInput"
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={`UserName`}
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword"></label>
        <input className="loginInput"
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={`Password`}
          required=""
        />
        <button type="submit" className="btnNav" onClick={this.handleLogin}>
          Sign in
        </button>
      </form>
    )
  }
}
