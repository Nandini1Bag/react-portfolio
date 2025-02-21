import React from 'react'
import './about.css'
import ME from '../../assets/Profile-pic.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

//.about__content and then press enter for div element addition automatically
const About = () => {
  return (
    <section id="about">About
    <h5>Get to Know</h5>
    <h2>About Me </h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="About Img"/>
        </div>
     </div>        
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>8+ years Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ </small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ </small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci saepe officiis asperiores non voluptates, labore libero veniam nesciunt ullam mollitia, magni unde maiores, esse vel repellat accusamus eaque molestiae illum?
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About