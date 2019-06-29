import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"

export default class Register extends Component {
  // Set initial state
  state = {
    passwordRegister: "",
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
      password: this.state.passwordRegister,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    }
    if (this.state.username && this.state.passwordRegister) {
      UserManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          console.log(newUser, "user")
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
        <h1 id="register" className="h3 mb-3 font-weight-bold">Register</h1>
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
          id="passwordRegister"
          placeholder={`Password`}
          required=""
        />
         <label htmlFor="inputFirstName"></label>
        <input className="registerInput"
          onChange={this.handleFieldChange}
          type="text"
          id="first_name"
          placeholder={`FirstName`}
          required=""
        />
         <label htmlFor="inputLastName"></label>
        <input className="registerInput"
          onChange={this.handleFieldChange}
          type="text"
          id="last_name"
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
