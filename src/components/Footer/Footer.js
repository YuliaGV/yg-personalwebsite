import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-color: #012633;
  background-image: linear-gradient(0deg, #012633 0%, #89c1b9 100%);
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Realizado con 💙 por{" "}
          <a
            href="https://github.com/YuliaGV"
            target="_blank"
            rel="noopener noreferrer"
          >
            @YuliaGV
          </a>{" "}
          - Adaptación del template original de{" "}
          <a
            href="https://github.com/gurupawar//"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gurupawar
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
