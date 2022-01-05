import React from "react"
import styled from "styled-components"
import { typography, media } from "../utils"
const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  //justify-content: center;
  align-items: flex-start;

  font-style: normal;
  padding: 0;
  min-height: 100px;
  width: 90%;
  margin-bottom: 50px;
  margin-top: 20px;
  ${media.desktop`
  
  padding-left: 60px;
  `}
`
const TextContainer = styled.div`
  ////border: 1px solid green; /* BORDER TEST*/

  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 300;
`
const TextB = styled.div`
  ////border: 1px solid red; /* BORDER TEST*/
  margin-top: 2%;
  margin-left: 2%;
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 300;
  font-size: ${typography.h2};
`
const TextSm = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2%;
  margin-left: 2%;
  font-weight: 300;

  font-size: ${typography.h6};
  ${media.desktop`
  width: 50%;
  `}
`
const Line = styled.div`
  border: 4px solid black; /* BORDER TEST*/
  border-radius: 10px;
  margin-left: 10px;
  height: 120px;
`

export default function Title(prop) {
  return (
    <Container>
      <Line></Line>
      <TextContainer>
        <TextB>{prop.title}</TextB>
        <TextSm>{prop.children}</TextSm>
      </TextContainer>
    </Container>
  )
}
