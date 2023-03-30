import React from 'react'
import "./App.css";
import getinshape from './logos/getinshapelogo.png';
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
            <img src="https://via.placeholder.com/300" alt="Project 2" />
            <h3>Yad-2</h3>
            <p>Android + ROOM local database</p>
            <div className="project-links">
              <a href="https://github.com/Yuvalkop22/Yad2-Application">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 3" />
            <h3>Flight Simulator</h3>
            <p>Java project of flight simulator</p>
            <div className="project-links">
              <a href="https://github.com/PTM2-flight-simulator-team">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 3" />
            <h3>Web Clothes Store</h3>
            <p>Web application - MERN + Scraping</p>
            <div className="project-links">
              <a href="https://github.com/Web-Store-Final-Project/react_final_project">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 3" />
            <h3>Gelato</h3>
            <p>Web application - JQUERY, NodeJS</p>
            <div className="project-links">
              <a href="https://github.com/Yuvalkop22/Gelato">GitHub</a>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 3" />
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
        <p>Write a brief introduction about yourself and your skills here.</p>
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