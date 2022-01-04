import React, { useRef, useEffect } from "react"
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
import { colors, media, typography } from "../../utils"

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
  margin: 0 50px;
  justify-content: flex-start;
  align-items: center;
  ${media.desktop`
  margin: 0;
    width: 50vw;
    height: 50vw;
  max-width: none;
  max-height: none;
  `}

  .mountains {
    z-index: 1;
    background-image: url(${mountains});
    padding: 0;
    margin: 0;
  }
  .lake {
    z-index: 2;
    background-image: url(${lake});
    padding: 0;
    margin: 0;
  }
  .im8 {
    z-index: 8;
    background-image: url(${im8});
    padding: 0;
    margin: 0;
  }
  .birds {
    z-index: 8;
    background-image: url(${birds});
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .impla {
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
    <Container>
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
