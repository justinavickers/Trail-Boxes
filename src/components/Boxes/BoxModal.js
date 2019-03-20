import React from 'react';
import { Link } from "react-router-dom"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BoxModal extends React.Component {

  state = {
    modal: false,

  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  deleteBox = (id) => this.props.deleteBoxes(id)


  render() {

    return (
      <div>
        <Button color="info" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Contents of Your Resupply Box
          <br></br>
           <Button className="addItemLink"
            // to={`/items/new/${this.props.currentBox.id}`}
            onClick={() =>
              this.props.history.push(
                {
                  pathname: "/items/new",
                  state: { boxId: this.props.currentBox.id }
                }
                )
            }
            >Add Items</Button>
          </ModalHeader>
          <ModalBody>
            <p>{this.props.currentBox.street}</p>
            <p>{this.props.currentBox.city}</p>
            <p>{this.props.currentBox.state}</p>
            <p>{this.props.currentBox.zipcode}</p>

            {
              this.props.items.filter(currentItem => currentItem.boxId === this.props.currentBox.id)
                .map(currentItem => {
                  return (
                    <React.Fragment>
                      <p key={currentItem.id}>Name: {currentItem.name} QTY: {currentItem.quantity} Category: {currentItem.category.name} </p>
                      <Button onClick={() => this.props.deleteItem(currentItem.id)}>Delete</Button>
                      <Link className="editItem" to={`/items/${currentItem.id}/edit`} >Edit</Link>
                    </React.Fragment>
                  )
                })
            }

          </ModalBody>
          <ModalFooter>

            <Link className="editLink" to={`/boxes/${this.props.currentBox.id}/edit`} >Edit</Link>
            <Button
              onClick={() => this.deleteBox(this.props.currentBox.id)}>Delete
              </Button>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BoxModal;