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

  deleteBox = () => this.props.deleteBoxes(this.props.boxes.id)
    .then(() => this.props.history.push(`/boxes`))




  render() {
    return (
      <div>
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



            {/* console.log(this.props.currentBox.id) */}
                <Link to={`/boxes/${this.props.currentBox.id}/edit`} >Edit</Link>


            <Button type="button"
              className="btn red-btn-success"
              onClick={() => this.props.deleteBoxes(this.props.currentBox.id)
                .then(() => this.props.history.push(`/boxes`))} >Delete</Button>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BoxModal;