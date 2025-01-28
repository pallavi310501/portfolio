import React from 'react';
import './App.css';
import SocialLinks from './SocialLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hi, I'm Pallavi Yellisetty <span role="img" aria-label="wave">👋</span></h2>
        <div className="profile-picture">
          <img src="https://imgur.com/a/0MKq4bE" alt="PAllavi Yellisetty" />
        </div>
        <div className="intro">
          <h3>About Me</h3>
          <p>
            I’m a Computer Science graduate student at the University of Texas at Arlington with a strong background in technology and hands-on experience across various internships. I've worked with AWS on cloud architecture, Path Creators on robotics, Indian Servers Company on cybersecurity, and IBM on data science and machine learning. I specialize in Java, Python, SQL, and PostgreSQL, and am skilled in Spring Boot, Maven, Selenium, and AWS. I’ve also led projects in biometric security and road lane detection. I’m passionate about technology and eager to contribute to innovative projects. Connect with me on LinkedIn or reach out for collaboration opportunities!
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p>
            <strong>University of Texas at Arlington</strong><br />
            Master of Science in Computer Science<br />
            [2024]
          </p>
          <p>
            <strong>Jawaharlal Nehru Technological University</strong><br />
            Bachelor of Computer Science<br />
            [2022]
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li className="skill-item">Java</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">PostgreSQL</li>
            <li className="skill-item">Spring Boot</li>
            <li className="skill-item">Maven</li>
            <li className="skill-item">Selenium</li>
            <li className="skill-item">AWS</li>
            <li className="skill-item">Git</li>
            <li className="skill-item">Gradle</li>
            <li className="skill-item">Junit</li>
            <li className="skill-item">React</li>
            <li className="skill-item">MongoDB</li>
            <li className="skill-item">Spring MVC</li>
            <li className="skill-item">C</li>
            <li className="skill-item">C++</li>
            <li className="skill-item">Hibernate</li>
          </ul>
        </div>
        <SocialLinks />
      </header>
    </div>
  );
}

export default App;






