import React, { Component } from "react";
import ItemManager from "../../modules/ItemManager"
export default class EditItemForm extends Component {
  // Set initial state
  state = {
    name: ""
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
        name: this.state.name
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
        userId: item.userId
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.updateExistingItems} className="boxForm">
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="categoryId" className="dd-list">
            <option value="1" className="food">Food</option>
            <option value="2" className="firstAid">First Aid</option>
            <option value="3" className="gear">Gear</option>
            <option value="4" className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #1</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Item"
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="categoryId" className="dd-list">
            <option value="1" className="food">Food</option>
            <option value="2" className="firstAid">First Aid</option>
            <option value="3" className="gear">Gear</option>
            <option value="4" className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #2</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="item2"
              placeholder="Item"
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="categories" className="dd-list">
            <option className="food">Food</option>
            <option className="firstAid">First Aid</option>
            <option className="gear">Gear</option>
            <option className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #3</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="item3"
              placeholder="Item"
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="categories" className="dd-list">
            <option className="food">Food</option>
            <option className="firstAid">First Aid</option>
            <option className="gear">Gear</option>
            <option className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #4</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="item4"
              placeholder="Item"
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="categories" className="dd-list">
            <option className="food">Food</option>
            <option className="firstAid">First Aid</option>
            <option className="gear">Gear</option>
            <option className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #5</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="item5"
              placeholder="Item"
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="categories" className="dd-list">
            <option className="food">Food</option>
            <option className="firstAid">First Aid</option>
            <option className="gear">Gear</option>
            <option className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #6</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="item6"
              placeholder="Item"
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="categories" className="dd-list">
            <option className="food">Food</option>
            <option className="firstAid">First Aid</option>
            <option className="gear">Gear</option>
            <option className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #7</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="item7"
              placeholder="Item"
            >
            </input>
          </div>
          <div className="form-group">
            <label className="categoryInput" htmlFor="quantity">Category</label>
          <select onChange={this.handleFieldChange} id="categories" className="dd-list">
            <option className="food">Food</option>
            <option className="firstAid">First Aid</option>
            <option className="gear">Gear</option>
            <option className="apparel">Apparel</option>
          </select>
          </div>
          <div className="form-group">
          <br></br>
            <label htmlFor="quantity">Item #8</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="item8"
              placeholder="Item"
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