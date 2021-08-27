import React from "react"
import styled from "styled-components"
const Container = styled.div`
  margin-left: 30px;
  border: 1px solid blue; /* BORDER TEST*/

  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 3px solid black;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  background-color: white;
  width: 50%;

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
  border: 3px solid black; /* BORDER TEST*/
  margin: 0;
  padding: 0;
  border-radius: 7px;
  cursor: pointer;
  filter: grayscale(100%);

  :hover {
    filter: grayscale(0);
    transition: 0.3s;
  }
`

export default function Picture(prop) {
  return (
    <Container>
      <Img src={prop.img}></Img>
    </Container>
  )
}
