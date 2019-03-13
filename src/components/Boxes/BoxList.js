import React, { Component } from 'react'
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
            this.props.boxes.map(boxes =>
              <div className="box" key={boxes.id} >
                <p>{boxes.date}</p>
                <div id={"boxDetails" + boxes.id} className="hidden">
                  <p>{boxes.street}</p>
                  <p>{boxes.city}</p>
                  <p>{boxes.state}</p>
                  <p>{boxes.zipcode}</p>
                  <button type="button"
                  className="btn btnEdit"
                  onClick={() => {
                    this.props.history.push(`/boxes/${boxes.id}/edit`)
                  }}
                >Edit </button>
                <button type="button"
                  className="btn red-btn-success"
                  onClick={() => this.props.deleteBoxes(boxes.id)
                    .then(() => this.props.history.push(`/boxes`))}
                >Delete </button>
                </div>
                <button type="button"
                  className="btn btnDetails"
                  onClick={() => {
                    document.getElementById("boxDetails" + boxes.id).classList.toggle("hidden")
                  }}
                >Details </button>

              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}

export default BoxList