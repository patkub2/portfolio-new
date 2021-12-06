import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./../styles/global.css"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { colors, media, typography } from "../utils"

import NavBar from "../components/navbar/NavBar"
import Technologies from "../components/technologies/Technologies"
import Projects from "../components/projects/Projects"
import Space from "../components/Space"
import Hello from "../components/main/Hello"
import Contact from "../components/contact/Contact"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  padding: 0;
  margin: 10px;
  max-width: 1700px;
  //background-color: #130d0a;
  font-family: "Rubik", sans-serif;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1%;
  ${media.phone`
  padding: 0;
  `}
`

const Space2 = styled.div`
  min-height: 2000px;
`

const Phone = styled.div`
  //width: 360px;
`
const Conf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-size: 32px;
  ${media.phone`
  font-size: 45px;
  `}
`
function IndexPage() {
  return (
    <Conf>
      {" "}
      <Phone>
        <NavBar />

        <Container>
          {" "}
          <Hello />
          <Space />
          <Technologies />
          <Space />
          <Projects />
          <Contact />
        </Container>
        <Space2 />
      </Phone>
    </Conf>
  )
}

export default IndexPage
