import React, { Component } from "react";
import TextAnimation from 'react-animate-text';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import { Link } from "react-router-dom";
Chart.register(ArcElement);


const state = {
    labels: ['Python','Java','C/C++','C#','SQL', 
             'MySQL','NoSQL','HTML','CSS','JavaScript', 
             'NODEJS', 'REACTJS', 'ANGULARJS'],
    datasets: [ 
      {
        label: 'Language',
        backgroundColor: [
          '#eeeb11',
          '#9dee11',
          '#11ee18',
          '#11eea4',
          '#11a4ee',
          '#00A6B4',
          '#003eb3',
          '#7100b3',
          '#b300ad',
          '#b30071',
          '#b3002d',
          '#b37a00',
          '#eeac11'
        ],
        hoverBackgroundColor: [
          '#BBB800',
          '#6ABB00',
          '#00BB00',
          '#00BB71',
          '#0071BB',
          '007381',
          '#000B80',
          '#3E0080',
          '#80007A',
          '#80003E',
          '#800000',
          '#804700',
          '#BB7900'
        ],
        data: [100, 100, 85, 100, 45, 65, 55, 70, 70, 70, 65, 65, 65],
        hoverOffset: 4,
      }
    ]
  }

export default class PortfolioComp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <><div class="portfolio-section">
        <p></p>
        <h1>Portfolio</h1>
        <p></p>
        <h2>Skills</h2>
        
        <div class="flex-container">

            <div class="flex-child">
                <div class="Legend"></div>
                <ul>
                
                    <li style={{ color: '#eeeb11' }}><b>Python</b></li>
                    <li style={{ color: '#9dee11' }}><b>Java</b></li>
                    <li style={{ color: '#11ee18' }}><b>C/C++</b></li>
                    <li style={{ color: '#11eea4' }}><b>C#</b></li>
                    <li style={{ color: '#11a4ee' }}><b>SQL</b></li>
                    <li style={{ color: '#00A6B4' }}><b>MySQL</b></li>
                    <li style={{ color: '#003eb3' }}><b>NoSQL</b></li>
                    <li style={{ color: '#7100b3' }}><b>HTML</b></li>
                    <li style={{ color: '#b300ad' }}><b>CSS</b></li>
                    <li style={{ color: '#b30071' }}><b>JavaScript</b></li>
                    <li style={{ color: '#b3002d' }}><b>NODEJS</b></li>
                    <li style={{ color: '#b37a00' }}><b>REACTJS</b></li>
                    <li style={{ color: '#eeac11' }}><b>ANGULARJS</b></li>

                </ul>

            </div>
  
            <div class="flex-child">
                <div class="Chart"></div>
                <Doughnut
                data={state}
                options={{
                    maintainAspectRatio: false
                }}
            	/>
            </div>
  
        </div>
        </div>

        <h2>Education</h2>
            <TextAnimation charInterval="40" ><p class="title"><b>o	Degree</b></p>
                <p>BSc Information Technology/Computer Science at the Nort-West University</p></TextAnimation>
            <TextAnimation charInterval="40" ><p class="title"><b>o	Badges and Certificates</b></p>
                <a href="https://www.udemy.com/user/nathan-morgenrood/" rel="noreferrer"><b>Udemy</b></a>
                <ul>
                
                    <li> Build a Quiz App with HTML, CSS, and JavaScript </li>
                    <li> Git Started with GitHub </li>
                    <li> Learn Angular 4 from Scratch </li>
                    <li> Learn the Basics of React (Incl Hooks - 2021) </li>
                    <li> Microsoft Azure for Beginners </li>

                </ul>
            </TextAnimation>
            <p></p>
            
            <TextAnimation charInterval="40" >
                <a href="https://www.credly.com/users/nathan-morgenrood/badges" rel="noreferrer"><b>Credly</b></a>
                <ul>
                
                    <li> API </li>
                    <li> Agile Intro </li>
                    <li> Git </li>
                    <li> Web Development </li>

                </ul>
              </TextAnimation>

              <TextAnimation charInterval="40" >
              <a href="https://www.coursera.org/user/cc12e6563a5a168f9129bc3cba956bd3" rel="noreferrer"><b>Coursera</b></a>
              <ul>
              
                  <li> <p>Java Programming: Principles of Software Design</p><a href="https://coursera.org/share/5b4e58be316da59bced9cef4e5ccd9f8" rel="noreferrer">Certificate</a> </li>
                  <li> <p>Java Programming: Arrays, Lists, and Structured Data</p> <a href="https://coursera.org/share/8a9fb2bb0d5e5ca5981489489c846059" rel="noreferrer">Certificate</a> </li>
                  <li> <p>Java Programming: Solving Problems with Software</p> <a href="https://coursera.org/share/31147f965fb6466b2173bf26a53d2960" rel="noreferrer">Certificate</a> </li>
                  <li> <p>Programming Foundations with JavaScript, HTML and CSS</p> <a href="https://coursera.org/share/8664d1761aff6150db521786ac03e098" rel="noreferrer">Certificate</a> </li>

               </ul>
              </TextAnimation>
              
        <h2>Experience</h2>
            <TextAnimation charInterval="40" ><p class="title"><b>o	Languages, IDEs & Technologies</b></p>
            <ul>
                
                <li>My studies at the NWU have taught me how to code in Python, Java, C/C++, C# and SQL. I mostly used notepad++ and Visual Studio.</li>
                <li>I then started coding in MySQL, NoSQL, HTML, CSS, JavaScript, NODEJS, REACTJS and ANGULARJS. The IDEs I used for this was IntelliJ IDEA and Visual Studio Code. 
                  Some of the technologies I used included Maven, Spring Boot, Postman, React, NodeJS, Git, MySQL Workbench, SQL Developer and Firebase, covering the basics of each.</li>

            </ul></TextAnimation>
            <TextAnimation charInterval="40" ><p class="title"><b>o	External</b></p>
            <ul>
                
                <li>I have created and published, and is still maintaining and hosting a Wordpress website.</li>
                <li>I worked at a local gun shop during my off-time for about two months, where I also acquired experience in working with people, managing stock and sales.</li>

            </ul></TextAnimation>
            <p></p>

        <Link to="/files/TEST.pdf" target="_blank" download><h2>Download CV</h2></Link>
        <p></p>
      </>
    )
  }
}