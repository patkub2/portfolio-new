import logo from "../../images/Logo.svg"
import "./index.css"
import React, { useRef, useEffect } from "react"
import Burgermenu from "./Burgermenu"
import styled from "styled-components"
import { colors, media, typography } from "../../utils"
import gsap from "gsap"
const Container = styled.div`
  width: 100%;
  max-width: 1700px;
  position: fixed;
  //border: 1px solid red; /* BORDER TEST*/
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
  //background-color: rgba(255, 255, 255, 1);
`
const Name = styled.div`
  //border: 1px solid yellow; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Img = styled.img`
  //border: 1px solid red; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 10px;
`
const Link = styled.a`
  border: 1px solid red; /* BORDER TEST*/
  font-size: ${typography.h5};
  font-weight: 400;
  margin: 0 5px;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  svg {
    position: absolute;
  }
`
const Menu = styled.div`
  //border: 1px solid yellow; /* BORDER TEST*/
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
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  useEffect(() => {
    const showAnim = gsap
      .from(".navbar", {
        yPercent: -100,
        paused: true,
        duration: 0.5,
      })
      .progress(1)

    gsap.to(".home", {
      ease: "none",
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: 99999,
        onUpdate: self => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        },
      },
    })
  }, [])
  return (
    <>
      <Container className="navbar">
        <Name>
          <Img src={logo}></Img>
          Patryk Kubala
        </Name>

        <Menu>
          <Link href="#home">Home</Link>
          <Link href="#technologies">Technologies</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <svg
            width="104"
            height="44"
            viewBox="0 0 104 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              id="buttonsvg"
              x="1"
              y="1"
              width="102"
              height="42"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          Contact
        </Menu>
      </Container>

      <BurgermenuContainer>
        <Burgermenu />
      </BurgermenuContainer>
    </>
  )
}
