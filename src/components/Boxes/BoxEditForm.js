import React, { Component } from "react"
import BoxManager from "../../modules/APIManager";

export default class BoxEditForm extends Component {
    // Set initial state
    state = {
      address: "",
      date: "",
      itemName: "",
      itemCategory: "",
      itemQuantity: ""
    };


    handleFieldChange = obj => {
        const stateToChange = {}
        stateToChange[obj.target.id] = obj.target.value
        this.setState(stateToChange)
    }

    updateExistingBox = evt => {
      evt.preventDefault()

      if (this.state.address === "" && this.state.date === "" && this.state.itemName === ""
    && this.state.itemCategory === "" && this.state.itemQuantity === "") {
        alert("Please fill out form.")
      } else {
        const editedObject = {
          address: this.state.address,
          date: this.state.date,
          itemName: this.state.itemName,
          itemCategory: this.state.itemCategory,
          itemQuantity: this.state.itemQuantity,
          id: this.props.match.params.boxId
          // Make sure the employeeId is saved to the database as a number since it is a foreign key.
          // userId: parseInt(this.state.userId)
        }

        this.props.updateBox(editedObject)
            .then(() => this.props.history.push("/boxes"))
    }
  }
    componentDidMount() {
      BoxManager.get(this.props.match.params.boxId)
      .then(box => {
        this.setState({
          address: box.address,
          date: box.date,
          itemName: box.itemName,
          itemCategory: box.itemCategory,
          itemQuantity: box.itemQuantity
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form onSubmit={this.constructNewBox} className="boxForm">
            <div className="form-group">
              <label htmlFor="eventName">Address</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateForm">Date</label>
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
              <label htmlFor="name">Name</label>
              <input
                defaultValue=""
                className="form-control"
                onChange={this.handleFieldChange}
                id="itemName"
                placeholder="Name"
              >
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                defaultValue=""
                className="form-control"
                onChange={this.handleFieldChange}
                id="itemCategory"
                placeholder="Category"
              >
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                defaultValue=""
                className="form-control"
                onChange={this.handleFieldChange}
                id="itemQuantity"
                placeholder="Quantity"
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