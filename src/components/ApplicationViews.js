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

class ApplicationViews extends Component {
  state = {
    boxes: [],
    categories: [],
    items: [],
    users: []
  }


  addItems = object => {
    return ItemManager.post(object)
    .then(() => ItemManager.getBoxesSorted())
    .then(items => this.setState({items: items}));
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

  deleteBoxes = id => {
    return BoxManager.deleteAndList(id)
    .then(boxes => this.setState({ boxes: boxes }));
  };

  componentDidMount() {
    BoxManager.getBoxesSorted(this.props.activeUser.id).then(boxes => this.setState({ boxes: boxes }));
    UserManager.getAll().then(users => this.setState({ users: users }))
    BoxManager.getBoxesSorted(this.props.activeUser.id).then(items => this.setState({ items: items}))
    BoxManager.getAll().then(boxes => this.setState({boxes: boxes}))
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
                boxes={this.state.boxes}
                addBoxes={this.addBoxes}
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
