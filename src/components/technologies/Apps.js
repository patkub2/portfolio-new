import React, { useEffect } from "react"
import styled from "styled-components"
import arrow from "../../images/arrow.svg"
import { typography } from "../../utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  //flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 45%;
  img {
    //border: 1px solid blue; /* BORDER TEST*/
    margin: 0;
    padding: 0;
    width: 50px;
  }
`

const TextSm = styled.div`
  //border: 1px solid red; /* BORDER TEST*/

  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: ${typography.h6};
`
gsap.registerPlugin(ScrollTrigger)
export default function Apps(prop) {
  useEffect(() => {
    gsap.set(".icons", { x: -80, opacity: 0 })

    gsap.to(".icons", {
      x: 0,
      stagger: 0.02,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#technologies",
        start: "top center", // the default values
        end: "bottom top",
      },
    })
  }, [])
  return (
    <>
      <Container id="technologies">
        <img className="icons" src={arrow} alt="none"></img>
        <TextSm className="icons">{prop.children}</TextSm>
      </Container>
    </>
  )
}
