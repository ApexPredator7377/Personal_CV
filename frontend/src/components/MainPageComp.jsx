import { sizeHeight } from "@mui/system";
import React, { Component } from "react";
import ReactImageAppear from 'react-image-appear';

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
        <p></p>
        <h1>About</h1>
        <p></p>
          <div class="column">
            <div class="card">
            <ReactImageAppear
                className="div"
                style={{
                  height: this.imageHeight,
                  width: this.imageWidth,
                  aspectRatio: 16 / 9,
                }} 
                src="https://firebasestorage.googleapis.com/v0/b/cv-nathan.appspot.com/o/Me.jpeg?alt=media&token=ad3802a8-4316-426d-a076-e1609f9c5956"
                loaderStyle={{ height: "150px",
                               width: "150px" }}
                loader="https://firebasestorage.googleapis.com/v0/b/cv-nathan.appspot.com/o/Dual%20Ball-1s-200px.gif?alt=media&token=6a4e8e2c-09d1-4606-b72b-0616dccff423"
                animation="zoomIn"
                animationDuration="1s"
            />
            {/* <img
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
              /> */}
            </div>
            <div class="container">
        <h2>Nathan Morgenrood</h2>
        <p class="title">Software developer</p>
        <p>Describes me ...</p>
        <p>Nathan333nm@gmail.com</p>
      </div>
          </div>
        </div></>
    );
  }
}