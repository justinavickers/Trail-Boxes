import React, { Component } from "react";
import "./boxes.css";
export default class ItemForm extends Component {
  // Set initial state
  state = {
    userId: "",
    items: "",
    categoryId: "1",
    boxId: ""
  };


  // Update state whenever an input field is edited
  handleFieldChange = obj => {
    const stateToChange = {};
    stateToChange[obj.target.id] = obj.target.value;
    this.setState(stateToChange);
  }

  constructNewItems = evt => {
    evt.preventDefault()
    if (this.state.categories === "" && this.state.item === "") {
      alert("Please fill out form.")
    } else {
      const itemObject = {
        items: this.state.items,
        userId: parseInt(sessionStorage.getItem("credentials")),
        categoryId: parseInt(this.state.categoryId),
        boxId: parseInt(this.props.history.location.state.boxId)
      }
      console.log(itemObject)
      this.props.addItems(itemObject)

    }
  }

  render() {
    console.log("props are:", this.props)
    return (
      <React.Fragment>
        <form onSubmit={this.constructNewItems} className="boxForm">
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
              id="items"
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
          onClick={this.constructNewItems}
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