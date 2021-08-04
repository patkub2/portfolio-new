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
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  //align-items: center;
  img {
    width: 100%;
    position: absolute;
  }
`
const Space = styled.div`
  min-height: 2000px;
`
function IndexPage() {
  useEffect(() => {}, [])
  return (
    <>
      <Container>
        <img src={imbg} />
        <img src={im1} />
        <img src={im2} />
        <img src={im3} />
        <img src={im4} />
        <img src={im5} />
        <img src={im6} />
        <img src={im7} />
        <img src={im8} />
      </Container>
      <Space />
    </>
  )
}

export default IndexPage
