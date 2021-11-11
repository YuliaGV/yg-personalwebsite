import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";


function About() {
  return (

    <>
    <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#012633"
          className="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
   
    <ContactWrapper id="about">
  
      <div className="Container">
        <div className="SectionTitle">Sobre mí</div>
        <div className="BigCard">
          <Image
            src="./Caricatura.PNG"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            ¡Hola! Mi nombre es <strong>Yuliana Gaviria,</strong> soy aprendiz ADSI del SENA con etapa lectiva finalizada 
            y tripulante de la Misión TIC 2021, actualmente en el ciclo 4. Estoy en búsqueda de oportunidades que me permitan crecer profesionalmente en el sector tecnológico
          </div>
          <div className="AboutBio tagline2">
            Constantemente estoy aprendiendo nuevas tecnologías y aplicándolas en diferentes proyectos
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
    </>
  );
}

export default About;