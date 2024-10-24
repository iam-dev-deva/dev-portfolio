import React, { useState, useEffect } from "react";
import "./About.css";
import { BiChevronRight, BiFile, BiLogoTailwindCss } from "react-icons/bi";
import profile_img from "../../assets/profile-img.jpg";
import { GoProject } from "react-icons/go";
import { GiSuitcase } from "react-icons/gi";
import { CgCode } from "react-icons/cg";
import aos from "aos";
import "aos/dist/aos.css";
import { AnimatedFill, CountUpWrapper, IconWithText } from "../../AnimateDatas";
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact, } from "react-icons/fa";
import { DiPhotoshop, DiPostgresql } from "react-icons/di";
import { BsFileWord } from "react-icons/bs";
import { SiAdobelightroom, SiMysql, SiPostman, SiServerless, SiSwagger, } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";

const skills = [
  { icon: FaHtml5, name: "HTML", hoverColor: "orangered" },
  { icon: FaCss3Alt, name: "CSS", hoverColor: "dodgerblue" },
  { icon: FaJsSquare, name: "JavaScript", hoverColor: "gold" },
  { icon: FaNodeJs, name: "NodeJS", hoverColor: "green" },
  { icon: FaReact, name: "React", hoverColor: "skyblue" },
  { icon: FaGithub, name: "GitHub", hoverColor: "purple" },
  { icon: DiPhotoshop, name: "PhotoShop", hoverColor: "deepskyblue" },
  { icon: BsFileWord, name: "Word", hoverColor: "royalblue" },
  { icon: FaBootstrap, name: "BootStrap", hoverColor: "blueviolet" },
  { icon: BiLogoTailwindCss, name: "Tailwind", hoverColor: "cyan" },
  { icon: FaPython, name: "Python", hoverColor: "#4584b6" },
  { icon: SiAdobelightroom, name: "LightRoom", hoverColor: "#00FFFF" },
  { icon: FaPhp, name: "PHP", hoverColor: "#336699" },
  { icon: SiMysql, name: "MySQL", hoverColor: "#008B8B" },
  { icon: DiPostgresql, name: "Postgresql", hoverColor: "#4682B4" },
  { icon: SiServerless, name: "Serverless", hoverColor: "#FF6347" },
  { icon: SiSwagger, name: "Swagger", hoverColor: "#9ACD32" },
  { icon: SiPostman, name: "PostMan", hoverColor: "#D2691E" },
];

const About = () => {
  aos.init();
  const [animateSkills, setAnimateSkills] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector(".skills");
      if (skillsSection && skillsSection.classList.contains("aos-animate")) {
        setAnimateSkills(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="top-content" data-aos="fade-in" data-aos-duration="1000">
        <h1>About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui,
          consequuntur eius dolorem dolores animi. Natus similique, fugit ullam
          quaerat at maiores id minima neque totam nam doloremque quia incidunt.
        </p>
      </div>

      <section className="bio-data-section">
        <div className="about" data-aos="fade-up" data-aos-duration="1000">
          <div className="bio-image">
            <img src={profile_img} alt="" />
          </div>
          <div className="content">
            <div className="bio-data-heading">
              <h2>Backend & Web Developer</h2>
              <p className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bio-data-rows">
              <div className="row">
                <ul className="row-data">
                  <li>
                    <BiChevronRight />
                    <b>BirthDay: </b>
                    <span>1 April 2000</span>
                  </li>
                  <li>
                    <BiChevronRight />
                    <b>Website:</b>
                    <span> deva.arcee@gmail.com</span>
                  </li>
                  <li>
                    <BiChevronRight />
                    <b>Phone:</b>
                    <span> 9858500932</span>
                  </li>
                </ul>
              </div>
              <div className="row">
                <ul className="row-data">
                  <li>
                    <BiChevronRight />
                    <b>Age: </b> <span>20</span>
                  </li>
                  <li>
                    <BiChevronRight />
                    <b>Degree:</b>
                    <span> MCA</span>
                  </li>
                  <li>
                    <BiChevronRight />
                    <b>Email:</b> <span>example@example.com</span>
                  </li>
                </ul>
              </div>
              <p className="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore.Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats" data-aos="fade-up" data-aos-duration="1200">
          <div className="stat">
            <span className="stat-icon">
              <GoProject />
            </span>
            <div className="item">
              <h2>
                <CountUpWrapper
                  start={0}
                  end={5}
                  delay={0}
                  enableScrollSpy={true}
                />
              </h2>
              <span>Projects Done</span>
            </div>
          </div>
          <div className="stat">
            <span className="stat-icon">
              <BiFile />
            </span>
            <div className="item">
              <h2>
                <CountUpWrapper
                  start={0}
                  end={220}
                  delay={0}
                  enableScrollSpy={true}
                />
              </h2>
              <span>Files Committed</span>
            </div>
          </div>
          <div className="stat">
            <span className="stat-icon">
              <GiSuitcase />
            </span>
            <div className="item">
              <h2>
                <CountUpWrapper
                  start={0}
                  end={2}
                  delay={0}
                  enableScrollSpy={true}
                />
              </h2>
              <span>Years of Experience</span>
            </div>
          </div>
          <div className="stat">
            <span className="stat-icon">
              <CgCode />
            </span>
            <div className="item">
              <h2>
                <CountUpWrapper
                  start={0}
                  end={10}
                  delay={0}
                  enableScrollSpy={true}
                />
              </h2>
              <span>Language Worked</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2>Features</h2>
            <div>
              <span>I'm</span>{" "}
              <span className="description-title">interested in</span>
            </div>
          </div>
          <div className="skills" data-aos="fade-left" data-aos-duration="1000">
            <div className="skill-row">
              <div className="skill">
                <AnimatedFill
                  title="Frontend"
                  width="30%"
                  triggerAnimation={animateSkills}
                />
              </div>
              <div className="skill">
                <AnimatedFill
                  title="Backend"
                  width="80%"
                  triggerAnimation={animateSkills}
                />
              </div>
            </div>
            <div className="skill-row">
              <div className="skill">
                <AnimatedFill
                  title="Designing"
                  width="40%"
                  triggerAnimation={animateSkills}
                />
              </div>
              <div className="skill">
                <AnimatedFill
                  title="Photography"
                  width="70%"
                  triggerAnimation={animateSkills}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skill-icon-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Skills</h2>
            <div>
              <span>My</span> <span className="description-title">Skills</span>
            </div>
          </div>
          <div className="skills-list" data-aos="fade-down" data-aos-duration="1000">
            {skills.map((skill, index) => (
              <IconWithText
                key={index}
                icon={skill.icon}
                skillName={skill.name}
                hoverColor={skill.hoverColor}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
