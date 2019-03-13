import React from 'react';
import {Link} from "react-router-dom"
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

  deleteBox = () => this.props.deleteBoxes(2)



  render() {

    return (
      <div>
      {/* {console.log(this.props.boxes.id)} */}
        <Button color="info" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Contents of Your Resupply Box</ModalHeader>
          <ModalBody>
            <p>{this.props.currentBox.street}</p>
            <p>{this.props.currentBox.city}</p>
            <p>{this.props.currentBox.state}</p>
            <p>{this.props.currentBox.zipcode}</p>
          </ModalBody>
          <ModalFooter>
                <Link className="editLink" to={`/boxes/${this.props.currentBox.id}/edit`} >Edit</Link>
            <Button
              onClick={() => this.deleteBox()}>Delete
              </Button>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BoxModal;