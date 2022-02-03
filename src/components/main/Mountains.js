import React, { useEffect } from "react"
import styled from "styled-components"
import ".././layout.css"
import gsap from "gsap"
import im8 from "../../images/8.png"
import imbg from "../../images/bg.png"
import impla from "../../images/bgpla.png"
import birds from "../../images/birds.png"
import mountains from "../../images/mountains.png"
import lake from "../../images/lake.png"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { media } from "../../utils"
import { Power3 } from "gsap"
gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: hidden;
  width: 80vw;
  height: 80vw;
  max-width: 700px;
  max-height: 700px;
  //margin: 0 50px;
  justify-content: flex-start;
  align-items: center;
  ${media.desktop`
  margin: 0;
    width: 50vw;
    height: 50vw;
  max-width: none;
  max-height: none;
  `}
  ${media.tablet`
  margin: 0 50px;
  `}

  .mountains {
    visibility: hidden;
    z-index: 1;
    background-image: url(${mountains});
    padding: 0;
    margin: 0;
  }
  .lake {
    visibility: hidden;
    z-index: 2;
    background-image: url(${lake});
    padding: 0;
    margin: 0;
  }
  .im8 {
    visibility: hidden;
    z-index: 8;
    background-image: url(${im8});
    padding: 0;
    margin: 0;
  }
  .birds {
    visibility: hidden;
    z-index: 8;
    background-image: url(${birds});
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .impla {
    visibility: hidden;
    z-index: 10;
    background-image: url(${impla});
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 2px solid white;
    //background-size: 100vw 50vh;
    background-size: cover;
    background-position: left;
  }
  .imbgcolor {
    visibility: hidden;
    z-index: 0;
    padding: 0;
    margin: 0;
    background: linear-gradient(
      180deg,
      rgba(165, 212, 234, 1) 52%,
      rgba(2, 13, 23, 1) 53%
    );
  }
  .imbg {
    visibility: hidden;
    z-index: 1;
    padding: 0;
    margin: 0;
    background-image: url(${imbg});
  }
`
const Box = styled.div`
  position: absolute;
  right: -2%;
  bottom: -1%;
  //border: 1px solid blue; /* BORDER TEST*/
  color: black;
  padding: 0;
  margin: 0;
  width: 103%;
  height: 103%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

function Mountains() {
  useEffect(() => {
    let t1 = gsap.timeline({ delay: 1.2 })
    t1.from(
      ".mountainscont",
      { y: -35, opacity: 0, ease: Power3.easeOut, delay: 0.2, autoAlpha: 0 },
      "Start"
    )
    t1.from(
      ".im8",
      { y: -35, opacity: 0, ease: Power3.easeOut, delay: 0.2, autoAlpha: 0 },
      "Start"
    )
    t1.from(
      ".mountains",
      { y: -35, opacity: 0, ease: Power3.easeOut, delay: 0.5, autoAlpha: 0 },
      "Start"
    )
    t1.from(
      ".lake",
      { y: -35, opacity: 0, ease: Power3.easeOut, delay: 0.7, autoAlpha: 0 },
      "Start"
    )
    t1.from(
      ".birds",
      { y: -35, opacity: 0, ease: Power3.easeOut, delay: 1, autoAlpha: 0 },
      "Start"
    )
    t1.from(
      ".imbg",
      { opacity: 0, ease: Power3.easeOut, delay: 0, autoAlpha: 0 },
      "Start"
    )
    t1.from(
      ".imbgcolor",
      { opacity: 0, ease: Power3.easeOut, delay: 0, autoAlpha: 0 },
      "Start"
    )
    t1.from(
      ".impla",
      { opacity: 0, ease: Power3.easeOut, delay: 0, autoAlpha: 0 },
      "Start"
    )
  }, [])

  useEffect(() => {
    gsap.set(".im8", { y: 2 })

    gsap.to(".im8", {
      yPercent: 15,

      ease: "none",
      scrollTrigger: {
        trigger: ".impla",
        start: "top top", // the default values
        end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".mountains", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".impla",
        start: "top top", // the default values
        end: "bottom top",
        scrub: 1,
      },
    })
    gsap.to(".lake", {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".impla",
        start: "top top", // the default values
        end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".birds", {
      yPercent: -50,
      xPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".impla",
        start: "top center", // the default values
        end: "bottom top",
        scrub: 3,
      },
    })
  }, [])
  return (
    <Container className="mountainscont">
      <Box className="impla" />
      <Box className="imbg" />
      <Box className="birds" />
      <Box className="im8" />
      <Box className="mountains" />
      <Box className="lake" />
      <Box className="imbgcolor" />
    </Container>
  )
}

export default Mountains
