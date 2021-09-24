import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./../styles/global.css"
import { gsap } from "gsap"
import Phone from "../images/svg/phone.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import htmlIcon from "../images/icons/html-skew.svg"
import cssIcon from "../images/icons/css-skew.svg"
import sassIcon from "../images/icons/sass-skew.svg"
import jsIcon from "../images/icons/javascript-skew.svg"
import tsIcon from "../images/icons/typescript-skew.svg"
import reactIcon from "../images/icons/react-skew.svg"
import reduxIcon from "../images/icons/redux-skew.svg"
import gatsbyIcon from "../images/icons/gatsby-skew.svg"
import gitIcon from "../images/icons/git-skew.svg"
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

function TestPage() {
  const wrapper = useRef(null)

  useEffect(() => {
    const [elements] = wrapper.current.children

    const ball = elements.querySelector("#ball")
    const ballcolor = elements.querySelector("#ballcolor")
    const ballimg = elements.querySelector("#ballimg")
    const imageball = elements.querySelector("#imageball")

    const shadowBall = elements.querySelector("#ballShadow")
    const phone = elements.querySelector("#phone")
    const phoneScreen = elements.querySelector("#phoneScreen")
    const shadow = elements.querySelector("#shadow")
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    const t2 = gsap.timeline({ repeat: -1 })

    t2.to(ballimg, {
      duration: 1,
      rotate: 180,
      transformOrigin: "50% 50%",
      ease: "none",
    })

    gsap.set(ball, { y: -200, fill: { src: htmlIcon } })
    gsap.set(shadow, { y: -10 })
    gsap.set(ballcolor, { fill: "blue" })
    gsap.set(shadowBall, { opacity: 0.01, width: 1 })

    const technologies = [
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "Sass/SCSS", icon: sassIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "React", icon: reactIcon },
      { name: "Redux", icon: reduxIcon },
      { name: "Gatsby", icon: gatsbyIcon },
      { name: "Git", icon: gitIcon },
    ]
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

          duration: 0.1,
          ease: "circ.in",
        },
        "-=.05"
      )
      .to(
        phone,
        {
          y: -10,
          duration: 0.5,

          ease: "circ.in",
        },
        "start"
      )
      .to(
        shadow,
        {
          y: 0,
          duration: 0.5,

          ease: "circ.in",
        },
        "start"
      )
      .to(
        shadowBall,
        {
          y: -10,
          width: 20,
          opacity: 0.5,
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
