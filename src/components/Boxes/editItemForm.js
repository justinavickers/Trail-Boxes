import React, { Component } from "react";
import ItemManager from "../../modules/ItemManager"
export default class EditItemForm extends Component {
  // Set initial state
  state = {
    name: "",
    quantity: "",
    categoryId: 0,
    boxId: 0,
    id: 0,
    userId: 0
  };


  // Update state whenever an input field is edited
  handleFieldChange = obj => {
    const stateToChange = {};
    stateToChange[obj.target.id] = obj.target.value;
    this.setState(stateToChange);
  }

  updateExistingItems = evt => {
    evt.preventDefault()
    if (this.state.categories === "" && this.state.name === "") {
      alert("Please fill out form.")
    } else {
      const editedItemObject = {
        categoryId: this.state.categoryId,
        boxId: this.state.boxId,
        userId: this.state.userId,
        id: this.props.match.params.itemId,
        name: this.state.name,
        quantity: this.state.quantity
      }
      console.log(editedItemObject)
      this.props.updateItems(editedItemObject)
    }
  }

  componentDidMount() {
    ItemManager.get(this.props.match.params.itemId)
      .then(item => {
        this.setState({
          categoryId: item.categoryId,
          boxId: item.boxId,
          id: item.id,
          name: item.name,
          userId: item.userId,
          quantity: item.quantity
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.updateExistingItems} className="boxForm">
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
            <select onChange={this.handleFieldChange}

              value={this.state.categoryId}
              id="categoryId"
              className="dd-list">
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
              value={this.state.name}
            >
            </input>
          </div>

          <button
            // onClick={this.updateExistingItems}
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