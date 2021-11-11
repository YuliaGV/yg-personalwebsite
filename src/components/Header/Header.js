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
            href="https://www.canva.com/design/DAEmdBtlRwA/xgWv-0nt2O5ll8MNjw-W9Q/view?utm_content=DAEmdBtlRwA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver CV
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
