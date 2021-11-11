import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";

import 'animate.css';

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";


function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1 className="animate__animated animate__flipInX">Hola, soy Yuliana</h1>
            <h5>Aprendiz web developer</h5>
            <blockquote className="blockquote">
              <p className="mb-0">
                "Si puedes imaginarlo, puedes programarlo"
              </p>
              <footer className="blockquote-footer text-center mt-2">
                <cite title="Source Title">
                    Programación ATS (QEPD)
                </cite>
              </footer>
            </blockquote>
          </HeroLeft>
          <HeroRight>
            <Image
              src="./codinggirl.png"
              alt="woman-svgrepo" 
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="about">
          <ScrollLink>
            Conoce sobre mí 
            <img
              src="./down_icon.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
