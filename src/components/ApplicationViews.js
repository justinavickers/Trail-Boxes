import React, { Component } from "react";
import { Route } from "react-router-dom";
import UserManager from "../modules/UserManager"
import ItemManager from "../modules/ItemManager"
import BoxManager from "../modules/BoxManager";
import BoxForm from "./Boxes/BoxForm"
import ItemForm from "./Boxes/ItemForm";
import BoxList from "./Boxes/BoxList"
import BoxEditForm from "./Boxes/BoxEditForm"
import Container from "./Map/Container"
import EditItemForm from "./Boxes/editItemForm";

class ApplicationViews extends Component {
  state = {
    boxes: [],
    categories: [],
    items: [],
    users: []
  }


  addItems = object => {
    return ItemManager.post(object)
      .then(() => ItemManager.getAll())
      .then(items => this.setState({ items: items }));
  }

  updateItems = editedItemObject => {
    return ItemManager.put(editedItemObject)
      .then(() => {
        return ItemManager.getAll();
      })
      .then(items => this.setState({ items: items }))
  }

  updateBoxes = editedObject => {
    return BoxManager.put(editedObject)
      .then(() => {
        return BoxManager.getAll();
      })
      .then(boxes => this.setState({ boxes: boxes }));
  };

  addBoxes = obj => {
    let newBox = null
    return BoxManager.post(obj)
      .then((createdBox) => {
        newBox = createdBox
        return BoxManager.getBoxesSorted(this.props.activeUser.id)
      })
      .then(boxes => {
        this.setState({ boxes: boxes })
        return newBox
      })
  };

  deleteItem = id => {
    return ItemManager.deleteAndList(id)
    .then(items => this.setState({items: items}))
  }

  deleteBoxes = id => {
    return BoxManager.deleteAndList(id)
      .then(() => {
        BoxManager.getBoxesSorted(sessionStorage.getItem("credentials")).then(boxes => {
          this.setState({ boxes: boxes })
        });
      })
  };

  componentDidMount() {
    BoxManager.getBoxesSorted(sessionStorage.getItem("credentials")).then(boxes => {
      this.setState({ boxes: boxes })
    });
    UserManager.getAll().then(users => this.setState({ users: users }))
    ItemManager.getAll().then(items => this.setState({ items: items }))
    // BoxManager.getBoxesSorted(this.props.activeUser.id).then(items => this.setState({ items: items}))
    // BoxManager.getAll().then(boxes => this.setState({boxes: boxes}))
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/map"
          render={props => {
            return (
              <Container />
            )
          }}

        ></Route>
        <Route
          exact
          path="/boxes"
          render={props => {
            return (
              <BoxList
                items={this.state.items}
                boxes={this.state.boxes}
                addBoxes={this.addBoxes}
                deleteItem={this.deleteItem}
                deleteBoxes={this.deleteBoxes}
                updateBoxes={this.updateBoxes}
                users={this.state.users}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/boxes/new"
          render={props => {
            return (
              <BoxForm
                boxes={this.state.boxes}
                addBoxes={this.addBoxes}
                {...props}
              />

            );
          }}
        />

        <Route exact path="/items/new"
          render={props => {
            return (
              <ItemForm
                addItems={this.addItems}
                {...props}
              />
            );
          }}
        />

        <Route exact path="/items/:itemId(\d+)/edit"
          render={props => {
            return (
              <EditItemForm
                items={this.state.items}
                updateItems={this.updateItems}
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/boxes/:boxId(\d+)/edit"
          render={props => {
            return (
              <BoxEditForm
                boxes={this.state.boxes}
                updateBoxes={this.updateBoxes}
                {...props}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
