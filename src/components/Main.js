import React from "react"
import styled from "styled-components"
import { colors, media } from "../utils"
const Container = styled.div`
  padding-top: 72px;
  //border: 1px solid red; /* BORDER TEST*/
  margin-right: 5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  ${media.desktop`
    
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
  font-size: 42px;
  margin-bottom: 20px;
  ${media.tablet`
  font-size: 54px;
  `}
  ${media.desktop`
  font-size: 64px;
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
  font-size: 20px;
  margin-bottom: 40px;
  ${media.tablet`
  font-size: 23px;
  `}
  ${media.desktop`
    justify-content: flex-end;
    font-size: 26px;
  `}
`

const Button = styled.button`
  font-size: 20px;
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
`

export default function Main() {
  return (
    <Container>
      <Title>Patryk Kubala</Title>
      <TitleSm>Front-end developer</TitleSm>
      <Button>Simple</Button>{" "}
    </Container>
  )
}
