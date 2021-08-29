import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./../styles/global.css"
import gsap from "gsap"
import phonesvg from "../images/phonesvg.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Mountains from "../components/Mountains.js"
import { colors, media } from "../utils"
import NavBar from "../components/navbar/NavBar"
import Main from "./../components/Main"
import Technologies from "../components/technologies/Technologies"
import Projects from "../components/projects/Projects"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  border: 1px solid black; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 700px;
  min-height: 700px;
`
const Space = styled.div`
  min-height: 2000px;
`
const Con = styled.div`
  width: 203.5px;
  height: 528.16px;
  left: 1349.69px;
  top: 1310.08px;

  background: #ffffff;
  border: 1px solid #535353;
  border-radius: 20px;
  transform: matrix(-0.57, -0.82, -0.83, 0.56, 0, 0);
  z-index: 10;
`
const Img = styled.img`
  //width: 360px;
`
const Conf = styled.div`
  font-family: "Rubik", sans-serif;
`
function TestPage() {
  return (
    <>
      <Container>
        <Box>
          <Img src={phonesvg}></Img>
        </Box>
      </Container>
    </>
  )
}

export default TestPage
