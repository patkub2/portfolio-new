import React, { useEffect } from "react"
import styled from "styled-components"
import { media, typography } from "../../utils"
import { Power3 } from "gsap"
import gsap from "gsap"
const Container = styled.div`
  margin-top: 160px;
  margin-bottom: 20px;
  //border: 1px solid red; /* BORDER TEST*/
  margin-right: 0vw;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }

  ${media.desktop`
  margin: 72px 0;
  margin-right: 5vw;
    align-items: flex-end;
    
  `}
`
const Title = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: ${typography.h2};
  margin-bottom: 20px;
  ${media.tablet`
  `}
  ${media.desktop`
    justify-content: flex-end; 
    margin-bottom: 30px;
  `}
`
const TitleSm = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: ${typography.h5};

  ${media.desktop`
    justify-content: flex-end;
    margin-bottom: 40px;
  `}
`

const Button = styled.button`
  display: none;
  font-size: ${typography.h6};
  font-weight: 500;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 3px solid black;
  border-radius: 7px;
  cursor: pointer;
  position: relative;
  background-color: white;
  ::after {
    content: "";
    background-color: black;
    border-radius: 7px;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 10px;
    right: 10px;
    transition: 0.3s;
  }
  :hover::after {
    top: -10px;
    right: -10px;
  }
  ${media.desktop`
  display: block;
  `}
`

export default function Main() {
  useEffect(() => {
    let t1 = gsap.timeline({ delay: 1 })
    t1.from(
      ".cont",
      { y: -35, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      "Start"
    )
  }, [])
  return (
    <Container className="cont">
      <Title>Patryk Kubala</Title>
      <TitleSm>Front-end developer</TitleSm>
      <a href="#technologies">
        <Button>See more</Button>
      </a>{" "}
    </Container>
  )
}
