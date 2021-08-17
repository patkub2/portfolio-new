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
import { ScrollTrigger } from "gsap/ScrollTrigger"
import main from "../components/main.js"
import Component from "./../../.cache/dev-404-page"
import Main from "./../components/Main"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  border: 1px solid yellow; /* BORDER TEST*/
  padding: 0;
  margin: 0;
  height: 100vh;

  //background-color: #130d0a;
  font-family: "Playfair Display", serif;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  .impla {
    z-index: 9;
    background-image: url(${impla});
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

const Box2 = styled.div`
  border: 1px solid black; /* BORDER TEST*/
  color: black;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 50vw;
  height: 100vh;
`
const Space = styled.div`
  min-height: 2000px;
`
function IndexPage() {
  return (
    <>
      asdas
      <Container className="imw">
        <Box2></Box2>
        <Box2>
          <Main></Main>{" "}
        </Box2>
      </Container>
      <Space />
    </>
  )
}

export default IndexPage
