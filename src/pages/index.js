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
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  /*border: 1px solid red; /* BORDER TEST*/
  padding: 0;
  margin: 0;
  //background-color: #130d0a;
  font-family: "Playfair Display", serif;
  color: #fff;
  img {
    position: absolute;
  }
`
const Space = styled.div`
  min-height: 2000px;
`
function IndexPage() {
  const wrapper = useRef(null)

  useEffect(() => {
    gsap.to(".im1", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".im1",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im2", {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ".im2",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im3", {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".im3",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im4", {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".im4",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im5", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".im5",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im6", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".im6",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".im7", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".im7",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
  }, [])
  return (
    <>
      <Container ref={wrapper} className="imw">
        <img src={imbg} className="imbg" />

        <img src={im1} className="im1" />

        <img src={im2} className="im2" />

        <img src={im3} className="im3" />

        <img src={im4} className="im4" />

        <img src={im5} className="im5" />

        <img src={im6} className="im6" />

        <img src={im7} className="im7" />

        <img src={im8} className="im2" />
      </Container>
      <Space />
    </>
  )
}

export default IndexPage
