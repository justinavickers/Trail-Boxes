import React, { Component } from "react";
import { Route } from "react-router-dom";
import UserManager from "../modules/UserManager"
import BoxManager from "../modules/BoxManager";
import BoxForm from "./Boxes/BoxForm"
import BoxList from "./Boxes/BoxList"
import BoxEditForm from "./Boxes/BoxEditForm"



class ApplicationViews extends Component {
  state = {
    boxes: [],
    itemType: [],
    items: [],
    users: []
  }

  updateBoxes = editedObject => {
    return BoxManager.put(editedObject)
      .then(() => {
        return BoxManager.getAll();
      })
      .then(boxes => this.setState({ boxes: boxes }));
  };

  addBoxes = object => {
    return BoxManager.post(object)
      .then(() => {
        return BoxManager.getAll();
      })
      .then(boxes => this.setState({ boxes: boxes }));
  };

  deleteBoxes = id => {
    return BoxManager.deleteAndList(id).then(boxes =>
      this.setState({ boxes: boxes })
    );
  };

  componentDidMount() {

    BoxManager.getBoxesSorted().then(boxes => this.setState({ boxes: boxes }));
    UserManager.getAll().then(users => this.setState({ users: users }))
    BoxManager.getAll().then(items => this.setState({ items: items}))
    BoxManager.getAll().then(itemType => this.setState({itemType: itemType}))
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/boxes"
          render={props => {
            return (
              <BoxList
                boxes={this.state.boxes}
                addBoxes={this.addBoxes}
                deleteBoxes={this.deleteBoxes}
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
