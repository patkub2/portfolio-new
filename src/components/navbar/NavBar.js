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
  //border: 1px solid red; /* BORDER TEST*/
  font-size: ${typography.h5};
  font-weight: 400;
  margin: 0 5px;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
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
const Wrapper = styled.div`
  margin: 0 5px;
  a {
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: black;
    background-color: rgba(255, 255, 255, 1);
    //border: 2px solid #333;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }

  a span {
    position: relative;
    z-index: 2;
  }

  a:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: black;
    transition: all 0.35s;
  }

  a:hover {
    color: #fff;
  }

  a:hover:after {
    width: 100%;
  }
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
      <Container className="navbar" id="home">
        <Name>
          <Img src={logo}></Img>
          Patryk Kubala
        </Name>

        <Menu>
          <Wrapper>
            <a href="#home">
              <span>Home</span>
            </a>
          </Wrapper>
          <Wrapper>
            <a href="#technologies">
              <span>Technologies</span>
            </a>
          </Wrapper>
          <Wrapper>
            <a href="#projects">
              <span>Projects</span>
            </a>
          </Wrapper>
          <Wrapper>
            <a href="#emaile">
              <span>Contact</span>
            </a>
          </Wrapper>
        </Menu>
      </Container>

      <BurgermenuContainer>
        <Burgermenu />
      </BurgermenuContainer>
    </>
  )
}
