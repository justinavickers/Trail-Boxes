import React, { Component } from 'react'
import BoxModal from "./BoxModal"

class BoxList extends Component {

  componentDidMount() {
    console.log("componentDidMount -- BoxList")
  }
  render() {
    console.log("render -- BoxList")
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
            this.props.boxes.map(boxes =>
              <div className="box" key={boxes.id} >
                <p>{boxes.date}</p>
            <BoxModal boxes={boxes}></BoxModal>


              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}

export default BoxList