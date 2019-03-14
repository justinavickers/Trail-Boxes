import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"

export default class Register extends Component {
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

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    }
    if (this.state.username && this.state.password) {
      UserManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          UserManager.addUser(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please Fill Out Form!")
    }
  }


  render() {
    return (
      <form className="registerForm">
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
        <label htmlFor="inputUsername"></label>
        <input className="registerInput"
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={`UserName`}
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword"></label>
        <input className="registerInput"
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={`Password`}
          required=""
        />
         <label htmlFor="inputFirstName"></label>
        <input className="registerInput"
          onChange={this.handleFieldChange}
          type="text"
          id="firstName"
          placeholder={`FirstName`}
          required=""
        />
         <label htmlFor="inputLastName"></label>
        <input className="registerInput"
          onChange={this.handleFieldChange}
          type="text"
          id="lastName"
          placeholder={`LastName`}
          required=""
        />
         <label htmlFor="inputEmail"></label>
        <input className="registerInput"
          onChange={this.handleFieldChange}
          type="email"
          id="email"
          placeholder={`Email`}
          required=""
        />

        <button type="submit" className="btnNav" onClick={this.handleRegister}>
          Register
        </button>
      </form>
    )
  }
}
