import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./../styles/global.css"
import { gsap } from "gsap"
import Phone from "../images/svg/phone2.inline.svg"
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
const Ball = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: #c70039;
  background: linear-gradient(
    to bottom,
    rgba(199, 0, 56, 1) 0%,
    rgba(144, 12, 63, 1) 100%
  );
  transform: translateY(-100px);
  z-index: 5;
`
const Image = styled.img`
  width: 100px;
  height: 100px;
  transform: rotate(24deg) skew(-32deg, 6deg);
`
const Shadow = styled.div`
  width: 100px;
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

function TestPage() {
  const wrapper = useRef(null)

  useEffect(() => {
    const [elements] = wrapper.current.children

    const ballNew = elements.querySelector("#ballnew")
    const image = elements.querySelector("#image")
    console.log(ballNew)

    const shadowBall = elements.querySelector("#ballshadow")
    console.log(shadowBall)
    const phone = elements.querySelector("#phone")
    const phoneScreen = elements.querySelector("#phoneScreen")
    const shadow = elements.querySelector("#shadow")
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    const t2 = gsap.timeline({ repeat: -1 })

    gsap.set(ballNew, { y: 0 })
    gsap.set(image, { y: 265, attr: { src: htmlIcon } })
    gsap.set(shadow, { y: -10 })
    gsap.set(shadowBall, { opacity: 0.01, width: 1, y: 310 })

    t2.to("S", {
      duration: 5,
      rotate: 360,
      transformOrigin: "50% 50%",
      ease: "none",
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

    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally

    tl.add("start")
      .to(ballNew, {
        y: 330,
        duration: 0.5,

        ease: "circ.in",
      })
      .to(
        ballNew,
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
        image,
        {
          y: 255,
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
          width: 140,
          opacity: 0.7,
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
        <Ball id="ballnew"></Ball>
        <Shadow id="ballshadow" />
        <Image id="image" />
        <Phone />
      </Box>
    </Container>
  )
}

export default TestPage
