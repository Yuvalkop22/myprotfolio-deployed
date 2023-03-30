import React from 'react'
import "./App.css";

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
            <img src="https://via.placeholder.com/300" alt="Project 1" />
            <h3>Project 1</h3>
            <p>A brief description of Project 1.</p>
            <a href="#">Learn more</a>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2.</p>
            <a href="#">Learn more</a>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 3" />
            <h3>Project 3</h3>
            <p>A brief description of Project 3.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>About Me</h2>
        <p>Write a brief introduction about yourself and your skills here.</p>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        {/* Replace these placeholders with your actual contact information */}
        <p>Email: Kopelman050@gmail.com</p>
        <p>Phone: 050-9516515</p>
        <p>Github: <a href="https://github.com/Yuvalkop22">YuvalKop22</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yuval-kopelman-789a7420b/">Yuval Kopelman</a></p>
      </section>
    </div>
  )
}