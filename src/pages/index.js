import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./../styles/global.css"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import Mountains from "../components/Mountains.js"

import NavBar from "../components/navbar/NavBar"
import Main from "./../components/Main"
import Technologies from "../components/technologies/Technologies"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  //border: 1px solid yellow; /* BORDER TEST*/
  padding: 0;
  margin: 0;
  height: 100vh;

  //background-color: #130d0a;
  font-family: "Rubik", sans-serif;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const Box = styled.div`
  //border: 1px solid black; /* BORDER TEST*/

  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 50vh;
`
const Space = styled.div`
  min-height: 2000px;
`
const Con = styled.div`
  display: flex;
  align-items: center;
`
const Phone = styled.div`
  //width: 360px;
`
const Conf = styled.div`
  font-family: "Rubik", sans-serif;
`
function IndexPage() {
  return (
    <Conf>
      {" "}
      <Phone>
        <NavBar />
        <Container>
          <Box>
            <Main />
          </Box>
          <Box>
            <Mountains></Mountains>{" "}
          </Box>
          <Technologies></Technologies>
        </Container>
        <Space />
      </Phone>
    </Conf>
  )
}

export default IndexPage
