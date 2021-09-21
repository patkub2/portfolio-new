import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./../styles/global.css"
import { gsap } from "gsap"
import Phone from "../images/phone.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Mountains from "../components/Mountains.js"
import { colors, media } from "../utils"
import NavBar from "../components/navbar/NavBar"
import Main from "./../components/Main"
import Technologies from "../components/technologies/Technologies"
import Projects from "../components/projects/Projects"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #ffc30f;
`
const Shadow = styled.div`
  width: 60px;
  height: 30px;
  background: radial-gradient(
    ellipse at center,
    rgba(88, 24, 69, 1) 0%,
    rgba(237, 237, 237, 0) 50%
  );
  position: relative;
  z-index: 1;
  transform: translateY(75px);
  opacity: 0.1;
`
const Ball = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c70039;
  background: linear-gradient(
    to bottom,
    rgba(199, 0, 56, 1) 0%,
    rgba(144, 12, 63, 1) 100%
  );
  transform: translateY(-100px);
`

function TestPage() {
  const el = useRef()
  var tl = gsap.timeline({ repeat: -1, yoyo: true })
  useEffect(() => {
    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
    tl.add("start")
      .to(".ball", {
        y: 100,
        duration: 0.5,
        ease: "circ.in",
      })
      .to(
        ".ball",
        {
          scaleY: 0.6,
          transformOrigin: "center bottom",
          borderBottomLeftRadius: "40%",
          borderBottomRightRadius: "40%",
          duration: 0.1,
          ease: "circ.in",
        },
        "-=.05"
      )
      .to(
        ".shadow",
        {
          width: 90,
          opacity: 0.7,
          duration: 0.5,
          ease: "circ.in",
        },
        "start"
      )
  }, [])
  return (
    <Container ref={el}>
      <Ball className="ball"></Ball>
      <Shadow className="shadow"></Shadow>
    </Container>
  )
}

export default TestPage
