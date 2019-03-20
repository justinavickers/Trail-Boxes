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
import AddItemForm from "./Boxes/AddItemForm"

class ApplicationViews extends Component {
  state = {
    boxes: [],
    categories: [],
    items: [],
    users: []
  }


  addItems = object => {
    return ItemManager.post(object)
      .then(() => ItemManager.getAllItems())
      .then(items => this.setState({ items: items }));
  }

  updateItems = editedItemObject => {
    return ItemManager.put(editedItemObject)
      .then(() => {
        return ItemManager.getAllItems();
      })
      .then(items => this.setState({ items: items }))
  }

  updateBoxes = editedObject => {
    return BoxManager.put(editedObject)
    .then(() => {
      BoxManager.getBoxesSorted(sessionStorage.getItem("credentials")).then(boxes => {
        this.setState({ boxes: boxes })
      });
    })
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
    return ItemManager.delete(id)
      .then(() => {
        ItemManager.getAllItems().then(items => this.setState({ items: items }))
      })
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
    ItemManager.getAllItems().then(items => this.setState({ items: items }))
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

        <Route exact path="/items/new/:boxId(\d+)"
          render={props => {
            return (
              <AddItemForm
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
