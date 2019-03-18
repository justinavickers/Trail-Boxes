import React, { Component } from "react";
import "./boxes.css";
export default class BoxForm extends Component {
  // Set initial state
  state = {
    date: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    userId: ""
  };


  // Update state whenever an input field is edited
  handleFieldChange = obj => {
    const stateToChange = {};
    stateToChange[obj.target.id] = obj.target.value;
    this.setState(stateToChange);
  }

  constructNewBox = evt => {
    evt.preventDefault()
    if (this.state.date === "" && this.state.street === "" && this.state.city === ""
      && this.state.state === "" && this.state.zipcode === "" && this.state.categories === "" && this.state.item === "") {
      alert("Please fill out form.")
    } else {
      const object = {
        date: this.state.date,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        userId: parseInt(sessionStorage.getItem("credentials"))
      }
      this.props.addBoxes(object)
      .then((newBox) => this.props.history.push(
        {
          pathname: "/items/new",
          state: { boxId: newBox.id }
        }
        ))
    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.constructNewBox} className="boxForm">
          <div className="form-group">
            <label htmlFor="dateForm">Date To Ship:</label>
            <input
              type="Date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              placeholder="Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventName">Address:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="street"
              placeholder="Street"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="city"
              placeholder="City"
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="category"></label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="state"
              placeholder="State"
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="quantity"></label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="zipcode"
              placeholder="Zipcode"
            >
            </input>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}