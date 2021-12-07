import React, { Component } from "react";
import TextAnimation from 'react-animate-text';
import { Link } from "react-router-dom";
import ReactImageAppear from 'react-image-appear';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};

export default class ContactComp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <><div class="contact-section">
        <p></p>
        <h1>Contact Me</h1>
        <p></p>
        <div class="flex-container">

            <div class="flex-child">
            <ReactImageAppear
                className="div-contactImage"
                src="https://firebasestorage.googleapis.com/v0/b/cv-nathan.appspot.com/o/MeAlso.jpeg?alt=media&token=abe2f9f3-aa10-4c93-b9b3-b74633f28493"
                loaderStyle={{ height: "125px",
                               width: "125px" }}
                loader="https://firebasestorage.googleapis.com/v0/b/cv-nathan.appspot.com/o/Loading.gif?alt=media&token=b3b15e0f-c4fe-4720-b24f-1271b39afaa7"
                animation="zoomIn"
                animationDuration="1s"
            />
            </div>
  
            <div class="flex-child">
            <TextAnimation charInterval="40" ><p class="title"><b>o	Contact Details</b></p>
                <ul>
                
                    <li> Email: <ButtonMailto label="Nathan333nm@gmail.com" mailto="mailto:Nathan333nm@gmail.com" /> </li>
                    <li> Tel: <a href="tel:0713865361">0713865361 </a> </li>
                    <li>  </li>
                    <li>  </li>
                    <li>  </li>

                </ul>
            </TextAnimation>
            </div>
  
        </div>
        </div>

    
        <p></p>
      </>
    )
  }
}