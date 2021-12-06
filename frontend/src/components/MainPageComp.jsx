import React, { Component } from "react";

export default class MainPageComp extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  initialState = {

  };


  render() {
    return (
      <><div class="about-section">
        <h1>About</h1>
          <div class="column">
            <div class="card">
            <img
                className="div"
                style={{
                  height: this.imageHeight,
                  width: this.imageWidth,
                  aspectRatio: 16 / 9,
                }}
                src={
                  this.state.viewImage ||
                  "https://firebasestorage.googleapis.com/v0/b/cv-nathan.appspot.com/o/Me.jpeg?alt=media&token=ad3802a8-4316-426d-a076-e1609f9c5956"
                }
              />
            </div>
            <div class="container">
        <h2>Nathan Morgenrood</h2>
        <p class="title">Software developer</p>
        <p>Describes me ...</p>
        <p>Nathan333nm@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
          </div>
        </div></>
    );
  }
}