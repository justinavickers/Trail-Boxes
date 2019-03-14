import React, { Component } from "react"
import Login from "./Login"
import Register from "./Register"
import UserAccessLayer from "../UserAccessLayer"

class IsAuth extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isAuthenticated() ? (
          <UserAccessLayer {...this.props} />
        ) : (
          <React.Fragment>
            <Login {...this.props} />
            <Register {...this.props} />
            </React.Fragment>
          )}

        {/* {this.props.isAuthenticated() ? (
          <UserAccessLayer {...this.props} />
        ) : (
          )} */}
      </React.Fragment>
    )
  }
}

export default IsAuth
