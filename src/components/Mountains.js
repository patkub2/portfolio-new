import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import "./layout.css"
import gsap from "gsap"
import im1 from "../images/1.png"
import im2 from "../images/2.png"
import im3 from "../images/3.png"
import im4 from "../images/4.png"
import im5 from "../images/5.png"
import im6 from "../images/6.png"
import im7 from "../images/7.png"
import im8 from "../images/8.png"
import imbg from "../images/bg.png"
import impla from "../images/bgpla.png"
import birds from "../images/birds.png"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { colors, media } from "../utils"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  position: relative;
  border: 2px solid white; /* BORDER TEST*/
  padding: 0;
  margin: 0;
  height: 70vw;
  width: 70vw;
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  ${media.desktop`
    width: 50vw;
    height: 50vw;
  `}

  .im1 {
    z-index: 1;
    background-image: url(${im1});
  }
  .im2 {
    z-index: 2;
    background-image: url(${im2});
  }
  .im3 {
    z-index: 3;
    background-image: url(${im3});
  }
  .im4 {
    z-index: 4;
    background-image: url(${im4});
  }
  .im5 {
    z-index: 5;
    background-image: url(${im5});
  }
  .im6 {
    z-index: 6;
    background-image: url(${im6});
  }
  .im7 {
    z-index: 7;
    background-image: url(${im7});
  }
  .im8 {
    z-index: 8;
    background-image: url(${im8});
  }
  .birds {
    z-index: 8;
    background-image: url(${birds});
    overflow: hidden;
  }
  .impla {
    z-index: 10;
    background-image: url(${impla});
    //background-size: 100vw 50vh;
    background-size: cover;
    background-position: left;
  }
  .imbgcolor {
    z-index: 0;
    background: linear-gradient(
      180deg,
      rgba(165, 212, 234, 1) 52%,
      rgba(2, 13, 23, 1) 53%
    );
  }
  .imbg {
    z-index: 1;
    background-image: url(${imbg});
  }
`
const Box = styled.div`
  position: absolute;
  //border: 1px solid blue; /* BORDER TEST*/
  color: black;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

function Mountains() {
  useEffect(() => {
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
    gsap.to(".im1", {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ".impla",
        start: "top top", // the default values
        end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im3", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".impla",
        start: "top top", // the default values
        end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im4", {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ".impla",
        start: "top top", // the default values
        end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im7", {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".impla",
        start: "top top", // the default values
        end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im6", {
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
        scrub: true,
      },
    })
  }, [])
  return (
    <Container>
      <Box className="impla" />
      <Box className="imbg" />
      <Box className="birds" />
      <Box className="im8" />
      <Box className="im7" />
      <Box className="im6" />
      <Box className="im5" />
      <Box className="im4" />
      <Box className="im3" />
      <Box className="im2" />
      <Box className="im1" />
      <Box className="imbgcolor" />
    </Container>
  )
}

export default Mountains
