import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./../styles/global.css"
import { gsap } from "gsap"
import Phone from "../images/svg/phone.svg"
import email from "../images/icons/email.svg"
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

    gsap.set(ball, { y: -200 })
    gsap.set(shadow, { y: -10 })
    gsap.set(ballcolor, { fill: "blue" })
    gsap.set(shadowBall, { opacity: 0.01, width: 1 })
    gsap.set(imageball, {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    })

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
