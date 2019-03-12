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
      && this.state.state === "" && this.state.zipcode === "" && this.state.category === "" && this.state.item === "") {
      alert("Please fill out form.")
    } else {
      const object = {
        date: this.state.date,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        category: this.state.category,
        item: this.state.item,
        userId: parseInt(sessionStorage.getItem("credentials"))
      }
      console.log(object)
      this.props.addBoxes(object)
      // this.props.addItems(object)
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
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="category1" className="dd-list">
            <option className="food">Food</option>
            <option className="firstAid">First Aid</option>
            <option className="gear">Gear</option>
            <option className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #1</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="item1"
              placeholder="Item"
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