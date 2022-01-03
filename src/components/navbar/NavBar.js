import logo from "../../images/Logo.svg"
import "./index.css"
import React from "react"
import Burgermenu from "./Burgermenu"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

import { colors, media, typography } from "../../utils"
const Container = styled.div`
  width: 100%;
  max-width: 1700px;
  position: fixed;
  border: 1px solid red; /* BORDER TEST*/
  padding: 0;
  margin: 0;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-style: normal;
  font-weight: 300;
  font-size: ${typography.h5};
  line-height: 17px;
  z-index: 90;
`
const Name = styled.div`
  border: 1px solid yellow; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Img = styled.img`
  border: 1px solid red; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 10px;
`
const Link = styled.button`
  border: 1px solid yellow; /* BORDER TEST*/
  font-size: ${typography.h5};
  font-weight: 400;
  margin: 0 20px;
`
const Menu = styled.div`
  border: 1px solid yellow; /* BORDER TEST*/
  display: none;

  justify-content: flex-start;
  align-items: center;
  ${media.desktop`
display: flex;
  `}
`
const BurgermenuContainer = styled.div`
  display: inline;
  ${media.desktop`
display: none;
  `}
`
export default function NavBar() {
  return (
    <>
      <Container>
        <Name>
          <Img src={logo}></Img>
          Patryk Kubala
        </Name>

        <Menu>
          <Link onClick={() => scrollTo("#contact")}>Home</Link>
          <Link>Technologies</Link>
          <Link>Projects</Link>
          <Link>Contact</Link>
        </Menu>
      </Container>

      <BurgermenuContainer>
        <Burgermenu />
      </BurgermenuContainer>
    </>
  )
}
