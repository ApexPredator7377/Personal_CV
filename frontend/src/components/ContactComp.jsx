import React, { Component } from "react";
import TextAnimation from 'react-animate-text';
import { Link } from "react-router-dom";
import ReactImageAppear from 'react-image-appear';
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
                src="https://firebasestorage.googleapis.com/v0/b/cv-nathan.appspot.com/o/MeAgain.jpg?alt=media&token=923e283a-7f53-4a18-82be-cf07522cf8f2"
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

                </ul>

                <Button
                        style={{ marginLeft: "10px" }}
                        variant="contained"
                        startIcon={<FacebookIcon />}
                        onClick={() => {
                          window.open("https://www.facebook.com/profile.php?id=100008799936212", "_blank")
                        }}
                      >
                        Facebook
                </Button>
                
                <Button
                        style={{ marginLeft: "10px" }}
                        variant="contained"
                        startIcon={<InstagramIcon />}
                        onClick={() => {
                          window.open("https://www.instagram.com/kuber_komkommer/?hl=en", "_blank")
                        }}
                      >
                        Instagram
                </Button>

                <Button
                        style={{ marginLeft: "10px" }}
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        onClick={() => {
                          window.open("https://github.com/ApexPredator7377", "_blank")
                        }}
                      >
                        Github
                </Button>

            </TextAnimation>
            </div>
  
        </div>
        </div>

        {/* <MessengerCustomerChat pageId="100008799936212" appId="921688632059100"/> */}

        <p></p>
      </>
    )
  }
}