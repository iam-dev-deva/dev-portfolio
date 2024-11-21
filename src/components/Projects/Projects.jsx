import React from "react";
import "./Projects.css";
import aos from "aos";
import "aos/dist/aos.css";
import { FaLink } from "react-icons/fa6";
import project_img from "../../assets/acc-temp.jpg";
import project_img2 from "../../assets/portfolio-temp.png";

const Projects = () => {
  aos.init();
  return (
    <div className="container top-content" data-aos="fade-in" data-aos-duration="1000">
      <h1>Projects</h1>
      <p>
      Developed interactive, user-focused applications using React and modern frontend technologies,
       prioritizing responsiveness and smooth user experience.
      </p>
      <div className="projects-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="projects-item" data-aos="fade-up" data-aos-duration="1000">
          <h4>Project 1</h4>
          <img className="project-thum" src={project_img} alt="project" />
          <div className="item-center">
            <a href="https://arcee-clicks.netlify.app/" target="blank"><FaLink /></a>
          </div>
          <span>Photography Showcase Site</span>
        </div>
        <div className="projects-item" data-aos="fade-up" data-aos-duration="1000">
          <h4>Project 2</h4>
          <img className="project-thum" src={project_img2} alt="project" />
          <div className="item-center">
            <a href="/"><FaLink /></a>
          </div>
          <span>Personal Portfolio Website</span>
        </div>
        <div className="projects-item" data-aos="fade-up" data-aos-duration="1000">
          <h4>Project 3</h4>
          <img className="project-thum" src={project_img2} alt="project" />
          <div className="item-center">
            <a href=""><FaLink /></a>
          </div>
          <span>Site is Under Development</span>
        </div>
        <div className="projects-item" data-aos="fade-up" data-aos-duration="1000">
          <h4>Project 4</h4>
          <img className="project-thum" src={project_img2} alt="project" />
          <div className="item-center">
            <a href=""><FaLink /></a>
          </div>
          <span>Site is Under Development</span>
        </div>
        <div className="projects-item" data-aos="fade-up" data-aos-duration="1000">
          <h4>Project 5</h4>
          <img className="project-thum" src={project_img2} alt="project" />
          <div className="item-center">
            <a href=""><FaLink /></a>
          </div>
          <span>Site is Under Development</span>
        </div>
        <div className="projects-item" data-aos="fade-up" data-aos-duration="1000">
          <h4>Project 6</h4>
          <img className="project-thum" src={project_img2} alt="project" />
          <div className="item-center">
            <a href=""><FaLink /></a>
          </div>
          <span>Site is Under Development</span>
        </div>

      </div>
    </div>
  );
};

export default Projects;
