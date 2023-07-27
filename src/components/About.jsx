import React from "react";
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
        items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </>
      </motion.div>

      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/navait-kumar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5]">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>

        <a href="https://github.com/nk0311/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C0C0C0]">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
       
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello and Welcome! I'm a recent computer science graduate with a minor in math from Hunter College. 
        I have a strong passion for software engineering and I'm actively seeking opportunities to apply and
        further develop my skills. My portfolio showcases my coding projects, and I'm constantly
        striving to learn and grow in this dynamic field. I'm excited to collaborate with others and contribute
        to meaningful projects. Thank you for visiting my portfolio website, and I look forward to connecting
        with you!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
