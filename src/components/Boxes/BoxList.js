import React, { Component } from 'react'
import BoxModal from "./BoxModal"

class BoxList extends Component {

  componentDidMount() {
  }
  render() {
    return (
      <React.Fragment>
        <div className="addButtonDiv">
          <button type="button"
            className="btn btn-addButton"
            onClick={() => {
              this.props.history.push("/boxes/new")
            }}
          >Add Box</button>
        </div>
        <section className="boxes">
          {
            //to make sure each card has a modal, when you are mapping through the array
            this.props.boxes.map(box =>
              <div className="box" key={box.id} >
                <p>{box.date}</p>
            <BoxModal boxId={box.id} items={this.props.items} deleteItem={this.props.deleteItem}currentBox={box} {...this.props}></BoxModal>
              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}

export default BoxList