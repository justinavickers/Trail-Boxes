import React, { Component } from "react";
import "./boxes.css";
export default class ItemForm extends Component {
  // Set initial state
  state = {
    userId: "",
    name: "",
    categoryId: "1",
    boxId: "",
    quantity: ""
  };


  // Update state whenever an input field is edited
  handleFieldChange = obj => {
    const stateToChange = {};
    stateToChange[obj.target.id] = obj.target.value;
    this.setState(stateToChange);
  }

  constructNewItems = evt => {
    evt.preventDefault()
    if (this.state.categories === "" && this.state.name === "") {
      alert("Please fill out form.")
    } else {
      const itemObject = {
        name: this.state.name,
        quantity: this.state.quantity,
        userId: parseInt(sessionStorage.getItem("credentials")),
        categoryId: parseInt(this.state.categoryId),
        boxId: parseInt(this.props.history.location.state.boxId)
      }
      console.log(itemObject)
      this.props.addItems(itemObject)

    }
  }

  addMoreItems = evt => {
    evt.preventDefault()
    if (this.state.categories === "" && this.state.name === "") {
      alert("Please fill out form.")
    } else {
      const itemObject = {
        name: this.state.name,
        quantity: this.state.quantity,
        userId: parseInt(sessionStorage.getItem("credentials")),
        categoryId: parseInt(this.state.categoryId),
        boxId: parseInt(this.props.history.location.state.boxId)
      }
      console.log(itemObject)
      this.props.addItems(itemObject)
      .then((newBox) => this.props.history.push(
        {
          pathname: "/items",
          state: { boxId: newBox.id }
        }
        ))

    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.constructNewItems} className="boxForm">
          <div className="form-group">
            <label htmlFor="category">Category</label>
          <select onChange={this.handleFieldChange} id="categoryId" className="dd-list">
            <option value="1" className="food">Food</option>
            <option value="2" className="firstAid">First Aid</option>
            <option value="3" className="gear">Gear</option>
            <option value="4" className="apparel">Apparel</option>
          </select>
        <label htmlFor="quantity">Quantity</label>
          <select onChange={this.handleFieldChange} id="quantity" className="quantity">
          <option value="1" className="1">1</option>
          <option value="2" className="2">2</option>
          <option value="3" className="3">3</option>
          <option value="4" className="4">4</option>
          <option value="5" className="5">5</option>
          <option value="6" className="6">6</option>
          <option value="7" className="7">7</option>
          <option value="8" className="8">8</option>
          <option value="9" className="9">9</option>
          <option value="10" className="10">10</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Item"
            >
            </input>
          </div>

          <button
          onClick={this.constructNewItems}
            type="submit"
            className="btn btn-primary"
          >
            Done
          </button>
          <button
          onClick={this.addMoreItems}
            type="submit"
            className="btn btn-primary"
          >
            Add More
          </button>
        </form>
      </React.Fragment>
    );
  }
}