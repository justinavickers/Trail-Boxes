import React, { Component } from "react"
import BoxManager from "../../modules/BoxManager";

export default class BoxEditForm extends Component {
  // Set initial state
  state = {
    date: "",
    street: "",
    city: "",
    state: "",
    zipcode: ""
  };


  handleFieldChange = obj => {
    const stateToChange = {}
    stateToChange[obj.target.id] = obj.target.value
    this.setState(stateToChange)
  }

  updateExistingBox = evt => {
    evt.preventDefault()

    if (this.state.date === "" && this.state.street === "" && this.state.city === ""
    && this.state.state === "" && this.state.zipcode === "") {
      alert("Please fill out form.")
    } else {
      const editedObject = {
        date: this.state.date,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
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
          date: box.date,
          street: box.street,
          city: box.city,
          state: box.state,
          zipcode: box.zipcode
        });
      });
  }


  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.updateExistingBox} className="boxForm">
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
            <label htmlFor="eventName"></label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="street"
              placeholder="Street"
              value={this.state.street}
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
              value={this.state.city}
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
              value={this.state.state}
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
              value={this.state.zipcode}
            >
            </input>
          </div>
          <button
          onClick={this.updateExistingBox}
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