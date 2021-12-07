import React, { Component } from "react";
import TextAnimation from 'react-animate-text';
import {Pie, Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
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


        <div class="education">
        <h2>Education</h2>
        <TextAnimation charInterval="40" ><p class="title"><b>Degree</b></p>
        <p>BSc Information Technology/Computer Science at the Nort-West University</p></TextAnimation>
        <TextAnimation charInterval="40" ><p class="title"><b>Badges and Certificates</b></p>
        <p>Badges and Certificates...  </p></TextAnimation>
        <p></p>

        <h2>CV-Download link...</h2>
        </div>
      </>
    )
  }
}