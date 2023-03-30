import React from 'react'
import "./App.css";
import getinshape from './logos/getinshapelogo.png';
import webpack from './logos/webpack.png';
import webstoremern from './logos/webstoremern.png';
import gelato from './logos/gelato.jpg';
import ptm from './logos/ptm.png';
import bank from './logos/bank.jpg';
import unit from './logos/8200unit.png';
export default function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>My Portfolio - Yuval Kopelman</h1>
      </header>
      <section className="intro">
        <p>Welcome to my portfolio! Here, you can find a collection of my work and learn more about me.</p>
      </section>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          {/* Replace these placeholders with your actual projects */}
          <div className="project-card">
            <img src={getinshape} alt="Project 1" />
            <h3>GETIN Shape</h3>
            <p>Android application based on Java</p>
            <div className="project-links">
              <a href="https://github.com/Yuvalkop22/GETIN-shape-Kopelman">Github</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-640x400.png" alt="Project 2" />
            <h3>Yad-2</h3>
            <p>Android + ROOM local database</p>
            <div className="project-links">
              <a href="https://github.com/Yuvalkop22/Yad2-Application">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src={ptm} alt="Project 3" />
            <h3>Flight Simulator</h3>
            <p>Java project of flight simulator</p>
            <div className="project-links">
              <a href="https://github.com/PTM2-flight-simulator-team">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src={webstoremern} alt="Project 3" />
            <h3>Web Clothes Store</h3>
            <p>Web application - MERN + Scraping</p>
            <div className="project-links">
              <a href="https://github.com/Web-Store-Final-Project/react_final_project">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src={gelato} alt="Project 3" />
            <h3>Gelato</h3>
            <p>Web application - JQUERY, NodeJS</p>
            <div className="project-links">
              <a href="https://github.com/Yuvalkop22/Gelato">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src={webpack} alt="Project 3" />
            <h3>Web Store</h3>
            <p>Webpack Project</p>
            <div className="project-links">
              <a href="https://github.com/Yuvalkop22/store-webpack">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>About Me</h2>
        <h3>Skills</h3>
        <p>C,C++,C#,Java,Python</p>
        <p>Web development - React, Angular 12, MongoDB, NodeJS, Express, Rest API</p>
        <p>Android development - Java, SQL, Firebase</p>
        <p>Other - Git, JIRA</p>
        <h3>Military Service</h3>
        <div className="mil-wrapper">
          <p>8200 unit</p>
          <img src={unit} className="unitimg" alt="img"/>
        </div>
        <p>Service at the Intelligence Corps, 8200 Unit.
          Teaching and commanding of several courses in Arabic in 8200 Unit.</p>
        <h3>Professional Experience</h3>
        <div className="bank-wrapper">
          <p>Bank of Israel</p>
          <img src={bank} className="bankimg" alt="bank"/>
        </div>
        <p>Internship as a Full-Stack developer + DevOps "as a service".
        Experienced with .NET, Angular 12 and Azure DevOps</p>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: Kopelman050@gmail.com</p>
        <p>Phone: 050-9516515</p>
        <p>Github: <a href="https://github.com/Yuvalkop22">YuvalKop22</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yuval-kopelman-789a7420b/">Yuval Kopelman</a></p>
      </section>
    </div>
  )
}