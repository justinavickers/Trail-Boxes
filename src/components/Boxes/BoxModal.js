import React from 'react';
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



  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>


            <p>{this.props.boxes.street}</p>
            <p>{this.props.boxes.city}</p>
            <p>{this.props.boxes.state}</p>
            <p>{this.props.boxes.zipcode}</p>
            {/* <button type="button"
                    className="btn btnEdit"
                    onClick={() => {
                      this.props.history.push(`/boxes/${this.props.boxes.id}/edit`)
                    }}
                  >Edit </button>
                  <button type="button"
                    className="btn red-btn-success"
                    onClick={() => this.props.deleteBoxes(this.props.boxes.id)
                      .then(() => this.props.history.push(`/boxes`))}
                  >Delete </button> */}
            {/* </div> */}
          </ModalBody>
          <ModalFooter>
            <Button type="button"
                    className="btn btnEdit"
              onclick={() => {
                this.props.history.push(`/boxes/${this.props.boxes.id}/edit`)
              }} >Edit</Button>

            <Button type="button"
                    className="btn red-btn-success"
            onclick={() => this.props.deleteBoxes(this.props.boxes.id)
              .then(() => this.props.history.push(`/boxes`))} >Delete</Button>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BoxModal;