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
  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  a {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid #333;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }

  a span {
    position: relative;
    z-index: 2;
  }

  a:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: black;
    transition: all 0.35s;
  }

  a:hover {
    color: #fff;
  }

  a:hover:after {
    width: 100%;
  }
`

function TestPage() {
  return (
    <Container>
      <div class="wrapper">
        <a href="#">
          <span>Hover Me!</span>
        </a>
      </div>
    </Container>
  )
}

export default TestPage
