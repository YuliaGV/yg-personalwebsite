import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="./Logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Proyectos
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            Sobre mí
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1iZY6IYfsPXlyKHwGbKcQ-oeBcH7qdwDN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
