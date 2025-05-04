import React, { Component } from 'react';
import './AboutImgStyles.css';

class AboutImg extends Component {
  render() {
    return (
      <div className="about-img">
        <div className="heading">
          <h1 className="skills">MY SKILLS:</h1>
          
          <div className="skills-section">
    
            <h2 className="skills-heading">Development</h2>
            <ul className="p2">
              <li><strong>Java Development: </strong> 2+ years of experience building scalable and maintainable applications using Java.</li>
    
              <li><strong>Backend Development: </strong> Expertise in developing RESTful APIs and business logic using Spring Boot and Hibernate.</li>

              <li><strong>Frontend Development: </strong> Proficient in React.js for creating responsive and dynamic user interfaces.</li>
              <li><strong>Database Management: </strong> Solid experience in designing relational databases and optimizing queries for performance.</li>
              <li><strong>System Integration: </strong> Skilled in integrating frontend with backend services and handling real-time data flow.</li>
              <li><strong>Team Collaboration: </strong> Proven ability to work in agile teams, contribute to code reviews, and follow best coding practices.</li>
            </ul>
    
            <h2 className="skills-heading">Core Computer Science</h2>
            <ul className="p2">
              <li><strong>Data Structures & Algorithms:</strong> Strong understanding and hands-on problem-solving using arrays, trees, graphs, and algorithms.</li>
              <li><strong>DBMS:</strong> Proficient in normalization, SQL queries, indexing, transactions, and ACID properties.</li>
              <li><strong>Object-Oriented Programming:</strong> Well-versed in OOP principles such as inheritance, polymorphism, encapsulation, and abstraction.</li>
              <li><strong>Computer Networks:</strong> Familiar with networking fundamentals including TCP/IP, HTTP/HTTPS, and OSI layers.</li>
            </ul>
    
            <h2 className="skills-heading">Database Technologies</h2>
            <ul className="p2">
              <li><strong>MySQL:</strong> Experienced in writing complex queries, procedures, and optimizing performance in relational databases.</li>
              <li><strong>MongoDB:</strong> Capable of handling unstructured data and building flexible, scalable NoSQL databases for high-traffic applications.</li>
            </ul>

            <div className="skills-sections">
              <h2 className="hh2">Coding Profiles:</h2>
              <ul className="p2">
                <li><a href="https://leetcode.com/u/2109code/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
                <li><a href="https://www.codechef.com/users/aashif21" target="_blank" rel="noopener noreferrer">CodeChef</a></li>
                <li><a href="https://www.naukri.com/code360/profile/87ac706d-1f3b-4872-a5d4-786c13408431" target="_blank" rel="noopener noreferrer">Coding Ninjas</a></li>
                <li><a href="https://github.com/Aa2109" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>

            <div className="skills-sections">
              <h2 className="hhh2">Technical Skills:</h2>
              <ul className="p2">
                <li><strong>Languages:</strong> Java, Python, JavaScript (React.js)</li>
                <li><strong>Databases:</strong> MySQL, MongoDB</li>
                <li><strong>Frameworks & Tools:</strong> Spring Boot, Spring MVC, REST APIs, Microservices, Git, GitHub, Postman</li>
                <li><strong>Core Concepts:</strong> DSA, DBMS, OOPs, Computer Networks, Operating System</li>
                <li><strong>Web Technologies:</strong> HTML, CSS, Responsive UI with Tailwind CSS</li>
              </ul>
            </div>
    
          </div>
        </div>
      </div>
    );
    
  }
}

export default AboutImg;
