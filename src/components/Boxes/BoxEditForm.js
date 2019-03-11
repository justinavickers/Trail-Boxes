import React, { Component } from "react"
import BoxManager from "../../modules/BoxManager";

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
        }

        this.props.updateBoxes(editedObject)
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
          <form onSubmit={this.updateExistingBox} className="boxForm">
            <div className="form-group">
              <label htmlFor="eventName">Address</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="address"
                placeholder="Address"
                value={this.state.address}
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
                value={this.state.date}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.handleFieldChange}
                id="itemName"
                placeholder="Name"
                value={this.state.itemName}
              >
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                onChange={this.handleFieldChange}
                id="itemCategory"
                placeholder="Category"
                value={this.state.itemCategory}
              >
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                className="form-control"
                onChange={this.handleFieldChange}
                id="itemQuantity"
                placeholder="Quantity"
                value={this.state.itemQuantity}
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