import React, { Component } from "react";
import ReactImageAppear from 'react-image-appear';
import TextAnimation from 'react-animate-text';

export default class MainPageComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
                src="https://firebasestorage.googleapis.com/v0/b/cv-nathan.appspot.com/o/Me.jpeg?alt=media&token=ad3802a8-4316-426d-a076-e1609f9c5956"
                loaderStyle={{ height: "125px",
                               width: "125px" }}
                loader="https://firebasestorage.googleapis.com/v0/b/cv-nathan.appspot.com/o/Loading.gif?alt=media&token=b3b15e0f-c4fe-4720-b24f-1271b39afaa7"
                animation="zoomIn"
                animationDuration="1s"
            />
            </div>
            <div class="container">
        <h2>Nathan Morgenrood</h2>
        <TextAnimation charInterval="40" ><p class="title">Aspiring Software Developer</p>
        <p>I am currently a final-year BSc Information Technology/Computer 
          Science student at the North-West University. I define myself as being hardworking and motivated. 
          I have a drive to continue evolving and becoming better in all aspects of my life. I have a thirst for 
          fast paced knowledge and I’m very ambitious in an uncapped environment. I have a love for anything that can conduct 
          electricity and a passion for anything that controls the flow of it. This passion does not end where the capabilities of 
          hardware and software ends and continues into mechanics, especially those involving two and four wheels. I also find the 
          mechanics of the human body intriguing and love to improve not only the performance of my mind, but also that of my body. 
          This makes me anything, from a technophile to petrolhead to gymaholic and everything in-between and closely related. I love 
          working alone and, in a team, and have adapted to an agile environment. I function most optimal under pressure and adapt 
          fast to new skills and roles.  </p></TextAnimation>
      </div>
          </div>
        </div></>
    )
  }
}