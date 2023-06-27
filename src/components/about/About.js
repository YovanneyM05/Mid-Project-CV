import React from "react";
import ME from '../../assets/me-about.jpg'
import { FaAward} from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Antares Biya</h5>
      <h2>hello gyss </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ ME } alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>masih pemula</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>belum ada</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>2 selesai</small>
            </article>

          </div>

          <p></p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
