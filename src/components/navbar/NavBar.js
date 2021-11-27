import logo from "../../images/Logo.svg"
import "./index.css"
import React from "react"
import Burgermenu from "./Burgermenu"
import styled from "styled-components"

import { colors, media, typography } from "../../utils"
const Container = styled.div`
  position: fixed;
  border: 1px solid yellow; /* BORDER TEST*/
  padding: 0;
  margin: 0;
  height: 75px;
  display: flex;
  justify-content: flex-start;
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
const Img = styled.div`
  height: 60%;
  margin: 0 10px;
  img {
    height: 100%;
  }
`
const Link = styled.div`
  border: 1px solid yellow; /* BORDER TEST*/
`
const Menu = styled.div`
  border: 1px solid yellow; /* BORDER TEST*/
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
          <Img>
            <img src={logo}></img>
          </Img>
          Patryk Kubala
        </Name>

        <Menu>
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
