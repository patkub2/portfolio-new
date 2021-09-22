import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./../styles/global.css"
import { gsap } from "gsap"
import Phone from "../images/svg/phone.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Box = styled.div`
  border: 1px solid black; /* BORDER TEST*/
  height: 700px;
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`

const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  z-index: 10;
  transform: translateY(75px);
  opacity: 0.1;
  margin-bottom: 200px;
`
const Ball = styled.div`
  z-index: 11;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000d99;
  transform: translateY(-100px);
`

function TestPage() {
  const wrapper = useRef(null)

  useEffect(() => {
    const [elements] = wrapper.current.children

    const ball = elements.querySelector("#ball")

    const shadowBall = elements.querySelector("#shadowBall")
    const phone = elements.querySelector("#phone")
    const phoneScreen = elements.querySelector("#phoneScreen")
    const shadow = elements.querySelector("#shadow")
    console.log(phoneScreen)
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    const t2 = gsap.timeline({ repeat: -1, yoyo: true })

    gsap.set(ball, { y: -200, fill: "blue" })
    gsap.set(shadowBall, { opacity: 0.01, width: 30 })

    var fills = ["rgba(255,0,0,0.5)", "rgba(0,255,0,0.5)", "rgba(0,0,255,0.5)"],
      index = -1
    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally

    tl.add("start")
      .to(ball, {
        y: 0,
        duration: 0.5,
        ease: "circ.in",
      })
      .to(
        ball,
        {
          scaleY: 0.6,
          transformOrigin: "center bottom",
          borderBottomLeftRadius: "40%",
          borderBottomRightRadius: "40%",
          fill: "blue",
          duration: 0.1,
          ease: "circ.in",
        },
        "-=.05"
      )
      .to(
        shadowBall,
        {
          width: 70,
          opacity: 0.5,
          duration: 0.5,
          ease: "circ.in",
        },
        "start"
      )
      .to(
        phone,
        {
          duration: 0.5,
          ease: "circ.in",
        },
        "start"
      )
  }, [])
  return (
    <Container ref={wrapper}>
      <Box>
        {" "}
        <Phone />
      </Box>
    </Container>
  )
}

export default TestPage
