import React from "react"
import styled from "styled-components"
const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  //border: 3px solid black;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  background-color: white;
  width: 100%;
  :hover {
    ::after {
      content: "";
      background-color: black;
      border-radius: 10px;
      width: 100%;
      z-index: -1;
      position: absolute;
      height: 100%;
      top: 00px;
      right: 00px;
      transition: 0.3s;
    }
  }
  ::after {
    content: "";
    background-color: #a8a8a8;
    border-radius: 10px;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 20px;
    right: 20px;
    transition: 0.3s;
  }
`

const Img = styled.img`
  background-color: black;
  border: 3px solid black; /* BORDER TEST*/
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 7px;
  cursor: pointer;
  :hover {
    opacity: 90;
  }
`

export default function Picture(prop) {
  return (
    <Container>
      <a href={prop.live}>
        <Img src={prop.img}></Img>
      </a>
    </Container>
  )
}
