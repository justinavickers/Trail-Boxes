import React, { Component } from 'react'
import BoxModal from "./BoxModal"

class BoxList extends Component {

  componentDidMount() {
  }
  render() {
    return (
      <React.Fragment>
        <div className="addButtonDiv" style={{marginBottom: "20px"}}>
          <button type="button"
            className="btn buttonHover"
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
                <img alt="box_image" src={require('./mcol-closed-box.png')} width="62px"/>
                <p>{box.date}</p>
            <BoxModal boxId={box.id} items={this.props.items} deleteItem={this.props.deleteItem} currentBox={box} {...this.props}></BoxModal>
              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}

export default BoxList